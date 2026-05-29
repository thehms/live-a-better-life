/**
 * Live a Better Life — Sitemap Generator
 * ─────────────────────────────────────────
 * Run this from your project root in VS Code terminal:
 *   node generate-sitemap.js
 *
 * It scans all .html files, reads their last-modified date,
 * and writes a fresh sitemap.xml automatically.
 *
 * UPDATE THIS when your domain changes:
 */
const DOMAIN = 'https://www.liveabetterlife.today';

// Pages and their priority (add new pages here as you create them)
const PRIORITY = {
  'index.html':    { priority: '1.0', changefreq: 'weekly'  },
  'blog.html':     { priority: '0.9', changefreq: 'weekly'  },
  'products.html': { priority: '0.7', changefreq: 'monthly' },
};
const DEFAULT = { priority: '0.8', changefreq: 'monthly' };

// ── No need to edit below this line ──────────────────────────

const fs   = require('fs');
const path = require('path');

// Collect all HTML files in the root directory
const files = fs.readdirSync('.')
  .filter(f => f.endsWith('.html') && !f.startsWith('_'))
  .sort();

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml    += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n`;

files.forEach(file => {
  const stat     = fs.statSync(file);
  const lastmod  = stat.mtime.toISOString().split('T')[0];
  const config   = PRIORITY[file] || DEFAULT;

  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}/${file}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>${config.changefreq}</changefreq>\n`;
  xml += `    <priority>${config.priority}</priority>\n`;
  xml += `  </url>\n\n`;

  console.log(`  ✓  ${file}  (${lastmod})`);
});

xml += `</urlset>\n`;

fs.writeFileSync('sitemap.xml', xml, 'utf8');
console.log(`\n✅  sitemap.xml updated with ${files.length} pages — ${today}`);
console.log(`📤  Submit to Google Search Console: ${DOMAIN}/sitemap.xml`);
