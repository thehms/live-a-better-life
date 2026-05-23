// ========================================
//   LIVE A BETTER LIFE — Main JS
// ========================================

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) navLinks.classList.remove('open');
  });
}

// Scroll fade-in
const fadeEls = document.querySelectorAll('.fade-in, .article-card, .featured-article, .inline-product');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
fadeEls.forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

// Blog filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(card => {
      if (card.classList.contains('filter-btn')) return;
      card.style.display = (filter === 'all' || card.dataset.filter === filter) ? '' : 'none';
    });
  });
});

// Newsletter subscribe
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const btn   = e.target.querySelector('button');
  if (!input || !btn) return;
  const orig = btn.textContent;
  btn.textContent = 'Subscribed! 🌿';
  btn.style.background = '#5d7d58';
  input.value = '';
  input.disabled = true;
  input.placeholder = "You're on the list!";
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    input.disabled = false;
    input.placeholder = 'your@email.com';
  }, 4000);
}
