import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    // Gera elementos de estrelas
    const stars = Array.from({ length: 20 }, (_, index) => (
        <div key={index} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 3}s`
        }} />
    ));

    return (
        <section className="hero-container">
            {/* Background com efeito de estrelas */}
            <div className="night-sky">
                {stars}
            </div>

            <div className="hero-content text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Foto de Perfil */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            <img
                                src="https://source.unsplash.com/200x200/?developer"
                                alt="Paulo Souza Marques"
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full 
                                         border-4 border-blue-500 p-1 bg-gray-900
                                         hover:scale-105 transition-transform duration-300"
                            />
                            <motion.div
                                className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 
                                         rounded-full flex items-center justify-center"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <span className="text-white text-xl">👨‍💻</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Nome e Título */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                            Paulo Souza Marques
                        </h1>
                        <div className="text-xl md:text-2xl text-blue-400">
                            <span className="typing-text">Desenvolvedor Full Stack</span>
                        </div>
                    </motion.div>

                    {/* Descrição */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                    >
                        Criando soluções web inovadoras e escaláveis com React, 
                        Laravel e tecnologias modernas.
                    </motion.p>

                    {/* Botões de Ação */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center gap-6 justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <motion.a
                            href="#projects"
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ver Projetos
                        </motion.a>

                        {/* Scroll Indicator entre os botões */}
                        <div className="flex flex-col items-center">
                            <motion.div
                                className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
                                animate={{
                                    y: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <motion.div
                                    className="w-2 h-2 bg-blue-500 rounded-full mx-auto"
                                    animate={{
                                        y: [0, 16, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                            </motion.div>
                        </div>

                        <motion.a
                            href="#contact"
                            className="btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contato
                        </motion.a>
                    </motion.div>

                    {/* Links Sociais */}
                    <motion.div
                        className="flex justify-center space-x-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {[
                            { name: 'GitHub', icon: 'github', url: '#' },
                            { name: 'LinkedIn', icon: 'linkedin', url: '#' },
                            { name: 'Email', icon: 'mail', url: 'mailto:seu-email@exemplo.com' }
                        ].map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
                            >
                                <span className="sr-only">{social.name}</span>
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    {social.icon === 'github' && (
                                        <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    )}
                                    {social.icon === 'linkedin' && (
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    )}
                                    {social.icon === 'mail' && (
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    )}
                                </svg>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}