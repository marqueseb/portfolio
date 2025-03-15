import React, { useEffect, useRef } from 'react';

// Minha implementação simplificada de reveal no scroll
// @autor: eu
// @inspiração: AOS mas sem dependências extras
export default function ScrollReveal() {
    // Ref pro debounce do scroll
    const timerScroll = useRef(null);
    
    useEffect(() => {
        // Detecta elementos e aplica animação
        const verificaElementos = () => {
            const elementos = document.querySelectorAll('.reveal');
            const alturaTela = window.innerHeight;
            // Ajuste pra diferentes tamanhos de tela
            const margem = window.innerWidth < 768 ? 100 : 150;

            elementos.forEach((el) => {
                if (!el.classList.contains('active')) {
                    const posicao = el.getBoundingClientRect().top;
                    if (posicao < alturaTela - margem) {
                        el.classList.add('active');
                    }
                }
            });
        };

        // Handler com debounce básico
        const onScroll = () => {
            if (timerScroll.current) {
                clearTimeout(timerScroll.current);
            }
            timerScroll.current = setTimeout(verificaElementos, 50);
        };

        window.addEventListener('scroll', onScroll);
        
        // Primeira verificação com delay
        setTimeout(verificaElementos, 100);

        // Cleanup
        return () => {
            if (timerScroll.current) {
                clearTimeout(timerScroll.current);
            }
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    // Componente utilitário - não renderiza nada
    return null;
}