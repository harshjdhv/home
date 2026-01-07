import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../public/portfolio/assets');
const HTML_FILE = path.join(__dirname, '../public/portfolio/index.html');

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

async function downloadModules() {
  console.log('📦 Starting module download...');
  
  await ensureDir(ASSETS_DIR);
  
  // Read HTML file
  let html = await fs.readFile(HTML_FILE, 'utf-8');
  
  // Find all Framer module URLs
  const moduleRegex = /https:\/\/framerusercontent\.com\/sites\/[^"'\s]+\.mjs/g;
  const moduleUrls = [...new Set(html.match(moduleRegex) || [])];
  
  console.log(`Found ${moduleUrls.length} module files to download`);
  
  let counter = 30;
  
  for (const url of moduleUrls) {
    // Extract filename from URL
    const urlParts = url.split('/');
    const originalFilename = urlParts[urlParts.length - 1];
    const filename = `module_${counter++}_${originalFilename}`;
    const localPath = `/portfolio/assets/${filename}`;
    
    console.log(`Downloading: ${originalFilename}`);
    
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT }
      });
      
      if (response.ok) {
        let content = await response.text();
        
        // Rewrite any imports that reference other framer modules
        // This is a simplified approach - may need more sophisticated handling
        
        await fs.writeFile(path.join(ASSETS_DIR, filename), content);
        
        // Replace URL in HTML
        const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        html = html.replace(new RegExp(escapedUrl, 'g'), localPath);
        console.log(`  Saved: ${filename}`);
      }
    } catch (e) {
      console.error(`  Error downloading ${originalFilename}: ${e.message}`);
    }
  }
  
  // Save updated HTML
  await fs.writeFile(HTML_FILE, html);
  console.log('\n✅ Modules downloaded and HTML updated!');
}

downloadModules().catch(console.error);

