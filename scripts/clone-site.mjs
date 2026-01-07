/**
 * Complete Website Cloning Script
 * 
 * Usage: NODE_TLS_REJECT_UNAUTHORIZED=0 node scripts/clone-site.mjs <url> <output-folder>
 * Example: NODE_TLS_REJECT_UNAUTHORIZED=0 node scripts/clone-site.mjs https://example.framer.website/ example-site
 * 
 * This script will:
 * 1. Fetch the HTML from the target URL
 * 2. Download all images, fonts, CSS, scripts
 * 3. Rewrite URLs to point to local assets
 * 4. Save everything to public/<output-folder>/
 */

import { load } from 'cheerio';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const TARGET_URL = process.argv[2] || 'https://maelle.framer.website/';
const OUTPUT_FOLDER = process.argv[3] || 'cloned-site';
const OUTPUT_DIR = path.join(__dirname, '../public', OUTPUT_FOLDER);
const ASSETS_DIR = path.join(OUTPUT_DIR, 'assets');
const FONTS_DIR = path.join(ASSETS_DIR, 'fonts');

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// Track downloaded assets
const downloadedAssets = new Map();
let assetCounter = 0;

// Helpers
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

function getExtension(url, contentType) {
  const urlPath = new URL(url).pathname;
  const ext = path.extname(urlPath).toLowerCase().split('?')[0];
  
  if (ext && ext.length <= 5 && ext.length > 1) return ext;
  
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

async function downloadAsset(url, prefix = 'asset', subdir = '') {
  if (!url || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  
  let absoluteUrl;
  try {
    absoluteUrl = new URL(url, TARGET_URL).href;
  } catch (e) {
    return url;
  }
  
  if (downloadedAssets.has(absoluteUrl)) {
    return downloadedAssets.get(absoluteUrl);
  }
  
  try {
    const response = await fetch(absoluteUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });
    
    if (!response.ok) return url;
    
    const contentType = response.headers.get('content-type') || '';
    const ext = getExtension(absoluteUrl, contentType);
    const filename = `${prefix}_${assetCounter++}${ext}`;
    
    const targetDir = subdir ? path.join(ASSETS_DIR, subdir) : ASSETS_DIR;
    await ensureDir(targetDir);
    
    const localFilePath = path.join(targetDir, filename);
    const buffer = await response.arrayBuffer();
    await fs.writeFile(localFilePath, Buffer.from(buffer));
    
    const relativePath = subdir 
      ? `/${OUTPUT_FOLDER}/assets/${subdir}/${filename}`
      : `/${OUTPUT_FOLDER}/assets/${filename}`;
    
    downloadedAssets.set(absoluteUrl, relativePath);
    console.log(`  ✓ ${filename}`);
    return relativePath;
  } catch (e) {
    console.error(`  ✗ Error downloading: ${e.message}`);
    return url;
  }
}

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
    
    const relativePath = `/${OUTPUT_FOLDER}/assets/${filename}`;
    downloadedAssets.set(absoluteUrl, relativePath);
    
    return relativePath;
  } catch (e) {
    return url;
  }
}

// Main cloning function
async function cloneSite() {
  console.log('🚀 Cloning:', TARGET_URL);
  console.log('📁 Output:', OUTPUT_DIR);
  console.log('');
  
  await ensureDir(OUTPUT_DIR);
  await ensureDir(ASSETS_DIR);
  await ensureDir(FONTS_DIR);
  
  // Fetch HTML
  console.log('📄 Fetching HTML...');
  const response = await fetch(TARGET_URL, {
    headers: { 'User-Agent': USER_AGENT }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  
  const html = await response.text();
  const $ = load(html);
  
  // Clean problematic tags
  console.log('\n🧹 Cleaning HTML...');
  $('base').remove();
  $('[integrity]').removeAttr('integrity');
  $('[crossorigin]').removeAttr('crossorigin');
  
  // Process images
  console.log('\n🖼️ Downloading images...');
  for (const el of $('img').toArray()) {
    const $el = $(el);
    const src = $el.attr('src');
    if (src) {
      const localPath = await downloadAsset(src, 'img');
      $el.attr('src', localPath);
    }
    $el.removeAttr('srcset');
    
    const dataSrc = $el.attr('data-src');
    if (dataSrc) {
      const localPath = await downloadAsset(dataSrc, 'img');
      $el.attr('data-src', localPath);
    }
  }
  
  // Process background images
  console.log('\n🎨 Downloading background images...');
  for (const el of $('[style]').toArray()) {
    const $el = $(el);
    const style = $el.attr('style');
    if (style && style.includes('url(')) {
      const urlMatch = style.match(/url\(['"]?([^'")\s]+)['"]?\)/);
      if (urlMatch && !urlMatch[1].startsWith('data:')) {
        const localPath = await downloadAsset(urlMatch[1], 'bg');
        $el.attr('style', style.replace(urlMatch[0], `url('${localPath}')`));
      }
    }
  }
  
  // Process CSS
  console.log('\n📝 Downloading CSS...');
  for (const el of $('link[rel="stylesheet"]').toArray()) {
    const $el = $(el);
    const href = $el.attr('href');
    if (href) {
      const localPath = await downloadCSS(href);
      $el.attr('href', localPath);
    }
  }
  
  // Process scripts
  console.log('\n📜 Downloading scripts...');
  for (const el of $('script[src]').toArray()) {
    const $el = $(el);
    const src = $el.attr('src');
    if (src && !src.includes('analytics') && !src.includes('gtag')) {
      const localPath = await downloadAsset(src, 'script');
      $el.attr('src', localPath);
    }
  }
  
  // Process icons
  console.log('\n🔷 Downloading icons...');
  for (const el of $('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="shortcut icon"]').toArray()) {
    const $el = $(el);
    const href = $el.attr('href');
    if (href) {
      const localPath = await downloadAsset(href, 'icon');
      $el.attr('href', localPath);
    }
  }
  
  // Process videos
  console.log('\n🎬 Downloading videos...');
  for (const el of $('video').toArray()) {
    const $el = $(el);
    const src = $el.attr('src');
    if (src) {
      const localPath = await downloadAsset(src, 'video');
      $el.attr('src', localPath);
    }
    
    for (const sourceEl of $el.find('source').toArray()) {
      const $source = $(sourceEl);
      const sourceSrc = $source.attr('src');
      if (sourceSrc) {
        const localPath = await downloadAsset(sourceSrc, 'video');
        $source.attr('src', localPath);
      }
    }
  }
  
  // Process fonts from Google Fonts
  console.log('\n🔤 Downloading Google Fonts...');
  let outputHtml = $.html();
  const googleFontRegex = /https:\/\/fonts\.gstatic\.com\/s\/[^"'\)]+\.woff2/g;
  const googleFontUrls = [...new Set(outputHtml.match(googleFontRegex) || [])];
  
  for (const url of googleFontUrls) {
    const localPath = await downloadAsset(url, 'font', 'fonts');
    outputHtml = outputHtml.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), localPath);
  }
  
  // Process Framer fonts
  console.log('\n🔤 Downloading Framer Fonts...');
  const framerFontRegex = /https:\/\/framerusercontent\.com\/assets\/[^"'\)]+\.woff2/g;
  const framerFontUrls = [...new Set(outputHtml.match(framerFontRegex) || [])];
  
  for (const url of framerFontUrls) {
    const localPath = await downloadAsset(url, 'font', 'fonts');
    outputHtml = outputHtml.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), localPath);
  }
  
  // Process Framer modules
  console.log('\n📦 Downloading Framer modules...');
  const moduleRegex = /https:\/\/framerusercontent\.com\/sites\/[^"'\s]+\.mjs/g;
  const moduleUrls = [...new Set(outputHtml.match(moduleRegex) || [])];
  
  for (const url of moduleUrls) {
    const localPath = await downloadAsset(url, 'module');
    outputHtml = outputHtml.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), localPath);
  }
  
  // Process remaining Framer images
  console.log('\n🖼️ Downloading remaining Framer images...');
  const framerImgRegex = /https:\/\/framerusercontent\.com\/images\/[^"'\)\s]+/g;
  const framerImgUrls = [...new Set(outputHtml.match(framerImgRegex) || [])];
  
  for (const url of framerImgUrls) {
    const localPath = await downloadAsset(url, 'framer_img');
    outputHtml = outputHtml.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), localPath);
  }
  
  // Clean up Framer-specific stuff
  console.log('\n🧹 Final cleanup...');
  outputHtml = outputHtml.replace(/<script>try\{if\(localStorage\.get\("__framer_force_showing_editorbar_since"\)\)[\s\S]*?<\/script>/g, '');
  outputHtml = outputHtml.replace(/<meta name="framer-search-index"[^>]*>/g, '');
  outputHtml = outputHtml.replace(/<meta name="framer-search-index-fallback"[^>]*>/g, '');
  outputHtml = outputHtml.replace(/<link href="https:\/\/fonts\.gstatic\.com" rel="preconnect">/g, '');
  
  // Save HTML
  const outputPath = path.join(OUTPUT_DIR, 'index.html');
  await fs.writeFile(outputPath, outputHtml);
  
  console.log('\n' + '═'.repeat(50));
  console.log('✅ Cloning complete!');
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`📄 HTML: ${outputPath}`);
  console.log(`📦 Assets: ${downloadedAssets.size} files`);
  console.log('═'.repeat(50));
}

cloneSite().catch(console.error);
