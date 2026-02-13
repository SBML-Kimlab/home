/* common.js */

// Navigation HTML - Reordered menu with accessibility improvements
function loadNavigation() {
    const navHTML = `
    <nav role="navigation" aria-label="Main navigation">
        <div class="nav-container">
            <a href="index.html" class="logo" aria-label="SBML Lab 홈페이지">
                <img src="Icons/logo.png" alt="SBML Lab Logo" style="height: 75px; vertical-align: left;" loading="lazy">
            </a>

            <ul class="nav-links" role="menubar">
                <li role="none"><a href="index.html" data-page="index.html" role="menuitem">Home</a></li>
                <li role="none"><a href="research.html" data-page="research.html" role="menuitem">Research</a></li>
                <li role="none"><a href="members.html" data-page="members.html" role="menuitem">Members</a></li>
                <li role="none"><a href="publications.html" data-page="publications.html" role="menuitem">Publications</a></li>
                <li role="none"><a href="software.html" data-page="software.html" role="menuitem">Software</a></li>
                <li role="none"><a href="news.html" data-page="news.html" role="menuitem">News</a></li>
                <li role="none"><a href="gallery.html" data-page="gallery.html" role="menuitem">Gallery</a></li>
                <li role="none"><a href="contact.html" data-page="contact.html" role="menuitem">Contact</a></li>
            </ul>

            <button class="menu-toggle" onclick="toggleMenu()" aria-label="메뉴 열기" aria-expanded="false" aria-controls="mobile-menu">
                <i class="ri-menu-line" aria-hidden="true"></i>
            </button>
        </div>

        <div class="mobile-menu" id="mobile-menu" role="menu" aria-hidden="true">
            <a href="index.html" data-page="index.html" role="menuitem">Home</a>
            <a href="research.html" data-page="research.html" role="menuitem">Research</a>
            <a href="members.html" data-page="members.html" role="menuitem">Members</a>
            <a href="publications.html" data-page="publications.html" role="menuitem">Publications</a>
            <a href="software.html" data-page="software.html" role="menuitem">Software</a>
            <a href="news.html" data-page="news.html" role="menuitem">News</a>
            <a href="gallery.html" data-page="gallery.html" role="menuitem">Gallery</a>
            <a href="contact.html" data-page="contact.html" role="menuitem">Contact</a>
        </div>
    </nav>
    `;
    
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;

        // Current page active state
        const path = window.location.pathname;
        let currentPage = path.split("/").pop();
        if (currentPage === "" || currentPage === "/") currentPage = "index.html";
        
        // Desktop Links Active
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });

        // Mobile Links Active
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    }
}

// Mobile menu toggle with accessibility
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const isOpen = mobileMenu.classList.toggle('active');

    // Update ARIA attributes
    menuToggle.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
}

// Footer HTML
function loadFooter() {
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Systems Biology and Machine Learning Lab</h4>
                    <p>Department of Chemical Engineering<br>
                    School of Energy and Chemical Engineering<br>
                    Ulsan National Institute of Science and Technology (UNIST)</p>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <p>
                        Address: 50 UNIST-gil, Ulsan 44919, South Korea<br>
                        Building 104, Room 403-1<br>
                        Tel: 052-217-2945<br>
                        Email: <a href="mailto:dkim@unist.ac.kr">dkim@unist.ac.kr</a>
                    </p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <p>
                        <a href="research.html">Research</a><br>
                        <a href="publications.html">Publications</a><br>
                        <a href="members.html">Members</a><br>
                        <a href="contact.html">Contact</a>
                    </p>
                </div>
            </div>
            <div class="footer-bottom">
                Copyright © 2025 Systems Biology and Machine Learning Lab | All rights reserved<br>
                <span style="font-size: 12px; opacity: 0.8;">Generated with Claude and Gemini</span>
            </div>
        </div>
    </footer>
    `;
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Execute on DOM load
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
});