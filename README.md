# SBML Lab Website - Complete Package

## 🎉 완성된 웹사이트

Systems Biology and Machine Learning Lab의 완전한 웹사이트입니다.

### ✅ 포함된 페이지 (총 7개)

1. **index.html** - 메인 홈페이지
   - 히어로 섹션
   - 연구 분야 6개 카드
   - 최근 논문 3개
   - 최신 뉴스
   
2. **research.html** - 연구 분야 상세
   - 6개 연구 분야 상세 설명
   - Transcriptional Regulation
   - Genome-Scale Modeling
   - High-Value Bacterial Strains
   - Anti-Microbial Resistance
   - Machine Learning for Biology
   - Energy Systems (Battery, H2)

3. **publications.html** - 논문 목록
   - 년도별 논문 정리
   - Submitted/In Revision
   - 2024, 2023, 2020-2022
   - 특허 목록

4. **members.html** - 랩 멤버
   - PI: Donghyuk Kim, Ph.D.
   - Graduate Students (6명)
   - Undergraduate Researchers (2명)
   - Alumni (Ph.D., M.S., Postdocs)

5. **news.html** - 뉴스 & 성과
   - 2025년 최신 수상 내역
   - 2024년 졸업생
   - 2023년 국제 학회 발표

6. **contact.html** - 연락처
   - 주소: UNIST Building 104-403-1
   - 전화: 052-217-2945
   - 이메일: dkim@unist.ac.kr
   - 오시는 길

7. **software.html** - 소프트웨어
   - 6개 오픈소스 도구
   - ChIP-seq Pipeline
   - Enzyme Predictor
   - Battery SoH Estimator
   - GSM Tools
   - H2 Production Optimizer
   - RNA-seq Suite

### 🎨 디자인 특징

- **색상 테마**: 청록색 (#3D7684)
- **반응형**: 모바일/태블릿/데스크톱 지원
- **일관성**: 모든 페이지 동일한 네비게이션/Footer
- **현대적**: 그라데이션, 카드 레이아웃, 호버 효과

### 🚀 사용 방법

#### 1. 로컬 테스트
```bash
# 브라우저로 index.html 열기
open index.html
# 또는
python -m http.server 8000
# http://localhost:8000 접속
```

#### 2. GitHub Pages 배포
```bash
# 1. GitHub 저장소 생성
git init
git add .
git commit -m "Initial commit: SBML website"

# 2. GitHub에 푸시
git remote add origin https://github.com/username/sbml-lab.git
git branch -M main
git push -u origin main

# 3. Settings → Pages → Source: main branch
# 5분 후 https://username.github.io/sbml-lab 접속
```

#### 3. 커스텀 도메인 (선택)
GitHub Pages Settings에서 Custom domain 설정 가능

### 📝 수정 가이드

#### 색상 변경
각 HTML 파일의 `:root` 부분에서 변경:
```css
:root {
    --primary: #3D7684;  /* 메인 색상 */
    --secondary: #516F75; /* 보조 색상 */
}
```

#### 내용 업데이트
- **논문 추가**: publications.html 수정
- **멤버 추가**: members.html 수정
- **뉴스 추가**: news.html 수정
- **연구 분야 수정**: research.html 수정

#### 이미지 추가
1. `images/` 폴더 생성
2. 이미지 파일 복사
3. HTML에서 경로 변경: `src="images/photo.jpg"`

### 🔧 기술 스택

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (없음 - 순수 HTML/CSS)
- Google Fonts (Noto Sans KR, Inter)
- RemixIcon

### 📱 반응형 브레이크포인트

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### ⚡ 성능

- 빠른 로딩 (외부 의존성 최소)
- SEO 최적화
- 접근성 고려

### 🆘 도움말

문제가 생기면:
1. 브라우저 콘솔 확인 (F12)
2. 파일 인코딩 UTF-8 확인
3. 상대 경로 확인

### 📧 Contact

문의: dkim@unist.ac.kr

---

**Copyright © 2025 Systems Biology and Machine Learning Lab | UNIST**
