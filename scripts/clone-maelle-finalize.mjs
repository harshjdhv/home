import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../public/portfolio/assets');
const HTML_FILE = path.join(__dirname, '../public/portfolio/index.html');

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function downloadOgImage() {
  console.log('🖼️ Downloading OG image...');
  
  const url = 'https://framerusercontent.com/images/sqPXh8ti9dbkyRG80H7rnK1QfSE.jpg';
  const filename = 'og-image.jpg';
  
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT }
    });
    
    if (response.ok) {
      const buffer = await response.arrayBuffer();
      await fs.writeFile(path.join(ASSETS_DIR, filename), Buffer.from(buffer));
      console.log(`  Saved: ${filename}`);
      
      // Update HTML
      let html = await fs.readFile(HTML_FILE, 'utf-8');
      html = html.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), `/portfolio/assets/${filename}`);
      await fs.writeFile(HTML_FILE, html);
    }
  } catch (e) {
    console.error(`  Error: ${e.message}`);
  }
}

async function cleanupHTML() {
  console.log('🧹 Cleaning up HTML...');
  
  let html = await fs.readFile(HTML_FILE, 'utf-8');
  
  // Remove Framer edit script 
  html = html.replace(/<script>try\{if\(localStorage\.get\("__framer_force_showing_editorbar_since"\)\)[\s\S]*?<\/script>/g, '');
  
  // Remove framer search index meta tags
  html = html.replace(/<meta name="framer-search-index"[^>]*>/g, '');
  html = html.replace(/<meta name="framer-search-index-fallback"[^>]*>/g, '');
  
  // Update canonical URL
  html = html.replace(/href="https:\/\/maelle\.framer\.website\/"/g, 'href="/maelle"');
  html = html.replace(/content="https:\/\/maelle\.framer\.website\/"/g, 'content="/maelle"');
  
  // Remove preconnect to fonts.gstatic.com since we have local fonts
  html = html.replace(/<link href="https:\/\/fonts\.gstatic\.com" rel="preconnect">/g, '');
  
  await fs.writeFile(HTML_FILE, html);
  console.log('  Done!');
}

async function main() {
  await downloadOgImage();
  await cleanupHTML();
  console.log('\n✅ Finalization complete!');
}

main().catch(console.error);

