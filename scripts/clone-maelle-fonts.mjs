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

async function downloadFonts() {
  console.log('🔤 Starting font download...');
  
  await ensureDir(FONTS_DIR);
  
  // Read HTML file
  let html = await fs.readFile(HTML_FILE, 'utf-8');
  
  // Find all Google Fonts URLs
  const fontRegex = /https:\/\/fonts\.gstatic\.com\/s\/[^"'\)]+\.woff2/g;
  const fontUrls = [...new Set(html.match(fontRegex) || [])];
  
  console.log(`Found ${fontUrls.length} font files to download`);
  
  for (let i = 0; i < fontUrls.length; i++) {
    const url = fontUrls[i];
    const filename = `font_${i}.woff2`;
    const localPath = `/portfolio/assets/fonts/${filename}`;
    
    console.log(`Downloading: ${url}`);
    
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT }
      });
      
      if (response.ok) {
        const buffer = await response.arrayBuffer();
        await fs.writeFile(path.join(FONTS_DIR, filename), Buffer.from(buffer));
        
        // Replace URL in HTML
        html = html.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), localPath);
        console.log(`  Saved: ${filename}`);
      }
    } catch (e) {
      console.error(`  Error downloading: ${e.message}`);
    }
  }
  
  // Save updated HTML
  await fs.writeFile(HTML_FILE, html);
  console.log('\n✅ Fonts downloaded and HTML updated!');
}

downloadFonts().catch(console.error);

