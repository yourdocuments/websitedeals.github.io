/* =========================================================
   WEBSITE DEALS
   Ultra Premium Marketplace JavaScript
   File: js/script.js
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     1. CONFIG
     ========================================================= */

  const CONFIG = {
    storage: {
      orders: "websiteDealsOrders",
      subscribers: "websiteDealsSubscribers",
      favorites: "websiteDealsFavorites"
    },

    currency: "৳",

    selectors: {
      loader: "#page-loader",
      header: "#site-header",

      mobileMenuButton: "#mobile-menu-btn",
      mobileNav: "#mobile-nav",

      searchPanel: "#search-panel",
      websiteSearch: "#website-search",
      clearSearch: "#clear-search",

      heroSearch: "#hero-search",
      heroCategory: "#hero-category",
      heroSearchButton: "#hero-search-button",

      categorySection: "#categories",

      marketplace: "#websites",
      websiteList: "#website-list",
      emptyState: "#empty-state",

      countryStatus: "#country-status",
      sortWebsites: "#sort-websites",
      categoryFilter: "#category-filter",

      popularSection: "#popular",
      popularList: "#popular-list",

      newSection: "#new",
      newList: "#new-list",

      newsletterForm: "#newsletter-form",
      newsletterEmail: "#newsletter-email",

      buyModal: "#buy-modal",
      buyForm: "#buy-form",
      buyName: "#buy_name",
      buyEmail: "#buy_email",
      buyPhone: "#buy_phone",
      buyWebsiteId: "#buy_website_id",

      toast: "#toast",
      toastMessage: "#toast-message",

      backToTop: "#back-to-top",

      openSearch: "#open-search-from-marketplace"
    }
  };


  /* =========================================================
     2. SAMPLE WEBSITE DATA
     ========================================================= */

  const websites = [
    {
      id: "nova-business-pro",
      title: "Nova Business Pro",
      category: "business",
      categoryLabel: "Business",
      price: 2499,
      oldPrice: 3499,
      badge: "POPULAR",
      badgeType: "popular",
      rating: 4.9,
      reviews: 126,
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
      description:
        "A polished business website for modern companies, agencies and professional services.",
      tags: ["Business", "Corporate", "Responsive"],
      popular: true,
      isNew: false,
      sale: false,
      featured: true,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "restaurant-royale",
      title: "Restaurant Royale",
      category: "restaurant",
      categoryLabel: "Restaurant",
      price: 1999,
      oldPrice: 2799,
      badge: "NEW",
      badgeType: "new",
      rating: 4.8,
      reviews: 74,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      description:
        "Elegant restaurant website designed for menus, reservations, food galleries and local discovery.",
      tags: ["Restaurant", "Food", "Menu"],
      popular: false,
      isNew: true,
      sale: false,
      featured: true,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "creative-agency-x",
      title: "Creative Agency X",
      category: "agency",
      categoryLabel: "Agency",
      price: 2999,
      oldPrice: 3999,
      badge: "POPULAR",
      badgeType: "popular",
      rating: 4.9,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
      description:
        "High-end creative agency layout for studios, branding teams and digital professionals.",
      tags: ["Agency", "Creative", "Studio"],
      popular: true,
      isNew: false,
      sale: false,
      featured: true,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "shopease-store",
      title: "ShopEase Store",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      price: 3499,
      oldPrice: 4999,
      badge: "SALE",
      badgeType: "sale",
      rating: 4.9,
      reviews: 211,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Conversion-focused online store interface for products, collections and modern shopping experiences.",
      tags: ["E-commerce", "Store", "Shopping"],
      popular: true,
      isNew: false,
      sale: true,
      featured: true,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      category: "portfolio",
      categoryLabel: "Portfolio",
      price: 1499,
      oldPrice: 1999,
      badge: "NEW",
      badgeType: "new",
      rating: 4.8,
      reviews: 61,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
      description:
        "Minimal premium portfolio website for designers, developers, creators and freelancers.",
      tags: ["Portfolio", "Personal", "Creative"],
      popular: false,
      isNew: true,
      sale: false,
      featured: false,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "corporate-edge",
      title: "Corporate Edge",
      category: "business",
      categoryLabel: "Business",
      price: 2799,
      oldPrice: 3499,
      badge: "",
      badgeType: "",
      rating: 4.7,
      reviews: 53,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      description:
        "Professional corporate website for established businesses and growing organizations.",
      tags: ["Corporate", "Business", "Professional"],
      popular: false,
      isNew: false,
      sale: false,
      featured: false,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "foodie-restaurant",
      title: "Foodie Restaurant",
      category: "restaurant",
      categoryLabel: "Restaurant",
      price: 2199,
      oldPrice: 2999,
      badge: "POPULAR",
      badgeType: "popular",
      rating: 4.8,
      reviews: 87,
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
      description:
        "Warm and engaging restaurant design with food-focused visuals and menu presentation.",
      tags: ["Restaurant", "Food", "Cafe"],
      popular: true,
      isNew: false,
      sale: false,
      featured: false,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "creator-studio",
      title: "Creator Studio",
      category: "portfolio",
      categoryLabel: "Portfolio",
      price: 1799,
      oldPrice: 2499,
      badge: "NEW",
      badgeType: "new",
      rating: 4.9,
      reviews: 45,
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
      description:
        "Modern creator portfolio for YouTubers, designers, photographers and digital creators.",
      tags: ["Creator", "Portfolio", "Personal Brand"],
      popular: false,
      isNew: true,
      sale: false,
      featured: false,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "digital-agency-pro",
      title: "Digital Agency Pro",
      category: "agency",
      categoryLabel: "Agency",
      price: 3199,
      oldPrice: 4299,
      badge: "POPULAR",
      badgeType: "popular",
      rating: 4.9,
      reviews: 109,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      description:
        "Premium agency website for technology, marketing, creative and digital service businesses.",
      tags: ["Agency", "Marketing", "Digital"],
      popular: true,
      isNew: false,
      sale: false,
      featured: false,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "modern-shop",
      title: "Modern Shop",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      price: 3299,
      oldPrice: 4499,
      badge: "SALE",
      badgeType: "sale",
      rating: 4.8,
      reviews: 88,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
      description:
        "Clean e-commerce storefront designed for product discovery and online sales.",
      tags: ["Store", "E-commerce", "Products"],
      popular: false,
      isNew: false,
      sale: true,
      featured: false,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "monthly-starter",
      title: "Monthly Starter Website",
      category: "monthly",
      categoryLabel: "Monthly",
      price: 999,
      oldPrice: 1499,
      badge: "MONTHLY",
      badgeType: "monthly",
      rating: 4.7,
      reviews: 37,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      description:
        "Affordable ready-made website package for startups and small businesses.",
      tags: ["Monthly", "Startup", "Business"],
      popular: false,
      isNew: true,
      sale: false,
      featured: false,
      monthly: true,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    },

    {
      id: "premium-consulting",
      title: "Premium Consulting",
      category: "business",
      categoryLabel: "Business",
      price: 2899,
      oldPrice: 3899,
      badge: "NEW",
      badgeType: "new",
      rating: 4.8,
      reviews: 42,
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
      description:
        "Trust-focused consulting website for experts, consultants and professional firms.",
      tags: ["Consulting", "Business", "Services"],
      popular: false,
      isNew: true,
      sale: false,
      featured: false,
      preview:
        "https://example.com",
      demoLabel: "Live Preview"
    }
  ];


  /* =========================================================
     3. STATE
     ========================================================= */

  const state = {
    search: "",
    category: "all",
    sort: "featured",
    mobileMenuOpen: false,
    currentWebsite: null
  };


  /* =========================================================
     4. DOM HELPERS
     ========================================================= */

  const $ = (selector) => document.querySelector(selector);

  const $$ = (selector) => {
    return Array.from(document.querySelectorAll(selector));
  };


  /* =========================================================
     5. UTILITY FUNCTIONS
     ========================================================= */

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function formatPrice(price) {
    return `${CONFIG.currency}${Number(price).toLocaleString("en-BD")}`;
  }


  function getWebsiteById(id) {
    return websites.find((website) => website.id === id);
  }


  function safeJSONParse(value, fallback = []) {
    try {
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }


  function getStorageArray(key) {
    return safeJSONParse(localStorage.getItem(key), []);
  }


  function saveStorageArray(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }


  /* =========================================================
     6. TOAST
     ========================================================= */

  let toastTimer = null;

  function showToast(message, type = "success") {
    const toast = $(CONFIG.selectors.toast);
    const toastMessage = $(CONFIG.selectors.toastMessage);

    if (!toast || !toastMessage) {
      return;
    }

    toastMessage.textContent = message;

    toast.classList.remove("show", "success", "error", "info");

    void toast.offsetWidth;

    toast.classList.add("show", type);

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3500);
  }


  /* =========================================================
     7. LOADER
     ========================================================= */

  function hideLoader() {
    const loader = $(CONFIG.selectors.loader);

    if (!loader) {
      return;
    }

    setTimeout(() => {
      loader.classList.add("hidden");

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 500);
  }


  /* =========================================================
     8. IMAGE FALLBACK
     ========================================================= */

  function attachImageFallbacks() {
    $$("img").forEach((img) => {
      if (img.dataset.fallbackAttached === "true") {
        return;
      }

      img.dataset.fallbackAttached = "true";

      img.addEventListener("error", () => {
        if (img.dataset.fallbackApplied === "true") {
          return;
        }

        img.dataset.fallbackApplied = "true";

        img.src =
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
              <rect width="1200" height="700" fill="#eef5f0"/>
              <circle cx="600" cy="310" r="74" fill="#18a957" opacity=".12"/>
              <path d="M560 310h80M600 270v80" stroke="#18a957" stroke-width="12" stroke-linecap="round"/>
              <text x="600" y="455" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" fill="#152019">
                Website Deals
              </text>
              <text x="600" y="495" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#65736b">
                Premium Website Preview
              </text>
            </svg>
          `);
      });
    });
  }


  /* =========================================================
     9. WEBSITE CARD
     ========================================================= */

  function createWebsiteCard(website, compact = false) {
    if (compact) {
      return createCompactCard(website);
    }

    const badge = website.badge
      ? `
        <span class="website-badge ${escapeHTML(website.badgeType || "")}">
          ${escapeHTML(website.badge)}
        </span>
      `
      : "";

    const oldPrice = website.oldPrice
      ? `<span class="website-old-price">${formatPrice(website.oldPrice)}</span>`
      : "";

    const tags = Array.isArray(website.tags)
      ? website.tags
          .slice(0, 3)
          .map((tag) => `<span>${escapeHTML(tag)}</span>`)
          .join("")
      : "";

    return `
      <article class="website-card" data-id="${escapeHTML(website.id)}">

        <div class="website-card-image">

          <img
            src="${escapeHTML(website.image)}"
            alt="${escapeHTML(website.title)}"
            loading="lazy"
          />

          <div class="website-card-overlay">

            <a
              class="website-card-btn preview-btn"
              href="${escapeHTML(website.preview || "#")}"
              target="_blank"
              rel="noopener noreferrer"
              data-id="${escapeHTML(website.id)}"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              Preview
            </a>

            <button
              type="button"
              class="website-card-btn buy-btn"
              data-id="${escapeHTML(website.id)}"
            >
              <i class="fa-solid fa-bag-shopping"></i>
              Buy Now
            </button>

          </div>

          ${
            website.badge
              ? `<div class="website-card-badges">${badge}</div>`
              : ""
          }

        </div>

        <div class="website-card-body">

          <div class="website-card-category">
            ${escapeHTML(website.categoryLabel)}
          </div>

          <h3 class="website-card-title">
            ${escapeHTML(website.title)}
          </h3>

          <p class="website-card-description">
            ${escapeHTML(website.description)}
          </p>

          <div class="website-card-tags">
            ${tags}
          </div>

          <div class="website-card-meta">

            <div class="website-rating">
              <i class="fa-solid fa-star"></i>
              <strong>${escapeHTML(website.rating)}</strong>
              <span>(${escapeHTML(website.reviews)})</span>
            </div>

            <div class="website-price">

              <div>
                <strong>${formatPrice(website.price)}</strong>
                ${oldPrice}
              </div>

              ${
                website.monthly
                  ? `<small>/ month</small>`
                  : ""
              }

            </div>

          </div>

          <div class="website-card-actions">

            <a
              class="website-card-btn preview-btn"
              href="${escapeHTML(website.preview || "#")}"
              target="_blank"
              rel="noopener noreferrer"
              data-id="${escapeHTML(website.id)}"
            >
              Preview
            </a>

            <button
              type="button"
              class="website-card-btn primary buy-btn"
              data-id="${escapeHTML(website.id)}"
            >
              Buy Now
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>

      </article>
    `;
  }


  /* =========================================================
     10. COMPACT CARD
     ========================================================= */

  function createCompactCard(website) {
    return `
      <article class="compact-card" data-id="${escapeHTML(website.id)}">

        <div class="compact-card-image">

          <img
            src="${escapeHTML(website.image)}"
            alt="${escapeHTML(website.title)}"
            loading="lazy"
          />

          ${
            website.badge
              ? `
                <span class="website-badge ${escapeHTML(
                  website.badgeType || ""
                )}">
                  ${escapeHTML(website.badge)}
                </span>
              `
              : ""
          }

        </div>

        <div class="compact-card-body">

          <span class="compact-card-category">
            ${escapeHTML(website.categoryLabel)}
          </span>

          <h3>
            ${escapeHTML(website.title)}
          </h3>

          <div class="compact-card-bottom">

            <strong>
              ${formatPrice(website.price)}
            </strong>

            <button
              type="button"
              class="compact-buy-btn buy-btn"
              data-id="${escapeHTML(website.id)}"
              aria-label="Buy ${escapeHTML(website.title)}"
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>

      </article>
    `;
  }


  /* =========================================================
     11. FILTERING
     ========================================================= */

  function getFilteredWebsites() {
    let result = [...websites];

    const search = state.search.trim().toLowerCase();

    if (search) {
      result = result.filter((website) => {
        const searchable = [
          website.title,
          website.category,
          website.categoryLabel,
          website.description,
          ...(website.tags || [])
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(search);
      });
    }

    if (state.category && state.category !== "all") {
      result = result.filter(
        (website) => website.category === state.category
      );
    }

    switch (state.sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "newest":
        result.sort((a, b) => {
          return Number(b.isNew) - Number(a.isNew);
        });
        break;

      case "popular":
        result.sort((a, b) => {
          return Number(b.popular) - Number(a.popular);
        });
        break;

      case "featured":
      default:
        result.sort((a, b) => {
          return Number(b.featured) - Number(a.featured);
        });
        break;
    }

    return result;
  }


  /* =========================================================
     12. RENDER MAIN MARKETPLACE
     ========================================================= */

  function renderMarketplace() {
    const container = $(CONFIG.selectors.websiteList);
    const emptyState = $(CONFIG.selectors.emptyState);

    if (!container) {
      return;
    }

    const result = getFilteredWebsites();

    if (!result.length) {
      container.innerHTML = "";

      if (emptyState) {
        emptyState.classList.remove("hidden");
        emptyState.style.display = "";
      }

      return;
    }

    if (emptyState) {
      emptyState.classList.add("hidden");
      emptyState.style.display = "none";
    }

    container.innerHTML = result
      .map((website) => createWebsiteCard(website))
      .join("");

    attachImageFallbacks();
  }


  /* =========================================================
     13. RENDER POPULAR
     ========================================================= */

  function renderPopular() {
    const container = $(CONFIG.selectors.popularList);

    if (!container) {
      return;
    }

    const popular = websites
      .filter((website) => website.popular)
      .slice(0, 4);

    container.innerHTML = popular
      .map((website) => createWebsiteCard(website, true))
      .join("");

    attachImageFallbacks();
  }


  /* =========================================================
     14. RENDER NEW
     ========================================================= */

  function renderNew() {
    const container = $(CONFIG.selectors.newList);

    if (!container) {
      return;
    }

    const newWebsites = websites
      .filter((website) => website.isNew)
      .slice(0, 4);

    container.innerHTML = newWebsites
      .map((website) => createWebsiteCard(website, true))
      .join("");

    attachImageFallbacks();
  }


  /* =========================================================
     15. CATEGORY DISCOVERY
     ========================================================= */

  function bindCategoryCards() {
    $$(`
      [data-category],
      .category-card,
      .category-item
    `).forEach((element) => {
      if (element.dataset.categoryBound === "true") {
        return;
      }

      element.dataset.categoryBound = "true";

      element.addEventListener("click", (event) => {
        const category =
          element.dataset.category ||
          element.getAttribute("data-category");

        if (!category) {
          return;
        }

        event.preventDefault();

        state.category = category;
        state.search = "";

        const searchInput = $(CONFIG.selectors.websiteSearch);
        const heroSearch = $(CONFIG.selectors.heroSearch);

        if (searchInput) {
          searchInput.value = "";
        }

        if (heroSearch) {
          heroSearch.value = "";
        }

        const categoryFilter = $(CONFIG.selectors.categoryFilter);

        if (categoryFilter) {
          categoryFilter.value = category;
        }

        renderMarketplace();

        scrollToMarketplace();

        showToast(
          `Showing ${categoryLabel(category)} websites`,
          "info"
        );
      });
    });
  }


  function categoryLabel(category) {
    const labels = {
      all: "All",
      business: "Business",
      restaurant: "Restaurant",
      agency: "Agency",
      ecommerce: "E-commerce",
      portfolio: "Portfolio",
      monthly: "Monthly"
    };

    return labels[category] || category;
  }


  /* =========================================================
     16. MARKETPLACE SEARCH
     ========================================================= */

  function applySearch(value) {
    state.search = value.trim();

    const searchInput = $(CONFIG.selectors.websiteSearch);
    const heroSearch = $(CONFIG.selectors.heroSearch);

    if (searchInput && searchInput.value !== value) {
      searchInput.value = value;
    }

    if (heroSearch && heroSearch.value !== value) {
      heroSearch.value = value;
    }

    renderMarketplace();
  }


  function openSearchPanel() {
    const panel = $(CONFIG.selectors.searchPanel);

    if (!panel) {
      return;
    }

    panel.classList.add("active", "open");

    const input = $(CONFIG.selectors.websiteSearch);

    setTimeout(() => {
      if (input) {
        input.focus();
      }
    }, 150);
  }


  function closeSearchPanel() {
    const panel = $(CONFIG.selectors.searchPanel);

    if (!panel) {
      return;
    }

    panel.classList.remove("active", "open");
  }


  function bindSearch() {
    const searchInput = $(CONFIG.selectors.websiteSearch);
    const clearButton = $(CONFIG.selectors.clearSearch);
    const heroSearch = $(CONFIG.selectors.heroSearch);
    const heroCategory = $(CONFIG.selectors.heroCategory);
    const heroSearchButton = $(CONFIG.selectors.heroSearchButton);

    if (searchInput) {
      searchInput.addEventListener("input", (event) => {
        applySearch(event.target.value);
      });
    }

    if (clearButton) {
      clearButton.addEventListener("click", () => {
        applySearch("");

        if (searchInput) {
          searchInput.focus();
        }
      });
    }

    if (heroSearch) {
      heroSearch.addEventListener("input", (event) => {
        applySearch(event.target.value);
      });

      heroSearch.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          executeHeroSearch();
        }
      });
    }

    if (heroSearchButton) {
      heroSearchButton.addEventListener("click", executeHeroSearch);
    }

    if (heroCategory) {
      heroCategory.addEventListener("change", () => {
        state.category = heroCategory.value || "all";

        const categoryFilter = $(CONFIG.selectors.categoryFilter);

        if (categoryFilter) {
          categoryFilter.value = state.category;
        }

        renderMarketplace();
      });
    }

    $$(".search-trigger, [data-open-search]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        openSearchPanel();
      });
    });

    const marketplaceSearchButton = $(CONFIG.selectors.openSearch);

    if (marketplaceSearchButton) {
      marketplaceSearchButton.addEventListener("click", (event) => {
        event.preventDefault();
        openSearchPanel();
      });
    }
  }


  function executeHeroSearch() {
    const heroSearch = $(CONFIG.selectors.heroSearch);
    const heroCategory = $(CONFIG.selectors.heroCategory);

    if (heroSearch) {
      state.search = heroSearch.value.trim();
    }

    if (heroCategory) {
      state.category = heroCategory.value || "all";
    }

    const categoryFilter = $(CONFIG.selectors.categoryFilter);

    if (categoryFilter) {
      categoryFilter.value = state.category;
    }

    renderMarketplace();

    scrollToMarketplace();

    if (state.search || state.category !== "all") {
      showToast("Marketplace results updated", "success");
    }
  }


  /* =========================================================
     17. FILTER + SORT
     ========================================================= */

  function bindMarketplaceControls() {
    const categoryFilter = $(CONFIG.selectors.categoryFilter);
    const sort = $(CONFIG.selectors.sortWebsites);

    if (categoryFilter) {
      categoryFilter.addEventListener("change", (event) => {
        state.category = event.target.value || "all";

        const heroCategory = $(CONFIG.selectors.heroCategory);

        if (heroCategory) {
          heroCategory.value = state.category;
        }

        renderMarketplace();
      });
    }

    if (sort) {
      sort.addEventListener("change", (event) => {
        state.sort = event.target.value || "featured";
        renderMarketplace();
      });
    }
  }


  /* =========================================================
     18. SCROLL TO MARKETPLACE
     ========================================================= */

  function scrollToMarketplace() {
    const marketplace = $(CONFIG.selectors.marketplace);

    if (!marketplace) {
      return;
    }

    const header = $(CONFIG.selectors.header);
    const headerHeight = header
      ? header.getBoundingClientRect().height
      : 80;

    const target =
      marketplace.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      20;

    window.scrollTo({
      top: Math.max(target, 0),
      behavior: "smooth"
    });
  }


  /* =========================================================
     19. BUY MODAL
     ========================================================= */

  function openBuyModal(websiteId) {
    const website = getWebsiteById(websiteId);
    const modal = $(CONFIG.selectors.buyModal);

    if (!website || !modal) {
      return;
    }

    state.currentWebsite = website;

    const hiddenId = $(CONFIG.selectors.buyWebsiteId);

    if (hiddenId) {
      hiddenId.value = website.id;
    }

    const modalTitle =
      modal.querySelector("[data-buy-title]") ||
      modal.querySelector(".buy-modal-title");

    if (modalTitle) {
      modalTitle.textContent = `Order ${website.title}`;
    }

    const modalPrice =
      modal.querySelector("[data-buy-price]") ||
      modal.querySelector(".buy-modal-price");

    if (modalPrice) {
      modalPrice.textContent = formatPrice(website.price);
    }

    modal.classList.add("active", "open");

    document.body.classList.add("modal-open");

    const nameInput = $(CONFIG.selectors.buyName);

    setTimeout(() => {
      if (nameInput) {
        nameInput.focus();
      }
    }, 200);
  }


  function closeBuyModal() {
    const modal = $(CONFIG.selectors.buyModal);

    if (!modal) {
      return;
    }

    modal.classList.remove("active", "open");

    document.body.classList.remove("modal-open");

    state.currentWebsite = null;
  }


  function bindBuyModal() {
    document.addEventListener("click", (event) => {
      const buyButton = event.target.closest(".buy-btn");

      if (buyButton) {
        event.preventDefault();

        const websiteId = buyButton.dataset.id;

        if (websiteId) {
          openBuyModal(websiteId);
        }

        return;
      }

      const closeButton = event.target.closest(
        "[data-close-buy], .buy-modal-close, .modal-close"
      );

      if (closeButton) {
        event.preventDefault();
        closeBuyModal();
        return;
      }

      const modal = $(CONFIG.selectors.buyModal);

      if (
        modal &&
        event.target === modal
      ) {
        closeBuyModal();
      }
    });
  }


  /* =========================================================
     20. ORDER FORM
     ========================================================= */

  function bindBuyForm() {
    const form = $(CONFIG.selectors.buyForm);

    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const websiteId =
        $(CONFIG.selectors.buyWebsiteId)?.value ||
        state.currentWebsite?.id;

      const website = getWebsiteById(websiteId);

      if (!website) {
        showToast("Website information not found.", "error");
        return;
      }

      const name =
        $(CONFIG.selectors.buyName)?.value.trim() || "";

      const email =
        $(CONFIG.selectors.buyEmail)?.value.trim() || "";

      const phone =
        $(CONFIG.selectors.buyPhone)?.value.trim() || "";

      if (!name) {
        showToast("Please enter your name.", "error");
        return;
      }

      if (!email || !isValidEmail(email)) {
        showToast("Please enter a valid email address.", "error");
        return;
      }

      if (!phone) {
        showToast("Please enter your phone number.", "error");
        return;
      }

      const order = {
        id:
          "WD-" +
          Date.now().toString(36).toUpperCase() +
          "-" +
          Math.random()
            .toString(36)
            .slice(2, 7)
            .toUpperCase(),

        websiteId: website.id,
        websiteTitle: website.title,

        name,
        email,
        phone,

        price: website.price,

        status: "pending",

        createdAt: new Date().toISOString()
      };

      const orders = getStorageArray(
        CONFIG.storage.orders
      );

      orders.unshift(order);

      saveStorageArray(
        CONFIG.storage.orders,
        orders
      );

      form.reset();

      const hiddenId = $(CONFIG.selectors.buyWebsiteId);

      if (hiddenId) {
        hiddenId.value = website.id;
      }

      closeBuyModal();

      showToast(
        `Order submitted successfully. Order ID: ${order.id}`,
        "success"
      );
    });
  }


  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  /* =========================================================
     21. NEWSLETTER
     ========================================================= */

  function bindNewsletter() {
    const form = $(CONFIG.selectors.newsletterForm);

    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const input = $(CONFIG.selectors.newsletterEmail);

      if (!input) {
        return;
      }

      const email = input.value.trim().toLowerCase();

      if (!isValidEmail(email)) {
        showToast(
          "Please enter a valid email address.",
          "error"
        );
        return;
      }

      const subscribers = getStorageArray(
        CONFIG.storage.subscribers
      );

      const exists = subscribers.some(
        (subscriber) =>
          subscriber.email === email
      );

      if (exists) {
        showToast(
          "This email is already subscribed.",
          "info"
        );
        return;
      }

      subscribers.unshift({
        email,
        subscribedAt: new Date().toISOString()
      });

      saveStorageArray(
        CONFIG.storage.subscribers,
        subscribers
      );

      input.value = "";

      showToast(
        "You're successfully subscribed!",
        "success"
      );
    });
  }


  /* =========================================================
     22. MOBILE MENU
     ========================================================= */

  function bindMobileMenu() {
    const button = $(CONFIG.selectors.mobileMenuButton);
    const nav = $(CONFIG.selectors.mobileNav);

    if (!button || !nav) {
      return;
    }

    button.addEventListener("click", () => {
      state.mobileMenuOpen =
        !state.mobileMenuOpen;

      button.classList.toggle(
        "active",
        state.mobileMenuOpen
      );

      nav.classList.toggle(
        "active",
        state.mobileMenuOpen
      );

      nav.classList.toggle(
        "open",
        state.mobileMenuOpen
      );

      document.body.classList.toggle(
        "mobile-menu-open",
        state.mobileMenuOpen
      );

      const icon = button.querySelector("i");

      if (icon) {
        icon.className = state.mobileMenuOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      }
    });

    nav.addEventListener("click", (event) => {
      const link = event.target.closest("a");

      if (!link) {
        return;
      }

      closeMobileMenu();
    });
  }


  function closeMobileMenu() {
    const button = $(CONFIG.selectors.mobileMenuButton);
    const nav = $(CONFIG.selectors.mobileNav);

    state.mobileMenuOpen = false;

    if (button) {
      button.classList.remove("active");

      const icon = button.querySelector("i");

      if (icon) {
        icon.className =
          "fa-solid fa-bars";
      }
    }

    if (nav) {
      nav.classList.remove("active", "open");
    }

    document.body.classList.remove(
      "mobile-menu-open"
    );
  }


  /* =========================================================
     23. STICKY HEADER
     ========================================================= */

  function bindHeaderScroll() {
    const header = $(CONFIG.selectors.header);

    if (!header) {
      return;
    }

    const updateHeader = () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );
  }


  /* =========================================================
     24. BACK TO TOP
     ========================================================= */

  function bindBackToTop() {
    const button = $(CONFIG.selectors.backToTop);

    if (!button) {
      return;
    }

    const updateVisibility = () => {
      if (window.scrollY > 500) {
        button.classList.add("show", "active");
      } else {
        button.classList.remove(
          "show",
          "active"
        );
      }
    };

    updateVisibility();

    window.addEventListener(
      "scroll",
      updateVisibility,
      { passive: true }
    );

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  /* =========================================================
     25. SMOOTH ANCHOR LINKS
     ========================================================= */

  function bindSmoothLinks() {
    $$('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");

        if (
          !href ||
          href === "#" ||
          href === "#!"
        ) {
          return;
        }

        const target = document.querySelector(href);

        if (!target) {
          return;
        }

        event.preventDefault();

        const header = $(CONFIG.selectors.header);

        const offset = header
          ? header.getBoundingClientRect().height + 15
          : 90;

        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          offset;

        window.scrollTo({
          top: Math.max(top, 0),
          behavior: "smooth"
        });

        closeMobileMenu();
      });
    });
  }


  /* =========================================================
     26. SEARCH PANEL OUTSIDE CLICK
     ========================================================= */

  function bindSearchPanelClose() {
    const panel = $(CONFIG.selectors.searchPanel);

    if (!panel) {
      return;
    }

    panel.addEventListener("click", (event) => {
      if (
        event.target === panel ||
        event.target.closest(
          ".search-panel-close, [data-close-search]"
        )
      ) {
        closeSearchPanel();
      }
    });
  }


  /* =========================================================
     27. KEYBOARD SHORTCUTS
     ========================================================= */

  function bindKeyboardShortcuts() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeBuyModal();
        closeSearchPanel();
        closeMobileMenu();
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        openSearchPanel();
      }
    });
  }


  /* =========================================================
     28. COUNTRY STATUS
     ========================================================= */

  function updateCountryStatus() {
    const element = $(CONFIG.selectors.countryStatus);

    if (!element) {
      return;
    }

    const countryName =
      element.dataset.country ||
      "Bangladesh";

    const flag =
      element.dataset.flag ||
      "🇧🇩";

    const existingText =
      element.querySelector("[data-country-text]");

    if (existingText) {
      existingText.textContent =
        `${flag} ${countryName}`;
      return;
    }

    if (
      element.textContent.trim() === ""
    ) {
      element.textContent =
        `${flag} ${countryName}`;
    }
  }


  /* =========================================================
     29. CURRENT YEAR
     ========================================================= */

  function updateCurrentYear() {
    const year = new Date().getFullYear();

    $$("[data-current-year]").forEach(
      (element) => {
        element.textContent = year;
      }
    );

    $$(".current-year").forEach(
      (element) => {
        element.textContent = year;
      }
    );
  }


  /* =========================================================
     30. CATEGORY COUNT
     ========================================================= */

  function updateCategoryCounts() {
    $$("[data-category-count]").forEach(
      (element) => {
        const category =
          element.dataset.categoryCount;

        if (!category) {
          return;
        }

        const count = websites.filter(
          (website) =>
            website.category === category
        ).length;

        element.textContent = count;
      }
    );
  }


  /* =========================================================
     31. EMPTY STATE RESET
     ========================================================= */

  function bindEmptyState() {
    document.addEventListener("click", (event) => {
      const resetButton =
        event.target.closest(
          "[data-reset-marketplace], #reset-filters"
        );

      if (!resetButton) {
        return;
      }

      event.preventDefault();

      state.search = "";
      state.category = "all";
      state.sort = "featured";

      const searchInput =
        $(CONFIG.selectors.websiteSearch);

      const heroSearch =
        $(CONFIG.selectors.heroSearch);

      const categoryFilter =
        $(CONFIG.selectors.categoryFilter);

      const heroCategory =
        $(CONFIG.selectors.heroCategory);

      const sort =
        $(CONFIG.selectors.sortWebsites);

      if (searchInput) {
        searchInput.value = "";
      }

      if (heroSearch) {
        heroSearch.value = "";
      }

      if (categoryFilter) {
        categoryFilter.value = "all";
      }

      if (heroCategory) {
        heroCategory.value = "all";
      }

      if (sort) {
        sort.value = "featured";
      }

      renderMarketplace();
    });
  }


  /* =========================================================
     32. PREVIEW BUTTON TRACKING
     ========================================================= */

  function bindPreviewTracking() {
    document.addEventListener("click", (event) => {
      const preview =
        event.target.closest(".preview-btn");

      if (!preview) {
        return;
      }

      const websiteId =
        preview.dataset.id;

      if (!websiteId) {
        return;
      }

      const website =
        getWebsiteById(websiteId);

      if (!website) {
        return;
      }

      try {
        const recent =
          safeJSONParse(
            localStorage.getItem(
              "websiteDealsPreviews"
            ),
            []
          );

        recent.unshift({
          websiteId,
          title: website.title,
          openedAt:
            new Date().toISOString()
        });

        localStorage.setItem(
          "websiteDealsPreviews",
          JSON.stringify(
            recent.slice(0, 50)
          )
        );
      } catch {
        /* Ignore storage errors */
      }
    });
  }


  /* =========================================================
     33. NAVIGATION ACTIVE STATE
     ========================================================= */

  function updateActiveNav() {
    const links = $$(
      'a[href="#websites"], a[href="#categories"], a[href="#popular"], a[href="#new"], a[href="#monthly"]'
    );

    if (!links.length) {
      return;
    }

    const sections = links
      .map((link) => {
        const href =
          link.getAttribute("href");

        const section =
          href &&
          document.querySelector(href);

        return {
          link,
          section
        };
      })
      .filter((item) => item.section);

    if (!sections.length) {
      return;
    }

    const onScroll = () => {
      const scrollPosition =
        window.scrollY + 180;

      let activeSection = null;

      sections.forEach((item) => {
        if (
          item.section.offsetTop <=
          scrollPosition
        ) {
          activeSection = item;
        }
      });

      sections.forEach((item) => {
        item.link.classList.toggle(
          "active",
          item === activeSection
        );
      });
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );
  }


  /* =========================================================
     34. FAVORITES
     ========================================================= */

  function bindFavorites() {
    document.addEventListener("click", (event) => {
      const button =
        event.target.closest(
          ".favorite-btn, [data-favorite]"
        );

      if (!button) {
        return;
      }

      event.preventDefault();

      const id =
        button.dataset.id ||
        button.dataset.favorite;

      if (!id) {
        return;
      }

      const favorites =
        getStorageArray(
          CONFIG.storage.favorites
        );

      const index =
        favorites.indexOf(id);

      if (index === -1) {
        favorites.push(id);

        button.classList.add("active");

        showToast(
          "Added to favorites",
          "success"
        );
      } else {
        favorites.splice(index, 1);

        button.classList.remove("active");

        showToast(
          "Removed from favorites",
          "info"
        );
      }

      saveStorageArray(
        CONFIG.storage.favorites,
        favorites
      );
    });
  }


  /* =========================================================
     35. INIT
     ========================================================= */

  function init() {
    renderMarketplace();
    renderPopular();
    renderNew();

    bindSearch();
    bindMarketplaceControls();
    bindCategoryCards();

    bindBuyModal();
    bindBuyForm();

    bindNewsletter();

    bindMobileMenu();
    bindHeaderScroll();

    bindBackToTop();
    bindSmoothLinks();

    bindSearchPanelClose();
    bindKeyboardShortcuts();

    bindEmptyState();
    bindPreviewTracking();

    bindFavorites();

    updateCountryStatus();
    updateCurrentYear();
    updateCategoryCounts();

    updateActiveNav();

    attachImageFallbacks();

    hideLoader();

    console.log(
      "%cWebsite Deals%c Ultra Premium Marketplace Loaded",
      "font-weight:800;color:#18a957;font-size:14px;",
      "font-weight:600;color:#152019;font-size:14px;"
    );
  }


  /* =========================================================
     36. START
     ========================================================= */

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }

})();
