# The Ultimate Guide to Website Extraction & Replication

This guide documents the "best practice" methodology for cloning a website's frontend (HTML/CSS/Assets) locally and preparing it for conversion into a modern stack like React/Next.js.

## Phase 1: The Strategy (How it works)

To create a faithful local replica, you must perform four distinct actions:
1.  **Impersonate:** Fetch the source code while pretending to be a real browser.
2.  **Parse:** Convert the raw text into a data structure (DOM) you can manipulate.
3.  **Acquire:** Identify and download every dependency (images, styles, scripts).
4.  **Rewrite:** Remap the links in the code to point to your local files.

---

## Phase 2: The Implementation Steps

### Step 1: Set up the Environment
You need a runtime to execute the extraction scripts. We use **Node.js** with **Cheerio** (a fast implementation of jQuery for the server).

```bash
npm install cheerio
```

### Step 2: The Extraction Script
This is the heart of the operation. Create a script (e.g., `scripts/clone-site.mjs`) that handles the logic.

#### A. The Fetch (Impersonation)
Websites block automated bots. You must send a `User-Agent` header.
```javascript
const response = await fetch('https://target-site.com', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)...' 
    // ^ Looks like a real Mac user
  }
});
```

#### B. The Parse (Cheerio)
Load the HTML into Cheerio so we can query it like `$('img')`.
```javascript
import { load } from 'cheerio';
const $ = load(htmlContent);
```

#### C. The Asset Hunt (Download & Rewrite)
You must loop through every tag that loads an external resource.
*   `img` tags -> `src`
*   `link` tags (CSS) -> `href`
*   `script` tags -> `src`
*   `video` tags -> `src`

**Crucial Logic:**
1.  **Read** the remote URL.
2.  **Download** the file to `public/cloned-site/assets/`.
3.  **Rewrite** the HTML attribute to point to `/cloned-site/assets/filename`.

*Example Loop:*
```javascript
$('img').each((i, el) => {
  const remoteUrl = $(el).attr('src');
  const filename = `image_${i}.png`;
  
  // 1. Download
  downloadFile(remoteUrl, `./public/dest/${filename}`);
  
  // 2. Rewrite HTML
  $(el).attr('src', `/dest/${filename}`);
});
```

### Step 3: Cleaning
Modern sites have "anti-theft" or security tags that break local copies. You must strip them:
*   Remove `<base>` tags.
*   Remove `integrity` and `crossorigin` attributes (since we are modifying the files).
*   Remove `srcset` if you aren't downloading all responsive sizes (forces the browser to use your single `src` image).

---

## Phase 3: Serving the Replica

In a Next.js app, you don't want to rely on the external site at runtime. You serve the **static snapshot**.

**Route Handler (`app/route/route.ts`):**
Instead of proxying, simply read the file from the disk.
```typescript
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  // Read the file we generated in Phase 2
  const html = await fs.readFile(
    path.join(process.cwd(), 'public/cloned-site/index.html'), 
    'utf-8'
  );
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
```

---
