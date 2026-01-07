import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the cloned HTML file from public directory
    const htmlPath = path.join(process.cwd(), 'public/portfolio/index.html');
    const html = await fs.readFile(htmlPath, 'utf-8');
    
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error serving cloned site:', error);
    return new Response('Failed to load the cloned site', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

