# 폴더 구조 재편 가이드 (2026-02-13)

## 📊 변경 사항

### 이전 구조 (39개 파일/폴더)
```
root/
├── [8개 HTML 파일]
├── [10개 JS 파일] (데이터 + 스크립트 섞임)
├── style.css
├── [5개 MD 문서]
├── [4개 이미지 폴더]
├── [백업 파일들]
└── [설정 파일들]
```

### 새 구조 (옵션 1B)
```
root/
├── [HTML 파일들 - 루트 유지]
│   ├── index.html
│   ├── research.html
│   ├── publications.html
│   ├── members.html
│   ├── news.html
│   ├── gallery.html
│   ├── software.html
│   ├── contact.html
│   └── 404.html
│
├── assets/                    # 모든 자산 통합
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data/             # 데이터 파일
│   │   │   ├── members-data.js
│   │   │   ├── publications-data.js
│   │   │   ├── news-data.js
│   │   │   ├── gallery-data.js
│   │   │   ├── software-data.js
│   │   │   ├── research-data.js
│   │   │   └── lab-members-list.js
│   │   └── scripts/          # 스크립트 파일
│   │       ├── common.js
│   │       ├── home-animation.js
│   │       ├── analytics.js
│   │       └── optimize-images.js
│   └── images/               # 이미지 통합
│       ├── members/          # 멤버 프로필
│       ├── research/         # 연구 이미지
│       ├── software/         # 소프트웨어 스크린샷
│       ├── gallery/          # 갤러리 사진
│       └── icons/            # 아이콘 & 로고
│
├── docs/                      # 문서
│   ├── README.md
│   ├── CHANGELOG.md
│   ├── PUBLICATIONS_GUIDE.md
│   ├── SETUP_GUIDE.md
│   ├── SECURITY.md
│   ├── DOCS_SUMMARY.md
│   ├── RESTRUCTURE_GUIDE.md (이 파일)
│   └── backups/              # 백업 파일
│
└── [설정 파일들 - 루트 유지]
    ├── robots.txt
    ├── sitemap.xml
    ├── favicon.svg
    └── googlee0acf451a2a667b6.html (Google 인증)
```

---

## ✅ 개선 효과

### 루트 디렉토리
- **이전**: 39개 파일/폴더 (복잡함)
- **현재**: 13개 (HTML 8개 + 폴더 3개 + 설정 2개)
- **감소**: 67% 줄어듦

### 구조 장점
- ✅ HTML은 루트에서 직접 접근 가능
- ✅ CSS/JS/이미지가 논리적으로 그룹화
- ✅ 데이터와 스크립트 명확히 분리
- ✅ 문서가 별도 폴더로 정리
- ✅ 찾기 쉽고 유지보수 편함

---

## 🔄 변경된 경로

### CSS
- 이전: `style.css`
- 현재: `assets/css/style.css`

### JavaScript - 데이터 파일
- 이전: `members-data.js`
- 현재: `assets/js/data/members-data.js`
- 동일: publications-data.js, news-data.js, gallery-data.js, software-data.js, research-data.js, lab-members-list.js

### JavaScript - 스크립트
- 이전: `common.js`, `home-animation.js`, `analytics.js`, `optimize-images.js`
- 현재: `assets/js/scripts/[파일명]`

### 이미지
| 이전 | 현재 |
|------|------|
| `member-photo/` | `assets/images/members/` |
| `research-photo/` | `assets/images/research/` |
| `software-photo/` | `assets/images/software/` |
| `gallery-photo/` | `assets/images/gallery/` |
| `Icons/` | `assets/images/icons/` |

### 문서
- 이전: `*.md` (루트)
- 현재: `docs/*.md`

---

## 🧹 수동 정리 필요

권한 문제로 자동 삭제되지 않은 빈 폴더들:
```bash
# 수동으로 삭제 필요 (Windows 탐색기 또는 Git Bash)
rm -rf Icons/
rm -rf member-photo/
rm -rf research-photo/
rm -rf software-photo/
rm -rf gallery-photo/
```

---

## 📝 테스트 체크리스트

### 1. 로컬 테스트
```bash
# 간단한 HTTP 서버로 테스트
python -m http.server 8000
# 또는
npx serve .
```

브라우저에서 `http://localhost:8000` 접속 후:
- [ ] 메인 페이지 로딩 확인
- [ ] 스타일이 정상 적용되는지 확인
- [ ] 네비게이션 작동 확인
- [ ] 모든 페이지 방문 (research, publications, members, news, gallery, software, contact)
- [ ] 이미지가 정상 표시되는지 확인
- [ ] 애니메이션 작동 확인 (메인 페이지)
- [ ] 필터 기능 작동 확인 (publications, news)
- [ ] 갤러리 모달 확인

### 2. 브라우저 개발자 도구 확인
- [ ] Console에 에러 없는지 확인
- [ ] Network 탭에서 404 에러 없는지 확인
- [ ] 모든 리소스(CSS/JS/이미지) 정상 로드 확인

### 3. GitHub Pages 배포 후
- [ ] 실제 사이트에서 모든 기능 재확인
- [ ] 모바일에서 테스트
- [ ] 다른 브라우저에서 테스트 (Chrome, Firefox, Safari)

---

## 🚀 배포 방법

### 1. 변경사항 커밋
```bash
git add .
git commit -m "refactor: Reorganize folder structure (Option 1B)

- Move CSS to assets/css/
- Separate JS into assets/js/data/ and assets/js/scripts/
- Consolidate images into assets/images/
- Move documentation to docs/
- Update all paths in HTML files
- Clean up root directory (39 → 13 items)"
```

### 2. 푸시
```bash
git push origin main
```

### 3. GitHub Pages 확인
1-3분 대기 후 사이트 접속하여 확인

---

## ⚠️ 주의사항

### 추가 파일 생성 시
- **이미지**: `assets/images/[카테고리]/` 에 추가
- **데이터 파일**: `assets/js/data/` 에 추가
- **스크립트**: `assets/js/scripts/` 에 추가
- **문서**: `docs/` 에 추가
- **CSS**: `assets/css/` 에 추가

### HTML 파일에서 경로 작성
```html
<!-- CSS -->
<link rel="stylesheet" href="assets/css/style.css">

<!-- JavaScript -->
<script src="assets/js/scripts/common.js"></script>
<script src="assets/js/data/members-data.js"></script>

<!-- 이미지 -->
<img src="assets/images/members/photo.jpg" alt="...">
```

---

## 🔙 롤백 방법 (문제 발생 시)

```bash
# 이전 커밋으로 되돌리기
git log --oneline  # 커밋 해시 확인
git revert <commit-hash>

# 또는 강제 롤백 (주의!)
git reset --hard <previous-commit-hash>
git push -f origin main
```

---

## 📊 파일 개수 비교

| 위치 | 이전 | 현재 | 감소 |
|------|------|------|------|
| 루트 디렉토리 | 39 | 13 | -26 (67%) |
| CSS 파일 | 1 (루트) | 1 (assets/css) | 정리됨 |
| JS 파일 | 10 (루트) | 7+4 (분리) | 정리됨 |
| 이미지 폴더 | 5 (루트) | 5 (assets/images) | 통합됨 |
| 문서 파일 | 6 (루트) | 7 (docs) | 정리됨 |

---

**작업 완료일**: 2026-02-13
**작업자**: Claude AI Assistant
**구조 버전**: 1B (HTML 루트 유지)

모든 기능이 정상 작동하는지 로컬 테스트 후 배포하세요! 🚀
