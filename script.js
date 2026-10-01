/* =========================================================
   WEBSITE DEALS — ULTRA PREMIUM SCRIPT
   Premium Ready-Made Website Marketplace
   File: js/script.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================================
     1. WEBSITE DATA
     ========================================================= */

  const websites = [
    {
      id: "wd001",
      title: "Nova Business Pro",
      category: "business",
      categoryLabel: "Business",
      price: 2499,
      oldPrice: 3999,
      badge: "POPULAR",
      badgeType: "popular",
      rating: 4.9,
      reviews: 28,
      sales: 86,
      isPopular: true,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Modern business website for companies, startups and professional services.",
      features: [
        "Responsive Design",
        "Modern UI",
        "Contact Section",
        "Easy Customization"
      ],
      tags: ["Business", "Corporate", "Responsive"]
    },

    {
      id: "wd002",
      title: "Restaurant Royale",
      category: "restaurant",
      categoryLabel: "Restaurant",
      price: 1999,
      oldPrice: 2999,
      badge: "NEW",
      badgeType: "new",
      rating: 4.8,
      reviews: 17,
      sales: 52,
      isPopular: false,
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Elegant restaurant website for cafes, restaurants and food businesses.",
      features: [
        "Food Menu",
        "Reservation CTA",
        "Gallery",
        "Mobile Friendly"
      ],
      tags: ["Restaurant", "Food", "Menu"]
    },

    {
      id: "wd003",
      title: "Creative Agency X",
      category: "agency",
      categoryLabel: "Agency",
      price: 2999,
      oldPrice: 4499,
      badge: "POPULAR",
      badgeType: "popular",
      rating: 5.0,
      reviews: 34,
      sales: 104,
      isPopular: true,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Premium agency website for creative studios, digital agencies and teams.",
      features: [
        "Portfolio",
        "Services",
        "Team Section",
        "Premium Layout"
      ],
      tags: ["Agency", "Creative", "Studio"]
    },

    {
      id: "wd004",
      title: "ShopEase Store",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      price: 3499,
      oldPrice: 4999,
      badge: "SALE",
      badgeType: "sale",
      rating: 4.9,
      reviews: 41,
      sales: 129,
      isPopular: true,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Clean e-commerce storefront concept for products and online businesses.",
      features: [
        "Product Grid",
        "Shopping UI",
        "Categories",
        "Responsive"
      ],
      tags: ["E-commerce", "Store", "Shopping"]
    },

    {
      id: "wd005",
      title: "Personal Portfolio",
      category: "portfolio",
      categoryLabel: "Portfolio",
      price: 1499,
      oldPrice: 2499,
      badge: "NEW",
      badgeType: "new",
      rating: 4.8,
      reviews: 13,
      sales: 39,
      isPopular: false,
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Minimal premium portfolio website for designers, developers and creators.",
      features: [
        "About",
        "Projects",
        "Skills",
        "Contact"
      ],
      tags: ["Portfolio", "Personal", "Creative"]
    },

    {
      id: "wd006",
      title: "Corporate Edge",
      category: "business",
      categoryLabel: "Business",
      price: 2799,
      oldPrice: 3999,
      badge: "",
      badgeType: "",
      rating: 4.7,
      reviews: 21,
      sales: 67,
      isPopular: false,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Professional corporate website for growing businesses.",
      features: [
        "Corporate Layout",
        "Services",
        "About Company",
        "Contact"
      ],
      tags: ["Corporate", "Business", "Professional"]
    },

    {
      id: "wd007",
      title: "Foodie Restaurant",
      category: "restaurant",
      categoryLabel: "Restaurant",
      price: 2199,
      oldPrice: 3299,
      badge: "POPULAR",
      badgeType: "popular",
      rating: 4.9,
      reviews: 26,
      sales: 73,
      isPopular: true,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Beautiful food business website with menu and promotional sections.",
      features: [
        "Menu",
        "Food Gallery",
        "Location",
        "Contact"
      ],
      tags: ["Restaurant", "Food", "Cafe"]
    },

    {
      id: "wd008",
      title: "Creator Studio",
      category: "portfolio",
      categoryLabel: "Portfolio",
      price: 1799,
      oldPrice: 2799,
      badge: "NEW",
      badgeType: "new",
      rating: 4.8,
      reviews: 11,
      sales: 31,
      isPopular: false,
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Creative personal brand website for creators and professionals.",
      features: [
        "Personal Brand",
        "Blog Ready",
        "Projects",
        "Social Links"
      ],
      tags: ["Creator", "Portfolio", "Personal Brand"]
    },

    {
      id: "wd009",
      title: "Digital Agency Pro",
      category: "agency",
      categoryLabel: "Agency",
      price: 3199,
      oldPrice: 4299,
      badge: "POPULAR",
      badgeType: "popular",
      rating: 4.9,
      reviews: 37,
      sales: 112,
      isPopular: true,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Premium digital agency website for technology, marketing and creative teams.",
      features: [
        "Agency Home",
        "Services",
        "Portfolio",
        "Contact"
      ],
      tags: ["Agency", "Digital", "Marketing"]
    },

    {
      id: "wd010",
      title: "Modern Shop",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      price: 3299,
      oldPrice: 4499,
      badge: "SALE",
      badgeType: "sale",
      rating: 4.8,
      reviews: 24,
      sales: 91,
      isPopular: true,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Clean e-commerce storefront designed for product discovery and online sales.",
      features: [
        "Product Grid",
        "Categories",
        "Shopping UI",
        "Responsive"
      ],
      tags: ["Store", "E-commerce", "Products"]
    },

    {
      id: "wd011",
      title: "Monthly Starter",
      category: "monthly",
      categoryLabel: "Monthly",
      price: 999,
      oldPrice: 1499,
      badge: "MONTHLY",
      badgeType: "monthly",
      rating: 4.7,
      reviews: 18,
      sales: 44,
      isPopular: false,
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      previewUrl: "#",
      description:
        "Affordable ready-made website package for startups and small businesses.",
      features: [
        "Ready Website",
        "Hosting Ready",
        "Responsive",
        "Monthly Plan"
      ],
      tags: ["Monthly", "Startup", "Business"]
    }
  ];


  /* =========================================================
     2. STATE
     ========================================================= */

  let activeCategory = "all";
  let currentSearch = "";
  let currentSort = "popular";
  let toastTimer = null;


  /* =========================================================
     3. DOM
     ========================================================= */

  const pageLoader =
    document.getElementById("page-loader");

  const siteHeader =
    document.getElementById("site-header");

  const mobileMenuBtn =
    document.getElementById("mobile-menu-btn");

  const mobileNav =
    document.getElementById("mobile-nav");

  const searchPanel =
    document.getElementById("search-panel");

  const websiteSearch =
    document.getElementById("website-search");

  const clearSearch =
    document.getElementById("clear-search");

  const heroSearch =
    document.getElementById("hero-search");

  const heroCategory =
    document.getElementById("hero-category");

  const heroSearchButton =
    document.getElementById("hero-search-button");

  const websiteList =
    document.getElementById("website-list");

  const popularList =
    document.getElementById("popular-list");

  const newList =
    document.getElementById("new-list");

  const categoryFilter =
    document.getElementById("category-filter");

  const sortWebsites =
    document.getElementById("sort-websites");

  const emptyState =
    document.getElementById("empty-state");

  const countryStatus =
    document.getElementById("country-status");

  const buyModal =
    document.getElementById("buy-modal");

  const buyForm =
    document.getElementById("buy-form");

  const buyName =
    document.getElementById("buy_name");

  const buyEmail =
    document.getElementById("buy_email");

  const buyPhone =
    document.getElementById("buy_phone");

  const buyWebsiteId =
    document.getElementById("buy_website_id");

  const toast =
    document.getElementById("toast");

  const toastMessage =
    document.getElementById("toast-message");

  const backToTop =
    document.getElementById("back-to-top");

  const newsletterForm =
    document.getElementById("newsletter-form");

  const newsletterEmail =
    document.getElementById("newsletter-email");


  /* =========================================================
     4. HELPERS
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
    return `৳${Number(price).toLocaleString("en-BD")}`;
  }


  function getWebsite(id) {
    return websites.find(
      website => website.id === id
    );
  }


  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  function saveJSON(key, value) {
    try {
      localStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch (error) {
      console.warn(
        "LocalStorage error:",
        error
      );
    }
  }


  function getJSON(key, fallback = []) {
    try {
      return JSON.parse(
        localStorage.getItem(key) || "[]"
      );
    } catch {
      return fallback;
    }
  }


  function getCategoryIcon(category) {
    const icons = {
      business: "fa-building",
      restaurant: "fa-utensils",
      agency: "fa-wand-magic-sparkles",
      ecommerce: "fa-cart-shopping",
      portfolio: "fa-user-tie",
      monthly: "fa-calendar-days"
    };

    return icons[category] || "fa-globe";
  }


  /* =========================================================
     5. TOAST
     ========================================================= */

  function showToast(
    message,
    type = "success"
  ) {
    if (!toast || !toastMessage) {
      return;
    }

    toastMessage.textContent = message;

    toast.classList.remove(
      "success",
      "error",
      "warning",
      "info",
      "show"
    );

    toast.classList.add(type);

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }


  /* =========================================================
     6. WEBSITE CARD
     ========================================================= */

  function createWebsiteCard(website) {
    const badgeHTML = website.badge
      ? `
        <div class="website-card-badges">
          <span class="website-badge ${escapeHTML(
            website.badgeType || website.badge.toLowerCase()
          )}">
            ${escapeHTML(website.badge)}
          </span>
        </div>
      `
      : "";

    const oldPrice = website.oldPrice
      ? `
        <span class="website-old-price">
          ${formatPrice(website.oldPrice)}
        </span>
      `
      : "";

    const tags = (website.tags || [])
      .slice(0, 3)
      .map(
        tag =>
          `<span>${escapeHTML(tag)}</span>`
      )
      .join("");

    return `
      <article
        class="website-card"
        data-id="${escapeHTML(website.id)}"
      >

        <div class="website-card-image">

          <img
            src="${escapeHTML(website.image)}"
            alt="${escapeHTML(website.title)}"
            loading="lazy"
          >

          ${badgeHTML}

          <div class="website-card-overlay">

            <button
              type="button"
              class="website-card-btn preview-btn"
              data-preview="${escapeHTML(website.id)}"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              Preview
            </button>

            <button
              type="button"
              class="website-card-btn primary buy-btn"
              data-buy="${escapeHTML(website.id)}"
            >
              <i class="fa-solid fa-bag-shopping"></i>
              Buy Now
            </button>

          </div>

        </div>


        <div class="website-card-body">

          <div class="website-card-category">
            <i class="fa-solid ${getCategoryIcon(
              website.category
            )}"></i>
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

              <strong>
                ${escapeHTML(website.rating)}
              </strong>

              <span>
                (${escapeHTML(website.reviews)})
              </span>
            </div>


            <div class="website-price">

              <div>
                <strong>
                  ${formatPrice(website.price)}
                </strong>

                ${oldPrice}
              </div>

              <small>
                ${website.category === "monthly"
                  ? "/ month"
                  : "One-time"}
              </small>

            </div>

          </div>


          <div class="website-card-actions">

            <button
              type="button"
              class="website-card-btn secondary preview-btn"
              data-preview="${escapeHTML(website.id)}"
            >
              Preview
            </button>

            <button
              type="button"
              class="website-card-btn primary buy-btn"
              data-buy="${escapeHTML(website.id)}"
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
     7. COMPACT CARD
     ========================================================= */

  function createCompactCard(website) {
    return `
      <article
        class="compact-card"
        data-id="${escapeHTML(website.id)}"
      >

        <div class="compact-card-image">

          <img
            src="${escapeHTML(website.image)}"
            alt="${escapeHTML(website.title)}"
            loading="lazy"
          >

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
              data-buy="${escapeHTML(website.id)}"
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
     8. FILTER
     ========================================================= */

  function getFilteredWebsites() {
    let result = [...websites];

    if (
      activeCategory &&
      activeCategory !== "all"
    ) {
      result = result.filter(
        website =>
          website.category ===
          activeCategory
      );
    }


    if (currentSearch.trim()) {
      const query =
        currentSearch
          .trim()
          .toLowerCase();

      result = result.filter(website => {

        const searchable = [
          website.title,
          website.category,
          website.categoryLabel,
          website.description,
          ...(website.features || []),
          ...(website.tags || [])
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(query);
      });
    }


    switch (currentSort) {

      case "new":
      case "newest":

        result.sort(
          (a, b) =>
            Number(b.isNew) -
            Number(a.isNew)
        );

        break;


      case "price-low":

        result.sort(
          (a, b) =>
            a.price - b.price
        );

        break;


      case "price-high":

        result.sort(
          (a, b) =>
            b.price - a.price
        );

        break;


      case "rating":

        result.sort(
          (a, b) =>
            b.rating - a.rating
        );

        break;


      case "popular":

      default:

        result.sort(
          (a, b) =>
            b.sales - a.sales
        );

        break;
    }


    return result;
  }


  /* =========================================================
     9. MAIN MARKETPLACE
     ========================================================= */

  function renderMarketplace() {
    if (!websiteList) {
      return;
    }

    const result =
      getFilteredWebsites();


    if (!result.length) {

      websiteList.innerHTML = "";

      if (emptyState) {
        emptyState.classList.remove(
          "hidden"
        );

        emptyState.style.display = "";
      }

      return;
    }


    if (emptyState) {
      emptyState.classList.add(
        "hidden"
      );

      emptyState.style.display =
        "none";
    }


    websiteList.innerHTML =
      result
        .map(createWebsiteCard)
        .join("");


    attachImageFallbacks();
  }


  /* =========================================================
     10. POPULAR
     ========================================================= */

  function renderPopular() {
    if (!popularList) {
      return;
    }

    const popular =
      websites
        .filter(
          website =>
            website.isPopular
        )
        .sort(
          (a, b) =>
            b.sales - a.sales
        )
        .slice(0, 4);


    popularList.innerHTML =
      popular
        .map(createCompactCard)
        .join("");


    attachImageFallbacks();
  }


  /* =========================================================
     11. NEW
     ========================================================= */

  function renderNew() {
    if (!newList) {
      return;
    }

    const newest =
      websites
        .filter(
          website =>
            website.isNew
        )
        .slice(0, 4);


    newList.innerHTML =
      newest
        .map(createCompactCard)
        .join("");


    attachImageFallbacks();
  }


  /* =========================================================
     12. SEARCH
     ========================================================= */

  function syncSearchInputs(value) {
    if (
      websiteSearch &&
      websiteSearch.value !== value
    ) {
      websiteSearch.value = value;
    }

    if (
      heroSearch &&
      heroSearch.value !== value
    ) {
      heroSearch.value = value;
    }
  }


  function performSearch(
    query,
    category = activeCategory
  ) {
    currentSearch =
      String(query || "").trim();

    activeCategory =
      category || "all";

    syncSearchInputs(currentSearch);

    if (heroCategory) {
      heroCategory.value =
        activeCategory;
    }

    if (categoryFilter) {
      categoryFilter.value =
        activeCategory;
    }

    renderMarketplace();

    scrollToMarketplace();
  }


  if (websiteSearch) {

    websiteSearch.addEventListener(
      "input",
      event => {

        currentSearch =
          event.target.value;

        if (heroSearch) {
          heroSearch.value =
            currentSearch;
        }

        renderMarketplace();

      }
    );

  }


  if (heroSearch) {

    heroSearch.addEventListener(
      "input",
      event => {

        currentSearch =
          event.target.value;

        if (websiteSearch) {
          websiteSearch.value =
            currentSearch;
        }

      }
    );


    heroSearch.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          performSearch(
            heroSearch.value,
            heroCategory
              ? heroCategory.value
              : "all"
          );

        }

      }
    );

  }


  if (heroSearchButton) {

    heroSearchButton.addEventListener(
      "click",
      () => {

        performSearch(
          heroSearch
            ? heroSearch.value
            : "",
          heroCategory
            ? heroCategory.value
            : "all"
        );

      }
    );

  }


  if (clearSearch) {

    clearSearch.addEventListener(
      "click",
      () => {

        currentSearch = "";

        syncSearchInputs("");

        renderMarketplace();

        websiteSearch?.focus();

      }
    );

  }


  /* =========================================================
     13. SEARCH PANEL
     ========================================================= */

  function openSearchPanel() {

    if (!searchPanel) {
      return;
    }

    searchPanel.classList.add(
      "active",
      "open"
    );

    document.body.classList.add(
      "search-open"
    );

    setTimeout(() => {

      websiteSearch?.focus();

    }, 120);
  }


  function closeSearchPanel() {

    if (!searchPanel) {
      return;
    }

    searchPanel.classList.remove(
      "active",
      "open"
    );

    document.body.classList.remove(
      "search-open"
    );
  }


  document.addEventListener(
    "click",
    event => {

      const trigger =
        event.target.closest(
          "[data-open-search], .search-trigger, #open-search-from-marketplace"
        );

      if (trigger) {

        event.preventDefault();

        openSearchPanel();

      }


      const closeButton =
        event.target.closest(
          "[data-close-search], .search-panel-close"
        );

      if (closeButton) {

        event.preventDefault();

        closeSearchPanel();

      }

    }
  );


  if (searchPanel) {

    searchPanel.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          searchPanel
        ) {
          closeSearchPanel();
        }

      }
    );

  }


  /* =========================================================
     14. CATEGORY
     ========================================================= */

  function setCategory(category) {

    activeCategory =
      category || "all";

    if (categoryFilter) {
      categoryFilter.value =
        activeCategory;
    }

    if (heroCategory) {
      heroCategory.value =
        activeCategory;
    }

    renderMarketplace();

    scrollToMarketplace();

  }


  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      event => {

        setCategory(
          event.target.value
        );

      }
    );

  }


  document.addEventListener(
    "click",
    event => {

      const categoryElement =
        event.target.closest(
          "[data-category], [data-category-link]"
        );

      if (!categoryElement) {
        return;
      }

      const category =
        categoryElement.dataset.category ||
        categoryElement.dataset.categoryLink;

      if (!category) {
        return;
      }

      event.preventDefault();

      setCategory(category);

    }
  );


  if (heroCategory) {

    heroCategory.addEventListener(
      "change",
      event => {

        setCategory(
          event.target.value
        );

      }
    );

  }


  /* =========================================================
     15. SORT
     ========================================================= */

  if (sortWebsites) {

    sortWebsites.addEventListener(
      "change",
      event => {

        currentSort =
          event.target.value ||
          "popular";

        renderMarketplace();

      }
    );

  }


  /* =========================================================
     16. SCROLL TO MARKETPLACE
     ========================================================= */

  function scrollToMarketplace() {

    const marketplace =
      document.getElementById(
        "websites"
      );

    if (!marketplace) {
      return;
    }

    const header =
      siteHeader
        ? siteHeader.offsetHeight
        : 80;

    const top =
      marketplace.getBoundingClientRect()
        .top +
      window.scrollY -
      header -
      20;


    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth"
    });

  }


  /* =========================================================
     17. PREVIEW
     ========================================================= */

  function previewWebsite(id) {

    const website =
      getWebsite(id);

    if (!website) {
      return;
    }


    if (
      website.previewUrl &&
      website.previewUrl !== "#"
    ) {

      window.open(
        website.previewUrl,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }


    showToast(
      `${website.title} Preview`,
      "Live preview খুব শীঘ্রই available হবে।",
      "warning"
    );

  }


  /* =========================================================
     18. BUY MODAL
     ========================================================= */

  function openBuyModal(id) {

    const website =
      getWebsite(id);

    if (!website || !buyModal) {
      return;
    }


    if (buyWebsiteId) {
      buyWebsiteId.value =
        website.id;
    }


    const titleElement =
      buyModal.querySelector(
        "#buy-website-title, [data-buy-title], .buy-modal-title"
      );


    if (titleElement) {
      titleElement.textContent =
        website.title;
    }


    const priceElement =
      buyModal.querySelector(
        "[data-buy-price], .buy-modal-price"
      );


    if (priceElement) {
      priceElement.textContent =
        formatPrice(
          website.price
        );
    }


    const messageElement =
      buyModal.querySelector(
        "#buy-message"
      );


    if (messageElement) {

      messageElement.innerHTML = `
        You selected
        <strong>
          ${escapeHTML(
            website.title
          )}
        </strong>
        for
        <strong>
          ${formatPrice(
            website.price
          )}
        </strong>.
      `;

    }


    buyModal.classList.remove(
      "hidden"
    );

    buyModal.classList.add(
      "active",
      "open"
    );

    document.body.classList.add(
      "modal-open"
    );


    setTimeout(() => {

      buyName?.focus();

    }, 150);

  }


  function closeBuyModal() {

    if (!buyModal) {
      return;
    }

    buyModal.classList.add(
      "hidden"
    );

    buyModal.classList.remove(
      "active",
      "open"
    );

    document.body.classList.remove(
      "modal-open"
    );

  }


  document.addEventListener(
    "click",
    event => {

      const buyButton =
        event.target.closest(
          ".buy-btn, [data-buy]"
        );

      if (buyButton) {

        event.preventDefault();

        const id =
          buyButton.dataset.buy ||
          buyButton.dataset.id;

        if (id) {
          openBuyModal(id);
        }

        return;
      }


      const previewButton =
        event.target.closest(
          ".preview-btn, [data-preview]"
        );

      if (previewButton) {

        event.preventDefault();

        const id =
          previewButton.dataset.preview ||
          previewButton.dataset.id;

        if (id) {
          previewWebsite(id);
        }

        return;
      }


      const closeButton =
        event.target.closest(
          "#modal-close, #cancel-buy-btn, [data-close-buy], .buy-modal-close, .modal-close"
        );

      if (closeButton) {

        event.preventDefault();

        closeBuyModal();

      }

    }
  );


  if (buyModal) {

    buyModal.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          buyModal
        ) {
          closeBuyModal();
        }

      }
    );

  }


  /* =========================================================
     19. BUY FORM
     ========================================================= */

  if (buyForm) {

    buyForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const name =
          buyName?.value.trim() ||
          "";

        const email =
          buyEmail?.value.trim() ||
          "";

        const phone =
          buyPhone?.value.trim() ||
          "";

        const websiteId =
          buyWebsiteId?.value ||
          "";


        const website =
          getWebsite(websiteId);


        if (!name) {

          showToast(
            "Name Required",
            "আপনার নাম লিখুন।",
            "error"
          );

          buyName?.focus();

          return;
        }


        if (
          !email ||
          !validEmail(email)
        ) {

          showToast(
            "Invalid Email",
            "সঠিক email address দিন।",
            "error"
          );

          buyEmail?.focus();

          return;
        }


        if (!phone) {

          showToast(
            "Phone Required",
            "আপনার phone number দিন।",
            "error"
          );

          buyPhone?.focus();

          return;
        }


        const order = {

          orderId:
            "WD-" +
            Date.now()
              .toString(36)
              .toUpperCase(),

          websiteId,

          websiteTitle:
            website
              ? website.title
              : "",

          name,

          email,

          phone,

          price:
            website
              ? website.price
              : null,

          status: "pending",

          createdAt:
            new Date().toISOString()

        };


        const orders =
          getJSON(
            "websiteDealsOrders"
          );


        orders.unshift(order);


        saveJSON(
          "websiteDealsOrders",
          orders
        );


        buyForm.reset();

        closeBuyModal();


        showToast(
          "Order Submitted",
          `Order ${order.orderId} সফলভাবে received হয়েছে।`,
          "success"
        );

      }
    );

  }


  /* =========================================================
     20. NEWSLETTER
     ========================================================= */

  if (newsletterForm) {

    newsletterForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const email =
          newsletterEmail?.value
            .trim()
            .toLowerCase() ||
          "";


        if (
          !email ||
          !validEmail(email)
        ) {

          showToast(
            "Invalid Email",
            "সঠিক email address দিন।",
            "error"
          );

          newsletterEmail?.focus();

          return;
        }


        const subscribers =
          getJSON(
            "websiteDealsSubscribers"
          );


        if (
          subscribers.some(
            item =>
              typeof item === "string"
                ? item === email
                : item.email === email
          )
        ) {

          showToast(
            "Already Subscribed",
            "এই email address ইতিমধ্যে subscribed।",
            "info"
          );

          return;
        }


        subscribers.unshift({
          email,
          subscribedAt:
            new Date().toISOString()
        });


        saveJSON(
          "websiteDealsSubscribers",
          subscribers
        );


        newsletterForm.reset();


        showToast(
          "Subscribed",
          "আপনাকে newsletter list-এ যুক্ত করা হয়েছে।",
          "success"
        );

      }
    );

  }


  /* =========================================================
     21. MOBILE MENU
     ========================================================= */

  function openMobileMenu() {

    if (!mobileNav) {
      return;
    }

    mobileNav.classList.add(
      "active",
      "open"
    );

    mobileMenuBtn?.classList.add(
      "active"
    );

    document.body.classList.add(
      "menu-open"
    );

  }


  function closeMobileMenu() {

    if (!mobileNav) {
      return;
    }

    mobileNav.classList.remove(
      "active",
      "open"
    );

    mobileMenuBtn?.classList.remove(
      "active"
    );

    document.body.classList.remove(
      "menu-open"
    );

  }


  if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener(
      "click",
      () => {

        const opened =
          mobileNav?.classList.contains(
            "active"
          );

        if (opened) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }

      }
    );

  }


  if (mobileNav) {

    mobileNav
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          closeMobileMenu
        );

      });

  }


  /* =========================================================
     22. HEADER
     ========================================================= */

  function updateHeader() {

    if (!siteHeader) {
      return;
    }

    siteHeader.classList.toggle(
      "scrolled",
      window.scrollY > 20
    );

  }


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );


  /* =========================================================
     23. BACK TO TOP
     ========================================================= */

  function updateBackToTop() {

    if (!backToTop) {
      return;
    }

    backToTop.classList.toggle(
      "show",
      window.scrollY > 500
    );

    backToTop.classList.toggle(
      "active",
      window.scrollY > 500
    );

  }


  window.addEventListener(
    "scroll",
    updateBackToTop,
    {
      passive: true
    }
  );


  if (backToTop) {

    backToTop.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =========================================================
     24. COUNTRY STATUS
     ========================================================= */

  if (countryStatus) {

    const existing =
      countryStatus.querySelector(
        "[data-country-text]"
      );


    if (existing) {

      existing.textContent =
        "🇧🇩 Bangladesh";

    } else {

      countryStatus.innerHTML = `
        <i class="fa-solid fa-location-dot"></i>
        Bangladesh
      `;

    }

  }


  /* =========================================================
     25. CURRENT YEAR
     ========================================================= */

  const currentYear =
    document.getElementById(
      "current-year"
    );


  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }


  document
    .querySelectorAll(
      "[data-current-year]"
    )
    .forEach(element => {

      element.textContent =
        new Date().getFullYear();

    });


  /* =========================================================
     26. RESET
     ========================================================= */

  document.addEventListener(
    "click",
    event => {

      const resetButton =
        event.target.closest(
          "#reset-filters, [data-reset-marketplace]"
        );

      if (!resetButton) {
        return;
      }

      event.preventDefault();


      activeCategory =
        "all";

      currentSearch =
        "";

      currentSort =
        "popular";


      syncSearchInputs("");


      if (heroCategory) {
        heroCategory.value =
          "all";
      }


      if (categoryFilter) {
        categoryFilter.value =
          "all";
      }


      if (sortWebsites) {
        sortWebsites.value =
          "popular";
      }


      renderMarketplace();


      showToast(
        "Filters Reset",
        "সব marketplace filters reset করা হয়েছে।",
        "info"
      );

    }
  );


  /* =========================================================
     27. IMAGE FALLBACK
     ========================================================= */

  function attachImageFallbacks() {

    document
      .querySelectorAll(
        "img"
      )
      .forEach(img => {

        if (
          img.dataset.fallbackReady
        ) {
          return;
        }


        img.dataset.fallbackReady =
          "true";


        img.addEventListener(
          "error",
          () => {

            if (
              img.dataset.failed
            ) {
              return;
            }


            img.dataset.failed =
              "true";


            img.src =
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="1200"
                     height="700"
                     viewBox="0 0 1200 700">

                  <rect
                    width="1200"
                    height="700"
                    fill="#f1f5f3"
                  />

                  <circle
                    cx="600"
                    cy="285"
                    r="70"
                    fill="#18a957"
                    opacity=".12"
                  />

                  <path
                    d="M565 285h70M600 250v70"
                    stroke="#18a957"
                    stroke-width="10"
                    stroke-linecap="round"
                  />

                  <text
                    x="600"
                    y="420"
                    text-anchor="middle"
                    font-family="Arial"
                    font-size="30"
                    font-weight="700"
                    fill="#17211b"
                  >
                    Website Deals
                  </text>

                  <text
                    x="600"
                    y="460"
                    text-anchor="middle"
                    font-family="Arial"
                    font-size="18"
                    fill="#68756d"
                  >
                    Premium Website Preview
                  </text>

                </svg>
              `);

          }
        );

      });

  }


  /* =========================================================
     28. SMOOTH ANCHOR
     ========================================================= */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const href =
            link.getAttribute(
              "href"
            );


          if (
            !href ||
            href === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              href
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          const headerHeight =
            siteHeader
              ? siteHeader.offsetHeight
              : 80;


          const targetTop =
            target.getBoundingClientRect()
              .top +
            window.scrollY -
            headerHeight -
            15;


          window.scrollTo({
            top:
              Math.max(
                targetTop,
                0
              ),
            behavior:
              "smooth"
          });


          closeMobileMenu();

        }
      );

    });


  /* =========================================================
     29. KEYBOARD
     ========================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Escape"
      ) {

        closeSearchPanel();

        closeBuyModal();

        closeMobileMenu();

      }


      if (
        (event.ctrlKey ||
          event.metaKey) &&
        event.key.toLowerCase() ===
          "k"
      ) {

        event.preventDefault();

        openSearchPanel();

      }

    }
  );


  /* =========================================================
     30. PAGE LOADER
     ========================================================= */

  function hideLoader() {

    if (!pageLoader) {
      return;
    }


    pageLoader.classList.add(
      "hidden"
    );


    setTimeout(() => {

      pageLoader.style.display =
        "none";

    }, 550);

  }


  window.addEventListener(
    "load",
    () => {

      setTimeout(
        hideLoader,
        350
      );

    }
  );


  setTimeout(
    hideLoader,
    2500
  );


  /* =========================================================
     31. INITIALIZE
     ========================================================= */

  renderMarketplace();

  renderPopular();

  renderNew();

  updateHeader();

  updateBackToTop();

  attachImageFallbacks();


  /* =========================================================
     32. CONSOLE
     ========================================================= */

  console.log(
    "%c WEBSITE DEALS ",
    "background:#18a957;color:#fff;font-size:16px;font-weight:800;padding:8px 14px;border-radius:8px;"
  );

  console.log(
    "%cUltra Premium Marketplace Loaded",
    "color:#18a957;font-weight:700;"
  );

});
