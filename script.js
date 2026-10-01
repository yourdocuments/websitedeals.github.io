/* =========================================================
   WEBSITE DEALS — MAIN JAVASCRIPT
   File: js/main.js
========================================================= */

"use strict";

/* =========================================================
   WEBSITE DATA
========================================================= */

const websites = [
  {
    id: 1,
    title: "Premium Business Website",
    category: "Business",
    description: "Modern professional website for companies and businesses.",
    price: "৳999",
    badge: "Popular",
    icon: "fa-briefcase",
    demo: "#"
  },
  {
    id: 2,
    title: "Restaurant Website",
    category: "Restaurant",
    description: "Elegant restaurant website with menu and contact sections.",
    price: "৳1,499",
    badge: "New",
    icon: "fa-utensils",
    demo: "#"
  },
  {
    id: 3,
    title: "Creative Agency Website",
    category: "Agency",
    description: "Premium agency website for creative and digital teams.",
    price: "৳1,999",
    badge: "Featured",
    icon: "fa-pen-ruler",
    demo: "#"
  },
  {
    id: 4,
    title: "Modern E-Commerce Website",
    category: "E-Commerce",
    description: "Clean online store layout for products and online selling.",
    price: "৳2,499",
    badge: "Popular",
    icon: "fa-cart-shopping",
    demo: "#"
  },
  {
    id: 5,
    title: "Personal Portfolio",
    category: "Portfolio",
    description: "Modern portfolio website for designers, developers and creators.",
    price: "৳999",
    badge: "New",
    icon: "fa-user",
    demo: "#"
  },
  {
    id: 6,
    title: "Monthly Website Pack",
    category: "Monthly Pack",
    description: "Affordable monthly website package for growing businesses.",
    price: "৳499/mo",
    badge: "Monthly",
    icon: "fa-calendar-days",
    demo: "#"
  },
  {
    id: 7,
    title: "Corporate Business Website",
    category: "Business",
    description: "Professional corporate website with premium visual design.",
    price: "৳1,799",
    badge: "Premium",
    icon: "fa-building",
    demo: "#"
  },
  {
    id: 8,
    title: "Food Delivery Website",
    category: "Restaurant",
    description: "Modern food and restaurant website for delivery businesses.",
    price: "৳1,999",
    badge: "Hot",
    icon: "fa-bowl-food",
    demo: "#"
  }
];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const pageLoader = document.getElementById("page-loader");

const searchToggle = document.getElementById("search-toggle");
const searchPanel = document.getElementById("search-panel");
const websiteSearch = document.getElementById("website-search");
const clearSearch = document.getElementById("clear-search");

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");

const websiteList = document.getElementById("website-list");
const emptyState = document.getElementById("empty-state");
const resetFilters = document.getElementById("reset-filters");

const categoryButtons = document.querySelectorAll(".category-btn");

const buyModal = document.getElementById("buy-modal");
const modalClose = document.getElementById("modal-close");
const cancelBuyBtn = document.getElementById("cancel-buy-btn");

const buyForm = document.getElementById("buy-form");
const buyWebsiteTitle = document.getElementById("buy-website-title");
const buyWebsiteId = document.getElementById("buy_website_id");
const buyMessage = document.getElementById("buy-message");

const newsletterForm = document.getElementById("newsletter-form");

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toast-title");
const toastMessage = document.getElementById("toast-message");
const toastClose = document.getElementById("toast-close");

const backToTop = document.getElementById("back-to-top");

const currentYear = document.getElementById("current-year");

const siteHeader = document.getElementById("site-header");


/* =========================================================
   STATE
========================================================= */

let activeCategory = "all";
let searchQuery = "";

let toastTimer = null;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initializeWebsite();

});


function initializeWebsite() {

  renderWebsites();

  setupCategoryFilters();

  setupSearch();

  setupMobileMenu();

  setupBuyModal();

  setupNewsletter();

  setupToast();

  setupBackToTop();

  setupHeaderScroll();

  updateCurrentYear();

  setupSmoothScroll();

  hidePageLoader();

}


/* =========================================================
   PAGE LOADER
========================================================= */

function hidePageLoader() {

  window.addEventListener("load", () => {

    setTimeout(() => {

      if (!pageLoader) return;

      pageLoader.classList.add("loaded");

      setTimeout(() => {

        pageLoader.style.display = "none";

      }, 500);

    }, 500);

  });

}


/* =========================================================
   RENDER WEBSITE CARDS
========================================================= */

function renderWebsites() {

  if (!websiteList) return;

  const filteredWebsites = getFilteredWebsites();

  websiteList.innerHTML = "";

  if (filteredWebsites.length === 0) {

    if (emptyState) {
      emptyState.classList.remove("hidden");
    }

    return;

  }

  if (emptyState) {
    emptyState.classList.add("hidden");
  }


  filteredWebsites.forEach((website, index) => {

    const card = createWebsiteCard(website, index);

    websiteList.appendChild(card);

  });

}


/* =========================================================
   FILTER WEBSITE DATA
========================================================= */

function getFilteredWebsites() {

  return websites.filter((website) => {

    const matchesCategory =
      activeCategory === "all" ||
      website.category === activeCategory;


    const searchableText = `
      ${website.title}
      ${website.category}
      ${website.description}
    `.toLowerCase();


    const matchesSearch =
      searchQuery === "" ||
      searchableText.includes(searchQuery.toLowerCase());


    return matchesCategory && matchesSearch;

  });

}


/* =========================================================
   CREATE WEBSITE CARD
========================================================= */

function createWebsiteCard(website, index) {

  const article = document.createElement("article");

  article.className = "website-card";

  article.dataset.category = website.category;

  article.style.animationDelay = `${index * 60}ms`;


  article.innerHTML = `

    <div class="website-card-image">

      <div class="website-preview">

        <div class="preview-topbar">

          <span></span>
          <span></span>
          <span></span>

        </div>

        <div class="preview-content">

          <div class="preview-text">

            <small></small>

            <strong></strong>

            <strong class="short"></strong>

            <span></span>
            <span></span>

            <div class="preview-button"></div>

          </div>

          <div class="preview-visual">

            <i class="fa-solid ${website.icon}"></i>

          </div>

        </div>

        <div class="preview-bottom">

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>


      <div class="website-badge">

        ${escapeHTML(website.badge)}

      </div>


      <div class="website-category">

        <i class="fa-solid fa-layer-group"></i>

        ${escapeHTML(website.category)}

      </div>

    </div>


    <div class="website-card-body">

      <div class="website-card-heading">

        <h3>
          ${escapeHTML(website.title)}
        </h3>

        <span class="website-price">

          ${escapeHTML(website.price)}

        </span>

      </div>


      <p class="website-description">

        ${escapeHTML(website.description)}

      </p>


      <div class="website-card-features">

        <span>
          <i class="fa-solid fa-circle-check"></i>
          Responsive
        </span>

        <span>
          <i class="fa-solid fa-bolt"></i>
          Fast
        </span>

        <span>
          <i class="fa-solid fa-code"></i>
          Modern
        </span>

      </div>


      <div class="website-card-actions">

        <a
          href="${website.demo}"
          class="btn btn-secondary website-demo-btn"
          target="_blank"
          rel="noopener noreferrer"
        >

          <i class="fa-solid fa-eye"></i>

          <span>
            Preview
          </span>

        </a>


        <button
          type="button"
          class="btn btn-primary website-buy-btn"
          data-website-id="${website.id}"
        >

          <span>
            Order Now
          </span>

          <i class="fa-solid fa-arrow-right"></i>

        </button>

      </div>

    </div>

  `;


  const buyButton =
    article.querySelector(".website-buy-btn");


  if (buyButton) {

    buyButton.addEventListener("click", () => {

      openBuyModal(website);

    });

  }


  return article;

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function setupCategoryFilters() {

  categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

      categoryButtons.forEach((btn) => {

        btn.classList.remove("active");

      });


      button.classList.add("active");


      activeCategory =
        button.dataset.category || "all";


      renderWebsites();

    });

  });

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

  if (searchToggle) {

    searchToggle.addEventListener("click", () => {

      const isOpen =
        searchPanel.classList.contains("active");


      if (isOpen) {

        closeSearchPanel();

      } else {

        openSearchPanel();

      }

    });

  }


  if (websiteSearch) {

    websiteSearch.addEventListener("input", (event) => {

      searchQuery =
        event.target.value.trim();


      renderWebsites();

    });

  }


  if (clearSearch) {

    clearSearch.addEventListener("click", () => {

      if (!websiteSearch) return;

      websiteSearch.value = "";

      searchQuery = "";

      renderWebsites();

      websiteSearch.focus();

    });

  }

}


function openSearchPanel() {

  if (!searchPanel) return;

  searchPanel.classList.add("active");

  searchPanel.setAttribute("aria-hidden", "false");


  if (websiteSearch) {

    setTimeout(() => {

      websiteSearch.focus();

    }, 150);

  }

}


function closeSearchPanel() {

  if (!searchPanel) return;

  searchPanel.classList.remove("active");

  searchPanel.setAttribute("aria-hidden", "true");

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

  if (!mobileMenuBtn || !mobileNav) return;


  mobileMenuBtn.addEventListener("click", () => {

    const isOpen =
      mobileNav.classList.contains("active");


    if (isOpen) {

      closeMobileMenu();

    } else {

      openMobileMenu();

    }

  });


  const mobileLinks =
    mobileNav.querySelectorAll("a");


  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      closeMobileMenu();

    });

  });

}


function openMobileMenu() {

  mobileNav.classList.add("active");

  mobileNav.setAttribute("aria-hidden", "false");

  mobileMenuBtn.setAttribute("aria-expanded", "true");

  mobileMenuBtn.innerHTML =
    `<i class="fa-solid fa-xmark"></i>`;

}


function closeMobileMenu() {

  mobileNav.classList.remove("active");

  mobileNav.setAttribute("aria-hidden", "true");

  mobileMenuBtn.setAttribute("aria-expanded", "false");

  mobileMenuBtn.innerHTML =
    `<i class="fa-solid fa-bars"></i>`;

}


/* =========================================================
   BUY MODAL
========================================================= */

function setupBuyModal() {

  if (modalClose) {

    modalClose.addEventListener("click", closeBuyModal);

  }


  if (cancelBuyBtn) {

    cancelBuyBtn.addEventListener("click", closeBuyModal);

  }


  if (buyModal) {

    buyModal.addEventListener("click", (event) => {

      if (event.target === buyModal) {

        closeBuyModal();

      }

    });

  }


  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      closeBuyModal();

      closeMobileMenu();

      closeSearchPanel();

    }

  });


  if (buyForm) {

    buyForm.addEventListener("submit", handleBuySubmit);

  }

}


function openBuyModal(website) {

  if (!buyModal) return;


  if (buyWebsiteTitle) {

    buyWebsiteTitle.textContent =
      website.title;

  }


  if (buyWebsiteId) {

    buyWebsiteId.value =
      website.id;

  }


  if (buyMessage) {

    buyMessage.textContent = "";

    buyMessage.className =
      "form-message";

  }


  buyModal.classList.remove("hidden");

  buyModal.classList.add("active");

  buyModal.setAttribute("aria-hidden", "false");


  document.body.classList.add("modal-open");


  const nameInput =
    document.getElementById("buy_name");


  if (nameInput) {

    setTimeout(() => {

      nameInput.focus();

    }, 200);

  }

}


function closeBuyModal() {

  if (!buyModal) return;


  buyModal.classList.remove("active");

  buyModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");


  setTimeout(() => {

    buyModal.classList.add("hidden");

  }, 250);

}


/* =========================================================
   BUY FORM SUBMISSION
========================================================= */

function handleBuySubmit(event) {

  event.preventDefault();


  const name =
    document.getElementById("buy_name")?.value.trim();


  const email =
    document.getElementById("buy_email")?.value.trim();


  const phone =
    document.getElementById("buy_phone")?.value.trim();


  const websiteId =
    document.getElementById("buy_website_id")?.value;


  if (!name || !email || !phone) {

    showFormMessage(
      "দয়া করে সব প্রয়োজনীয় তথ্য পূরণ করুন।",
      "error"
    );

    return;

  }


  if (!/^01[0-9]{9}$/.test(phone)) {

    showFormMessage(
      "সঠিক ১১ সংখ্যার বাংলাদেশি ফোন নম্বর দিন।",
      "error"
    );

    return;

  }


  const selectedWebsite =
    websites.find(
      website =>
        String(website.id) === String(websiteId)
    );


  if (!selectedWebsite) {

    showFormMessage(
      "Website information পাওয়া যায়নি।",
      "error"
    );

    return;

  }


  const orderData = {

    id: `WD-${Date.now()}`,

    websiteId: selectedWebsite.id,

    website:
      selectedWebsite.title,

    category:
      selectedWebsite.category,

    price:
      selectedWebsite.price,

    name,

    email,

    phone,

    status: "pending",

    createdAt:
      new Date().toISOString()

  };


  saveOrder(orderData);


  showToast(
    "Order Request",
    "আপনার order request সফলভাবে গ্রহণ করা হয়েছে।",
    "success"
  );


  buyForm.reset();

  closeBuyModal();


  /*
    ভবিষ্যতে payment page থাকলে এখানে redirect করতে পারবেন।

    Example:

    window.location.href =
      `payment/index.html?order=${orderData.id}`;

  */

}


/* =========================================================
   FORM MESSAGE
========================================================= */

function showFormMessage(message, type = "success") {

  if (!buyMessage) return;


  buyMessage.textContent = message;

  buyMessage.className =
    `form-message ${type}`;

}


/* =========================================================
   SAVE ORDER — LOCAL STORAGE
========================================================= */

function saveOrder(order) {

  const storageKey =
    "websiteDealsOrders";


  let orders = [];


  try {

    orders =
      JSON.parse(
        localStorage.getItem(storageKey)
      ) || [];

  } catch (error) {

    orders = [];

  }


  orders.push(order);


  localStorage.setItem(
    storageKey,
    JSON.stringify(orders)
  );

}


/* =========================================================
   NEWSLETTER
========================================================= */

function setupNewsletter() {

  if (!newsletterForm) return;


  newsletterForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const emailInput =
        document.getElementById(
          "newsletter-email"
        );


      if (!emailInput) return;


      const email =
        emailInput.value.trim();


      if (!isValidEmail(email)) {

        showToast(
          "Invalid Email",
          "দয়া করে একটি সঠিক email address দিন।",
          "error"
        );

        return;

      }


      saveSubscriber(email);


      emailInput.value = "";


      showToast(
        "Subscribed",
        "ধন্যবাদ! আপনি সফলভাবে subscribe করেছেন।",
        "success"
      );

    }
  );

}


function saveSubscriber(email) {

  const storageKey =
    "websiteDealsSubscribers";


  let subscribers = [];


  try {

    subscribers =
      JSON.parse(
        localStorage.getItem(storageKey)
      ) || [];

  } catch (error) {

    subscribers = [];

  }


  const alreadyExists =
    subscribers.some(
      item =>
        item.toLowerCase() ===
        email.toLowerCase()
    );


  if (!alreadyExists) {

    subscribers.push(email);

  }


  localStorage.setItem(
    storageKey,
    JSON.stringify(subscribers)
  );

}


/* =========================================================
   TOAST
========================================================= */

function setupToast() {

  if (!toastClose) return;


  toastClose.addEventListener("click", () => {

    hideToast();

  });

}


function showToast(
  title,
  message,
  type = "success"
) {

  if (!toast) return;


  clearTimeout(toastTimer);


  if (toastTitle) {

    toastTitle.textContent =
      title;

  }


  if (toastMessage) {

    toastMessage.textContent =
      message;

  }


  toast.classList.remove(
    "success",
    "error",
    "warning"
  );


  toast.classList.add(type);


  toast.classList.add("active");

  toast.setAttribute(
    "aria-hidden",
    "false"
  );


  toastTimer =
    setTimeout(() => {

      hideToast();

    }, 5000);

}


function hideToast() {

  if (!toast) return;


  toast.classList.remove("active");

  toast.setAttribute(
    "aria-hidden",
    "true"
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

      searchQuery = "";


      if (websiteSearch) {

        websiteSearch.value = "";

      }


      categoryButtons.forEach(
        (button) => {

          button.classList.remove(
            "active"
          );


          if (
            button.dataset.category ===
            "all"
          ) {

            button.classList.add(
              "active"
            );

          }

        }
      );


      renderWebsites();

    }
  );

}


/* =========================================================
   BACK TO TOP
========================================================= */

function setupBackToTop() {

  if (!backToTop) return;


  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 600) {

        backToTop.classList.add(
          "visible"
        );

      } else {

        backToTop.classList.remove(
          "visible"
        );

      }

    },
    { passive: true }
  );


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
   HEADER SCROLL EFFECT
========================================================= */

function setupHeaderScroll() {

  if (!siteHeader) return;


  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 30) {

        siteHeader.classList.add(
          "scrolled"
        );

      } else {

        siteHeader.classList.remove(
          "scrolled"
        );

      }

    },
    { passive: true }
  );

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function setupSmoothScroll() {

  const anchors =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  anchors.forEach((anchor) => {

    anchor.addEventListener(
      "click",
      (event) => {

        const targetId =
          anchor.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) return;


        event.preventDefault();


        const headerHeight =
          siteHeader
            ? siteHeader.offsetHeight
            : 0;


        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;


        window.scrollTo({

          top:
            Math.max(
              targetPosition,
              0
            ),

          behavior: "smooth"

        });

      }
    );

  });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

window.addEventListener(
  "scroll",
  updateActiveNavigation,
  { passive: true }
);


function updateActiveNavigation() {

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const navLinks =
    document.querySelectorAll(
      ".nav-link"
    );


  let currentSection = "";


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 160;


    if (
      window.scrollY >=
      sectionTop
    ) {

      currentSection =
        section.id;

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove(
      "active"
    );


    const href =
      link.getAttribute("href");


    if (
      href ===
      `#${currentSection}`
    ) {

      link.classList.add(
        "active"
      );

    }

  });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function updateCurrentYear() {

  if (!currentYear) return;


  currentYear.textContent =
    new Date().getFullYear();

}


/* =========================================================
   EMAIL VALIDATION
========================================================= */

function isValidEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   CLOSE PANELS WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
  "click",
  (event) => {

    if (
      searchPanel &&
      searchPanel.classList.contains("active") &&
      !searchPanel.contains(event.target) &&
      !searchToggle?.contains(event.target)
    ) {

      closeSearchPanel();

    }

  }
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Tab" &&
      buyModal &&
      buyModal.classList.contains("active")
    ) {

      /*
        Basic modal accessibility support.
        Full focus-trap can be added later if needed.
      */

    }

  }
);


/* =========================================================
   GLOBAL ERROR PROTECTION
========================================================= */

window.addEventListener(
  "error",
  (event) => {

    console.warn(
      "Website Deals JS:",
      event.message
    );

  }
);


/* =========================================================
   WEBSITE DEALS API
   Future Firebase/API integration can use these.
========================================================= */

window.WebsiteDeals = {

  getWebsites() {

    return websites;

  },


  getOrders() {

    try {

      return JSON.parse(
        localStorage.getItem(
          "websiteDealsOrders"
        )
      ) || [];

    } catch {

      return [];

    }

  },


  getSubscribers() {

    try {

      return JSON.parse(
        localStorage.getItem(
          "websiteDealsSubscribers"
        )
      ) || [];

    } catch {

      return [];

    }

  },


  refresh() {

    renderWebsites();

  }

};


/* =========================================================
   END OF MAIN.JS
========================================================= */
