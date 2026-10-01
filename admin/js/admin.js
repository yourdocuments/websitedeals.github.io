/* =========================================================
   WEBSITE DEALS
   Shared Admin JavaScript
   Path: admin/js/admin.js
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     STORAGE KEYS
  --------------------------------------------------------- */

  const STORAGE = {
    session: "websiteDealsAdminSession",
    websites: "websiteDealsWebsites",
    categories: "websiteDealsCategories",
    orders: "websiteDealsOrders",
    subscribers: "websiteDealsSubscribers",
    accounts: "websiteDealsAccounts",
    settings: "websiteDealsSettings"
  };


  /* ---------------------------------------------------------
     STORAGE HELPERS
  --------------------------------------------------------- */

  function getStorage(key, fallback = []) {
    try {
      const raw = localStorage.getItem(key);

      if (!raw) {
        return fallback;
      }

      return JSON.parse(raw);
    } catch (error) {
      console.warn("Storage read error:", key, error);
      return fallback;
    }
  }


  function setStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error("Storage write error:", key, error);
      return false;
    }
  }


  function removeStorage(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("Storage remove error:", key, error);
      return false;
    }
  }


  /* ---------------------------------------------------------
     SESSION
  --------------------------------------------------------- */

  function getSession() {
    try {
      const raw = localStorage.getItem(STORAGE.session);

      if (!raw) {
        return null;
      }

      return JSON.parse(raw);
    } catch (error) {
      console.warn("Session read error:", error);
      return null;
    }
  }


  function isLoggedIn() {
    return !!getSession();
  }


  function hasRole(role) {
    const session = getSession();

    if (!session) {
      return false;
    }

    return session.role === role;
  }


  function requireLogin(redirect = "index.html") {
    const session = getSession();

    if (!session) {
      window.location.href = redirect;
      return false;
    }

    return true;
  }


  function requireSuperAdmin(redirect = "dashboard.html") {
    const session = getSession();

    if (!session) {
      window.location.href = "index.html";
      return false;
    }

    if (session.role !== "superadmin") {
      window.location.href = redirect;
      return false;
    }

    return true;
  }


  function logout(redirect = "index.html") {
    removeStorage(STORAGE.session);
    window.location.href = redirect;
  }


  /* ---------------------------------------------------------
     NUMBER / CURRENCY HELPERS
  --------------------------------------------------------- */

  function formatNumber(value) {
    const number = Number(value || 0);

    return number.toLocaleString("en-BD");
  }


  function formatCurrency(value, currency = "৳") {
    const number = Number(value || 0);

    return currency + formatNumber(number);
  }


  function parsePrice(value) {
    if (typeof value === "number") {
      return value;
    }

    return Number(
      String(value || "")
        .replace(/[^\d.-]/g, "")
    ) || 0;
  }


  /* ---------------------------------------------------------
     DATE HELPERS
  --------------------------------------------------------- */

  function formatDate(dateValue) {
    if (!dateValue) {
      return "—";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }


  function formatDateTime(dateValue) {
    if (!dateValue) {
      return "—";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }


  function timeAgo(dateValue) {
    if (!dateValue) {
      return "—";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) {
      return "Just now";
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }

    const days = Math.floor(hours / 24);

    if (days < 30) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }

    const months = Math.floor(days / 30);

    if (months < 12) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    }

    const years = Math.floor(months / 12);

    return `${years} year${years > 1 ? "s" : ""} ago`;
  }


  /* ---------------------------------------------------------
     ID GENERATORS
  --------------------------------------------------------- */

  function generateId(prefix = "WD") {
    const timestamp = Date.now().toString(36).toUpperCase();

    const random = Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase();

    return `${prefix}-${timestamp}-${random}`;
  }


  function generateShortId(prefix = "ID") {
    return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
  }


  /* ---------------------------------------------------------
     STRING HELPERS
  --------------------------------------------------------- */

  function slugify(value) {
    return String(value || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }


  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function capitalize(value) {
    const text = String(value || "");

    if (!text) {
      return "";

    }

    return text.charAt(0).toUpperCase() + text.slice(1);
  }


  /* ---------------------------------------------------------
     DOM HELPERS
  --------------------------------------------------------- */

  function $(selector, parent = document) {
    return parent.querySelector(selector);
  }


  function $$(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  }


  function show(element) {
    if (!element) {
      return;
    }

    element.hidden = false;
    element.style.display = "";
  }


  function hide(element) {
    if (!element) {
      return;
    }

    element.hidden = true;
  }


  function toggle(element, force) {
    if (!element) {
      return;
    }

    if (typeof force === "boolean") {
      element.hidden = !force;
      return;
    }

    element.hidden = !element.hidden;
  }


  /* ---------------------------------------------------------
     TOAST
  --------------------------------------------------------- */

  function toast(message, type = "success", duration = 3200) {
    let container = document.getElementById("admin-toast-container");

    if (!container) {
      container = document.createElement("div");

      container.id = "admin-toast-container";

      container.style.position = "fixed";
      container.style.right = "22px";
      container.style.bottom = "22px";
      container.style.zIndex = "99999";
      container.style.display = "grid";
      container.style.gap = "10px";
      container.style.pointerEvents = "none";

      document.body.appendChild(container);
    }

    const item = document.createElement("div");

    item.className = `admin-shared-toast admin-shared-toast-${type}`;

    item.style.minWidth = "280px";
    item.style.maxWidth = "420px";
    item.style.padding = "14px 16px";
    item.style.borderRadius = "14px";
    item.style.background = "#ffffff";
    item.style.color = "#111827";
    item.style.border = "1px solid #e5e7eb";
    item.style.boxShadow = "0 18px 50px rgba(0,0,0,.14)";
    item.style.fontSize = "14px";
    item.style.fontWeight = "600";
    item.style.pointerEvents = "auto";
    item.style.animation = "adminToastIn .25s ease";

    if (type === "error") {
      item.style.borderLeft = "4px solid #dc2626";
    }

    if (type === "warning") {
      item.style.borderLeft = "4px solid #d97706";
    }

    if (type === "success") {
      item.style.borderLeft = "4px solid #18a957";
    }

    item.textContent = message;

    container.appendChild(item);

    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateY(8px)";
      item.style.transition = ".25s ease";

      setTimeout(() => {
        item.remove();
      }, 260);
    }, duration);
  }


  /* ---------------------------------------------------------
     CONFIRMATION
  --------------------------------------------------------- */

  function confirmAction(message, callback) {
    const confirmed = window.confirm(message);

    if (confirmed && typeof callback === "function") {
      callback();
    }

    return confirmed;
  }


  /* ---------------------------------------------------------
     CSV EXPORT
  --------------------------------------------------------- */

  function csvEscape(value) {
    const text = String(value ?? "");

    if (
      text.includes(",") ||
      text.includes('"') ||
      text.includes("\n")
    ) {
      return `"${text.replace(/"/g, '""')}"`;
    }

    return text;
  }


  function exportCSV(filename, rows) {
    if (!Array.isArray(rows) || !rows.length) {
      toast("There is no data to export.", "warning");
      return;
    }

    const csv = rows
      .map(row => row.map(csvEscape).join(","))
      .join("\n");

    const blob = new Blob(
      ["\ufeff" + csv],
      {
        type: "text/csv;charset=utf-8;"
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = filename || "website-deals-export.csv";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    toast("CSV exported successfully.");
  }


  /* ---------------------------------------------------------
     IMAGE FALLBACK
  --------------------------------------------------------- */

  function imageFallback(image, fallback = "") {
    if (!image) {
      return;
    }

    image.addEventListener("error", function () {
      if (fallback && image.src !== fallback) {
        image.src = fallback;
      }
    });
  }


  /* ---------------------------------------------------------
     MODAL HELPERS
  --------------------------------------------------------- */

  function openModal(modal) {
    if (!modal) {
      return;
    }

    modal.classList.add("show");
    modal.removeAttribute("hidden");

    document.body.classList.add("modal-open");
  }


  function closeModal(modal) {
    if (!modal) {
      return;
    }

    modal.classList.remove("show");
    modal.setAttribute("hidden", "");

    document.body.classList.remove("modal-open");
  }


  function setupModalClose() {
    document.addEventListener("click", function (event) {

      const closeButton = event.target.closest(
        "[data-close-modal]"
      );

      if (closeButton) {
        const selector = closeButton.getAttribute(
          "data-close-modal"
        );

        const modal = document.querySelector(selector);

        closeModal(modal);

        return;
      }

      const modal = event.target.closest(".admin-modal");

      if (
        modal &&
        event.target === modal &&
        modal.dataset.closeOnBackdrop !== "false"
      ) {
        closeModal(modal);
      }

    });


    document.addEventListener("keydown", function (event) {

      if (event.key !== "Escape") {
        return;
      }

      const modal = document.querySelector(
        ".admin-modal.show"
      );

      if (modal) {
        closeModal(modal);
      }

    });
  }


  /* ---------------------------------------------------------
     MOBILE SIDEBAR
  --------------------------------------------------------- */

  function setupMobileSidebar() {

    const sidebar = document.querySelector(".admin-sidebar");

    if (!sidebar) {
      return;
    }

    const toggleButton =
      document.querySelector(
        "[data-admin-sidebar-toggle]"
      ) ||
      document.querySelector(".admin-menu-toggle") ||
      document.querySelector(".mobile-menu-toggle");

    if (!toggleButton) {
      return;
    }

    toggleButton.addEventListener("click", function () {

      sidebar.classList.toggle("open");

      document.body.classList.toggle(
        "admin-sidebar-open"
      );

    });


    document.addEventListener("click", function (event) {

      if (
        window.innerWidth > 980 ||
        !sidebar.classList.contains("open")
      ) {
        return;
      }

      if (
        !sidebar.contains(event.target) &&
        event.target !== toggleButton &&
        !toggleButton.contains(event.target)
      ) {
        sidebar.classList.remove("open");

        document.body.classList.remove(
          "admin-sidebar-open"
        );
      }

    });

  }


  /* ---------------------------------------------------------
     ACTIVE NAV
  --------------------------------------------------------- */

  function setupActiveNavigation() {

    const currentPath =
      window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const links = $$(
      ".admin-nav a, .admin-sidebar a"
    );

    links.forEach(link => {

      const href =
        link.getAttribute("href") || "";

      const linkPath =
        href.split("/").pop().split("?")[0].toLowerCase();

      if (
        linkPath &&
        linkPath === currentPath
      ) {
        link.classList.add("active");
      }

    });

  }


  /* ---------------------------------------------------------
     ROLE-AWARE UI
  --------------------------------------------------------- */

  function setupRoleUI() {

    const session = getSession();

    if (!session) {
      return;
    }

    $$("[data-role-required]").forEach(element => {

      const requiredRole =
        element.getAttribute("data-role-required");

      if (
        requiredRole &&
        session.role !== requiredRole
      ) {
        element.remove();
      }

    });

  }


  /* ---------------------------------------------------------
     LOGOUT BUTTONS
  --------------------------------------------------------- */

  function setupLogoutButtons() {

    $$("[data-admin-logout]").forEach(button => {

      button.addEventListener("click", function (event) {

        event.preventDefault();

        const message =
          button.getAttribute("data-confirm-logout");

        if (
          message &&
          !window.confirm(message)
        ) {
          return;
        }

        logout();

      });

    });

  }


  /* ---------------------------------------------------------
     FORM HELPERS
  --------------------------------------------------------- */

  function serializeForm(form) {

    if (!form) {
      return {};
    }

    const data = {};

    const fields = $$(
      "input, select, textarea",
      form
    );

    fields.forEach(field => {

      if (!field.name) {
        return;
      }

      if (field.type === "checkbox") {
        data[field.name] = field.checked;
        return;
      }

      if (field.type === "radio") {
        if (field.checked) {
          data[field.name] = field.value;
        }

        return;
      }

      data[field.name] = field.value;

    });

    return data;
  }


  function fillForm(form, data) {

    if (!form || !data) {
      return;
    }

    const fields = $$(
      "input, select, textarea",
      form
    );

    fields.forEach(field => {

      if (!field.name) {
        return;
      }

      if (!(field.name in data)) {
        return;
      }

      if (field.type === "checkbox") {
        field.checked = Boolean(
          data[field.name]
        );

        return;
      }

      if (field.type === "radio") {
        field.checked =
          field.value === String(
            data[field.name]
          );

        return;
      }

      field.value = data[field.name];

    });

  }


  /* ---------------------------------------------------------
     SEARCH HELPER
  --------------------------------------------------------- */

  function matchesSearch(item, search, fields = []) {

    if (!search) {
      return true;
    }

    const query =
      String(search)
        .trim()
        .toLowerCase();

    if (!query) {
      return true;
    }

    return fields.some(field => {

      const value =
        field
          .split(".")
          .reduce(
            (obj, key) =>
              obj == null ? undefined : obj[key],
            item
          );

      return String(value ?? "")
        .toLowerCase()
        .includes(query);

    });

  }


  /* ---------------------------------------------------------
     SORT HELPER
  --------------------------------------------------------- */

  function sortBy(items, field, direction = "asc") {

    return [...items].sort((a, b) => {

      const aValue =
        field
          .split(".")
          .reduce(
            (obj, key) =>
              obj == null ? undefined : obj[key],
            a
          );

      const bValue =
        field
          .split(".")
          .reduce(
            (obj, key) =>
              obj == null ? undefined : obj[key],
            b
          );

      const aText =
        String(aValue ?? "").toLowerCase();

      const bText =
        String(bValue ?? "").toLowerCase();

      let result;

      const aNumber = Number(aValue);
      const bNumber = Number(bValue);

      if (
        !Number.isNaN(aNumber) &&
        !Number.isNaN(bNumber) &&
        aText !== "" &&
        bText !== ""
      ) {
        result = aNumber - bNumber;
      } else {
        result = aText.localeCompare(bText);
      }

      return direction === "desc"
        ? -result
        : result;

    });

  }


  /* ---------------------------------------------------------
     DEBOUNCE
  --------------------------------------------------------- */

  function debounce(callback, delay = 300) {

    let timer;

    return function (...args) {

      clearTimeout(timer);

      timer = setTimeout(() => {
        callback.apply(this, args);
      }, delay);

    };

  }


  /* ---------------------------------------------------------
     CLIPBOARD
  --------------------------------------------------------- */

  async function copyText(text) {

    try {

      await navigator.clipboard.writeText(
        String(text || "")
      );

      toast("Copied to clipboard.");

      return true;

    } catch (error) {

      console.warn(
        "Clipboard error:",
        error
      );

      toast(
        "Unable to copy.",
        "error"
      );

      return false;

    }

  }


  /* ---------------------------------------------------------
     URL HELPERS
  --------------------------------------------------------- */

  function getQueryParam(name) {

    const params =
      new URLSearchParams(
        window.location.search
      );

    return params.get(name);

  }


  function setQueryParam(name, value) {

    const url =
      new URL(window.location.href);

    url.searchParams.set(
      name,
      value
    );

    window.history.replaceState(
      {},
      "",
      url
    );

  }


  /* ---------------------------------------------------------
     DASHBOARD DATA HELPERS
  --------------------------------------------------------- */

  function getWebsites() {
    return getStorage(
      STORAGE.websites,
      []
    );
  }


  function getCategories() {
    return getStorage(
      STORAGE.categories,
      []
    );
  }


  function getOrders() {
    return getStorage(
      STORAGE.orders,
      []
    );
  }


  function getSubscribers() {
    return getStorage(
      STORAGE.subscribers,
      []
    );
  }


  function getAccounts() {
    return getStorage(
      STORAGE.accounts,
      []
    );
  }


  function getSettings() {
    return getStorage(
      STORAGE.settings,
      {}
    );
  }


  /* ---------------------------------------------------------
     ORDER HELPERS
  --------------------------------------------------------- */

  function getPaidOrders() {

    return getOrders().filter(
      order =>
        String(
          order.paymentStatus || ""
        ).toLowerCase() === "paid"
    );

  }


  function getPendingOrders() {

    return getOrders().filter(
      order =>
        String(
          order.paymentStatus || ""
        ).toLowerCase() === "pending"
    );

  }


  function getRevenue() {

    return getPaidOrders().reduce(
      (total, order) => {

        return total +
          parsePrice(
            order.amount ||
            order.price ||
            0
          );

      },
      0
    );

  }


  /* ---------------------------------------------------------
     WEBSITE HELPERS
  --------------------------------------------------------- */

  function findWebsite(id) {

    if (!id) {
      return null;
    }

    return getWebsites().find(
      website =>
        String(website.id) === String(id)
    ) || null;

  }


  function findWebsiteByTitle(title) {

    if (!title) {
      return null;
    }

    const target =
      String(title)
        .trim()
        .toLowerCase();

    return getWebsites().find(
      website =>
        String(website.title || "")
          .trim()
          .toLowerCase() === target
    ) || null;

  }


  /* ---------------------------------------------------------
     GLOBAL CSS
  --------------------------------------------------------- */

  function injectSharedStyles() {

    if (
      document.getElementById(
        "admin-shared-runtime-style"
      )
    ) {
      return;
    }

    const style =
      document.createElement("style");

    style.id =
      "admin-shared-runtime-style";

    style.textContent = `
      @keyframes adminToastIn {
        from {
          opacity: 0;
          transform: translateY(8px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      body.modal-open {
        overflow: hidden;
      }

      @media (max-width: 640px) {
        #admin-toast-container {
          left: 14px !important;
          right: 14px !important;
          bottom: 14px !important;
        }

        .admin-shared-toast {
          min-width: 0 !important;
          width: 100%;
          max-width: none !important;
        }
      }
    `;

    document.head.appendChild(style);

  }


  /* ---------------------------------------------------------
     AUTO INITIALIZATION
  --------------------------------------------------------- */

  function init() {

    injectSharedStyles();

    setupModalClose();

    setupMobileSidebar();

    setupActiveNavigation();

    setupRoleUI();

    setupLogoutButtons();

  }


  /* ---------------------------------------------------------
     PUBLIC API
  --------------------------------------------------------- */

  window.WebsiteDealsAdmin = {

    STORAGE,

    // Session
    getSession,
    isLoggedIn,
    hasRole,
    requireLogin,
    requireSuperAdmin,
    logout,

    // Storage
    getStorage,
    setStorage,
    removeStorage,

    // Numbers
    formatNumber,
    formatCurrency,
    parsePrice,

    // Dates
    formatDate,
    formatDateTime,
    timeAgo,

    // IDs
    generateId,
    generateShortId,

    // Strings
    slugify,
    escapeHTML,
    capitalize,

    // DOM
    $,
    $$,
    show,
    hide,
    toggle,

    // UI
    toast,
    confirmAction,

    // CSV
    exportCSV,

    // Images
    imageFallback,

    // Modal
    openModal,
    closeModal,

    // Forms
    serializeForm,
    fillForm,

    // Search / sort
    matchesSearch,
    sortBy,
    debounce,

    // Clipboard
    copyText,

    // URL
    getQueryParam,
    setQueryParam,

    // Data
    getWebsites,
    getCategories,
    getOrders,
    getSubscribers,
    getAccounts,
    getSettings,

    // Orders
    getPaidOrders,
    getPendingOrders,
    getRevenue,

    // Websites
    findWebsite,
    findWebsiteByTitle,

    // Init
    init
  };


  /* ---------------------------------------------------------
     START
  --------------------------------------------------------- */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
