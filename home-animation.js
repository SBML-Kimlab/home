/* home-animation.js - Mobile: Optimized Layout & Perfect Centering */

document.addEventListener('DOMContentLoaded', function() {
    
    const canvas = document.getElementById('metabolic-canvas');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h;
        let morphProgress = 0;
        let morphDirection = 1;
        let nodes = [];
        let blueEdges = [];
        let greenEdges = [];
        let fluxes = [];
        let time = 0;
        let holdTimer = 0; 
        const HOLD_DURATION = 180; 
        let cycleGuide = null;
        let totalCycleEdgesCount = 0; 

        const cfg = { 
            morphSpeed: 0.00333,
            fluxSpeed: 0.015,
            floatSpeed: 0.003,
            blueColor: { r: 80, g: 140, b: 255 },
            greenColor: { r: 34, g: 197, b: 94 }
        };

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function init() {
            nodes = [];
            blueEdges = [];
            greenEdges = [];
            fluxes = [];
            
            const isMobile = w <= 768;

            // [설정] 모바일 최적화: 잘리지 않게 크기 및 위치 조정
            const startXOffset = isMobile ? 0.18 : 0.45; 
            
            // 간격 설정: 모바일일 때 기존 대비 약 1.8배로 키움 (너무 크면 잘림)
            const layerGap = isMobile ? 0.18 : 0.05;     // 가로 간격 적절히 확대
            const nodeGap = isMobile ? 0.15 : 0.11;      // 세로 간격 확대
            const greenOffset = isMobile ? 0.45 : 0.22;  // 파란색-초록색 사이 거리 조정
            
            // 노드 크기: 모바일일 경우 1.2배 가중치 유지
            const baseScale = Math.min(w / 1600, 1) * (isMobile ? 1.8 * 1.2 : 1);

            const bluePositions = [];
            
            // --- Blue Network Construction ---
            // Layer 1 (Input)
            let layerX = w * startXOffset;
            let startY = 0.5 - (3 * nodeGap) / 2;
            for(let i=0; i<4; i++) {
                bluePositions.push({ x: layerX, y: h * (startY + i * nodeGap), size: 6 * baseScale });
            }
            
            // Layer 2 (Hidden 1)
            layerX = w * (startXOffset + layerGap);
            startY = 0.5 - (6 * nodeGap) / 2;
            for(let i=0; i<7; i++) {
                bluePositions.push({ x: layerX, y: h * (startY + i * nodeGap), size: 6 * baseScale });
            }
            
            // Layer 3 (Hidden 2)
            layerX = w * (startXOffset + layerGap * 2);
            startY = 0.5 - (5 * nodeGap) / 2;
            for(let i=0; i<6; i++) {
                bluePositions.push({ x: layerX, y: h * (startY + i * nodeGap), size: 6 * baseScale });
            }
            
            // Layer 4 (Output)
            layerX = w * (startXOffset + layerGap * 3);
            startY = 0.5 - (2 * nodeGap * 1.3) / 2; 
            for(let i=0; i<3; i++) {
                bluePositions.push({ x: layerX, y: h * (startY + i * nodeGap * 1.3), size: 7 * baseScale });
            }
            
            // --- Green Network Construction ---
            const greenPositions = [];
            const mainCX = w * (startXOffset + greenOffset); 
            const mainCY = h * 0.40;
            // 원 반지름 적절히 확대 (0.30h)
            const mainR = h * (isMobile ? 0.30 : 0.18); 
            cycleGuide = { x: mainCX, y: mainCY, r: mainR };

            // 1. Central Circle (8 Nodes)
            const cycleCount = 8;
            const cycleStartAngle = -Math.PI / 2; 
            for (let i = 0; i < cycleCount; i++) {
                const angle = cycleStartAngle + (i / cycleCount) * (Math.PI * 2);
                greenPositions.push({
                    x: mainCX + Math.cos(angle) * mainR,
                    y: mainCY + Math.sin(angle) * mainR,
                    size: (i % 2 === 0) ? 8 * baseScale : 6 * baseScale
                });
            }

            // 부속 구조물 오프셋 (모바일일 경우 1.8배로 확대)
            const trapOffX = w * (isMobile ? 0.15 : 0.05); 
            const trapOffY = h * (isMobile ? 0.15 : 0.10);

            // 2. Trapezoid
            const trapLeftX = mainCX - mainR - trapOffX;
            const trapTopY = mainCY - trapOffY;
            const trapBotY = mainCY + trapOffY;
            
            greenPositions.push({ x: trapLeftX, y: trapTopY, size: 7 * baseScale }); // 8
            greenPositions.push({ x: trapLeftX, y: trapBotY, size: 7 * baseScale }); // 9

            // 3. Zigzag
            const zigStartX = trapLeftX;
            const zigStartY = trapBotY;
            // 지그재그 간격 확대
            const zX1 = w * (isMobile ? 0.03 : 0.01);
            const zX2 = w * (isMobile ? 0.07 : 0.03);
            const zX3 = w * (isMobile ? 0.10 : 0.05);
            // 높이 간격 확대
            const zY1 = h * (isMobile ? 0.10 : 0.08);
            const zY2 = h * (isMobile ? 0.20 : 0.16);
            const zY3 = h * (isMobile ? 0.25 : 0.20);
            const zY4 = h * (isMobile ? 0.30 : 0.24);

            greenPositions.push({ x: zigStartX + zX1, y: zigStartY + zY1, size: 6 * baseScale }); // 10
            greenPositions.push({ x: zigStartX + zX1, y: zigStartY + zY2, size: 5 * baseScale }); // 11
            greenPositions.push({ x: zigStartX + zX2, y: zigStartY + zY3, size: 5 * baseScale }); // 12
            greenPositions.push({ x: zigStartX + zX3, y: zigStartY + zY4, size: 4 * baseScale }); // 13

            // 4. Y-Branch
            const branchRoot = greenPositions[1]; 
            const stemOffX = w * (isMobile ? 0.05 : 0.02);
            const stemX = branchRoot.x + stemOffX;
            const stemY = branchRoot.y - (h * 0.04);
            const branchOffX = w * (isMobile ? 0.04 : 0.015);
            const branchOffY = h * (isMobile ? 0.07 : 0.05);

            greenPositions.push({ x: stemX, y: stemY, size: 6 * baseScale }); // 14
            greenPositions.push({ x: stemX + branchOffX, y: stemY - branchOffY, size: 5 * baseScale }); // 15
            greenPositions.push({ x: stemX + branchOffX, y: stemY + (h*0.03), size: 5 * baseScale }); // 16
            
            // 5. Feeder
            const feedOff1 = w * (isMobile ? 0.05 : 0.02);
            const feedOff2 = w * (isMobile ? 0.10 : 0.04);
            greenPositions.push({ x: trapLeftX - feedOff1, y: trapTopY, size: 6 * baseScale }); // 17
            greenPositions.push({ x: trapLeftX - feedOff2, y: trapTopY, size: 6 * baseScale }); // 18

            // Extra Node
            greenPositions.push({ x: stemX + branchOffX + (w*0.02), y: stemY + (h*0.10), size: 4 * baseScale }); // 19

            // Merge Nodes
            for (let i = 0; i < Math.min(bluePositions.length, greenPositions.length); i++) {
                const isCycleNode = (i < cycleCount);
                // 모바일에서는 움직임(orbit)을 줄여서 정돈된 느낌 유지
                const orbitR = (isCycleNode ? 3 : (10 + Math.random() * 10)) * baseScale * (isMobile ? 0.7 : 1);
                
                nodes.push({
                    blueX: bluePositions[i].x, blueY: bluePositions[i].y, blueSize: bluePositions[i].size,
                    greenX: greenPositions[i] ? greenPositions[i].x : bluePositions[i].x,
                    greenY: greenPositions[i] ? greenPositions[i].y : bluePositions[i].y,
                    greenSize: greenPositions[i] ? greenPositions[i].size : bluePositions[i].size,
                    x: bluePositions[i].x, y: bluePositions[i].y, size: bluePositions[i].size,
                    floatPhaseX: Math.random() * Math.PI * 2, floatPhaseY: Math.random() * Math.PI * 2,
                    floatSpeedX: 0.8 + Math.random() * 0.4, floatSpeedY: 0.6 + Math.random() * 0.6,
                    orbitRadius: orbitR, isMain: true
                });
            }

            // Background Nodes
            for (let i = 0; i < 40; i++) {
                nodes.push({
                    blueX: w * 0.2 + Math.random() * w * 0.5, blueY: Math.random() * h, blueSize: (Math.random() * 1.5 + 0.5) * baseScale,
                    greenX: w * 0.5 + Math.random() * w * 0.4, greenY: Math.random() * h, greenSize: (Math.random() * 1.5 + 0.5) * baseScale,
                    x: w * 0.2 + Math.random() * w * 0.35, y: Math.random() * h, size: (Math.random() * 1.5 + 0.5) * baseScale,
                    floatPhaseX: Math.random() * Math.PI * 2, floatPhaseY: Math.random() * Math.PI * 2,
                    floatSpeedX: 0.5 + Math.random() * 1.0, floatSpeedY: 0.5 + Math.random() * 1.0,
                    orbitRadius: (5 + Math.random() * 10) * baseScale, isMain: false
                });
            }

            // --- Edges ---
            for(let i=0; i<4; i++) for(let j=4; j<11; j++) blueEdges.push({s: i, t: j});
            for(let i=4; i<11; i++) for(let j=11; j<17; j++) blueEdges.push({s: i, t: j});
            for(let i=11; i<17; i++) for(let j=17; j<20; j++) blueEdges.push({s: i, t: j});

            for (let i = 0; i < cycleCount; i++) {
                greenEdges.push({ s: i, t: (i + 1) % cycleCount, isCycle: true, cycleIndex: i });
            }
            totalCycleEdgesCount = cycleCount;

            greenEdges.push({s: 8, t: 7}, {s: 9, t: 5}, {s: 8, t: 9});
            greenEdges.push({s: 9, t: 10}, {s: 10, t: 11}, {s: 11, t: 12}, {s: 12, t: 13});
            greenEdges.push({s: 1, t: 14}, {s: 14, t: 15}, {s: 14, t: 16}, {s: 16, t: 19});
            greenEdges.push({s: 18, t: 17}, {s: 17, t: 8});
        }

        class Flux {
            constructor(path) { this.path = path; this.curr = 0; this.t = 0; this.speed = cfg.fluxSpeed; }
            update() { this.t += this.speed; if(this.t >= 1) { this.t = 0; this.curr++; } }
            draw() {
                if (this.curr >= this.path.length - 1) return false;
                const n1 = nodes[this.path[this.curr]], n2 = nodes[this.path[this.curr + 1]];
                if (!n1 || !n2 || !n1.isMain || !n2.isMain) return false;
                const edge = greenEdges.find(e => (e.s === this.path[this.curr] && e.t === this.path[this.curr+1]) || (e.t === this.path[this.curr] && e.s === this.path[this.curr+1]));
                let x, y;

                if (edge && edge.isCycle && cycleGuide) {
                    const angle1 = Math.atan2(n1.y - cycleGuide.y, n1.x - cycleGuide.x);
                    const angle2 = Math.atan2(n2.y - cycleGuide.y, n2.x - cycleGuide.x);
                    let diff = angle2 - angle1;
                    if (diff > Math.PI) diff -= Math.PI * 2;
                    if (diff < -Math.PI) diff += Math.PI * 2;
                    const currentAngle = angle1 + diff * this.t;
                    const r = Math.sqrt(Math.pow(n1.x - cycleGuide.x, 2) + Math.pow(n1.y - cycleGuide.y, 2));
                    x = cycleGuide.x + Math.cos(currentAngle) * r;
                    y = cycleGuide.y + Math.sin(currentAngle) * r;
                } else {
                    x = n1.x + (n2.x - n1.x) * this.t;
                    y = n1.y + (n2.y - n1.y) * this.t;
                }

                const p = easeInOutCubic(morphProgress);
                const r = cfg.blueColor.r + (cfg.greenColor.r - cfg.blueColor.r) * p;
                const g = cfg.blueColor.g + (cfg.greenColor.g - cfg.blueColor.g) * p;
                const b = cfg.blueColor.b + (cfg.greenColor.b - cfg.blueColor.b) * p;
                ctx.beginPath(); ctx.arc(x, y, n1.size * 0.7, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
                ctx.shadowBlur = 12; ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
                ctx.fill(); ctx.shadowBlur = 0;
                return true;
            }
        }

        function spawnFlux() {
            const p = easeInOutCubic(morphProgress);
            if (p < 0.5) {
                const path = [], layers = [4, 7, 6, 3]; 
                let offset = 0;
                for (let i = 0; i < layers.length; i++) { path.push(offset + Math.floor(Math.random() * layers[i])); offset += layers[i]; }
                fluxes.push(new Flux(path));
            } else {
                const paths = [
                    [18, 17, 8, 7, 0, 1, 14, 15],
                    [18, 17, 8, 9, 5, 4, 3, 2],
                    [8, 9, 10, 11, 12, 13],
                    [0, 1, 2, 3, 4, 5, 6, 7]
                ];
                fluxes.push(new Flux(paths[Math.floor(Math.random() * paths.length)]));
            }
        }

        function loop() {
            ctx.clearRect(0, 0, w, h);
            if (morphDirection === 1 && morphProgress >= 1) {
                morphProgress = 1; holdTimer++;
                if (holdTimer > HOLD_DURATION) { morphDirection = -1; holdTimer = 0; }
            } else if (morphDirection === -1 && morphProgress <= 0) {
                morphProgress = 0; holdTimer++;
                if (holdTimer > HOLD_DURATION) { morphDirection = 1; holdTimer = 0; }
            } else {
                morphProgress += cfg.morphSpeed * morphDirection;
            }
            const p = easeInOutCubic(morphProgress);
            time += 1;
            
            nodes.forEach(node => {
                const baseX = node.blueX + (node.greenX - node.blueX) * p;
                const baseY = node.blueY + (node.greenY - node.blueY) * p;
                const currentFloat = node.isMain ? (node.orbitRadius * p) : node.orbitRadius; 
                node.x = baseX + Math.sin(time * cfg.floatSpeed * node.floatSpeedX + node.floatPhaseX) * currentFloat;
                node.y = baseY + Math.cos(time * cfg.floatSpeed * node.floatSpeedY + node.floatPhaseY) * currentFloat;
                node.size = node.blueSize + (node.greenSize - node.blueSize) * p;
            });
            
            const r = cfg.blueColor.r + (cfg.greenColor.r - cfg.blueColor.r) * p;
            const g = cfg.blueColor.g + (cfg.greenColor.g - cfg.blueColor.g) * p;
            const b = cfg.blueColor.b + (cfg.greenColor.b - cfg.blueColor.b) * p;
            
            ctx.lineWidth = 1.5;
            blueEdges.forEach(e => {
                const n1 = nodes[e.s], n2 = nodes[e.t];
                if (!n1 || !n2 || !n1.isMain || !n2.isMain) return;
                ctx.beginPath(); ctx.moveTo(n1.x, n1.y); ctx.lineTo(n2.x, n2.y);
                ctx.strokeStyle = `rgba(${cfg.blueColor.r}, ${cfg.blueColor.g}, ${cfg.blueColor.b}, ${(1-p)*0.15})`;
                ctx.stroke();
            });
            
            greenEdges.forEach(e => {
                const n1 = nodes[e.s], n2 = nodes[e.t];
                if (!n1 || !n2 || !n1.isMain || !n2.isMain) return;
                if (e.isCycle && cycleGuide) {
                    const angle1 = Math.atan2(n1.y - cycleGuide.y, n1.x - cycleGuide.x);
                    const angle2 = Math.atan2(n2.y - cycleGuide.y, n2.x - cycleGuide.x);
                    let diff = angle2 - angle1;
                    if (diff > Math.PI) diff -= Math.PI * 2;
                    if (diff < -Math.PI) diff += Math.PI * 2;
                    const currentRadius = Math.sqrt(Math.pow(n1.x - cycleGuide.x, 2) + Math.pow(n1.y - cycleGuide.y, 2));
                    let shouldDraw = false; let finalEndAngle = angle1; let currentAlpha = 0;
                    if (morphDirection === 1) {
                        const drawStart = 0.4; const drawEnd = 1.0;
                        if (p > drawStart) {
                            const drawProgress = Math.min(1, (p - drawStart) / (drawEnd - drawStart));
                            const segStep = 1 / (totalCycleEdgesCount || 8);
                            const segStart = e.cycleIndex * segStep;
                            if (drawProgress > segStart) {
                                let segmentProgress = (drawProgress - segStart) / segStep;
                                if (segmentProgress > 1) segmentProgress = 1;
                                finalEndAngle = angle1 + (diff * segmentProgress);
                                currentAlpha = 0.6; shouldDraw = true;
                            }
                        }
                    } else {
                        finalEndAngle = angle1 + diff; currentAlpha = p * 0.6; shouldDraw = true;
                    }
                    if (shouldDraw && currentAlpha > 0.01) {
                        ctx.beginPath(); ctx.arc(cycleGuide.x, cycleGuide.y, currentRadius, angle1, finalEndAngle, diff < 0);
                        ctx.strokeStyle = `rgba(${cfg.greenColor.r}, ${cfg.greenColor.g}, ${cfg.greenColor.b}, ${currentAlpha})`; ctx.stroke();
                    }
                } else {
                    ctx.beginPath(); ctx.moveTo(n1.x, n1.y); ctx.lineTo(n2.x, n2.y);
                    ctx.strokeStyle = `rgba(${cfg.greenColor.r}, ${cfg.greenColor.g}, ${cfg.greenColor.b}, ${p*0.3})`; ctx.stroke();
                }
            });

            nodes.forEach(node => {
                const a = node.isMain ? 0.9 : 0.15;
                ctx.beginPath(); ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`; ctx.fill();
                if (node.isMain) {
                    const pulse = 0.7 + Math.sin(time * 0.025 + node.floatPhaseX) * 0.3;
                    const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2.5 * pulse);
                    grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a*0.6})`);
                    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                    ctx.beginPath(); ctx.arc(node.x, node.y, node.size * 2.5 * pulse, 0, Math.PI * 2);
                    ctx.fillStyle = grad; ctx.fill();
                }
            });

            if (Math.random() < 0.012) spawnFlux();
            fluxes = fluxes.filter(f => { f.update(); return f.draw(); });
            requestAnimationFrame(loop);
        }

        const resize = () => {
            const hero = document.querySelector('.hero');
            if (hero) {
                const rect = hero.getBoundingClientRect();
                w = canvas.width = rect.width;
                h = canvas.height = rect.height; 
                if(window.innerWidth <= 768) {
                     h = canvas.height = canvas.clientWidth * (10/16); 
                }
                init(); 
            }
        };

        window.addEventListener('resize', resize);
        resize(); loop();
    }

    const pubContainer = document.getElementById('recent-pubs');
    if (pubContainer && typeof publicationsData !== 'undefined') {
        let recentPubs = [];
        ["2025", "2024", "2023"].forEach(y => { if(publicationsData[y]?.items) recentPubs.push(...publicationsData[y].items); });
        pubContainer.innerHTML = recentPubs.slice(0, 3).map(item => `
            <div class="pub-card"><h4>${item.title}</h4><span class="authors">${item.authors}</span><br><br><span class="journal">${item.journal}</span></div>
        `).join('');
    }
    
    const newsContainer = document.getElementById('recent-news');
    if (newsContainer && typeof newsData !== 'undefined') {
        newsContainer.innerHTML = newsData.slice(0, 3).map(item => `
            <div class="news-card"><div class="news-date">${item.year}</div><div class="news-title">${item.title}</div><div class="news-desc">${item.desc}</div></div>
        `).join('');
    }
});