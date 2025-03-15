import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Plataforma completa de e-commerce desenvolvida com React e Node.js",
        longDescription: `Um sistema completo de e-commerce que inclui funcionalidades como:
            • Catálogo de produtos com filtros avançados
            • Carrinho de compras em tempo real
            • Sistema de pagamento integrado
            • Painel administrativo completo
            • Gestão de pedidos e estoque`,
        image: "https://via.placeholder.com/600x400",
        technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
        links: {
            live: "https://exemplo.com",
            code: "https://github.com/exemplo"
        },
        featured: true
    },
    {
        id: 2,
        title: "Sistema de Gestão",
        description: "Sistema empresarial para gestão de recursos e projetos",
        longDescription: `Sistema completo de gestão empresarial com:
            • Dashboard interativo com métricas em tempo real
            • Gestão de usuários e permissões
            • Sistema de relatórios customizáveis
            • Módulo de gestão de projetos
            • Integração com APIs externas`,
        image: "https://via.placeholder.com/600x400",
        technologies: ["Laravel", "Vue.js", "PostgreSQL", "Docker"],
        links: {
            live: "https://exemplo.com",
            code: "https://github.com/exemplo"
        },
        featured: true
    }
];

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Meus Projetos</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Conheça alguns dos principais projetos que desenvolvi, demonstrando minhas habilidades
                        e experiência em diferentes tecnologias.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-lg 
                                     hover:shadow-2xl transition-all duration-300 transform 
                                     hover:-translate-y-2"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 
                                             transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg
                                                 hover:bg-blue-700 transition-colors duration-300"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <span className="mr-2">Ver Demo</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg
                                                 hover:bg-gray-900 transition-colors duration-300"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <span className="mr-2">Código</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            <div className="relative aspect-video mb-6">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                            <p className="text-gray-600 mb-6 whitespace-pre-line">
                                {selectedProject.longDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg
                                             hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Ver Demo
                                </a>
                                <a
                                    href={selectedProject.links.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg
                                             hover:bg-gray-900 transition-colors duration-300"
                                >
                                    Ver Código
                                </a>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700
                                         transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}