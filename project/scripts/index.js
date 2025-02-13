

/* ======== Sidebar Toggle ======== */
function toggleSidebar() {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        document.body.classList.toggle("show-sidebar");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("active");
            document.body.classList.remove("show-sidebar");
        }
    });
}

/* ======== Load Sidebar Toggle ======== */
document.addEventListener("DOMContentLoaded", () => {
    toggleSidebar();
});




document.addEventListener("DOMContentLoaded", () => {


   
   
   
    /* ======== Utility Function to Get Current Page ======== */
    function getCurrentPage() {
        return window.location.pathname.split("/").pop();
    }

    /* ======== Fetch Data from Local JSON File ======== */
    async function fetchGuidesData() {
        try {
            const response = await fetch("data.json");
            if (!response.ok) {
                throw new Error("Failed to load data.");
            }
            const data = await response.json();
            return data.items;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }

    /* ======== Dynamic Content for Home Page ======== */
    async function loadHomePageContent() {
        const guides = await fetchGuidesData();
        const container = document.getElementById("items-container");
        if (container) {
            container.innerHTML = ""; // Clear previous content

            // Display the latest 3 guides only
            guides.slice(0, 4).forEach(item => {
                const div = document.createElement("div");
                div.classList.add("trail");
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="category">${item.category}</span>
                `;
                container.appendChild(div);
            });
        }
    }

    /* ======== Dynamic Content for Hiking Guides Page ======== */
    async function loadGuidesPageContent() {
        const guides = await fetchGuidesData();
        const container = document.getElementById("guides-container");
        if (container) {
            container.innerHTML = ""; // Clear previous content

            // Display all 15 guides
            guides.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("guide");
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="category">${item.category}</span>
                `;
                container.appendChild(div);
            });
        }
    }

    /* ======== Form Submission Handling for Contact Page ======== */
    function handleFormSubmission() {
        const form = document.getElementById("contact-form");
        const toast = document.getElementById("toast");

        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault(); // Prevents page reload

                // Display Toast Notification
                toast.classList.add("show");

                // Clear Form Fields
                form.reset();

                // Hide Toast Notification after 5 seconds
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 5000);
            });
        }
    }

    /* ======== Load Page-Specific Content ======== */
    const currentPage = getCurrentPage();
    switch (currentPage) {
        case "index.html":
        case "": // Handles root URL
            loadHomePageContent();
            break;
        case "guides.html":
            loadGuidesPageContent();
            break;
        case "contact.html":
            handleFormSubmission();
            break;
        default:
            console.log("No dynamic content for this page.");
    }
});
const yearElement = document.querySelector("#year");
const lastModifiedElement = document.querySelector("#lastModified");

const currentDate = new Date();

const formattedDate = currentDate.toLocaleString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h24",
});
yearElement.innerHTML = `
  <span class="highlight">
    ${currentDate.getFullYear()} &copy; Elisha Sunday ✅ Software Engineer ✅ Nigeria
  </span>`;

lastModifiedElement.innerHTML = `
  <span class="lastmodified">
    Last Modification: ${formattedDate}
  </span>`;
