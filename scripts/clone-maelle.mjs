import { load } from 'cheerio';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_URL = 'https://maelle.framer.website/';
const OUTPUT_DIR = path.join(__dirname, '../public/portfolio');
const ASSETS_DIR = path.join(OUTPUT_DIR, 'assets');

// User agent to impersonate a real browser
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// Track downloaded assets to avoid duplicates
const downloadedAssets = new Map();
let assetCounter = 0;

// Create directories
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

// Get file extension from URL or content-type
function getExtension(url, contentType) {
  // Try to get extension from URL first
  const urlPath = new URL(url).pathname;
  const ext = path.extname(urlPath).toLowerCase();
  
  if (ext && ext.length <= 5) return ext;
  
  // Fallback to content-type
  const mimeMap = {
    'image/png': '.png',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/gif': '.gif',
    'image/webp': '.webp',
    'image/svg+xml': '.svg',
    'image/avif': '.avif',
    'text/css': '.css',
    'application/javascript': '.js',
    'text/javascript': '.js',
    'font/woff2': '.woff2',
    'font/woff': '.woff',
    'application/font-woff2': '.woff2',
    'application/font-woff': '.woff',
    'video/mp4': '.mp4',
    'video/webm': '.webm',
  };
  
  return mimeMap[contentType] || '.bin';
}

// Download a file and return local path
async function downloadAsset(url, prefix = 'asset') {
  if (!url || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  
  // Resolve relative URLs
  let absoluteUrl;
  try {
    absoluteUrl = new URL(url, TARGET_URL).href;
  } catch (e) {
    console.warn(`Invalid URL: ${url}`);
    return url;
  }
  
  // Check if already downloaded
  if (downloadedAssets.has(absoluteUrl)) {
    return downloadedAssets.get(absoluteUrl);
  }
  
  console.log(`Downloading: ${absoluteUrl}`);
  
  try {
    const response = await fetch(absoluteUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });
    
    if (!response.ok) {
      console.warn(`Failed to download ${absoluteUrl}: ${response.status}`);
      return url;
    }
    
    const contentType = response.headers.get('content-type') || '';
    const ext = getExtension(absoluteUrl, contentType);
    const filename = `${prefix}_${assetCounter++}${ext}`;
    const localPath = path.join(ASSETS_DIR, filename);
    
    const buffer = await response.arrayBuffer();
    await fs.writeFile(localPath, Buffer.from(buffer));
    
    const relativePath = `/portfolio/assets/${filename}`;
    downloadedAssets.set(absoluteUrl, relativePath);
    
    console.log(`Saved: ${filename}`);
    return relativePath;
  } catch (e) {
    console.error(`Error downloading ${absoluteUrl}:`, e.message);
    return url;
  }
}

// Process CSS to download embedded assets
async function processCSS(cssContent, baseUrl) {
  const urlRegex = /url\(['"]?([^'")\s]+)['"]?\)/g;
  let match;
  let processedCSS = cssContent;
  
  const replacements = [];
  
  while ((match = urlRegex.exec(cssContent)) !== null) {
    const originalUrl = match[1];
    if (!originalUrl.startsWith('data:')) {
      const absoluteUrl = new URL(originalUrl, baseUrl).href;
      const localPath = await downloadAsset(absoluteUrl, 'css_asset');
      replacements.push({ original: match[0], replacement: `url('${localPath}')` });
    }
  }
  
  for (const { original, replacement } of replacements) {
    processedCSS = processedCSS.replace(original, replacement);
  }
  
  return processedCSS;
}

// Download and process CSS file
async function downloadCSS(url) {
  if (!url || url.startsWith('data:')) return url;
  
  let absoluteUrl;
  try {
    absoluteUrl = new URL(url, TARGET_URL).href;
  } catch (e) {
    return url;
  }
  
  if (downloadedAssets.has(absoluteUrl)) {
    return downloadedAssets.get(absoluteUrl);
  }
  
  console.log(`Downloading CSS: ${absoluteUrl}`);
  
  try {
    const response = await fetch(absoluteUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });
    
    if (!response.ok) return url;
    
    let cssContent = await response.text();
    cssContent = await processCSS(cssContent, absoluteUrl);
    
    const filename = `style_${assetCounter++}.css`;
    const localPath = path.join(ASSETS_DIR, filename);
    await fs.writeFile(localPath, cssContent);
    
    const relativePath = `/portfolio/assets/${filename}`;
    downloadedAssets.set(absoluteUrl, relativePath);
    
    return relativePath;
  } catch (e) {
    console.error(`Error downloading CSS ${absoluteUrl}:`, e.message);
    return url;
  }
}

// Main cloning function
async function cloneSite() {
  console.log('🚀 Starting to clone:', TARGET_URL);
  
  // Create directories
  await ensureDir(OUTPUT_DIR);
  await ensureDir(ASSETS_DIR);
  
  // Fetch the HTML
  console.log('📄 Fetching HTML...');
  const response = await fetch(TARGET_URL, {
    headers: { 'User-Agent': USER_AGENT }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch ${TARGET_URL}: ${response.status}`);
  }
  
  const html = await response.text();
  const $ = load(html);
  
  // Remove problematic tags
  console.log('🧹 Cleaning HTML...');
  $('base').remove();
  $('[integrity]').removeAttr('integrity');
  $('[crossorigin]').removeAttr('crossorigin');
  
  // Download images
  console.log('🖼️ Processing images...');
  const imgPromises = [];
  $('img').each((i, el) => {
    const $el = $(el);
    const src = $el.attr('src');
    if (src) {
      imgPromises.push(
        downloadAsset(src, 'img').then(localPath => {
          $el.attr('src', localPath);
        })
      );
    }
    
    // Handle srcset
    const srcset = $el.attr('srcset');
    if (srcset) {
      $el.removeAttr('srcset');
    }
    
    // Handle data-src (lazy loading)
    const dataSrc = $el.attr('data-src');
    if (dataSrc) {
      imgPromises.push(
        downloadAsset(dataSrc, 'img').then(localPath => {
          $el.attr('data-src', localPath);
        })
      );
    }
  });
  await Promise.all(imgPromises);
  
  // Download background images from style attributes
  console.log('🎨 Processing background images...');
  const bgPromises = [];
  $('[style]').each((i, el) => {
    const $el = $(el);
    const style = $el.attr('style');
    if (style && style.includes('url(')) {
      const urlMatch = style.match(/url\(['"]?([^'")\s]+)['"]?\)/);
      if (urlMatch && !urlMatch[1].startsWith('data:')) {
        bgPromises.push(
          downloadAsset(urlMatch[1], 'bg').then(localPath => {
            $el.attr('style', style.replace(urlMatch[0], `url('${localPath}')`));
          })
        );
      }
    }
  });
  await Promise.all(bgPromises);
  
  // Download CSS files
  console.log('🎨 Processing CSS...');
  const cssPromises = [];
  $('link[rel="stylesheet"]').each((i, el) => {
    const $el = $(el);
    const href = $el.attr('href');
    if (href) {
      cssPromises.push(
        downloadCSS(href).then(localPath => {
          $el.attr('href', localPath);
        })
      );
    }
  });
  await Promise.all(cssPromises);
  
  // Process inline styles with @import or url()
  $('style').each((i, el) => {
    const $el = $(el);
    let styleContent = $el.html();
    if (styleContent) {
      // We'll process these synchronously since they're inline
      // In production, you'd want to async process these too
    }
  });
  
  // Download scripts
  console.log('📜 Processing scripts...');
  const scriptPromises = [];
  $('script[src]').each((i, el) => {
    const $el = $(el);
    const src = $el.attr('src');
    if (src && !src.includes('analytics') && !src.includes('gtag')) {
      scriptPromises.push(
        downloadAsset(src, 'script').then(localPath => {
          $el.attr('src', localPath);
        })
      );
    }
  });
  await Promise.all(scriptPromises);
  
  // Download videos
  console.log('🎬 Processing videos...');
  const videoPromises = [];
  $('video').each((i, el) => {
    const $el = $(el);
    const src = $el.attr('src');
    if (src) {
      videoPromises.push(
        downloadAsset(src, 'video').then(localPath => {
          $el.attr('src', localPath);
        })
      );
    }
    
    // Handle source elements inside video
    $el.find('source').each((j, sourceEl) => {
      const $source = $(sourceEl);
      const sourceSrc = $source.attr('src');
      if (sourceSrc) {
        videoPromises.push(
          downloadAsset(sourceSrc, 'video').then(localPath => {
            $source.attr('src', localPath);
          })
        );
      }
    });
  });
  await Promise.all(videoPromises);
  
  // Download SVGs used as img sources or in links
  console.log('🔷 Processing SVGs and icons...');
  const svgPromises = [];
  $('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="shortcut icon"]').each((i, el) => {
    const $el = $(el);
    const href = $el.attr('href');
    if (href) {
      svgPromises.push(
        downloadAsset(href, 'icon').then(localPath => {
          $el.attr('href', localPath);
        })
      );
    }
  });
  await Promise.all(svgPromises);
  
  // Download fonts from preload links
  console.log('🔤 Processing fonts...');
  const fontPromises = [];
  $('link[rel="preload"][as="font"]').each((i, el) => {
    const $el = $(el);
    const href = $el.attr('href');
    if (href) {
      fontPromises.push(
        downloadAsset(href, 'font').then(localPath => {
          $el.attr('href', localPath);
        })
      );
    }
  });
  await Promise.all(fontPromises);
  
  // Handle Framer-specific: download images from data attributes
  console.log('🖼️ Processing Framer data attributes...');
  const framerPromises = [];
  $('[data-framer-original-sizes]').each((i, el) => {
    const $el = $(el);
    // These are usually handled by Framer's JS
  });
  
  // Download any remaining assets from various attributes
  const additionalAttrs = ['poster', 'data-poster', 'data-background'];
  for (const attr of additionalAttrs) {
    const attrPromises = [];
    $(`[${attr}]`).each((i, el) => {
      const $el = $(el);
      const value = $el.attr(attr);
      if (value && !value.startsWith('data:')) {
        attrPromises.push(
          downloadAsset(value, 'media').then(localPath => {
            $el.attr(attr, localPath);
          })
        );
      }
    });
    await Promise.all(attrPromises);
  }
  
  // Save the modified HTML
  const outputHtml = $.html();
  const outputPath = path.join(OUTPUT_DIR, 'index.html');
  await fs.writeFile(outputPath, outputHtml);
  
  console.log('\n✅ Cloning complete!');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`📄 HTML file: ${outputPath}`);
  console.log(`📦 Total assets downloaded: ${downloadedAssets.size}`);
}

// Run the cloner
cloneSite().catch(console.error);

