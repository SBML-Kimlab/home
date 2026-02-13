# 웹사이트 보안 및 개선 사항

## 📋 적용된 보안 조치

### 1. Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
               font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net;
               img-src 'self' data: https:;
               connect-src 'self';">
```

**설명:**
- `default-src 'self'`: 기본적으로 같은 도메인만 허용
- `script-src`: JavaScript 실행 제한
- `style-src`: CSS 로드 제한
- `img-src`: 이미지 로드 허용 범위
- `connect-src`: API 호출 제한

### 2. XSS Protection
```html
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```
- 브라우저의 XSS 필터 활성화
- 공격 감지 시 페이지 렌더링 차단

### 3. Clickjacking 방지
```html
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
```
- iframe을 통한 클릭재킹 공격 방지
- 같은 도메인 iframe만 허용

### 4. MIME 타입 스니핑 방지
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
```
- 브라우저의 MIME 타입 추측 방지
- 선언된 Content-Type만 사용

### 5. Referrer 정책
```html
<meta name="referrer" content="strict-origin-when-cross-origin">
```
- HTTPS → HTTP 전환 시 Referrer 전송 안 함
- 같은 도메인: 전체 URL 전송
- 다른 도메인: 오리진만 전송

## 🔒 추가 보안 권장 사항

### GitHub Pages 환경

GitHub Pages는 자동으로 다음을 제공합니다:
- ✅ **HTTPS 강제** (Let's Encrypt 인증서)
- ✅ **DDoS 보호** (Cloudflare)
- ✅ **CDN 배포**

### 커스텀 도메인 사용 시

1. **HTTPS 강제 활성화**
   ```
   Repository Settings → Pages → Enforce HTTPS
   ```

2. **DNS CAA 레코드 추가**
   ```
   example.com. CAA 0 issue "letsencrypt.org"
   ```

3. **DNSSEC 활성화** (도메인 제공자에서 설정)

## 🛡️ 입력 검증 (향후 추가 시)

현재는 정적 사이트이므로 해당 사항 없음.
향후 폼 추가 시 다음 적용 권장:

```javascript
// 예시: 이메일 검증
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 예시: XSS 방지
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
```

## 📊 보안 점검 도구

### 온라인 스캐너
1. **Mozilla Observatory**
   - https://observatory.mozilla.org/
   - 보안 헤더 점검

2. **Security Headers**
   - https://securityheaders.com/
   - HTTP 보안 헤더 분석

3. **SSL Labs**
   - https://www.ssllabs.com/ssltest/
   - SSL/TLS 설정 검증

### 브라우저 개발자 도구
```javascript
// 콘솔에서 CSP 정책 확인
console.log(document.querySelector('meta[http-equiv="Content-Security-Policy"]').content);
```

## 🔐 민감 정보 관리

### .gitignore 설정
```
# 민감 정보 제외
.env
*.key
*.pem
config/secrets.json

# 빌드 파일
node_modules/
dist/
.cache/
```

### 환경 변수
- GitHub Pages에서는 직접 환경 변수 사용 불가
- 민감한 API 키는 **절대 커밋하지 말 것**
- 서버리스 함수 사용 시 백엔드에서 관리

## 🚨 보안 사고 대응

### 의심스러운 활동 발견 시

1. **즉시 조치**
   - Repository를 Private으로 전환
   - GitHub Pages 비활성화

2. **영향 분석**
   - git log로 변경 이력 확인
   - 커밋 해시 확인

3. **복구**
   ```bash
   # 특정 커밋으로 되돌리기
   git revert <commit-hash>

   # 강제 푸시 (주의!)
   git push -f origin main
   ```

4. **재배포**
   - 정상 상태 확인 후 Public 전환
   - GitHub Pages 재활성화

## 📝 정기 점검 체크리스트

### 월간 점검
- [ ] 모든 라이브러리 최신 버전 확인
- [ ] 보안 경고 확인 (GitHub Dependabot)
- [ ] 404 에러 로그 확인
- [ ] HTTPS 인증서 갱신 확인

### 분기 점검
- [ ] 보안 스캔 실행 (Observatory, Security Headers)
- [ ] 개인정보 처리 방침 검토
- [ ] 접근성 테스트 (WAVE, Lighthouse)

## 🔗 참고 자료

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Pages 보안 가이드](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Mozilla Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy 가이드](https://content-security-policy.com/)

---

**마지막 업데이트:** 2025-02-12
**담당자:** SBML Lab Webmaster
