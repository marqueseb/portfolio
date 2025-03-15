import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import MainLayout from '@/Layouts/MainLayout';
import HeroSection from '@/Components/HeroSection';
import SkillsSection from '@/Components/SkillsSection';
import ProjectsSection from '@/Components/ProjectsSection';
import Section from '@/Components/Section';

export default function Home() {
    return (
        <MainLayout>
            <Head>
                <title>Paulo Souza Marques - Desenvolvedor Web</title>
                <meta name="description" content="Portfólio de Paulo Souza Marques - Desenvolvedor Web Full Stack" />
            </Head>

            <div className="flex flex-col">
                {/* Hero Section */}
                <Section animate={false} className="min-h-screen pt-0">
                    <HeroSection />
                </Section>

                {/* Skills Section */}
                <Section.Skills id="skills" fullWidth>
                    <SkillsSection />
                </Section.Skills>

                {/* Projects Section */}
                <Section.Dark id="projects">
                    <ProjectsSection />
                </Section.Dark>

                {/* Contact Section */}
                <Section.Gradient 
                    id="contact" 
                    className="py-24"
                    containerClassName="max-w-4xl mx-auto"
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-8">
                                Vamos Conversar?
                            </h2>
                            <p className="text-xl text-gray-300 mb-12">
                                Estou sempre interessado em novos projetos e oportunidades de colaboração.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <motion.a
                                    href="mailto:seu-email@exemplo.com"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary"
                                >
                                    <svg 
                                        className="w-5 h-5 mr-2" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                        />
                                    </svg>
                                    Enviar Email
                                </motion.a>

                                <motion.a
                                    href="https://linkedin.com/in/seu-perfil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-outline"
                                >
                                    <svg 
                                        className="w-5 h-5 mr-2" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    LinkedIn
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </Section.Gradient>
            </div>
        </MainLayout>
    );
}