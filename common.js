/* common.js */

// 1. 네비게이션 HTML 생성
function loadNavigation() {
    const navHTML = `
    <nav>
        <div class="nav-container">
            <a href="index.html" class="logo">
                <img src="Icons/logo.png" alt="SBML Logo" style="height: 75px; vertical-align: left;">
            </a>

            <ul class="nav-links">
                <li><a href="index.html" data-page="index.html">Home</a></li>
                <li><a href="research.html" data-page="research.html">Research</a></li>
                <li><a href="publications.html" data-page="publications.html">Publications</a></li>
                <li><a href="software.html" data-page="software.html">Software</a></li>
                <li><a href="members.html" data-page="members.html">Members</a></li>
                <li><a href="news.html" data-page="news.html">News</a></li>
                <li><a href="gallery.html" data-page="gallery.html">Gallery</a></li>
                <li><a href="contact.html" data-page="contact.html">Contact</a></li>
            </ul>

            <div class="menu-toggle" onclick="toggleMenu()">
                <i class="ri-menu-line"></i>
            </div>
        </div>

        <div class="mobile-menu" id="mobile-menu">
            <a href="index.html" data-page="index.html">Home</a>
            <a href="research.html" data-page="research.html">Research</a>
            <a href="publications.html" data-page="publications.html">Publications</a>
            <a href="software.html" data-page="software.html">Software</a>
            <a href="members.html" data-page="members.html">Members</a>
            <a href="news.html" data-page="news.html">News</a>
            <a href="gallery.html" data-page="gallery.html">Gallery</a>
            <a href="contact.html" data-page="contact.html">Contact</a>
        </div>
    </nav>
    `;
    
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;

        // 현재 페이지 활성화 (Active Class) 로직
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

// [추가됨] 모바일 메뉴 토글 함수
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
}

// 2. 푸터 HTML 생성
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

// 3. 실행
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
});