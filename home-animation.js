/* * High-End E. coli Central Metabolism Animation (Position Fixed)
 * Features: Morphing, Metabolic Flux Particles, Neon Glow
 * Fixed: Adjusted layout to prevent overlap with hero text
 */

document.addEventListener('DOMContentLoaded', function() {
    
    const canvas = document.getElementById('metabolic-canvas');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h;
        
        // Animation State
        let morphProgress = 0;
        let morphDirection = 1;
        let holdTimer = 0;
        const HOLD_DURATION = 150; 
        let time = 0;
        
        // Data Structures
        let nodes = [];
        let blueEdges = [];
        let greenEdges = [];
        let particles = []; 

        // Configuration
        const cfg = { 
            morphSpeed: 0.006,
            particleSpeed: 0.008,
            particleCount: 40,
            blueColor: { r: 60, g: 130, b: 250 },   
            greenColor: { r: 0, g: 255, b: 150 },   
            nodeBaseSize: 4
        };

        function easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
        }

        // --- Initialization ---
        function init() {
            nodes = [];
            blueEdges = [];
            greenEdges = [];
            particles = [];
            
            const isMobile = w <= 968; // 태블릿 포함 모바일 기준 변경
            
            // [위치 수정 핵심] 
            // PC: 0.55 (화면의 55% 지점부터 시작하여 텍스트와 겹침 방지)
            // Mobile: 0.1 (화면 중앙 근처)
            const startXOffset = isMobile ? 0.1 : 0.55; 
            
            const baseScale = Math.min(w / 1600, 1) * (isMobile ? 1.2 : 1);

            // ------------------------------------------------
            // 1. Blue Network Positions (Deep Learning Layers)
            // ------------------------------------------------
            const bluePositions = [];
            const layerGap = isMobile ? 0.25 : 0.08; // 레이어 간격
            const nodeGap = isMobile ? 0.10 : 0.08;  // 노드 간격
            
            // Layer 1 (Input)
            let layerX = w * startXOffset;
            let startY = 0.5 - (3 * nodeGap) / 2;
            for(let i=0; i<4; i++) bluePositions.push({ x: layerX, y: h * (startY + i * nodeGap), size: 5 * baseScale });
            
            // Layer 2 (Hidden)
            layerX = w * (startXOffset + layerGap);
            startY = 0.5 - (6 * nodeGap) / 2;
            for(let i=0; i<7; i++) bluePositions.push({ x: layerX, y: h * (startY + i * nodeGap), size: 5 * baseScale });
            
            // Layer 3 (Hidden)
            layerX = w * (startXOffset + layerGap * 2);
            startY = 0.5 - (5 * nodeGap) / 2;
            for(let i=0; i<6; i++) bluePositions.push({ x: layerX, y: h * (startY + i * nodeGap), size: 5 * baseScale });
            
            // Layer 4 (Output)
            layerX = w * (startXOffset + layerGap * 3);
            startY = 0.5 - (2 * nodeGap * 1.2) / 2;
            for(let i=0; i<3; i++) bluePositions.push({ x: layerX, y: h * (startY + i * nodeGap * 1.2), size: 7 * baseScale });
            

            // ------------------------------------------------
            // 2. Green Network Positions (Real E. coli Map)
            // ------------------------------------------------
            const greenPositions = [];
            
            // [Green Network 중심 위치]
            // PC: Blue Network 시작점 + 0.15 (약 70% 지점) -> 화면 오른쪽 1/3 영역에 배치
            const mx = w * (isMobile ? 0.5 : (startXOffset + 0.15)); 
            const my = h * 0.5; 
            const ms = h * (isMobile ? 0.35 : 0.22); 

            // [0] Glucose (Extracellular) - Top
            greenPositions.push({ x: mx, y: my - ms * 1.3, size: 7 * baseScale });
            
            // [1] G6P (Branch point)
            greenPositions.push({ x: mx, y: my - ms * 0.9, size: 7 * baseScale });

            // [2] F6P
            greenPositions.push({ x: mx, y: my - ms * 0.65, size: 5 * baseScale });

            // [3] GAP/DHAP
            greenPositions.push({ x: mx, y: my - ms * 0.4, size: 5 * baseScale });

            // [4] PEP
            greenPositions.push({ x: mx, y: my - ms * 0.15, size: 5 * baseScale });

            // [5] Pyruvate (Hub)
            greenPositions.push({ x: mx, y: my + ms * 0.1, size: 8 * baseScale });

            // [6] Acetyl-CoA (Entry to TCA)
            greenPositions.push({ x: mx, y: my + ms * 0.35, size: 6 * baseScale });

            // --- TCA Cycle (7 nodes circle) ---
            const tcaY = my + ms * 0.75;
            const tcaR = ms * 0.4;
            
            for(let i=0; i<7; i++) {
                const angle = -Math.PI/2 + (i/7) * Math.PI * 2;
                greenPositions.push({
                    x: mx + Math.cos(angle) * tcaR,
                    y: tcaY + Math.sin(angle) * tcaR,
                    size: 5 * baseScale
                });
            }

            // --- PPP (Pentose Phosphate Pathway) ---
            const pppX = mx + ms * 0.6;
            greenPositions.push({ x: pppX, y: my - ms * 0.9, size: 5 * baseScale }); // 6PG
            greenPositions.push({ x: pppX * 1.1, y: my - ms * 0.65, size: 5 * baseScale }); // R5P
            greenPositions.push({ x: pppX, y: my - ms * 0.4, size: 5 * baseScale }); // S7P/E4P

            // --- Excretion / Byproducts ---
            // Node 17: Acetate
            greenPositions.push({ x: mx - ms * 0.6, y: my + ms * 0.35, size: 4 * baseScale });
            // Node 18: Lactate
            greenPositions.push({ x: mx - ms * 0.6, y: my + ms * 0.1, size: 4 * baseScale });
            // Node 19: CO2
            greenPositions.push({ x: mx + ms * 0.6, y: tcaY, size: 3 * baseScale });


            // ------------------------------------------------
            // 3. Create Nodes & Edges
            // ------------------------------------------------
            for (let i = 0; i < 20; i++) {
                nodes.push({
                    blue: bluePositions[i],
                    green: greenPositions[i],
                    curr: { x: 0, y: 0, size: 0 }
                });
            }

            // Blue Edges
            const layers = [4, 7, 6, 3];
            let offset = 0;
            for (let l = 0; l < layers.length - 1; l++) {
                for (let i = 0; i < layers[l]; i++) {
                    for (let j = 0; j < layers[l+1]; j++) {
                        blueEdges.push({ from: offset + i, to: offset + layers[l] + j });
                    }
                }
                offset += layers[l];
            }

            // Green Edges
            greenEdges.push({ from: 0, to: 1 }); 
            greenEdges.push({ from: 1, to: 2 }); 
            greenEdges.push({ from: 2, to: 3 }); 
            greenEdges.push({ from: 3, to: 4 }); 
            greenEdges.push({ from: 4, to: 5 }); 
            greenEdges.push({ from: 5, to: 6 }); 

            // TCA
            greenEdges.push({ from: 6, to: 7 }); 
            for(let i=7; i<13; i++) greenEdges.push({ from: i, to: i+1 });
            greenEdges.push({ from: 13, to: 7 }); 

            // PPP
            greenEdges.push({ from: 1, to: 14 }); 
            greenEdges.push({ from: 14, to: 15 }); 
            greenEdges.push({ from: 15, to: 16 }); 
            greenEdges.push({ from: 16, to: 2 }); 
            greenEdges.push({ from: 16, to: 3 }); 

            // Byproducts
            greenEdges.push({ from: 6, to: 17 }); 
            greenEdges.push({ from: 5, to: 18 }); 
            greenEdges.push({ from: 9, to: 19 }); 

            // Initialize Particles
            for(let i=0; i<cfg.particleCount; i++) {
                particles.push({
                    edgeIndex: Math.floor(Math.random() * greenEdges.length),
                    progress: Math.random(),
                    speed: cfg.particleSpeed * (0.8 + Math.random() * 0.4)
                });
            }
        }

        // --- Render Loop ---
        function animate() {
            ctx.fillStyle = 'rgba(2, 6, 23, 1)'; 
            ctx.fillRect(0, 0, w, h);
            
            time += 0.01;

            if (holdTimer > 0) {
                holdTimer++;
                if (holdTimer > HOLD_DURATION) {
                    holdTimer = 0;
                    morphDirection *= -1;
                }
            } else {
                morphProgress += morphDirection * cfg.morphSpeed;
                if (morphProgress >= 1) { morphProgress = 1; holdTimer = 1; }
                if (morphProgress <= 0) { morphProgress = 0; holdTimer = 1; }
            }

            const t = easeInOutQuart(morphProgress);

            nodes.forEach(n => {
                n.curr.x = n.blue.x + (n.green.x - n.blue.x) * t;
                n.curr.y = n.blue.y + (n.green.y - n.blue.y) * t;
                n.curr.size = n.blue.size + (n.green.size - n.blue.size) * t;
            });

            const r = Math.round(cfg.blueColor.r + (cfg.greenColor.r - cfg.blueColor.r) * t);
            const g = Math.round(cfg.blueColor.g + (cfg.greenColor.g - cfg.blueColor.g) * t);
            const b = Math.round(cfg.blueColor.b + (cfg.greenColor.b - cfg.blueColor.b) * t);
            const mainColor = `rgb(${r},${g},${b})`;

            // Draw Edges
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';

            if (t < 0.9) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${cfg.blueColor.r},${cfg.blueColor.g},${cfg.blueColor.b}, ${0.15 * (1-t)})`;
                blueEdges.forEach(e => {
                    ctx.moveTo(nodes[e.from].curr.x, nodes[e.from].curr.y);
                    ctx.lineTo(nodes[e.to].curr.x, nodes[e.to].curr.y);
                });
                ctx.stroke();
            }

            if (t > 0.1) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${cfg.greenColor.r},${cfg.greenColor.g},${cfg.greenColor.b}, ${0.3 * t})`;
                ctx.shadowBlur = 10 * t;
                ctx.shadowColor = cfg.greenColor;
                
                greenEdges.forEach(e => {
                    ctx.moveTo(nodes[e.from].curr.x, nodes[e.from].curr.y);
                    ctx.lineTo(nodes[e.to].curr.x, nodes[e.to].curr.y);
                });
                ctx.stroke();
                ctx.shadowBlur = 0;
            }

            if (t > 0.5) {
                const particleOpacity = (t - 0.5) * 2; 
                ctx.fillStyle = `rgba(255, 255, 255, ${particleOpacity})`;
                
                particles.forEach(p => {
                    const edge = greenEdges[p.edgeIndex];
                    if(!edge) return;
                    const n1 = nodes[edge.from].curr;
                    const n2 = nodes[edge.to].curr;
                    p.progress += p.speed;
                    if(p.progress >= 1) {
                        p.progress = 0;
                        if(Math.random() > 0.5) p.edgeIndex = Math.floor(Math.random() * greenEdges.length);
                    }
                    const px = n1.x + (n2.x - n1.x) * p.progress;
                    const py = n1.y + (n2.y - n1.y) * p.progress;
                    ctx.beginPath();
                    ctx.arc(px, py, 1.5, 0, Math.PI*2);
                    ctx.fill();
                });
            }

            // Draw Nodes
            nodes.forEach((n, i) => {
                ctx.beginPath();
                const pulse = Math.sin(time * 2 + i) * 2;
                ctx.shadowBlur = 15;
                ctx.shadowColor = mainColor;
                ctx.fillStyle = mainColor;
                ctx.arc(n.curr.x, n.curr.y, n.curr.size + (t > 0.8 ? pulse * 0.5 : 0), 0, Math.PI * 2);
                ctx.fill();
                
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(255,255,255,0.6)';
                ctx.beginPath();
                ctx.arc(n.curr.x, n.curr.y, n.curr.size * 0.4, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            if (window.innerWidth <= 968) {
                const rect = canvas.getBoundingClientRect();
                w = rect.width;
                h = rect.height;
            } else {
                w = window.innerWidth;
                h = window.innerHeight;
            }
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.scale(dpr, dpr);
            init();
        }

        window.addEventListener('resize', resize);
        resize();
        animate();
    }
});