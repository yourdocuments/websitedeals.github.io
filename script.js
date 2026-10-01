/* =========================================================
   WEBSITE MARKETPLACE
   Main JavaScript
   Version: 1.0.0
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       CONFIGURATION
       ========================================================= */

    const CONFIG = {
        currency: "৳",
        marketplaceName: "Website Marketplace",

        /*
         * Demo mode:
         * true  = local demo websites দেখাবে
         * false = Firebase/API থেকে data নেওয়ার জন্য প্রস্তুত
         */
        demoMode: true,

        /*
         * ভবিষ্যতে Firebase/API যুক্ত করলে এখানে endpoint
         * ব্যবহার করা যাবে।
         */
        apiUrl: "",

        /*
         * বাংলাদেশ-specific website visibility.
         *
         * NOTE:
         * Browser-side country detection 100% secure নয়।
         * Strict country restriction চাইলে server/Cloudflare/Firebase
         * backend level-এ verification করতে হবে।
         */
        enableCountryFilter: true,

        /*
         * বাংলাদেশে থাকলে এই ধরনের website দেখানো যাবে।
         */
        defaultCountry: "BD"
    };


    /* =========================================================
       DEMO WEBSITE DATA
       ========================================================= */

    const demoWebsites = [
        {
            id: "site-001",
            title: "Premium Business Website",
            description:
                "ব্যবসা, কোম্পানি ও professional brand-এর জন্য modern responsive website.",
            category: "Business",
            country: "BD",
            countryName: "Bangladesh",
            price: 4990,
            oldPrice: 6990,
            period: "এককালীন",
            status: "Available",
            badge: "Popular",
            image:
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
            demoUrl: "#",
            features: [
                "Responsive Design",
                "Mobile Friendly",
                "Premium UI",
                "Contact Form"
            ]
        },

        {
            id: "site-002",
            title: "Restaurant & Food Website",
            description:
                "Restaurant, cafe, food delivery এবং food business-এর জন্য conversion-focused website.",
            category: "Restaurant",
            country: "BD",
            countryName: "Bangladesh",
            price: 5990,
            oldPrice: 7990,
            period: "এককালীন",
            status: "Available",
            badge: "New",
            image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            demoUrl: "#",
            features: [
                "Food Menu",
                "WhatsApp Order",
                "Mobile Friendly",
                "Premium Layout"
            ]
        },

        {
            id: "site-003",
            title: "Creative Agency Website",
            description:
                "Digital agency, design studio এবং creative team-এর জন্য ultra-modern portfolio website.",
            category: "Agency",
            country: "BD",
            countryName: "Bangladesh",
            price: 7490,
            oldPrice: 9990,
            period: "এককালীন",
            status: "Available",
            badge: "Premium",
            image:
                "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
            demoUrl: "#",
            features: [
                "Portfolio",
                "Project Showcase",
                "Dark UI",
                "Responsive"
            ]
        },

        {
            id: "site-004",
            title: "E-Commerce Starter",
            description:
                "ছোট ও মাঝারি ব্যবসার জন্য clean এবং responsive online shop starter website.",
            category: "E-Commerce",
            country: "BD",
            countryName: "Bangladesh",
            price: 8990,
            oldPrice: 11990,
            period: "এককালীন",
            status: "Available",
            badge: "Best Value",
            image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
            demoUrl: "#",
            features: [
                "Product Cards",
                "Shopping UI",
                "Mobile Friendly",
                "Modern Checkout"
            ]
        },

        {
            id: "site-005",
            title: "Personal Portfolio Pro",
            description:
                "Designer, developer, freelancer এবং professional-এর জন্য premium personal portfolio.",
            category: "Portfolio",
            country: "BD",
            countryName: "Bangladesh",
            price: 3990,
            oldPrice: 5490,
            period: "এককালীন",
            status: "Available",
            badge: "Starter",
            image:
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
            demoUrl: "#",
            features: [
                "Personal Brand",
                "Portfolio",
                "Skills Section",
                "Contact Section"
            ]
        },

        {
            id: "site-006",
            title: "Monthly Website Pack",
            description:
                "যারা website কিনতে না চেয়ে monthly plan-এ নিতে চান তাদের জন্য flexible website package.",
            category: "Monthly Pack",
            country: "BD",
            countryName: "Bangladesh",
            price: 999,
            oldPrice: 1499,
            period: "/ মাস",
            status: "Available",
            badge: "Monthly",
            image:
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
            demoUrl: "#",
            features: [
                "Website Access",
                "Basic Support",
                "Responsive Design",
                "Monthly Plan"
            ]
        }
    ];


    /* =========================================================
       DOM ELEMENTS
       ========================================================= */

    const websiteList = document.getElementById("website-list");

    const buyModal = document.getElementById("buy-modal");
    const buyForm = document.getElementById("buy-form");

    const buyWebsiteTitle = document.getElementById("buy-website-title");
    const buyMessage = document.getElementById("buy-message");

    const buyWebsiteId = document.getElementById("buy_website_id");
    const buyName = document.getElementById("buy_name");
    const buyEmail = document.getElementById("buy_email");
    const buyPhone = document.getElementById("buy_phone");

    const cancelBuyButton = document.getElementById("cancel-buy-btn");


    /* =========================================================
       STATE
       ========================================================= */

    let allWebsites = [];
    let visibleWebsites = [];

    let selectedWebsite = null;

    let detectedCountry = CONFIG.defaultCountry;


    /* =========================================================
       INIT
       ========================================================= */

    async function init() {
        try {
            showLoadingState();

            detectedCountry = await detectCountry();

            const websites = await loadWebsites();

            allWebsites = Array.isArray(websites) ? websites : [];

            visibleWebsites = filterWebsitesByCountry(allWebsites);

            renderWebsites(visibleWebsites);

            setupEvents();

            updateMarketplaceMeta();

        } catch (error) {
            console.error("Marketplace initialization error:", error);

            showErrorState(
                "Website load করতে সমস্যা হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।"
            );
        }
    }


    /* =========================================================
       LOAD WEBSITES
       ========================================================= */

    async function loadWebsites() {
        /*
         * এখন demo data ব্যবহার করা হচ্ছে।
         *
         * ভবিষ্যতে:
         * CONFIG.demoMode = false
         *
         * করলে API/Firebase integration করা যাবে।
         */

        if (CONFIG.demoMode) {
            return demoWebsites;
        }

        if (!CONFIG.apiUrl) {
            console.warn(
                "API URL সেট করা হয়নি। Demo data ব্যবহার করা হচ্ছে।"
            );

            return demoWebsites;
        }

        try {
            const response = await fetch(CONFIG.apiUrl, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(
                    `API request failed: ${response.status}`
                );
            }

            const data = await response.json();

            if (Array.isArray(data)) {
                return data;
            }

            if (Array.isArray(data.websites)) {
                return data.websites;
            }

            return [];

        } catch (error) {
            console.error("Website API error:", error);

            /*
             * API fail করলে demo data fallback.
             */
            return demoWebsites;
        }
    }


    /* =========================================================
       COUNTRY DETECTION
       ========================================================= */

    async function detectCountry() {
        /*
         * প্রথমে browser language থেকে একটি ধারণা নেওয়া হচ্ছে।
         *
         * এটি exact location নয়।
         * পরে production-এ server-side IP geolocation ব্যবহার করা উচিত।
         */

        try {
            const language =
                navigator.language ||
                navigator.userLanguage ||
                "";

            const timezone =
                Intl.DateTimeFormat().resolvedOptions().timeZone ||
                "";

            const normalizedLanguage = language.toLowerCase();
            const normalizedTimezone = timezone.toLowerCase();

            if (
                normalizedLanguage.includes("bn") &&
                (
                    normalizedTimezone.includes("dhaka") ||
                    normalizedTimezone.includes("asia/dhaka")
                )
            ) {
                return "BD";
            }

            if (
                normalizedTimezone.includes("dhaka") ||
                normalizedTimezone.includes("asia/dhaka")
            ) {
                return "BD";
            }

            /*
             * Browser থেকে নিশ্চিতভাবে country জানা না গেলে
             * default Bangladesh রাখা হচ্ছে।
             */
            return CONFIG.defaultCountry;

        } catch (error) {
            console.warn("Country detection failed:", error);

            return CONFIG.defaultCountry;
        }
    }


    /* =========================================================
       COUNTRY FILTER
       ========================================================= */

    function filterWebsitesByCountry(websites) {
        if (!CONFIG.enableCountryFilter) {
            return websites;
        }

        return websites.filter((website) => {
            if (!website.country) {
                return true;
            }

            return website.country === detectedCountry;
        });
    }


    /* =========================================================
       RENDER WEBSITE CARDS
       ========================================================= */

    function renderWebsites(websites) {
        if (!websiteList) {
            console.error(
                "#website-list element পাওয়া যায়নি।"
            );

            return;
        }

        websiteList.innerHTML = "";

        if (!websites.length) {
            showEmptyState();
            return;
        }

        const fragment = document.createDocumentFragment();

        websites.forEach((website) => {
            const card = createWebsiteCard(website);

            fragment.appendChild(card);
        });

        websiteList.appendChild(fragment);

        /*
         * ছোট animation trigger
         */
        requestAnimationFrame(() => {
            const cards =
                websiteList.querySelectorAll(".website-card");

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("is-visible");
                }, index * 70);
            });
        });
    }


    /* =========================================================
       CREATE WEBSITE CARD
       ========================================================= */

    function createWebsiteCard(website) {
        const article = document.createElement("article");

        article.className = "website-card";

        article.dataset.id = website.id || "";

        const safeTitle = escapeHTML(
            website.title || "Untitled Website"
        );

        const safeDescription = escapeHTML(
            website.description || ""
        );

        const safeCategory = escapeHTML(
            website.category || "Website"
        );

        const safeCountry = escapeHTML(
            website.countryName || "Bangladesh"
        );

        const safeBadge = escapeHTML(
            website.badge || "Available"
        );

        const safeStatus = escapeHTML(
            website.status || "Available"
        );

        const image =
            website.image ||
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85";

        const price = formatPrice(website.price);

        const oldPrice =
            website.oldPrice
                ? formatPrice(website.oldPrice)
                : "";

        const period = escapeHTML(
            website.period || "এককালীন"
        );

        article.innerHTML = `
            <div class="website-card-media">

                <div class="website-card-image-wrap">

                    <img
                        class="website-card-image"
                        src="${escapeAttribute(image)}"
                        alt="${safeTitle}"
                        loading="lazy"
                    >

                    <div class="website-card-overlay"></div>

                    <div class="website-card-top">

                        <span class="badge">
                            ${safeBadge}
                        </span>

                        <span class="country-badge">
                            ${getCountryFlag(website.country)}
                            ${safeCountry}
                        </span>

                    </div>

                    <div class="preview-browser">

                        <div class="preview-browser-bar">
                            <span></span>
                            <span></span>
                            <span></span>

                            <div class="preview-browser-url">
                                marketplace.preview
                            </div>
                        </div>

                        <div class="preview-browser-content">
                            <div class="preview-content-line large"></div>
                            <div class="preview-content-line"></div>
                            <div class="preview-content-line short"></div>

                            <div class="preview-content-grid">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="website-card-body">

                <div class="website-card-category">
                    ${safeCategory}
                </div>

                <h3 class="website-card-title">
                    ${safeTitle}
                </h3>

                <p class="website-card-description">
                    ${safeDescription}
                </p>

                <div class="website-card-meta">

                    <span class="status-badge">
                       
