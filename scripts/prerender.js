import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

async function prerender() {
    console.log('🚀 Starting War Room Pre-rendering...');

    const server = await preview({
        root: path.resolve(__dirname, '..'),
        build: { outDir: 'dist' },
        preview: { port: 4173, open: false }
    });

    const url = server.resolvedUrls.local[0];
    console.log(`Server started at ${url}`);

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle0' });

        console.log('Waiting for loading animation (5s)...');
        await new Promise(r => setTimeout(r, 5000));

        const html = await page.content();

        fs.writeFileSync(path.join(distPath, 'index.html'), html);
        console.log('✅ Pre-rendered index.html successfully!');

        // Generate Sitemap
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rankak.in/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
        fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
        console.log('✅ Sitemap generated successfully!');

    } catch (e) {
        console.error('❌ Pre-rendering failed:', e);
        process.exit(1);
    } finally {
        await browser.close();
        server.httpServer.close();
        process.exit(0);
    }
}

prerender();
