import React, { useEffect, useState, useRef } from 'react';

// Cursor customizado - versão 2.0
// Changelog:
// - Adicionei suporte pra dispositivos touch (esconde cursor)
// - Melhorei performance com debounce
// - Adicionei efeito de trailing suave
export default function CustomCursor() {
    // Estados principais
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [hover, setHover] = useState(false);
    const [escondido, setEscondido] = useState(true);
    
    // Refs pra performance
    const frame = useRef();
    const ultimoX = useRef(-100);
    const ultimoY = useRef(-100);
    
    useEffect(() => {
        // Só mostra em desktop
        if ('ontouchstart' in window) {
            return;
        }
        
        setEscondido(false);
        
        // Suavização do movimento
        const atualizaPosicao = (e) => {
            cancelAnimationFrame(frame.current);
            
            frame.current = requestAnimationFrame(() => {
                // Interpolação linear pra movimento mais suave
                const novoX = ultimoX.current + (e.clientX - ultimoX.current) * 0.5;
                const novoY = ultimoY.current + (e.clientY - ultimoY.current) * 0.5;
                
                setPos({ x: novoX, y: novoY });
                ultimoX.current = novoX;
                ultimoY.current = novoY;
            });
        };

        // Detecta elementos clicáveis
        const aoEntrar = (e) => {
            const elemento = e.target;
            if (elemento.tagName.toLowerCase() === 'a' ||
                elemento.tagName.toLowerCase() === 'button' ||
                elemento.closest('a') ||
                elemento.closest('button') ||
                elemento.classList.contains('clicavel')) {
                setHover(true);
            }
        };

        const aoSair = () => setHover(false);

        // Event listeners com passive true pra performance
        window.addEventListener('mousemove', atualizaPosicao, { passive: true });
        document.addEventListener('mouseenter', aoEntrar, { capture: true, passive: true });
        document.addEventListener('mouseleave', aoSair, { capture: true, passive: true });

        // Cleanup
        return () => {
            cancelAnimationFrame(frame.current);
            window.removeEventListener('mousemove', atualizaPosicao);
            document.removeEventListener('mouseenter', aoEntrar, { capture: true });
            document.removeEventListener('mouseleave', aoSair, { capture: true });
        };
    }, []);

    // Não renderiza em mobile
    if (escondido) return null;

    return (
        <>
            {/* Ponto central */}
            <div
                className="cursor-dot"
                style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    opacity: hover ? 0.8 : 1
                }}
            />
            {/* Círculo externo */}
            <div
                className={`cursor-circle ${
                    hover ? 'scale-150 bg-indigo-500/10 mix-blend-difference' : ''
                }`}
                style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                }}
            />
        </>
    );
}