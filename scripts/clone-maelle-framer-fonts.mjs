import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FONTS_DIR = path.join(__dirname, '../public/portfolio/assets/fonts');
const HTML_FILE = path.join(__dirname, '../public/portfolio/index.html');

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

async function downloadFramerFonts() {
  console.log('🔤 Starting Framer font download...');
  
  await ensureDir(FONTS_DIR);
  
  // Read HTML file
  let html = await fs.readFile(HTML_FILE, 'utf-8');
  
  // Find all Framer font URLs
  const fontRegex = /https:\/\/framerusercontent\.com\/assets\/[^"'\)]+\.woff2/g;
  const fontUrls = [...new Set(html.match(fontRegex) || [])];
  
  console.log(`Found ${fontUrls.length} Framer font files to download`);
  
  let counter = 20; // Start from 20 to avoid conflicts with Google Fonts
  
  for (const url of fontUrls) {
    const filename = `font_${counter++}.woff2`;
    const localPath = `/portfolio/assets/fonts/${filename}`;
    
    console.log(`Downloading: ${url.substring(0, 60)}...`);
    
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT }
      });
      
      if (response.ok) {
        const buffer = await response.arrayBuffer();
        await fs.writeFile(path.join(FONTS_DIR, filename), Buffer.from(buffer));
        
        // Replace URL in HTML (escape special chars in URL)
        const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        html = html.replace(new RegExp(escapedUrl, 'g'), localPath);
        console.log(`  Saved: ${filename}`);
      }
    } catch (e) {
      console.error(`  Error downloading: ${e.message}`);
    }
  }
  
  // Save updated HTML
  await fs.writeFile(HTML_FILE, html);
  console.log('\n✅ Framer fonts downloaded and HTML updated!');
}

downloadFramerFonts().catch(console.error);

