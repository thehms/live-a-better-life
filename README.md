# 🌿 Live a Better Life — Healthy Lifestyle Website

A clean, pastel-themed static website for a healthy lifestyle brand. Includes a homepage, shop/products page, and blog — ready to deploy on Vercel, Netlify, or GitHub Pages.

## 📁 File Structure

```
healthylife/
├── index.html          ← Homepage
├── products.html       ← Shop / Products page
├── blog.html           ← Blog listing page
├── css/
│   └── style.css       ← All styles (no frameworks needed)
├── js/
│   └── main.js         ← Interactions: filter, nav, animations
└── images/             ← Drop your images here
```

## 🖼️ Adding Your Images

All image placeholders are clearly labeled with recommended dimensions. To replace a placeholder:

1. Add your image file to the `images/` folder
2. Find the placeholder comment in the HTML, e.g.:
   ```html
   <!-- Replace with: <img src="images/hero.jpg" alt="Healthy lifestyle hero" /> -->
   ```
3. Replace the `<div class="img-placeholder ...">` block with the `<img>` tag shown in the comment

### Image Sizes Reference

| Placeholder | Recommended Size | Location |
|---|---|---|
| Hero image | 1200 × 900px | Homepage hero |
| Product images | 600 × 600px | Products grid |
| About image | 700 × 700px | About section |
| Featured blog | 1200 × 600px | Blog page top |
| Blog cards | 600 × 400px | Blog grid |

## 🚀 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your repo
4. Deploy — Vercel detects it's a static site automatically

## 🌐 Deploy to Netlify

**Option A — Drag & Drop:**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `healthylife/` folder onto the page

**Option B — GitHub:**
1. Push to GitHub
2. Connect repo in Netlify dashboard

## 🛒 Adding Real E-commerce

To enable real cart/checkout, integrate one of these:
- **[Snipcart](https://snipcart.com)** — Add a small JS snippet, tag products with `data-` attributes
- **[Shopify Buy Button](https://www.shopify.com/buy-button)** — Embed Shopify checkout into your site
- **[Stripe](https://stripe.com)** — Custom checkout (requires a small backend or Stripe's hosted pages)

## ✏️ Customizing

- **Brand name:** Find & replace `Live a Better Life` throughout HTML files
- **Colors:** Edit CSS variables at the top of `css/style.css`
- **Fonts:** Change the Google Fonts import in each HTML `<head>`
- **Products/Blog posts:** Copy/paste existing card HTML and update the content

## 📬 Contact Form

The contact link currently scrolls to the footer. To add a real form:
- **[Formspree](https://formspree.io)** — Free, no backend needed
- **[Netlify Forms](https://www.netlify.com/products/forms/)** — Works automatically if hosted on Netlify

---

Made with 🌿 — ready to grow into something beautiful.
