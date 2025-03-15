// Scroll suave customizado
// @autor: eu
// @inspirado em: jquery smooth scroll (mas bem mais leve)
// @modificado: 02/03/2024 - adicionei suporte mobile e correções de bugs

// Config
const CONFIG = {
    duracao: 800,  // mais rápido que 1s padrão
    mobile: {
        duracao: 600,  // ainda mais rápido no mobile
        offset: 60     // compensa header fixo
    },
    minDistancia: 50,  // não anima scrolls muito pequenos
};

// Função principal de scroll
export const scrollSuave = (targetId) => {
    const elemento = document.querySelector(targetId);
    if (!elemento) {
        console.warn(`Elemento ${targetId} não encontrado!`);
        return;
    }

    const posicaoDestino = elemento.getBoundingClientRect().top + window.pageYOffset;
    const posicaoInicial = window.pageYOffset;
    const distancia = posicaoDestino - posicaoInicial;
    
    // Otimização: não anima scrolls muito pequenos
    if (Math.abs(distancia) < CONFIG.minDistancia) {
        window.scrollTo(0, posicaoDestino);
        return;
    }
    
    // Ajusta duração baseado no device
    const duracao = window.innerWidth < 768 ? CONFIG.mobile.duracao : CONFIG.duracao;
    let inicio = null;
    let ultimoTimestamp = null;

    // Função de animação otimizada
    function animar(timestamp) {
        if (!inicio) inicio = timestamp;
        const tempoPassado = timestamp - inicio;
        
        // Evita frames duplicados
        if (ultimoTimestamp === timestamp) {
            requestAnimationFrame(animar);
            return;
        }
        ultimoTimestamp = timestamp;

        // Aplica easing e scroll
        const progresso = Math.min(tempoPassado / duracao, 1);
        const novaPos = posicaoInicial + (distancia * easeOutQuad(progresso));
        
        window.scrollTo(0, novaPos);

        if (tempoPassado < duracao) {
            requestAnimationFrame(animar);
        } else {
            // Garante posição final exata
            window.scrollTo(0, posicaoDestino);
        }
    }

    requestAnimationFrame(animar);
};

// Easing function - versão otimizada
// https://gist.github.com/gre/1650294
function easeOutQuad(t) {
    return t * (2 - t);
}

// Inicializa listeners nos links
export const initScrollSuave = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    if (links.length === 0) {
        console.warn('Nenhum link de âncora encontrado na página');
        return;
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            
            // Pequeno delay pra UI feedback
            requestAnimationFrame(() => {
                scrollSuave(target);
            });
        }, { passive: false }); // importante: passive false pro preventDefault
    });
    
    console.debug(`Scroll suave iniciado: ${links.length} links encontrados`);
};