/* ==========================================
   1. NAVIGATION HIGHLIGHTING LOGIC
   ========================================== */
document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const currentPage = path.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        link.classList.remove("active");

        // Normal highlighting
        if (linkPage === currentPage) {
            link.classList.add("active");
        } 
        
        // Gallery special case: Keep "Gallery" lit when in sub-folders
        if (currentPage.startsWith("gallery") && linkPage === "gallery.html") {
            link.classList.add("active");
        }

        // About special case: Keep "About" lit when on membership page
        if (currentPage === "membership.html" && linkPage === "about.html") {
            link.classList.add("active");
        }
    });
});

/* ==========================================
   2. BACK TO TOP BUTTON LOGIC
   ========================================== */
const mybutton = document.getElementById("backToTop");

// Show button when user scrolls down 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (mybutton) mybutton.style.display = "block";
    } else {
        if (mybutton) mybutton.style.display = "none";
    }
};

// Smooth scroll to top function
if (mybutton) {
    mybutton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu-links');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Optional: Change ☰ to ✕ when open
            hamburger.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
});
