import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// TODO: Otimizar performance em telas menores
// Bug conhecido: particles piscam em alguns navegadores - resolver depois
export default function ParticleBackground() {
    useEffect(() => {
        // Setup inicial do canvas - importante manter proporção com a tela
        const bgCanvas = document.createElement('canvas');
        const context = bgCanvas.getContext('2d');
        const animContainer = document.getElementById('particles-container');
        
        if (!animContainer) return;
        
        animContainer.appendChild(bgCanvas);
        bgCanvas.width = animContainer.offsetWidth;
        bgCanvas.height = animContainer.offsetHeight;

        // Ajustado pra minha tela - testar em outros tamanhos depois
        const particulas = [];
        const NUM_PARTICULAS = window.innerWidth < 768 ? 50 : 100; // mobile friendly

        // Classe principal de partículas - baseada no meu projeto anterior
        class Particula {
            constructor() {
                // Posição aleatória inicial
                this.x = Math.random() * bgCanvas.width;
                this.y = Math.random() * bgCanvas.height;
                // Velocidade - ajustada depois de muito teste
                this.velX = (Math.random() * 2 - 1) * 0.8;
                this.velY = (Math.random() * 2 - 1) * 0.8;
                this.tamanho = Math.random() * 2.5;
            }

            // Renderiza partícula na tela
            desenhar() {
                context.beginPath();
                context.arc(this.x, this.y, this.tamanho, 0, Math.PI * 2);
                // Cor levemente azulada pra combinar com tema escuro
                context.fillStyle = 'rgba(200, 220, 255, 0.4)';
                context.fill();
            }

            // Atualiza posição e lida com colisões
            atualizar() {
                // Move partícula
                this.x += this.velX;
                this.y += this.velY;

                // Faz quicar nas bordas - efeito mais natural
                if (this.x <= 0 || this.x >= bgCanvas.width) {
                    this.velX *= -0.95; // perde um pouco de energia
                    this.x = Math.max(0, Math.min(this.x, bgCanvas.width));
                }
                if (this.y <= 0 || this.y >= bgCanvas.height) {
                    this.velY *= -0.95;
                    this.y = Math.max(0, Math.min(this.y, bgCanvas.height));
                }
            }
        }

        // Cria pool inicial de partículas
        for (let i = 0; i < NUM_PARTICULAS; i++) {
            particulas.push(new Particula());
        }

        // Conecta partículas próximas com linhas
        function conectarParticulas() {
            const DIST_MAX = window.innerWidth < 768 ? 80 : 120;
            
            for (let i = 0; i < particulas.length; i++) {
                for (let j = i + 1; j < particulas.length; j++) {
                    const dx = particulas[i].x - particulas[j].x;
                    const dy = particulas[i].y - particulas[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < DIST_MAX) {
                        context.beginPath();
                        // Linha mais forte quando partículas mais próximas
                        const opacidade = 0.15 - (dist/DIST_MAX) * 0.15;
                        context.strokeStyle = `rgba(200, 220, 255, ${opacidade})`;
                        context.lineWidth = 0.6;
                        context.moveTo(particulas[i].x, particulas[i].y);
                        context.lineTo(particulas[j].x, particulas[j].y);
                        context.stroke();
                    }
                }
            }
        }

        let frameCount = 0;
        function animar() {
            context.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
            
            particulas.forEach(part => {
                part.atualizar();
                part.desenhar();
            });

            // Otimização: só conecta a cada 2 frames
            if (frameCount % 2 === 0) {
                conectarParticulas();
            }
            frameCount++;
            
            requestAnimationFrame(animar);
        }

        animar();

        // Handler de resize otimizado
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                bgCanvas.width = animContainer.offsetWidth;
                bgCanvas.height = animContainer.offsetHeight;
            }, 250);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            animContainer.removeChild(bgCanvas);
        };
    }, []);

    return (
        <div
            id="particles-container"
            className="absolute inset-0 overflow-hidden select-none"
            style={{ zIndex: 0 }}
        />
    );
}