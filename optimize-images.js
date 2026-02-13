/**
 * Image Optimization Script
 * 모든 이미지에 lazy loading 추가
 *
 * 사용법: 각 HTML 페이지에서 DOMContentLoaded 시 실행
 */

(function() {
    'use strict';

    function optimizeImages() {
        // 모든 img 태그 찾기
        const images = document.querySelectorAll('img:not([loading])');

        images.forEach((img, index) => {
            // 첫 3개 이미지는 즉시 로딩 (Above the fold)
            if (index < 3) {
                img.loading = 'eager';
            } else {
                // 나머지는 lazy loading
                img.loading = 'lazy';
            }

            // alt 속성이 없으면 경고
            if (!img.alt && !img.getAttribute('aria-hidden')) {
                console.warn('Missing alt attribute:', img.src);
            }

            // 이미지 로드 실패 처리
            img.onerror = function() {
                this.style.display = 'none';
                console.error('Failed to load image:', this.src);
            };
        });

        console.log(`✅ Optimized ${images.length} images with lazy loading`);
    }

    // 동적으로 추가된 이미지도 처리
    function observeNewImages() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'IMG') {
                        if (!node.loading) {
                            node.loading = 'lazy';
                        }
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // DOM 로드 시 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            optimizeImages();
            observeNewImages();
        });
    } else {
        optimizeImages();
        observeNewImages();
    }
})();
