document.addEventListener('DOMContentLoaded', function() {
    console.log("Animation Script v8 (Mobile Layout Fixed)");

    const canvas = document.getElementById('metabolic-canvas');
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    const ctx = canvas.getContext('2d', { alpha: false });
    let w, h;
    let animationId;
    let resizeTimeout;
    
    let lastWidth = window.innerWidth;
    let isMobile = false;

    // Animation State
    let morphProgress = 0;
    let morphDirection = 1;
    let holdTimer = 0;
    const HOLD_DURATION = 60;
    
    // Data
    let nodes = [];
    let blueEdges = [];
    let greenEdges = [];
    let particles = []; 

    // Config
    const cfg = { 
        morphSpeed: 0.006,
        particleSpeed: 0.008,
        particleCountDesktop: 30,
        particleCountMobile: 8, 
        blueColor: { r: 60, g: 130, b: 250 },   
        greenColor: { r: 0, g: 255, b: 150 },   
    };

    function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }

    function init() {
        nodes = [];
        blueEdges = [];
        greenEdges = [];
        particles = [];
        
        // CSS에서 position: fixed로 잡았으므로 window 크기를 그대로 씁니다.
        const safeW = window.innerWidth;
        const safeH = window.innerHeight;
        
        const startXOffset = isMobile ? 0.5 : 0.55;

        const centerYRatio = isMobile ? 0.5 : 0.45;
        const baseScale = Math.min(safeW / 1600, 1) * (isMobile ? 0.75 : 1.15); 

        // --- 1. Blue Positions ---
        const bluePositions = [];
        const layerGap = isMobile ? 0.15 : 0.08; 
        const nodeGap = isMobile ? 0.06 : 0.08;  
        const layerBaseY = centerYRatio; 

        // Layer 1
        let layerX = safeW * (isMobile ? 0.28 : startXOffset); 
        let startY = layerBaseY - (3 * nodeGap) / 2;
        for(let i=0; i<4; i++) bluePositions.push({ x: layerX, y: safeH * (startY + i * nodeGap), size: 5 * baseScale });
        
        // Layer 2
        layerX = safeW * (isMobile ? 0.28 + layerGap : startXOffset + layerGap);
        startY = layerBaseY - (6 * nodeGap) / 2;
        for(let i=0; i<7; i++) bluePositions.push({ x: layerX, y: safeH * (startY + i * nodeGap), size: 5 * baseScale });
        
        // Layer 3
        layerX = safeW * (isMobile ? 0.28 + layerGap * 2 : startXOffset + layerGap * 2);
        startY = layerBaseY - (5 * nodeGap) / 2;
        for(let i=0; i<6; i++) bluePositions.push({ x: layerX, y: safeH * (startY + i * nodeGap), size: 5 * baseScale });
        
        // Layer 4
        layerX = safeW * (isMobile ? 0.28 + layerGap * 3 : startXOffset + layerGap * 3);
        startY = layerBaseY - (2 * nodeGap * 1.2) / 2;
        for(let i=0; i<3; i++) bluePositions.push({ x: layerX, y: safeH * (startY + i * nodeGap * 1.2), size: 7 * baseScale });
        
        // --- 2. Green Positions ---
        const greenPositions = [];
        const mx = safeW * (isMobile ? 0.5 : (startXOffset + 0.15)); 
        const my = safeH * centerYRatio; 
        const ms = safeH * (isMobile ? 0.18 : 0.22); 

        greenPositions.push({ x: mx, y: my - ms * 1.3, size: 7 * baseScale }); 
        greenPositions.push({ x: mx, y: my - ms * 0.9, size: 7 * baseScale }); 
        greenPositions.push({ x: mx, y: my - ms * 0.65, size: 5 * baseScale }); 
        greenPositions.push({ x: mx, y: my - ms * 0.4, size: 5 * baseScale }); 
        greenPositions.push({ x: mx, y: my - ms * 0.15, size: 5 * baseScale }); 
        greenPositions.push({ x: mx, y: my + ms * 0.1, size: 8 * baseScale }); 
        greenPositions.push({ x: mx, y: my + ms * 0.35, size: 6 * baseScale }); 

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

        const pppX = mx + ms * 0.6;
        greenPositions.push({ x: pppX, y: my - ms * 0.9, size: 5 * baseScale });
        greenPositions.push({ x: pppX * 1.1, y: my - ms * 0.65, size: 5 * baseScale });
        greenPositions.push({ x: pppX, y: my - ms * 0.4, size: 5 * baseScale });

        greenPositions.push({ x: mx - ms * 0.6, y: my + ms * 0.35, size: 4 * baseScale }); 
        greenPositions.push({ x: mx - ms * 0.6, y: my + ms * 0.1, size: 4 * baseScale }); 
        greenPositions.push({ x: mx + ms * 0.6, y: tcaY, size: 3 * baseScale }); 

        // --- 3. Build Objects ---
        for (let i = 0; i < 20; i++) {
            const bPos = bluePositions[i] || {x:0, y:0, size:0};
            const gPos = greenPositions[i] || {x:0, y:0, size:0};
            nodes.push({
                blue: bPos,
                green: gPos,
                curr: { x: 0, y: 0, size: 0 }
            });
        }

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

        greenEdges.push({ from: 0, to: 1 }); greenEdges.push({ from: 1, to: 2 }); 
        greenEdges.push({ from: 2, to: 3 }); greenEdges.push({ from: 3, to: 4 }); 
        greenEdges.push({ from: 4, to: 5 }); greenEdges.push({ from: 5, to: 6 }); 
        greenEdges.push({ from: 6, to: 7 }); 
        for(let i=7; i<13; i++) greenEdges.push({ from: i, to: i+1 });
        greenEdges.push({ from: 13, to: 7 }); 
        greenEdges.push({ from: 1, to: 14 }); greenEdges.push({ from: 14, to: 15 }); 
        greenEdges.push({ from: 15, to: 16 }); greenEdges.push({ from: 16, to: 2 }); 
        greenEdges.push({ from: 16, to: 3 }); 
        greenEdges.push({ from: 6, to: 17 }); greenEdges.push({ from: 5, to: 18 }); 
        greenEdges.push({ from: 9, to: 19 }); 

        const pCount = isMobile ? cfg.particleCountMobile : cfg.particleCountDesktop;
        for(let i=0; i<pCount; i++) {
            if(greenEdges.length > 0) {
                particles.push({
                    edgeIndex: Math.floor(Math.random() * greenEdges.length),
                    progress: Math.random(),
                    speed: cfg.particleSpeed * (0.8 + Math.random() * 0.4)
                });
            }
        }
    }

    function animate() {
        try {
            if (nodes.length === 0) {
                init();
                animationId = requestAnimationFrame(animate);
                return;
            }

            ctx.fillStyle = 'rgba(2, 6, 23, 1)'; 
            // 캔버스가 fixed이므로 화면 전체를 그냥 덮으면 됩니다.
            ctx.fillRect(0, 0, canvas.width, canvas.height);

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
            
            const r = Math.round(cfg.blueColor.r + (cfg.greenColor.r - cfg.blueColor.r) * t);
            const g = Math.round(cfg.blueColor.g + (cfg.greenColor.g - cfg.blueColor.g) * t);
            const b = Math.round(cfg.blueColor.b + (cfg.greenColor.b - cfg.blueColor.b) * t);
            const mainColor = `rgb(${r},${g},${b})`;

            // Update Nodes
            nodes.forEach(n => {
                n.curr.x = n.blue.x + (n.green.x - n.blue.x) * t;
                n.curr.y = n.blue.y + (n.green.y - n.blue.y) * t;
                n.curr.size = Math.max(0.1, n.blue.size + (n.green.size - n.blue.size) * t);
            });

            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';

            // Draw Blue Edges
            if (t < 0.9) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${cfg.blueColor.r},${cfg.blueColor.g},${cfg.blueColor.b}, ${0.15 * (1-t)})`;
                for (let i = 0; i < blueEdges.length; i++) {
                    const e = blueEdges[i];
                    const n1 = nodes[e.from];
                    const n2 = nodes[e.to];
                    if(n1 && n2) {
                        ctx.moveTo(n1.curr.x, n1.curr.y);
                        ctx.lineTo(n2.curr.x, n2.curr.y);
                    }
                }
                ctx.stroke();
            }

            // Draw Green Edges
            if (t > 0.1) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${cfg.greenColor.r},${cfg.greenColor.g},${cfg.greenColor.b}, ${0.3 * t})`;
                
                if (!isMobile) {
                    ctx.shadowBlur = 10 * t;
                    ctx.shadowColor = cfg.greenColor;
                }
                
                for (let i = 0; i < greenEdges.length; i++) {
                    const e = greenEdges[i];
                    const n1 = nodes[e.from];
                    const n2 = nodes[e.to];
                    if(n1 && n2) {
                        ctx.moveTo(n1.curr.x, n1.curr.y);
                        ctx.lineTo(n2.curr.x, n2.curr.y);
                    }
                }
                ctx.stroke();
                
                if (!isMobile) ctx.shadowBlur = 0;
            }

            // Draw Particles
            if (t > 0.5) {
                const particleOpacity = (t - 0.5) * 2; 
                ctx.fillStyle = `rgba(255, 255, 255, ${particleOpacity})`;
                ctx.beginPath();
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    const edge = greenEdges[p.edgeIndex];
                    if(!edge) continue;

                    const n1 = nodes[edge.from].curr;
                    const n2 = nodes[edge.to].curr;

                    p.progress += p.speed;
                    if(p.progress >= 1) {
                        p.progress = 0;
                        p.edgeIndex = (p.edgeIndex + 1) % greenEdges.length;
                    }

                    const px = n1.x + (n2.x - n1.x) * p.progress;
                    const py = n1.y + (n2.y - n1.y) * p.progress;
                    
                    ctx.moveTo(px, py); 
                    ctx.arc(px, py, 1.5, 0, Math.PI*2);
                }
                ctx.fill();
            }

            // Draw Nodes
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                ctx.beginPath();
                
                if (!isMobile) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = mainColor;
                }

                ctx.fillStyle = mainColor;
                // 안전장치 유지
                const pulse = Math.sin((Date.now() * 0.002) + i) * 2; 
                let finalSize = n.curr.size + (t > 0.8 ? pulse * 0.5 : 0);
                finalSize = Math.max(0.1, finalSize);

                ctx.arc(n.curr.x, n.curr.y, finalSize, 0, Math.PI * 2);
                ctx.fill();
                
                if (!isMobile) ctx.shadowBlur = 0;

                ctx.fillStyle = 'rgba(255,255,255,0.6)';
                ctx.beginPath();
                ctx.arc(n.curr.x, n.curr.y, Math.max(0, n.curr.size * 0.4), 0, Math.PI * 2);
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);

        } catch (e) {
            console.error("Animation Loop Error:", e);
            setTimeout(() => requestAnimationFrame(animate), 1000);
        }
    }

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2); 
        
        // [수정 전] 브라우저마다 값이 다른 window.inner... 사용
        // w = window.innerWidth;
        // h = window.innerHeight;

        // [수정 후] CSS가 잡아놓은(100dvh) 실제 캔버스 크기를 믿고 그대로 가져옴 (가장 정확함)
        w = canvas.clientWidth || window.innerWidth;
        h = canvas.clientHeight || window.innerHeight;
        
        isMobile = w <= 768;

        canvas.width = w * dpr;
        canvas.height = h * dpr;
        
        // CSS가 이미 크기를 잡고 있으므로 style.width/height 강제 주입 코드 제거 가능하지만,
        // 안전을 위해 동기화만 시켜줍니다.
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        
        ctx.setTransform(1, 0, 0, 1, 0, 0); 
        ctx.scale(dpr, dpr);
        
        init();
    }
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 200);
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            cancelAnimationFrame(animationId);
            animate();
        }
    });

    resize();
    animate();
});