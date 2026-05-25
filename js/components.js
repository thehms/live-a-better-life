/* =============================================================
   Live a Better Life — Shared Components
   Edit nav and footer HERE only. Changes apply site-wide.
   ============================================================= */

/* ── GOOGLE ANALYTICS ────────────────────────────────────────
   To update: change GA_ID below. One change applies site-wide.
   ─────────────────────────────────────────────────────────── */
(function () {
  var GA_ID = 'G-HQ0EC81SKG';
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
/* ─────────────────────────────────────────────────────────── */

(function () {

  /* ── NAV ─────────────────────────────────────────────────── */
  const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Live a Better Life</a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="blog.html?cat=mind" class="nav-mbs">Mind</a></li>
      <li><a href="blog.html?cat=body" class="nav-mbs">Body</a></li>
      <li><a href="blog.html?cat=soul" class="nav-mbs">Soul</a></li>
      <li><a href="blog.html">All Articles</a></li>
      <li><a href="index.html#newsletter" class="nav-cta">Newsletter</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger">&#9776;</button>
  </div>
</nav>`;

  /* ── FOOTER ──────────────────────────────────────────────── */
  const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-grid">

    <div class="footer-brand">
      <h3>Live a Better Life</h3>
      <p class="footer-tagline">
        <span class="footer-mbs">Mind.</span>
        <span class="footer-mbs">Body.</span>
        <span class="footer-mbs">Soul.</span>
      </p>
      <p class="footer-sub">Small, evidence-based changes that compound into a life worth living.</p>
      <div class="social-links">
        <a href="https://www.pinterest.com/LiveBetterLifeFromToday/" aria-label="Pinterest" target="_blank" rel="noopener">
          <img src="images/pintrest_logo.jpg" alt="Pinterest" width="24" height="24" />
        </a>
      </div>
    </div>

    <div class="footer-col">
      <h4 class="footer-col-heading">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=48&h=48&fit=crop&crop=center"
             alt="Mind" style="width:22px;height:22px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:6px;opacity:0.85;"> Mind
      </h4>
      <ul>
        <li><a href="blog-post-6.html">Headphones &amp; Hearing Health</a></li>
        <li><a href="blog-post-7.html">Sitting Is the New Smoking</a></li>
        <li><a href="blog-post-2.html">5-Minute Morning Ritual</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4 class="footer-col-heading">
        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=48&h=48&fit=crop&crop=center"
             alt="Body" style="width:22px;height:22px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:6px;opacity:0.85;"> Body
      </h4>
      <ul>
        <li><a href="blog-post-1.html">Anti-Inflammatory Foods</a></li>
        <li><a href="blog-post-3.html">Why Walking Works</a></li>
        <li><a href="blog-post-5.html">Golden Milk Overnight Oats</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4 class="footer-col-heading">
        <img src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=48&h=48&fit=crop&crop=center"
             alt="Soul" style="width:22px;height:22px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:6px;opacity:0.85;"> Soul
      </h4>
      <ul>
        <li><a href="blog-post-4.html">Build a Sleep Sanctuary</a></li>
        <li><a href="blog-post-8.html">The Power of Journaling</a></li>
        <li><a href="blog-post-9.html">12 Days in Japan</a></li>
        <li><a href="blog.html">All Articles &rarr;</a></li>
        <li style="margin-top:0.8rem"><a href="privacy.html" style="color:#888;font-size:0.8rem">Privacy Policy</a></li>
        <li><a href="disclosure.html" style="color:#888;font-size:0.8rem">Affiliate Disclosure</a></li>
      </ul>
    </div>

  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 Live a Better Life &nbsp;&middot;&nbsp; Mind. Body. Soul. &nbsp;&middot;&nbsp; Made with &#127807;</p>
  </div>
</footer>`;

  /* ── INJECT ──────────────────────────────────────────────── */
  function inject(id, html) {
    const el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  /* Run immediately if DOM ready, otherwise wait */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  function run() {
    inject('site-nav', NAV_HTML);
    inject('site-footer', FOOTER_HTML);

    /* Re-init hamburger since nav was just injected */
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    /* Mark active nav link */
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href').split('?')[0];
      if (href === page) a.classList.add('active');
    });
  }

})();
