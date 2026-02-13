/**
 * Google Analytics 4 (GA4) Integration
 *
 * 설정 방법:
 * 1. https://analytics.google.com/ 접속
 * 2. 계정 생성 및 속성 추가
 * 3. 측정 ID 받기 (G-XXXXXXXXXX 형식)
 * 4. 아래 'YOUR_MEASUREMENT_ID'를 실제 ID로 교체
 */

// Google Analytics 4 측정 ID
const GA_MEASUREMENT_ID = 'G-RBV8JZ77RW'; // TODO: 실제 측정 ID로 교체

// Google Analytics 초기화
(function() {
    'use strict';

    // GA4 스크립트 로드
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // gtag 함수 초기화
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    // GA4 설정
    gtag('config', GA_MEASUREMENT_ID, {
        'anonymize_ip': true,  // IP 익명화 (개인정보 보호)
        'cookie_flags': 'SameSite=None;Secure',  // 쿠키 보안 설정
    });

    // 커스텀 이벤트 추적 헬퍼 함수
    window.trackEvent = function(category, action, label, value) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    };

    // 페이지뷰 자동 추적
    console.log('📊 Google Analytics initialized:', GA_MEASUREMENT_ID);

})();

/**
 * 사용 예시:
 *
 * 1. 논문 다운로드 추적
 * trackEvent('Publications', 'download', 'Paper_Title', 1);
 *
 * 2. 소프트웨어 링크 클릭
 * trackEvent('Software', 'click', 'DiffExo_GitHub', 1);
 *
 * 3. 연락처 이메일 클릭
 * trackEvent('Contact', 'email_click', 'lab_email', 1);
 */
