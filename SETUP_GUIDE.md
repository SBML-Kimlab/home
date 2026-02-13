# 웹사이트 설정 및 최적화 가이드

Google Analytics, 검색엔진 등록, 이미지 최적화, 보안 설정에 대한 통합 가이드입니다.

---

## 📋 목차
1. [Google Analytics 설정](#google-analytics-설정)
2. [검색엔진 등록](#검색엔진-등록)
3. [이미지 최적화](#이미지-최적화)
4. [보안 설정](#보안-설정)

---

## Google Analytics 설정

### 📊 현재 상태
- ✅ `analytics.js` 파일 생성 완료
- ✅ 모든 HTML 페이지에 스크립트 추가 완료
- ❌ 측정 ID 입력 필요

### 🔧 설정 방법

#### 1단계: Google Analytics 계정 만들기

1. https://analytics.google.com/ 접속
2. 구글 계정 로그인
3. "측정 시작" 클릭
4. 계정 만들기:
   - 계정 이름: `SBML Lab`
   - 데이터 공유 옵션 체크
5. 속성 만들기:
   - 속성 이름: `SBML Lab Website`
   - 시간대: `(GMT+09:00) 대한민국 시간`
   - 통화: `대한민국 원 (₩)`
6. 비즈니스 정보:
   - 업종: `교육` 또는 `과학 및 기술`
   - 비즈니스 규모: `소규모 (1-10명)`
7. 데이터 스트림 설정:
   - 플랫폼: `웹`
   - URL: `https://sbml-kimlab.github.io/home/`
   - 스트림 이름: `SBML Lab Website`
   - 향상된 측정: 켜기

#### 2단계: 측정 ID 확인 및 적용

1. 화면 우측 상단에서 측정 ID 복사 (형식: `G-XXXXXXXXXX`)
2. `analytics.js` 파일 수정:
```javascript
const GA_MEASUREMENT_ID = 'G-ABC123XYZ';  // 실제 ID로 변경
```
3. Git 커밋 및 배포:
```bash
git add analytics.js
git commit -m "Add Google Analytics measurement ID"
git push origin main
```

#### 3단계: 작동 확인

1. 웹사이트 접속
2. 브라우저 개발자 도구(F12) → Network 탭
3. `google-analytics.com` 요청 확인
4. Google Analytics → 실시간 보고서에서 방문자 확인

---

## 검색엔진 등록

### 🌐 Google Search Console

#### 1단계: 속성 추가
1. https://search.google.com/search-console 접속
2. "속성 추가" → URL 프리픽스
3. URL 입력: `https://sbml-kimlab.github.io/home/`

#### 2단계: 소유권 확인

**방법 1: HTML 파일 (추천)**
1. Google이 제공하는 HTML 파일 다운로드
2. 루트 폴더에 업로드:
```bash
cp google1234567890abcdef.html /sessions/busy-adoring-hypatia/mnt/sbml_website_v0.3.3/
git add google1234567890abcdef.html
git commit -m "Add Google Search Console verification"
git push origin main
```
3. 1-3분 대기 후 "확인" 클릭

**방법 2: HTML 태그**
모든 HTML의 `<head>`에 추가:
```html
<meta name="google-site-verification" content="your_verification_code" />
```

#### 3단계: Sitemap 제출
1. Search Console → Sitemaps
2. URL 입력: `https://sbml-kimlab.github.io/home/sitemap.xml`
3. "제출" 클릭
4. 상태가 "성공"으로 표시되는지 확인

#### 4단계: 데이터 확인 (7일 후)
- 실적: 클릭 수, 노출 수, 평균 게재 순위
- 검사: 개별 페이지 색인 상태 확인

### 🇰🇷 Naver 웹마스터 도구

#### 1단계: 사이트 등록
1. https://searchadvisor.naver.com/ 접속
2. 네이버 계정 로그인
3. "웹마스터 도구" 클릭
4. URL 입력: `https://sbml-kimlab.github.io/home/`

#### 2단계: 소유권 확인
**HTML 태그 방식:**
```html
<meta name="naver-site-verification" content="your_naver_code" />
```

#### 3단계: RSS/Sitemap 제출
- sitemap.xml: `https://sbml-kimlab.github.io/home/sitemap.xml`

---

## 이미지 최적화

### 📊 권장 규격

| 용도 | 권장 크기 | 포맷 | 최대 용량 |
|------|-----------|------|-----------|
| 프로필 사진 | 400×400px | JPG/WebP | 50KB |
| 연구 이미지 | 1200×800px | JPG/WebP | 200KB |
| 소프트웨어 스크린샷 | 1920×1080px | PNG/WebP | 300KB |
| 갤러리 사진 | 1920×1080px | JPG/WebP | 250KB |
| 로고/아이콘 | 가변 | SVG/PNG | 20KB |

### 🛠️ 최적화 도구

#### TinyPNG (온라인, 추천)
1. https://tinypng.com/ 접속
2. 이미지 드래그 앤 드롭 (최대 20개)
3. "Download All" 클릭
4. **평균 70% 용량 감소**

#### Squoosh (Google)
1. https://squoosh.app/ 접속
2. 이미지 업로드
3. WebP 포맷 선택
4. 품질 75-85% 설정
5. 다운로드

#### ImageMagick (CLI, 대량 처리)
```bash
# 설치
sudo apt install imagemagick  # Ubuntu
brew install imagemagick       # macOS

# JPG 최적화 (품질 85%)
for img in *.jpg; do
    convert "$img" -quality 85 -strip "optimized_$img"
done

# PNG → JPG 변환 (사진)
for img in *.png; do
    convert "$img" -quality 85 "${img%.png}.jpg"
done

# 리사이즈 (너비 1920px)
for img in *.jpg; do
    convert "$img" -resize 1920x -quality 85 "resized_$img"
done
```

#### WebP 변환
```bash
# cwebp 설치
sudo apt install webp

# 일괄 변환
for img in *.jpg; do
    cwebp -q 85 "$img" -o "${img%.jpg}.webp"
done
```

### 📝 최적화 체크리스트
- [ ] 파일 크기 확인: `du -sh member-photo/`
- [ ] 적절한 포맷 사용 (사진→JPG, 아이콘→PNG/SVG)
- [ ] 불필요한 해상도 제거
- [ ] WebP fallback 구현
- [ ] Lazy loading 적용 확인

---

## 보안 설정

### 🔒 적용된 보안 헤더

모든 HTML 파일의 `<head>`에 이미 적용되어 있습니다:

#### 1. Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
               font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net;
               img-src 'self' data: https:;
               connect-src 'self';">
```

#### 2. XSS 방지
```html
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

#### 3. Clickjacking 방지
```html
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
```

#### 4. MIME 스니핑 방지
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
```

#### 5. Referrer 정책
```html
<meta name="referrer" content="strict-origin-when-cross-origin">
```

### 🛡️ GitHub Pages 기본 보안

GitHub Pages는 자동으로 제공:
- ✅ HTTPS 강제 (Let's Encrypt)
- ✅ DDoS 보호 (Cloudflare)
- ✅ CDN 배포

### 📊 보안 점검 도구

#### 온라인 스캐너
1. **Mozilla Observatory**: https://observatory.mozilla.org/
2. **Security Headers**: https://securityheaders.com/
3. **SSL Labs**: https://www.ssllabs.com/ssltest/

#### 점검 방법
1. 해당 사이트 접속
2. URL 입력: `https://sbml-kimlab.github.io/home/`
3. 스캔 실행
4. 점수 및 권장사항 확인

### 🔐 민감 정보 관리

#### .gitignore 설정
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

**주의사항:**
- API 키는 절대 커밋하지 말 것
- 환경 변수는 GitHub Secrets 사용
- Public repository는 항상 공개됨을 인지

---

## ✅ 설정 완료 체크리스트

### Google Analytics
- [ ] GA 계정 생성
- [ ] 측정 ID 받기
- [ ] analytics.js에 ID 입력
- [ ] 배포 후 실시간 보고서 확인

### 검색엔진 등록
- [ ] Google Search Console 소유권 확인
- [ ] sitemap.xml 제출
- [ ] Naver 웹마스터 도구 등록
- [ ] 7일 후 검색 노출 확인

### 이미지 최적화
- [ ] 모든 이미지 크기 확인
- [ ] 대용량 이미지 압축 (TinyPNG)
- [ ] WebP 포맷 변환 고려
- [ ] Lazy loading 작동 확인

### 보안
- [ ] Mozilla Observatory 스캔 (B+ 이상)
- [ ] Security Headers 스캔 (A 등급)
- [ ] HTTPS 작동 확인
- [ ] 민감 정보 커밋 확인

---

## 📚 참고 자료

### 공식 문서
- [Google Analytics 가이드](https://support.google.com/analytics/)
- [Google Search Console 도움말](https://support.google.com/webmasters/)
- [GitHub Pages 문서](https://docs.github.com/en/pages)

### 보안
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Mozilla Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [CSP 가이드](https://content-security-policy.com/)

### 성능
- [web.dev](https://web.dev/) - Google 웹 성능 가이드
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

**최종 업데이트**: 2026-02-13
