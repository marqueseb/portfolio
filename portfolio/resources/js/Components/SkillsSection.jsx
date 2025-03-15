import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    {
        category: "Frontend",
        items: ["React", "Vue.js", "Next.js", "TailwindCSS", "JavaScript", "TypeScript"]
    },
    {
        category: "Backend",
        items: ["Node.js", "PHP/Laravel", "Python", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        category: "DevOps & Tools",
        items: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Agile/Scrum"]
    },
    {
        category: "Design & UI/UX",
        items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"]
    },
    {
        category: "Mobile",
        items: ["React Native", "Flutter", "iOS/Android Development"]
    },
    {
        category: "Other Skills",
        items: ["RESTful APIs", "GraphQL", "WebSockets", "Testing", "Performance Optimization"]
    }
];

export default function SkillsSection() {
    return (
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl font-bold text-white mb-6">
                    Minhas Habilidades
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Tecnologias e ferramentas que utilizo para criar soluções inovadoras
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            >
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 
                                 hover:transform hover:scale-105 
                                 transition-all duration-300 hover:shadow-2xl
                                 border border-gray-700/50"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            {skillGroup.category}
                        </h3>
                        <ul className="space-y-4">
                            {skillGroup.items.map((skill, skillIndex) => (
                                <motion.li
                                    key={skill}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: skillIndex * 0.1 }}
                                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <svg 
                                        className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M5 13l4 4L19 7" 
                                        />
                                    </svg>
                                    <span className="text-lg">{skill}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}