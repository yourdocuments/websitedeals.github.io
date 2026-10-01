/* Website Deals — marketplace script */
(function () {
  'use strict';

  // ====== DATA: ekhane tomar real website gulo boshao ======
  var WEBSITES = [
    { id: 1, title: 'Corporate Pro', category: 'Business', price: 999, rating: 4.9, sales: 120, added: 8, desc: 'Clean corporate website for companies.', url: '#', color: ['#101827', '#2563eb'], icon: 'fa-building' },
    { id: 2, title: 'Tasty Bites', category: 'Restaurant', price: 1499, rating: 4.8, sales: 95, added: 7, desc: 'Menu, gallery and table booking.', url: '#', color: ['#d97706', '#ef4444'], icon: 'fa-utensils' },
    { id: 3, title: 'Creative Studio', category: 'Agency', price: 1999, rating: 4.7, sales: 80, added: 6, desc: 'Bold portfolio-style agency site.', url: '#', color: ['#7c3aed', '#ec4899'], icon: 'fa-wand-magic-sparkles' },
    { id: 4, title: 'ShopEasy Store', category: 'E-commerce', price: 2999, rating: 4.9, sales: 150, added: 5, desc: 'Online store with product pages.', url: '#', color: ['#108344', '#18a957'], icon: 'fa-cart-shopping' },
    { id: 5, title: 'Personal Folio', category: 'Portfolio', price: 999, rating: 4.6, sales: 60, added: 4, desc: 'Showcase your work beautifully.', url: '#', color: ['#0891b2', '#2563eb'], icon: 'fa-id-card' },
    { id: 6, title: 'Starter Monthly', category: 'Monthly', price: 999, rating: 4.8, sales: 110, added: 3, desc: 'Flexible monthly website plan.', url: '#', color: ['#18a957', '#0891b2'], icon: 'fa-calendar-days', monthly: true },
    { id: 7, title: 'Biz Launch', category: 'Business', price: 1299, rating: 4.5, sales: 45, added: 2, desc: 'Landing site for new businesses.', url: '#', color: ['#334155', '#18a957'], icon: 'fa-rocket' },
    { id: 8, title: 'Cafe Corner', category: 'Restaurant', price: 1199, rating: 4.7, sales: 70, added: 1, desc: 'Warm, modern cafe website.', url: '#', color: ['#92400e', '#f59e0b'], icon: 'fa-mug-hot' }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var state = { q: '', cat: '', sort: 'featured' };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function card(w) {
    return '<article class="website-card">' +
      '<div class="website-thumb" style="background:linear-gradient(135deg,' + w.color[0] + ',' + w.color[1] + ')">' +
      '<span class="website-tag">' + esc(w.category) + '</span><i class="fa-solid ' + w.icon + '"></i></div>' +
      '<div class="website-info"><span class="website-cat">' + esc(w.category) + '</span>' +
      '<h3>' + esc(w.title) + '</h3><p>' + esc(w.desc) + '</p>' +
      '<div class="website-meta"><span class="website-price">৳' + w.price.toLocaleString('en-US') +
      (w.monthly ? '<small> /mo</small>' : '') + '</span>' +
      '<span class="website-rating"><i class="fa-solid fa-star"></i> ' + w.rating + '</span></div>' +
      '<div class="website-actions"><a class="btn-preview" href="' + esc(w.url) + '" target="_blank" rel="noopener">Preview</a>' +
      '<button class="btn-buy" type="button" data-buy="' + w.id + '">Buy now</button></div></div></article>';
  }

  function filtered() {
    var q = state.q.trim().toLowerCase();
    var list = WEBSITES.filter(function (w) {
      return (!state.cat || w.category === state.cat) &&
        (!q || (w.title + ' ' + w.category + ' ' + w.desc).toLowerCase().indexOf(q) > -1);
    });
    var s = {
      newest: function (a, b) { return a.added - b.added; },
      popular: function (a, b) { return b.sales - a.sales; },
      'price-low': function (a, b) { return a.price - b.price; },
      'price-high': function (a, b) { return b.price - a.price; },
      rating: function (a, b) { return b.rating - a.rating; }
    }[state.sort];
    return s ? list.sort(s) : list;
  }

  function render() {
    var list = filtered();
    $('website-list').innerHTML = list.map(card).join('');
    $('empty-state').hidden = list.length > 0;
    $('website-result-count').textContent = list.length + ' website' + (list.length === 1 ? '' : 's') + ' found';
    $('popular-list').innerHTML = WEBSITES.slice().sort(function (a, b) { return b.sales - a.sales; }).slice(0, 3).map(card).join('');
    $('new-list').innerHTML = WEBSITES.slice().sort(function (a, b) { return a.added - b.added; }).slice(0, 3).map(card).join('');
  }

  function setFilter(opts) {
    if ('q' in opts) state.q = opts.q;
    if ('cat' in opts) state.cat = opts.cat;
    $('category-filter').value = state.cat;
    $('hero-category').value = state.cat;
    $('website-search').value = state.q;
    $('hero-search').value = state.q;
    render();
  }

  function goMarket() { $('websites').scrollIntoView({ behavior: 'smooth' }); }

  var toastTimer;
  function toast(msg) {
    $('toast-message').textContent = msg;
    $('toast').classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { $('toast').classList.remove('show'); }, 3000);
  }

  function togglePanel(el, open) { el.classList.toggle('open', open); el.setAttribute('aria-hidden', String(!open)); }

  document.addEventListener('DOMContentLoaded', function () {
    render();
    $('footer-year').textContent = new Date().getFullYear();

    // loader
    setTimeout(function () { $('page-loader').classList.add('hide'); }, 400);

    // header / back to top
    window.addEventListener('scroll', function () {
      $('site-header').classList.toggle('scrolled', window.scrollY > 10);
      $('back-to-top').classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    $('back-to-top').onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    // mobile menu
    $('mobile-menu-btn').onclick = function () {
      var o = !$('mobile-nav').classList.contains('open');
      $('mobile-nav').classList.toggle('open', o);
      this.setAttribute('aria-expanded', String(o));
    };
    $('mobile-nav').addEventListener('click', function (e) { if (e.target.closest('a')) $('mobile-nav').classList.remove('open'); });

    // search panel
    var panel = $('search-panel');
    var openSearch = function () { togglePanel(panel, true); setTimeout(function () { $('website-search').focus(); }, 50); };
    $('header-search-btn').onclick = openSearch;
    $('open-search-from-marketplace').onclick = openSearch;
    $('search-close').onclick = function () { togglePanel(panel, false); };
    panel.querySelector('.search-panel-backdrop').onclick = function () { togglePanel(panel, false); };
    $('website-search').addEventListener('input', function () { setFilter({ q: this.value }); });
    $('clear-search').onclick = function () { setFilter({ q: '' }); $('website-search').focus(); };
    document.querySelectorAll('[data-search]').forEach(function (b) {
      b.onclick = function () { setFilter({ q: '', cat: b.dataset.search }); togglePanel(panel, false); goMarket(); };
    });
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
      if (e.key === 'Escape') { togglePanel(panel, false); closeModal(); }
    });

    // hero search
    var heroGo = function () { setFilter({ q: $('hero-search').value, cat: $('hero-category').value }); goMarket(); };
    $('hero-search-button').onclick = heroGo;
    $('hero-search').addEventListener('keydown', function (e) { if (e.key === 'Enter') heroGo(); });
    $('hero-category').onchange = function () { setFilter({ cat: this.value }); };

    // categories + toolbar
    document.querySelectorAll('.category-card').forEach(function (c) {
      c.onclick = function () { setFilter({ cat: c.dataset.category }); goMarket(); };
    });
    $('category-filter').onchange = function () { setFilter({ cat: this.value }); };
    $('sort-websites').onchange = function () { state.sort = this.value; render(); };

    // buy modal
    var modal = $('buy-modal');
    function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
    window.addEventListener('click', function (e) {
      var b = e.target.closest('[data-buy]');
      if (!b) return;
      $('buy_website_id').value = b.dataset.buy;
      modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
      setTimeout(function () { $('buy_name').focus(); }, 50);
    });
    $('buy-modal-close').onclick = closeModal;
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    $('buy-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var data = {
        website_id: $('buy_website_id').value,
        name: $('buy_name').value.trim(),
        email: $('buy_email').value.trim(),
        phone: $('buy_phone').value.trim()
      };
      // TODO: ekhane order pathao (Firebase / Supabase / API / WhatsApp)
      console.log('Order:', data);
      this.reset(); closeModal();
      toast('Order received! Amra shiggroi jogajog korbo.');
    });

    // newsletter
    $('newsletter-form').addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: email save korar code
      this.reset(); toast('Subscribed! Thank you.');
    });
  });
})();
