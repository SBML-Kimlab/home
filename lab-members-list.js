// Lab Members List for Publication Highlighting
// publications-data.js에 실제로 나타나는 형식만 포함

const labMembersList = [
    // ========================================
    // PI
    // ========================================
    "D Kim",           // Donghyuk Kim (116 appearances)
    
    // ========================================
    // Current Members - Post-doc
    // ========================================
    "I Bang",          // Ina Bang (13 appearances)
    "GM Lee",          // GM Lee (9 appearances)
    
    // ========================================
    // Current Members - Graduate Students
    // ========================================
    "M Jang",          // Minchang Jang (4 appearances)
    "J Woo",           // Jihoon Woo (7 appearances)
    "J Kim",           // Jaehyung Kim (appears as "J Kim")
    "S Kim",           // Seoyoung Kim (appears as "S Kim")
    "LK Nong",         // Gayoung Nong (8 appearances as "LK Nong")
    
    // ========================================
    // Alumni - PhD
    // ========================================
    "S Ko",            // Seyoung Ko (18 appearances)
    "JY Park",         // Joonyoung Park (appears as "JY Park")
    "S Park",          // Seojoung Park (appears as "S Park")
    
    // ========================================
    // Alumni - MS
    // ========================================
    "Y Kim",           // Yunseo Kim (appears as "Y Kim")
    "ZK Scott-Nevros", // Zoe Katherine Scott-Nevros (6 appearances)
    "HMT Nguyen",      // Nguyen Huynh Minh Triet (appears as "HMT Nguyen")
    "J Lim",           // Jaewon Lim (9 appearances)
    "I Kabimoldayev",  // Ilyas Kabimoldayev
    
    // ========================================
    // Alumni - Post-doc
    // ========================================
    "SM Lee",          // Sang-Mok Lee (11 appearances)
    "G Lee",           // G Lee (3 appearances - verify if lab member)
];

// 정확한 매칭을 위한 함수
function isLabMember(authorName) {
    if (!authorName) return false;
    
    // 마커 제거 (#, *)
    const cleanAuthor = authorName.replace(/[#*]/g, '').trim();
    
    // 정확히 일치하는지 확인 (대소문자 무시)
    return labMembersList.some(member => 
        member.toLowerCase() === cleanAuthor.toLowerCase()
    );
}

// 리스트 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { labMembersList, isLabMember };
}