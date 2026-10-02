/* =========================================================
   WEBSITE DEALS
   Public Marketplace JavaScript
   File: js/script.js
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
   ========================================================= */

const STORAGE_KEYS = {
  websites: "websiteDealsAdminWebsites",
  orders: "websiteDealsOrders",
  subscribers: "websiteDealsSubscribers",
  settings: "websiteDealsSettings"
};

const DEFAULT_WEBSITES = [
  {
    id: "wd001",
    title: "Corporate Pro",
    category: "business",
    categoryLabel: "Business",
    price: 999,
    oldPrice: 1499,
    badge: "POPULAR",
    rating: 4.9,
    reviews: 48,
    sales: 126,
    isPopular: true,
    isNew: false,
    isFeatured: true,
    status: "Published",
    image: "",
    previewUrl: "#",
    description:
      "A premium corporate website for modern businesses, companies and professional brands.",
    features: [
      "Responsive design",
      "Business homepage",
      "About & services",
      "Contact section",
      "SEO-ready structure"
    ]
  },
  {
    id: "wd002",
    title: "Tasty Bites",
    category: "restaurant",
    categoryLabel: "Restaurant",
    price: 1499,
    oldPrice: 2199,
    badge: "SALE",
    rating: 4.8,
    reviews: 36,
    sales: 94,
    isPopular: false,
    isNew: false,
    isFeatured: true,
    status: "Published",
    image: "",
    previewUrl: "#",
    description:
      "A beautiful restaurant website designed for menus, reservations and food businesses.",
    features: [
      "Restaurant homepage",
      "Digital menu",
      "Food categories",
      "Reservation section",
      "Mobile responsive"
    ]
  },
  {
    id: "wd003",
    title: "Creative Studio",
    category: "agency",
    categoryLabel: "Agency",
    price: 1999,
    oldPrice: 2999,
    badge: "PREMIUM",
    rating: 4.7,
    reviews: 29,
    sales: 67,
    isPopular: false,
    isNew: false,
    isFeatured: true,
    status: "Published",
    image: "",
    previewUrl: "#",
    description:
      "A bold agency website for creative studios, digital agencies and service companies.",
    features: [
      "Creative hero",
      "Service showcase",
      "Portfolio section",
      "Team section",
      "Contact CTA"
    ]
  },
  {
    id: "wd004",
    title: "ShopEasy Store",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    price: 2999,
    oldPrice: 4499,
    badge: "POPULAR",
    rating: 4.9,
    reviews: 61,
    sales: 182,
    isPopular: true,
    isNew: false,
    isFeatured: true,
    status: "Published",
    image: "",
    previewUrl: "#",
    description:
      "A modern e-commerce storefront concept for online shops and product-based businesses.",
    features: [
      "Product grid",
      "Shopping experience",
      "Category navigation",
      "Product details",
      "Responsive layout"
    ]
  },
  {
    id: "wd005",
    title: "Personal Folio",
    category: "portfolio",
    categoryLabel: "Portfolio",
    price: 999,
    oldPrice: 1499,
    badge: "STARTER",
    rating: 4.6,
    reviews: 22,
    sales: 71,
    isPopular: false,
    isNew: false,
    isFeatured: false,
    status: "Published",
    image: "",
    previewUrl: "#",
    description:
      "A clean personal portfolio website for designers, developers, creators and professionals.",
    features: [
      "Personal hero",
      "About section",
      "Portfolio showcase",
      "Skills section",
      "Contact form"
    ]
  },
  {
    id: "wd006",
    title: "Starter Monthly",
    category: "monthly",
    categoryLabel: "Monthly",
    price: 999,
    oldPrice: 1299,
    badge: "MONTHLY",
    rating: 4.8,
    reviews: 34,
    sales: 88,
    isPopular: true,
    isNew: true,
    isFeatured: true,
    status: "Published",
    image: "",
    previewUrl: "#",
    description:
      "A flexible monthly website package for businesses that want a ready online presence.",
    features: [
      "Ready-made website",
      "Monthly package",
      "Responsive design",
      "Basic support",
      "Easy setup"
    ],
    monthly: true
  },
  {
    id: "wd007",
    title: "Biz Launch",
    category: "business",
    categoryLabel: "Business",
    price: 1299,
    oldPrice: 1799,
    badge: "NEW",
    rating: 4.5,
    reviews: 17,
    sales: 42,
    isPopular: false,
    isNew: true,
    isFeatured: false,
    status: "Published",
    image: "",
    previewUrl: "#",
    description:
      "A modern launch website for startups, small businesses and new brands.",
    features: [
      "Startup homepage",
      "Business sections",
      "CTA blocks",
      "Responsive design",
      "Contact section"
    ]
  },
  {
    id: "wd008",
    title: "Cafe Corner",
    category: "restaurant",
    categoryLabel: "Restaurant",
    price: 1199,
    oldPrice: 1699,
    badge: "NEW",
    rating: 4.7,
    reviews: 19,
    sales: 51,
    isPopular: false,
    isNew: true,
    isFeatured: false,
    status: "Published",
    image: "",
    previewUrl: "#",
    description:
      "A warm modern website concept for cafes, bakeries, coffee shops and food brands.",
    features: [
      "Cafe homepage",
      "Menu showcase",
      "Gallery",
      "Location section",
      "Contact CTA"
    ]
  }
];


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* =========================================================
   STORAGE
   ========================================================= */

function readStorage(key, fallback = []) {
  try {
    const raw = localStorage.getItem(key);

    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw);

    return parsed ?? fallback;
  } catch (error) {
    console.warn("Storage read error:", key, error);
    return fallback;
  }
}


function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("Storage write error:", key, error);
    return false;
  }
}


/* =========================================================
   WEBSITE DATA
   ========================================================= */

function normalizeWebsite(item) {
  if (!item || typeof item !== "object") {
    return null;
  }

  const category =
    String(item.category || "business")
      .toLowerCase()
      .trim();

  const categoryLabel =
    item.categoryLabel ||
    getCategoryName(category);

  return {
    id: String(item.id || createWebsiteId()),
    title: String(item.title || "Untitled Website"),
    category,
    categoryLabel,
    price: Number(item.price) || 0,
    oldPrice:
      item.oldPrice !== undefined && item.oldPrice !== ""
        ? Number(item.oldPrice) || 0
        : 0,
    badge: String(item.badge || ""),
    rating: Number(item.rating) || 0,
    reviews: Number(item.reviews) || 0,
    sales: Number(item.sales) || 0,
    isPopular: Boolean(item.isPopular),
    isNew: Boolean(item.isNew),
    isFeatured: Boolean(item.isFeatured),
    status: String(item.status || "Published"),
    image: String(item.image || ""),
    previewUrl: String(item.previewUrl || "#"),
    description:
      String(
        item.description ||
        "Premium ready-made website from Website Deals."
      ),
    features: Array.isArray(item.features)
      ? item.features
      : [],
    monthly: Boolean(
      item.monthly ||
      category === "monthly"
    )
  };
}


function getAllWebsites() {
  const stored = readStorage(
    STORAGE_KEYS.websites,
    []
  );

  let source = [];

  if (Array.isArray(stored) && stored.length) {
    source = stored;
  } else {
    source = DEFAULT_WEBSITES;
  }

  return source
    .map(normalizeWebsite)
    .filter(Boolean)
    .filter(
      website =>
        website.status.toLowerCase() !== "draft" &&
        website.status.toLowerCase() !== "deleted"
    );
}


function saveWebsites(websites) {
  writeStorage(
    STORAGE_KEYS.websites,
    websites
  );
}


function createWebsiteId() {
  const number =
    getAllWebsites().length + 1;

  return `wd${String(number).padStart(3, "0")}`;
}


/* =========================================================
   CATEGORY HELPERS
   ========================================================= */

const CATEGORY_META = {
  business: {
    name: "Business",
    icon: "fa-building"
  },

  restaurant: {
    name: "Restaurant",
    icon: "fa-utensils"
  },

  agency: {
    name: "Agency",
    icon: "fa-bolt"
  },

  ecommerce: {
    name: "E-commerce",
    icon: "fa-bag-shopping"
  },

  portfolio: {
    name: "Portfolio",
    icon: "fa-briefcase"
  },

  monthly: {
    name: "Monthly",
    icon: "fa-calendar-days"
  }
};


function getCategoryName(category) {
  return (
    CATEGORY_META[category]?.name ||
    category ||
    "Website"
  );
}


function getCategoryIcon(category) {
  return (
    CATEGORY_META[category]?.icon ||
    "fa-globe"
  );
}


/* =========================================================
   PRICE
   ========================================================= */

function formatPrice(price) {
  const value = Number(price) || 0;

  return `৳${value.toLocaleString("en-BD")}`;
}


/* =========================================================
   HTML SECURITY
   ========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   IMAGE
   ========================================================= */

function getWebsiteImage(website) {
  if (website.image) {
    return `
      <img
        src="${escapeHTML(website.image)}"
        alt="${escapeHTML(website.title)}"
        loading="lazy"
        onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback')"
      >
    `;
  }

  return `
    <div class="website-image-placeholder">
      <i class="fa-solid ${getCategoryIcon(website.category)}"></i>
    </div>
  `;
}


/* =========================================================
   BADGE
   ========================================================= */

function getBadgeClass(badge) {
  const value = String(badge || "")
    .toLowerCase();

  if (value.includes("popular")) return "popular";
  if (value.includes("new")) return "new";
  if (value.includes("sale")) return "sale";
  if (value.includes("monthly")) return "monthly";

  return "";
}


/* =========================================================
   WEBSITE CARD
   ========================================================= */

function createWebsiteCard(website) {
  const badge =
    website.badge
      ? `
        <span class="website-badge ${getBadgeClass(website.badge)}">
          ${escapeHTML(website.badge)}
        </span>
      `
      : "";

  const oldPrice =
    website.oldPrice > website.price
      ? `
        <span class="website-old-price">
          ${formatPrice(website.oldPrice)}
        </span>
      `
      : "";

  const monthlyText =
    website.monthly
      ? `<span class="price-period">/month</span>`
      : "";

  return `
    <article
      class="website-card"
      data-id="${escapeHTML(website.id)}"
      data-category="${escapeHTML(website.category)}"
      data-title="${escapeHTML(website.title)}"
    >

      <div class="website-card-image">

        ${getWebsiteImage(website)}

        <div class="website-card-badges">
          ${badge}
        </div>

        <button
          class="website-preview-overlay"
          type="button"
          data-preview="${escapeHTML(website.id)}"
          aria-label="Preview ${escapeHTML(website.title)}"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          Preview
        </button>

      </div>

      <div class="website-card-body">

        <div class="website-card-meta">

          <span>
            <i class="fa-solid ${getCategoryIcon(website.category)}"></i>
            ${escapeHTML(website.categoryLabel)}
          </span>

          <span>
            <i class="fa-solid fa-star"></i>
            ${website.rating.toFixed(1)}
          </span>

        </div>

        <h3>
          ${escapeHTML(website.title)}
        </h3>

        <p>
          ${escapeHTML(website.description)}
        </p>

        <div class="website-card-rating">
          <span class="stars">
            ${renderStars(website.rating)}
          </span>

          <span>
            ${website.reviews} reviews
          </span>
        </div>

        <div class="website-card-footer">

          <div class="website-price">

            ${oldPrice}

            <strong>
              ${formatPrice(website.price)}
            </strong>

            ${monthlyText}

          </div>

          <div class="website-card-actions">

            <button
              class="website-card-btn website-card-btn-light"
              type="button"
              data-preview="${escapeHTML(website.id)}"
            >
              Preview
            </button>

            <button
              class="website-card-btn website-card-btn-primary"
              type="button"
              data-buy="${escapeHTML(website.id)}"
            >
              Buy
            </button>

          </div>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   STARS
   ========================================================= */

function renderStars(rating) {
  const rounded =
    Math.round(Number(rating) || 0);

  let html = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      html += `<i class="fa-solid fa-star"></i>`;
    } else {
      html += `<i class="fa-regular fa-star"></i>`;
    }
  }

  return html;
}


/* =========================================================
   CURRENT FILTER STATE
   ========================================================= */

const state = {
  search: "",
  category: "all",
  sort: "featured"
};


/* =========================================================
   FILTERING
   ========================================================= */

function filterWebsites(websites) {
  const query =
    state.search
      .trim()
      .toLowerCase();

  return websites.filter(website => {

    const matchesSearch =
      !query ||
      website.title.toLowerCase().includes(query) ||
      website.categoryLabel.toLowerCase().includes(query) ||
      website.description.toLowerCase().includes(query);

    const matchesCategory =
      state.category === "all" ||
      website.category === state.category;

    return (
      matchesSearch &&
      matchesCategory
    );
  });
}


/* =========================================================
   SORTING
   ========================================================= */

function sortWebsites(websites) {
  const result = [...websites];

  switch (state.sort) {

    case "price-low":
      return result.sort(
        (a, b) => a.price - b.price
      );

    case "price-high":
      return result.sort(
        (a, b) => b.price - a.price
      );

    case "rating":
      return result.sort(
        (a, b) => b.rating - a.rating
      );

    case "popular":
      return result.sort(
        (a, b) => b.sales - a.sales
      );

    case "new":
      return result.sort(
        (a, b) =>
          Number(b.isNew) -
          Number(a.isNew)
      );

    case "featured":
    default:
      return result.sort(
        (a, b) =>
          Number(b.isFeatured) -
            Number(a.isFeatured) ||
          Number(b.isPopular) -
            Number(a.isPopular) ||
          b.sales - a.sales
      );
  }
}


/* =========================================================
   MAIN MARKETPLACE RENDER
   ========================================================= */

function renderMarketplace() {
  const container =
    $("#website-list");

  if (!container) {
    return;
  }

  let websites =
    getAllWebsites();

  websites =
    filterWebsites(websites);

  websites =
    sortWebsites(websites);

  if (!websites.length) {
    container.innerHTML = "";

    showElement("#empty-state");

    updateMarketplaceCount(0);

    return;
  }

  hideElement("#empty-state");

  container.innerHTML =
    websites
      .map(createWebsiteCard)
      .join("");

  updateMarketplaceCount(
    websites.length
  );
}


/* =========================================================
   POPULAR
   ========================================================= */

function renderPopular() {
  const container =
    $("#popular-list");

  if (!container) {
    return;
  }

  const websites =
    getAllWebsites()
      .filter(
        website =>
          website.isPopular ||
          website.isFeatured
      )
      .sort(
        (a, b) =>
          b.sales - a.sales
      )
      .slice(0, 3);

  container.innerHTML =
    websites.length
      ? websites
          .map(createCompactCard)
          .join("")
      : "";
}


/* =========================================================
   NEW
   ========================================================= */

function renderNew() {
  const container =
    $("#new-list");

  if (!container) {
    return;
  }

  const websites =
    getAllWebsites()
      .filter(
        website =>
          website.isNew
      )
      .slice(0, 3);

  container.innerHTML =
    websites.length
      ? websites
          .map(createCompactCard)
          .join("")
      : "";
}


/* =========================================================
   COMPACT CARD
   ========================================================= */

function createCompactCard(website) {
  return `
    <article
      class="compact-card"
      data-id="${escapeHTML(website.id)}"
    >

      <div class="compact-card-image">
        ${getWebsiteImage(website)}
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
            data-preview="${escapeHTML(website.id)}"
            aria-label="Preview ${escapeHTML(website.title)}"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   MARKETPLACE COUNT
   ========================================================= */

function updateMarketplaceCount(count) {
  const elements =
    $$("[data-website-count]");

  elements.forEach(
    element => {
      element.textContent = count;
    }
  );
}


/* =========================================================
   EMPTY STATE
   ========================================================= */

function showElement(selector) {
  const element = $(selector);

  if (element) {
    element.hidden = false;
    element.style.display = "";
  }
}


function hideElement(selector) {
  const element = $(selector);

  if (element) {
    element.hidden = true;
  }
}


/* =========================================================
   SEARCH
   ========================================================= */

function syncSearchInputs(value) {
  const inputs = [
    "#website-search",
    "#hero-search"
  ];

  inputs.forEach(selector => {
    const input = $(selector);

    if (
      input &&
      input.value !== value
    ) {
      input.value = value;
    }
  });
}


function applySearch(value) {
  state.search =
    String(value || "");

  syncSearchInputs(
    state.search
  );

  renderMarketplace();
}


/* =========================================================
   CATEGORY
   ========================================================= */

function applyCategory(category) {
  state.category =
    String(category || "all")
      .toLowerCase();

  const filter =
    $("#category-filter");

  if (filter) {
    filter.value =
      state.category;
  }

  renderMarketplace();

  const marketplace =
    $("#websites");

  if (marketplace) {
    marketplace.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================================================
   SORT
   ========================================================= */

function applySort(value) {
  state.sort =
    value || "featured";

  renderMarketplace();
}


/* =========================================================
   SEARCH OVERLAY
   ========================================================= */

function openSearch() {
  const panel =
    $("#search-panel");

  if (!panel) {
    return;
  }

  panel.classList.add("is-open");
  panel.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "search-open"
  );

  setTimeout(() => {
    const input =
      $("#website-search");

    if (input) {
      input.focus();
    }
  }, 50);
}


function closeSearch() {
  const panel =
    $("#search-panel");

  if (!panel) {
    return;
  }

  panel.classList.remove(
    "is-open"
  );

  panel.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "search-open"
  );
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function openMobileMenu() {
  const menu =
    $("#mobile-nav");

  const button =
    $("#mobile-menu-btn");

  if (!menu) {
    return;
  }

  menu.classList.add("is-open");

  if (button) {
    button.setAttribute(
      "aria-expanded",
      "true"
    );
  }

  document.body.classList.add(
    "mobile-menu-open"
  );
}


function closeMobileMenu() {
  const menu =
    $("#mobile-nav");

  const button =
    $("#mobile-menu-btn");

  if (!menu) {
    return;
  }

  menu.classList.remove(
    "is-open"
  );

  if (button) {
    button.setAttribute(
      "aria-expanded",
      "false"
    );
  }

  document.body.classList.remove(
    "mobile-menu-open"
  );
}


function toggleMobileMenu() {
  const menu =
    $("#mobile-nav");

  if (!menu) {
    return;
  }

  if (
    menu.classList.contains(
      "is-open"
    )
  ) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}


/* =========================================================
   PREVIEW
   ========================================================= */

function previewWebsite(id) {
  const website =
    getAllWebsites()
      .find(
        item =>
          item.id === id
      );

  if (!website) {
    showToast(
      "Website Not Found",
      "This website is no longer available.",
      "error"
    );

    return;
  }

  const url =
    website.previewUrl;

  if (
    url &&
    url !== "#" &&
    url !== "about:blank"
  ) {
    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

    return;
  }

  showToast(
    "Preview Coming Soon",
    `${website.title} does not have a live preview URL yet.`,
    "info"
  );
}


/* =========================================================
   BUY MODAL
   ========================================================= */

function openBuyModal(id) {
  const website =
    getAllWebsites()
      .find(
        item =>
          item.id === id
      );

  if (!website) {
    return;
  }

  const modal =
    $("#buy-modal");

  if (!modal) {
    return;
  }

  const title =
    $("#buy-modal-title");

  const websiteTitle =
    $("#buy-website-title");

  const message =
    $("#buy-message");

  const hiddenId =
    $("#buy_website_id");

  if (title) {
    title.textContent =
      `Buy ${website.title}`;
  }

  if (websiteTitle) {
    websiteTitle.textContent =
      website.title;
  }

  if (message) {
    message.textContent =
      `${formatPrice(website.price)} ${
        website.monthly
          ? "/month"
          : ""
      }`;
  }

  if (hiddenId) {
    hiddenId.value =
      website.id;
  }

  modal.classList.add(
    "is-open"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

  setTimeout(() => {
    const name =
      $("#buy_name");

    if (name) {
      name.focus();
    }
  }, 100);
}


function closeBuyModal() {
  const modal =
    $("#buy-modal");

  if (!modal) {
    return;
  }

  modal.classList.remove(
    "is-open"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

  const form =
    $("#buy-form");

  if (form) {
    form.reset();
  }
}


/* =========================================================
   ORDER CREATION
   ========================================================= */

function createOrder(data) {
  const orders =
    readStorage(
      STORAGE_KEYS.orders,
      []
    );

  const website =
    getAllWebsites()
      .find(
        item =>
          item.id ===
          data.websiteId
      );

  const orderNumber =
    orders.length + 1;

  const order = {
    id:
      `WD-${new Date().getFullYear()}-${String(
        orderNumber
      ).padStart(5, "0")}`,

    customerName:
      data.name,

    name:
      data.name,

    email:
      data.email,

    phone:
      data.phone,

    websiteId:
      data.websiteId,

    websiteTitle:
      website?.title ||
      "Website",

    category:
      website?.categoryLabel ||
      "",

    amount:
      website?.price ||
      0,

    price:
      website?.price ||
      0,

    status:
      "Pending",

    paymentStatus:
      "Pending",

    createdAt:
      new Date().toISOString(),

    date:
      new Date().toISOString()
  };

  orders.unshift(order);

  writeStorage(
    STORAGE_KEYS.orders,
    orders
  );

  return order;
}


/* =========================================================
   NEWSLETTER
   ========================================================= */

function subscribeNewsletter(email) {
  const cleanEmail =
    String(email || "")
      .trim()
      .toLowerCase();

  if (!cleanEmail) {
    return {
      success: false,
      message: "Please enter your email."
    };
  }

  const subscribers =
    readStorage(
      STORAGE_KEYS.subscribers,
      []
    );

  const exists =
    subscribers.some(
      item =>
        String(
          item.email || ""
        ).toLowerCase() ===
        cleanEmail
    );

  if (exists) {
    return {
      success: false,
      message:
        "This email is already subscribed."
    };
  }

  subscribers.unshift({
    id:
      `SUB-${String(
        subscribers.length + 1
      ).padStart(4, "0")}`,

    email:
      cleanEmail,

    status:
      "Active",

    source:
      "Website",

    joinedAt:
      new Date().toISOString(),

    createdAt:
      new Date().toISOString()
  });

  writeStorage(
    STORAGE_KEYS.subscribers,
    subscribers
  );

  return {
    success: true,
    message:
      "You are now subscribed to Website Deals."
  };
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(
  title,
  message,
  type = "success"
) {
  const toast =
    $("#toast");

  if (!toast) {
    return;
  }

  const titleElement =
    $("#toast-title");

  const messageElement =
    $("#toast-message");

  if (titleElement) {
    titleElement.textContent =
      title || "Done";
  }

  if (messageElement) {
    messageElement.textContent =
      message || "";
  }

  toast.classList.remove(
    "success",
    "error",
    "info",
    "warning"
  );

  toast.classList.add(
    type
  );

  toast.classList.add(
    "is-visible"
  );

  clearTimeout(
    window.websiteDealsToastTimer
  );

  window.websiteDealsToastTimer =
    setTimeout(() => {
      hideToast();
    }, 4500);
}


function hideToast() {
  const toast =
    $("#toast");

  if (!toast) {
    return;
  }

  toast.classList.remove(
    "is-visible"
  );
}


/* =========================================================
   PAGE LOADER
   ========================================================= */

function hidePageLoader() {
  const loader =
    $("#page-loader");

  if (!loader) {
    return;
  }

  loader.classList.add(
    "is-hidden"
  );

  setTimeout(() => {
    loader.style.display =
      "none";
  }, 500);
}


/* =========================================================
   COUNTRY STATUS
   ========================================================= */

function updateCountryStatus() {
  const element =
    $("#country-status");

  if (!element) {
    return;
  }

  element.innerHTML = `
    <i class="fa-solid fa-location-dot"></i>
    Bangladesh
  `;
}


/* =========================================================
   BACK TO TOP
   ========================================================= */

function updateBackToTop() {
  const button =
    $("#back-to-top");

  if (!button) {
    return;
  }

  if (
    window.scrollY > 500
  ) {
    button.classList.add(
      "is-visible"
    );
  } else {
    button.classList.remove(
      "is-visible"
    );
  }
}


/* =========================================================
   NEWSLETTER FORM
   ========================================================= */

function handleNewsletterSubmit(event) {
  event.preventDefault();

  const form =
    event.currentTarget;

  const emailInput =
    $("#newsletter-email", form) ||
    $("#newsletter-email");

  const result =
    subscribeNewsletter(
      emailInput?.value
    );

  if (!result.success) {
    showToast(
      "Already Subscribed",
      result.message,
      "info"
    );

    return;
  }

  form.reset();

  showToast(
    "Subscribed",
    result.message,
    "success"
  );
}


/* =========================================================
   BUY FORM
   ========================================================= */

function handleBuySubmit(event) {
  event.preventDefault();

  const form =
    event.currentTarget;

  const name =
    $("#buy_name")?.value.trim();

  const email =
    $("#buy_email")?.value.trim();

  const phone =
    $("#buy_phone")?.value.trim();

  const websiteId =
    $("#buy_website_id")?.value;

  if (!name) {
    showToast(
      "Name Required",
      "Please enter your name.",
      "error"
    );

    return;
  }

  if (!email) {
    showToast(
      "Email Required",
      "Please enter your email address.",
      "error"
    );

    return;
  }

  if (!isValidEmail(email)) {
    showToast(
      "Invalid Email",
      "Please enter a valid email address.",
      "error"
    );

    return;
  }

  if (!phone) {
    showToast(
      "Phone Required",
      "Please enter your phone number.",
      "error"
    );

    return;
  }

  const order =
    createOrder({
      name,
      email,
      phone,
      websiteId
    });

  closeBuyModal();

  showToast(
    "Order Received",
    `Your order ${order.id} has been submitted successfully.`,
    "success"
  );

  setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent(
        "websiteDealsOrderCreated",
        {
          detail: order
        }
      )
    );
  }, 100);
}


/* =========================================================
   EMAIL VALIDATION
   ========================================================= */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);
}


/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters() {
  state.search = "";
  state.category = "all";
  state.sort = "featured";

  syncSearchInputs("");

  const category =
    $("#category-filter");

  if (category) {
    category.value = "all";
  }

  const sort =
    $("#sort-websites");

  if (sort) {
    sort.value = "featured";
  }

  renderMarketplace();
}


/* =========================================================
   CATEGORY CARD CLICKS
   ========================================================= */

function handleCategoryClick(element) {
  const category =
    element.dataset.category;

  if (!category) {
    return;
  }

  applyCategory(category);
}


/* =========================================================
   EVENT DELEGATION
   ========================================================= */

function handleDocumentClick(event) {

  const previewButton =
    event.target.closest(
      "[data-preview]"
    );

  if (previewButton) {
    event.preventDefault();

    const id =
      previewButton.dataset.preview;

    if (id) {
      previewWebsite(id);
    }

    return;
  }


  const buyButton =
    event.target.closest(
      "[data-buy]"
    );

  if (buyButton) {
    event.preventDefault();

    const id =
      buyButton.dataset.buy;

    if (id) {
      openBuyModal(id);
    }

    return;
  }


  const categoryButton =
    event.target.closest(
      "[data-category]"
    );

  if (
    categoryButton &&
    !categoryButton.matches(
      "option"
    )
  ) {
    const category =
      categoryButton.dataset.category;

    if (category) {
      handleCategoryClick(
        categoryButton
      );
    }
  }
}


/* =========================================================
   KEYBOARD ACCESS
   ========================================================= */

function handleKeyboard(event) {

  if (
    event.key === "Escape"
  ) {
    closeSearch();
    closeBuyModal();
    closeMobileMenu();
  }
}


/* =========================================================
   NAVIGATION LINKS
   ========================================================= */

function setupNavigation() {

  $$("#mobile-nav a").forEach(
    link => {
      link.addEventListener(
        "click",
        () => {
          closeMobileMenu();
        }
      );
    }
  );

}


/* =========================================================
   SEARCH EVENTS
   ========================================================= */

function setupSearch() {

  const searchToggle =
    $("#search-toggle");

  if (searchToggle) {
    searchToggle.addEventListener(
      "click",
      event => {
        event.preventDefault();
        openSearch();
      }
    );
  }


  const externalSearchButton =
    $("#open-search-from-marketplace");

  if (externalSearchButton) {
    externalSearchButton.addEventListener(
      "click",
      event => {
        event.preventDefault();
        openSearch();
      }
    );
  }


  const searchPanel =
    $("#search-panel");

  if (searchPanel) {

    searchPanel.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          searchPanel
        ) {
          closeSearch();
        }

      }
    );

  }


  const searchInput =
    $("#website-search");

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      event => {
        applySearch(
          event.target.value
        );
      }
    );

  }


  const clearButton =
    $("#clear-search");

  if (clearButton) {

    clearButton.addEventListener(
      "click",
      event => {

        event.preventDefault();

        applySearch("");

        if (searchInput) {
          searchInput.focus();
        }

      }
    );

  }


  const heroSearch =
    $("#hero-search");

  if (heroSearch) {

    heroSearch.addEventListener(
      "input",
      event => {
        applySearch(
          event.target.value
        );
      }
    );

  }


  const heroSearchButton =
    $("#hero-search-btn") ||
    $("#hero-search-button");

  if (heroSearchButton) {

    heroSearchButton.addEventListener(
      "click",
      event => {

        event.preventDefault();

        applySearch(
          heroSearch?.value || ""
        );

        const marketplace =
          $("#websites");

        if (marketplace) {
          marketplace.scrollIntoView({
            behavior: "smooth"
          });
        }

      }
    );

  }


  const heroCategory =
    $("#hero-category");

  if (heroCategory) {

    heroCategory.addEventListener(
      "change",
      event => {
        applyCategory(
          event.target.value
        );
      }
    );

  }

}


/* =========================================================
   FILTER EVENTS
   ========================================================= */

function setupFilters() {

  const categoryFilter =
    $("#category-filter");

  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      event => {
        state.category =
          event.target.value ||
          "all";

        renderMarketplace();
      }
    );

  }


  const sortFilter =
    $("#sort-websites");

  if (sortFilter) {

    sortFilter.addEventListener(
      "change",
      event => {
        applySort(
          event.target.value
        );
      }
    );

  }


  const resetButton =
    $("#reset-filters");

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      event => {
        event.preventDefault();
        resetFilters();
      }
    );

  }

}


/* =========================================================
   MOBILE EVENTS
   ========================================================= */

function setupMobileMenu() {

  const button =
    $("#mobile-menu-btn");

  if (!button) {
    return;
  }

  button.addEventListener(
    "click",
    event => {
      event.preventDefault();
      toggleMobileMenu();
    }
  );

}


/* =========================================================
   MODAL EVENTS
   ========================================================= */

function setupModal() {

  const closeButton =
    $("#modal-close");

  if (closeButton) {
    closeButton.addEventListener(
      "click",
      event => {
        event.preventDefault();
        closeBuyModal();
      }
    );
  }


  const cancelButton =
    $("#cancel-buy-btn");

  if (cancelButton) {
    cancelButton.addEventListener(
      "click",
      event => {
        event.preventDefault();
        closeBuyModal();
      }
    );
  }


  const modal =
    $("#buy-modal");

  if (modal) {

    modal.addEventListener(
      "click",
      event => {

        if (
          event.target === modal
        ) {
          closeBuyModal();
        }

      }
    );

  }


  const form =
    $("#buy-form");

  if (form) {
    form.addEventListener(
      "submit",
      handleBuySubmit
    );
  }

}


/* =========================================================
   NEWSLETTER EVENTS
   ========================================================= */

function setupNewsletter() {

  const form =
    $("#newsletter-form");

  if (!form) {
    return;
  }

  form.addEventListener(
    "submit",
    handleNewsletterSubmit
  );

}


/* =========================================================
   TOAST EVENTS
   ========================================================= */

function setupToast() {

  const closeButton =
    $("#toast-close");

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      event => {
        event.preventDefault();
        hideToast();
      }
    );

  }

}


/* =========================================================
   BACK TO TOP
   ========================================================= */

function setupBackToTop() {

  const button =
    $("#back-to-top");

  if (!button) {
    return;
  }

  button.addEventListener(
    "click",
    event => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

function updateHeader() {

  const header =
    $("#site-header");

  if (!header) {
    return;
  }

  if (
    window.scrollY > 20
  ) {
    header.classList.add(
      "is-scrolled"
    );
  } else {
    header.classList.remove(
      "is-scrolled"
    );
  }
}


/* =========================================================
   INITIALIZE CATEGORY COUNTS
   ========================================================= */

function updateCategoryCounts() {

  const websites =
    getAllWebsites();

  const counts = {};

  websites.forEach(
    website => {
      counts[website.category] =
        (counts[website.category] || 0) +
        1;
    }
  );

  $$("[data-category-count]")
    .forEach(element => {

      const category =
        element.dataset.categoryCount;

      element.textContent =
        counts[category] || 0;

    });
}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

function updateCurrentYear() {

  const year =
    $("#current-year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

}


/* =========================================================
   CATEGORY FILTER OPTIONS
   ========================================================= */

function populateCategoryFilter() {

  const filter =
    $("#category-filter");

  if (!filter) {
    return;
  }

  const current =
    filter.value || "all";

  const existing =
    [...filter.options]
      .map(option => option.value);

  const categories =
    Object.keys(
      CATEGORY_META
    );

  categories.forEach(
    category => {

      if (
        !existing.includes(
          category
        )
      ) {

        const option =
          document.createElement(
            "option"
          );

        option.value =
          category;

        option.textContent =
          getCategoryName(
            category
          );

        filter.appendChild(
          option
        );

      }

    }
  );

  filter.value =
    current;
}


/* =========================================================
   HEADER ACTIVE NAV
   ========================================================= */

function setupActiveNavigation() {

  const links =
    $$(
      ".main-nav a[href], .mobile-nav a[href]"
    );

  const currentPath =
    window.location.pathname;

  links.forEach(link => {

    const href =
      link.getAttribute("href");

    if (!href) {
      return;
    }

    if (
      href === "#" ||
      href.startsWith(
        "javascript:"
      )
    ) {
      return;
    }

    try {

      const linkUrl =
        new URL(
          href,
          window.location.href
        );

      if (
        linkUrl.pathname ===
        currentPath
      ) {
        link.classList.add(
          "active"
        );
      }

    } catch {
      // Ignore invalid navigation URLs.
    }

  });

}


/* =========================================================
   SETTINGS
   ========================================================= */

function applyPublicSettings() {

  const settings =
    readStorage(
      STORAGE_KEYS.settings,
      {}
    );

  if (
    !settings ||
    typeof settings !== "object"
  ) {
    return;
  }

  const marketplaceName =
    settings.marketplaceName;

  if (
    marketplaceName
  ) {

    $$(
      "[data-marketplace-name]"
    ).forEach(
      element => {
        element.textContent =
          marketplaceName;
      }
    );

  }

}


/* =========================================================
   STORAGE CHANGE LISTENER
   ========================================================= */

function setupStorageSync() {

  window.addEventListener(
    "storage",
    event => {

      if (
        event.key ===
        STORAGE_KEYS.websites
      ) {

        renderMarketplace();
        renderPopular();
        renderNew();
        updateCategoryCounts();

      }

    }
  );


  window.addEventListener(
    "websiteDealsWebsitesUpdated",
    () => {

      renderMarketplace();
      renderPopular();
      renderNew();
      updateCategoryCounts();

    }
  );

}


/* =========================================================
   DEMO REFRESH HELPER
   ========================================================= */

function refreshMarketplace() {

  renderMarketplace();
  renderPopular();
  renderNew();
  updateCategoryCounts();
  updateMarketplaceCount(
    getAllWebsites().length
  );

}


/* =========================================================
   GLOBAL API
   ========================================================= */

window.WebsiteDeals = {

  getAllWebsites,

  getWebsiteById(id) {
    return getAllWebsites()
      .find(
        website =>
          website.id === id
      );
  },

  previewWebsite,

  openBuyModal,

  closeBuyModal,

  subscribeNewsletter,

  refreshMarketplace,

  showToast,

  formatPrice

};


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeWebsiteDeals() {

  populateCategoryFilter();

  applyPublicSettings();

  updateCountryStatus();

  updateCategoryCounts();

  renderMarketplace();

  renderPopular();

  renderNew();

  updateCurrentYear();

  setupNavigation();

  setupSearch();

  setupFilters();

  setupMobileMenu();

  setupModal();

  setupNewsletter();

  setupToast();

  setupBackToTop();

  setupStorageSync();

  setupActiveNavigation();

  document.addEventListener(
    "click",
    handleDocumentClick
  );

  document.addEventListener(
    "keydown",
    handleKeyboard
  );

  window.addEventListener(
    "scroll",
    () => {
      updateBackToTop();
      updateHeader();
    },
    {
      passive: true
    }
  );

  updateBackToTop();

  updateHeader();

  setTimeout(
    hidePageLoader,
    350
  );
}


/* =========================================================
   DOM READY
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeWebsiteDeals
  );

} else {

  initializeWebsiteDeals();

}
