/* =========================================================
   WEBSITE DEALS — MAIN JAVASCRIPT
   Premium Ready-Made Website Marketplace
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================================
     SAMPLE WEBSITE DATA
     পরে এখানেই আপনার real website data বসাতে পারবেন
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
      ]
    },

    {
      id: "wd002",
      title: "Restaurant Royale",
      category: "restaurant",
      categoryLabel: "Restaurant",
      price: 1999,
      oldPrice: 2999,
      badge: "NEW",
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
      ]
    },

    {
      id: "wd003",
      title: "Creative Agency X",
      category: "agency",
      categoryLabel: "Agency",
      price: 2999,
      oldPrice: 4499,
      badge: "POPULAR",
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
      ]
    },

    {
      id: "wd004",
      title: "ShopEase Store",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      price: 3499,
      oldPrice: 4999,
      badge: "SALE",
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
      ]
    },

    {
      id: "wd005",
      title: "Personal Portfolio",
      category: "portfolio",
      categoryLabel: "Portfolio",
      price: 1499,
      oldPrice: 2499,
      badge: "NEW",
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
      ]
    },

    {
      id: "wd006",
      title: "Corporate Edge",
      category: "business",
      categoryLabel: "Business",
      price: 2799,
      oldPrice: 3999,
      badge: "",
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
      ]
    },

    {
      id: "wd007",
      title: "Foodie Restaurant",
      category: "restaurant",
      categoryLabel: "Restaurant",
      price: 2199,
      oldPrice: 3299,
      badge: "POPULAR",
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
      ]
    },

    {
      id: "wd008",
      title: "Creator Studio",
      category: "portfolio",
      categoryLabel: "Portfolio",
      price: 1799,
      oldPrice: 2799,
      badge: "NEW",
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
      ]
    }
  ];

  /* =========================================================
     DOM ELEMENTS
     ========================================================= */

  const pageLoader = document.getElementById("page-loader");

  const siteHeader = document.getElementById("site-header");

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  const searchToggle = document.getElementById("search-toggle");
  const searchPanel = document.getElementById("search-panel");
  const websiteSearch = document.getElementById("website-search");
  const clearSearch = document.getElementById("clear-search");

  const heroSearch = document.getElementById("hero-search");
  const heroCategory = document.getElementById("hero-category");
  const heroSearchBtn = document.getElementById("hero-search-btn");

  const websiteList = document.getElementById("website-list");
  const popularList = document.getElementById("popular-list");
  const newList = document.getElementById("new-list");

  const categoryFilter = document.getElementById("category-filter");
  const sortWebsites = document.getElementById("sort-websites");

  const emptyState = document.getElementById("empty-state");
  const resetFilters = document.getElementById("reset-filters");

  const countryStatus = document.getElementById("country-status");

  const buyModal = document.getElementById("buy-modal");
  const modalClose = document.getElementById("modal-close");
  const cancelBuyBtn = document.getElementById("cancel-buy-btn");

  const buyModalTitle = document.getElementById("buy-modal-title");
  const buyWebsiteTitle = document.getElementById("buy-website-title");
  const buyMessage = document.getElementById("buy-message");

  const buyForm = document.getElementById("buy-form");

  const buyWebsiteId = document.getElementById("buy_website_id");
  const buyName = document.getElementById("buy_name");
  const buyEmail = document.getElementById("buy_email");
  const buyPhone = document.getElementById("buy_phone");

  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toast-title");
  const toastMessage = document.getElementById("toast-message");
  const toastClose = document.getElementById("toast-close");

  const backToTop = document.getElementById("back-to-top");

  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterEmail = document.getElementById("newsletter-email");

  const currentYear = document.getElementById("current-year");


  /* =========================================================
     STATE
     ========================================================= */

  let activeCategory = "all";
  let currentSearch = "";
  let currentSort = "popular";
  let toastTimer = null;


  /* =========================================================
     HELPER FUNCTIONS
     ========================================================= */

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function formatPrice(price) {
    return `৳${Number(price).toLocaleString("en-BD")}`;
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


  function getCategoryName(category) {
    const names = {
      business: "Business",
      restaurant: "Restaurant",
      agency: "Agency",
      ecommerce: "E-commerce",
      portfolio: "Portfolio",
      monthly: "Monthly"
    };

    return names[category] || "Website";
  }


  /* =========================================================
     TOAST
     ========================================================= */

  function showToast(title, message, type = "success") {
    if (!toast) return;

    if (toastTitle) {
      toastTitle.textContent = title;
    }

    if (toastMessage) {
      toastMessage.textContent = message;
    }

    toast.classList.remove(
      "success",
      "error",
      "warning",
      "show"
    );

    toast.classList.add(type);

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }


  if (toastClose) {
    toastClose.addEventListener("click", () => {
      toast.classList.remove("show");
    });
  }


  /* =========================================================
     WEBSITE CARD
     ========================================================= */

  function createWebsiteCard(website) {
    const badgeHTML = website.badge
      ? `<span class="website-badge ${website.badge.toLowerCase()}">
          ${escapeHTML(website.badge)}
        </span>`
      : "";

    const stars = "★★★★★";

    const oldPriceHTML = website.oldPrice
      ? `<span class="old-price">${formatPrice(website.oldPrice)}</span>`
      : "";

    return `
      <article class="website-card" data-id="${escapeHTML(website.id)}">

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
              class="preview-btn"
              data-preview="${escapeHTML(website.id)}"
            >
              <i class="fa-solid fa-eye"></i>
              Preview
            </button>

          </div>

        </div>

        <div class="website-card-content">

          <div class="website-card-category">
            <i class="fa-solid ${getCategoryIcon(website.category)}"></i>
            ${escapeHTML(website.categoryLabel)}
          </div>

          <h3 class="website-card-title">
            ${escapeHTML(website.title)}
          </h3>

          <p class="website-card-description">
            ${escapeHTML(website.description)}
          </p>

          <div class="website-card-meta">

            <div class="rating">
              <span class="stars">${stars}</span>
              <strong>${website.rating}</strong>
              <span>(${website.reviews})</span>
            </div>

            <div class="sales">
              ${website.sales}+ sales
            </div>

          </div>

          <div class="website-card-price">

            <div>
              ${oldPriceHTML}
              <strong>${formatPrice(website.price)}</strong>
            </div>

            <span class="price-label">
              One-time
            </span>

          </div>

          <div class="website-card-actions">

            <button
              type="button"
              class="preview-btn secondary"
              data-preview="${escapeHTML(website.id)}"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              Preview
            </button>

            <button
              type="button"
              class="buy-btn"
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
     FILTER + SEARCH
     ========================================================= */

  function getFilteredWebsites() {
    let result = [...websites];

    if (activeCategory !== "all") {
      result = result.filter(
        website => website.category === activeCategory
      );
    }

    if (currentSearch.trim()) {
      const query = currentSearch
        .trim()
        .toLowerCase();

      result = result.filter(website => {
        const searchableText = [
          website.title,
          website.category,
          website.categoryLabel,
          website.description,
          ...website.features
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      });
    }

    result = sortWebsitesData(result);

    return result;
  }


  /* =========================================================
     SORTING
     ========================================================= */

  function sortWebsitesData(list) {
    const sorted = [...list];

    switch (currentSort) {
      case "new":
        sorted.sort((a, b) => {
          return Number(b.isNew) - Number(a.isNew);
        });
        break;

      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;

      case "popular":
      default:
        sorted.sort((a, b) => {
          return b.sales - a.sales;
        });
        break;
    }

    return sorted;
  }


  /* =========================================================
     MAIN MARKETPLACE RENDER
     ========================================================= */

  function renderMarketplace() {
    if (!websiteList) return;

    const filtered = getFilteredWebsites();

    websiteList.innerHTML = "";

    if (!filtered.length) {
      if (emptyState) {
        emptyState.classList.remove("hidden");
      }

      return;
    }

    if (emptyState) {
      emptyState.classList.add("hidden");
    }

    websiteList.innerHTML = filtered
      .map(createWebsiteCard)
      .join("");
  }


  /* =========================================================
     POPULAR WEBSITES
     ========================================================= */

  function renderPopularWebsites() {
    if (!popularList) return;

    const popular = websites
      .filter(website => website.isPopular)
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 4);

    popularList.innerHTML = popular
      .map(createWebsiteCard)
      .join("");
  }


  /* =========================================================
     NEW WEBSITES
     ========================================================= */

  function renderNewWebsites() {
    if (!newList) return;

    const newWebsites = websites
      .filter(website => website.isNew)
      .slice(0, 4);

    newList.innerHTML = newWebsites
      .map(createWebsiteCard)
      .join("");
  }


  /* =========================================================
     CATEGORY FILTER
     ========================================================= */

  function updateCategoryButtons(category) {
    if (!categoryFilter) return;

    const buttons =
      categoryFilter.querySelectorAll(
        "[data-category]"
      );

    buttons.forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.category === category
      );
    });
  }


  function setCategory(category) {
    activeCategory = category || "all";

    updateCategoryButtons(activeCategory);

    renderMarketplace();

    const marketplace =
      document.getElementById("websites");

    if (marketplace) {
      marketplace.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }


  if (categoryFilter) {
    categoryFilter.addEventListener("click", event => {
      const button =
        event.target.closest("[data-category]");

      if (!button) return;

      setCategory(button.dataset.category);
    });
  }


  /* =========================================================
     CATEGORY DISCOVERY CARDS
     ========================================================= */

  document
    .querySelectorAll("[data-category-link]")
    .forEach(link => {

      link.addEventListener("click", event => {
        event.preventDefault();

        const category =
          link.dataset.categoryLink;

        setCategory(category);

      });

    });


  /* =========================================================
     SORT
     ========================================================= */

  if (sortWebsites) {
    sortWebsites.addEventListener("change", () => {

      currentSort = sortWebsites.value;

      renderMarketplace();

    });
  }


  /* =========================================================
     SEARCH FUNCTION
     ========================================================= */

  function performSearch(query, category = "all") {

    currentSearch =
      String(query || "").trim();

    activeCategory =
      category || "all";

    updateCategoryButtons(activeCategory);

    renderMarketplace();

    const marketplace =
      document.getElementById("websites");

    if (marketplace) {
      marketplace.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  }


  /* =========================================================
     HERO SEARCH
     ========================================================= */

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener("click", () => {

      const query =
        heroSearch ? heroSearch.value : "";

      const category =
        heroCategory ? heroCategory.value : "all";

      performSearch(query, category);

    });
  }


  if (heroSearch) {
    heroSearch.addEventListener("keydown", event => {

      if (event.key === "Enter") {

        event.preventDefault();

        const category =
          heroCategory
            ? heroCategory.value
            : "all";

        performSearch(
          heroSearch.value,
          category
        );

      }

    });
  }


  /* =========================================================
     SEARCH OVERLAY
     ========================================================= */

  function openSearchPanel() {

    if (!searchPanel) return;

    searchPanel.classList.add("active");

    setTimeout(() => {

      if (websiteSearch) {
        websiteSearch.focus();
      }

    }, 150);

  }


  function closeSearchPanel() {

    if (!searchPanel) return;

    searchPanel.classList.remove("active");

  }


  if (searchToggle) {
    searchToggle.addEventListener(
      "click",
      openSearchPanel
    );
  }


  if (searchPanel) {

    searchPanel.addEventListener("click", event => {

      if (event.target === searchPanel) {
        closeSearchPanel();
      }

    });

  }


  if (websiteSearch) {

    websiteSearch.addEventListener(
      "input",
      () => {

        currentSearch =
          websiteSearch.value;

        renderMarketplace();

      }
    );

  }


  if (clearSearch) {

    clearSearch.addEventListener(
      "click",
      () => {

        if (websiteSearch) {
          websiteSearch.value = "";
        }

        currentSearch = "";

        renderMarketplace();

        if (websiteSearch) {
          websiteSearch.focus();
        }

      }
    );

  }


  /* =========================================================
     KEYBOARD SEARCH CLOSE
     ========================================================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      closeSearchPanel();

      closeBuyModal();

      closeMobileMenu();

    }

  });


  /* =========================================================
     MOBILE MENU
     ========================================================= */

  function openMobileMenu() {

    if (!mobileNav) return;

    mobileNav.classList.add("active");

    if (mobileMenuBtn) {
      mobileMenuBtn.classList.add("active");
    }

    document.body.classList.add(
      "menu-open"
    );

  }


  function closeMobileMenu() {

    if (!mobileNav) return;

    mobileNav.classList.remove("active");

    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove("active");
    }

    document.body.classList.remove(
      "menu-open"
    );

  }


  if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener(
      "click",
      () => {

        const isOpen =
          mobileNav &&
          mobileNav.classList.contains(
            "active"
          );

        if (isOpen) {
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
     HEADER SCROLL EFFECT
     ========================================================= */

  function handleHeaderScroll() {

    if (!siteHeader) return;

    if (window.scrollY > 20) {
      siteHeader.classList.add(
        "scrolled"
      );
    } else {
      siteHeader.classList.remove(
        "scrolled"
      );
    }

  }


  window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
  );

  handleHeaderScroll();


  /* =========================================================
     PREVIEW
     ========================================================= */

  function previewWebsite(id) {

    const website =
      websites.find(
        item => item.id === id
      );

    if (!website) return;

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
      "Preview Coming Soon",
      `${website.title} এর live preview খুব শীঘ্রই available হবে।`,
      "warning"
    );

  }


  /* =========================================================
     BUY MODAL
     ========================================================= */

  function openBuyModal(id) {

    const website =
      websites.find(
        item => item.id === id
      );

    if (!website || !buyModal) return;

    if (buyWebsiteId) {
      buyWebsiteId.value =
        website.id;
    }

    if (buyWebsiteTitle) {
      buyWebsiteTitle.textContent =
        website.title;
    }

    if (buyModalTitle) {
      buyModalTitle.textContent =
        `Order ${website.title}`;
    }

    if (buyMessage) {
      buyMessage.innerHTML =
        `আপনি <strong>${escapeHTML(
          website.title
        )}</strong> নির্বাচন করেছেন।`;
    }

    buyModal.classList.remove(
      "hidden"
    );

    document.body.classList.add(
      "modal-open"
    );

    setTimeout(() => {

      if (buyName) {
        buyName.focus();
      }

    }, 150);

  }


  function closeBuyModal() {

    if (!buyModal) return;

    buyModal.classList.add(
      "hidden"
    );

    document.body.classList.remove(
      "modal-open"
    );

  }


  if (modalClose) {
    modalClose.addEventListener(
      "click",
      closeBuyModal
    );
  }


  if (cancelBuyBtn) {
    cancelBuyBtn.addEventListener(
      "click",
      closeBuyModal
    );
  }


  if (buyModal) {

    buyModal.addEventListener(
      "click",
      event => {

        if (
          event.target === buyModal
        ) {
          closeBuyModal();
        }

      }
    );

  }


  /* =========================================================
     DYNAMIC BUTTON HANDLER
     ========================================================= */

  document.addEventListener(
    "click",
    event => {

      const previewButton =
        event.target.closest(
          "[data-preview]"
        );

      if (previewButton) {

        event.preventDefault();

        previewWebsite(
          previewButton.dataset.preview
        );

        return;

      }


      const buyButton =
        event.target.closest(
          "[data-buy]"
        );

      if (buyButton) {

        event.preventDefault();

        openBuyModal(
          buyButton.dataset.buy
        );

      }

    }
  );


  /* =========================================================
     BUY FORM
     ========================================================= */

  if (buyForm) {

    buyForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const name =
          buyName
            ? buyName.value.trim()
            : "";

        const email =
          buyEmail
            ? buyEmail.value.trim()
            : "";

        const phone =
          buyPhone
            ? buyPhone.value.trim()
            : "";

        const websiteId =
          buyWebsiteId
            ? buyWebsiteId.value
            : "";

        const website =
          websites.find(
            item => item.id === websiteId
          );


        if (!name) {

          showToast(
            "Name Required",
            "আপনার নাম লিখুন।",
            "error"
          );

          buyName?.focus();

          return;

        }


        if (!email) {

          showToast(
            "Email Required",
            "আপনার email address লিখুন।",
            "error"
          );

          buyEmail?.focus();

          return;

        }


        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

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


        /*
         * এখানে বর্তমানে demo order handling রাখা হয়েছে।
         *
         * পরে চাইলে এখানে:
         * - Firebase
         * - Google Sheets
         * - WhatsApp
         * - Email
         * - Payment Gateway
         * connect করা যাবে।
         */


        const order = {
          orderId:
            "WD-" +
            Date.now(),

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

          createdAt:
            new Date().toISOString()
        };


        try {

          const existingOrders =
            JSON.parse(
              localStorage.getItem(
                "websiteDealsOrders"
              ) || "[]"
            );

          existingOrders.push(order);

          localStorage.setItem(
            "websiteDealsOrders",
            JSON.stringify(
              existingOrders
            )
          );

        } catch (error) {

          console.warn(
            "Order could not be saved:",
            error
          );

        }


        closeBuyModal();

        buyForm.reset();


        showToast(
          "Order Received",
          "আপনার order request সফলভাবে নেওয়া হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।",
          "success"
        );

      }
    );

  }


  /* =========================================================
     NEWSLETTER
     ========================================================= */

  if (newsletterForm) {

    newsletterForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const email =
          newsletterEmail
            ? newsletterEmail.value.trim()
            : "";

        if (!email) {

          showToast(
            "Email Required",
            "Newsletter-এর জন্য email দিন।",
            "error"
          );

          return;

        }


        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            email
          )
        ) {

          showToast(
            "Invalid Email",
            "সঠিক email address দিন।",
            "error"
          );

          return;

        }


        try {

          const subscribers =
            JSON.parse(
              localStorage.getItem(
                "websiteDealsSubscribers"
              ) || "[]"
            );

          if (
            !subscribers.includes(email)
          ) {

            subscribers.push(email);

          }

          localStorage.setItem(
            "websiteDealsSubscribers",
            JSON.stringify(
              subscribers
            )
          );

        } catch (error) {

          console.warn(
            "Newsletter save failed:",
            error
          );

        }


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
     RESET FILTERS
     ========================================================= */

  if (resetFilters) {

    resetFilters.addEventListener(
      "click",
      () => {

        activeCategory = "all";

        currentSearch = "";

        currentSort = "popular";


        if (sortWebsites) {
          sortWebsites.value =
            "popular";
        }


        if (websiteSearch) {
          websiteSearch.value = "";
        }


        if (heroSearch) {
          heroSearch.value = "";
        }


        if (heroCategory) {
          heroCategory.value = "all";
        }


        updateCategoryButtons("all");

        renderMarketplace();

      }
    );

  }


  /* =========================================================
     BACK TO TOP
     ========================================================= */

  function updateBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 600) {

      backToTop.classList.add(
        "show"
      );

    } else {

      backToTop.classList.remove(
        "show"
      );

    }

  }


  window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
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
     COUNTRY STATUS
     ========================================================= */

  if (countryStatus) {

    countryStatus.innerHTML = `
      <i class="fa-solid fa-location-dot"></i>
      Bangladesh • BDT (৳)
    `;

  }


  /* =========================================================
     CURRENT YEAR
     ========================================================= */

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }


  /* =========================================================
     PAGE LOADER
     ========================================================= */

  function hidePageLoader() {

    if (!pageLoader) return;

    pageLoader.classList.add(
      "hidden"
    );

    setTimeout(() => {

      pageLoader.style.display =
        "none";

    }, 500);

  }


  window.addEventListener(
    "load",
    () => {

      setTimeout(
        hidePageLoader,
        350
      );

    }
  );


  /*
   * Safety fallback:
   * যদি window load event আগে চলে যায়,
   * তাহলে কিছুক্ষণ পর loader hide হবে।
   */

  setTimeout(
    hidePageLoader,
    2500
  );


  /* =========================================================
     IMAGE ERROR FALLBACK
     ========================================================= */

  document.addEventListener(
    "error",
    event => {

      const target =
        event.target;

      if (
        target &&
        target.tagName === "IMG"
      ) {

        target.style.opacity = "0";

        const parent =
          target.parentElement;

        if (parent) {
          parent.classList.add(
            "image-fallback"
          );
        }

      }

    },
    true
  );


  /* =========================================================
     INITIAL RENDER
     ========================================================= */

  updateCategoryButtons("all");

  renderMarketplace();

  renderPopularWebsites();

  renderNewWebsites();

  handleHeaderScroll();

  updateBackToTop();


  /* =========================================================
     CONSOLE BRAND MESSAGE
     ========================================================= */

  console.log(
    "%c Website Deals ",
    "background:#18a957;color:#fff;font-size:18px;font-weight:700;padding:8px 14px;border-radius:8px;"
  );

  console.log(
    "Premium Ready-Made Website Marketplace"
  );

});
