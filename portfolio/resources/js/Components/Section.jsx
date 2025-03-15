import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ 
    id, 
    children, 
    className = '',
    containerClassName = '',
    bgColor = 'bg-white',
    animate = true,
    fullWidth = false
}) {
    const sectionClasses = `
        relative
        min-h-section
        w-full
        py-section
        flex
        items-center
        justify-center
        overflow-hidden
        ${bgColor}
        ${className}
    `.trim();

    const containerClasses = `
        ${fullWidth ? 'w-full max-w-none' : 'container max-w-content'}
        px-4
        sm:px-6
        lg:px-8
        relative
        z-10
        ${containerClassName}
    `.trim();

    const content = (
        <div className={containerClasses}>
            {children}
        </div>
    );

    if (animate) {
        return (
            <section id={id} className={sectionClasses}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    {content}
                </motion.div>
            </section>
        );
    }

    return (
        <section id={id} className={sectionClasses}>
            {content}
        </section>
    );
}

// Variantes da Seção
Section.Light = (props) => (
    <Section 
        {...props} 
        bgColor="bg-gray-50"
        className={`${props.className || ''} relative`}
    />
);

Section.Dark = (props) => (
    <Section 
        {...props} 
        bgColor="bg-gray-900"
        className={`${props.className || ''} text-white relative`}
    />
);

Section.Gradient = (props) => (
    <Section 
        {...props} 
        bgColor="bg-gradient-to-b from-gray-900 to-gray-800"
        className={`${props.className || ''} text-white relative`}
    />
);

// Variante para Seção de Habilidades
Section.Skills = (props) => (
    <Section.Dark
        {...props}
        containerClassName="max-w-8xl mx-auto"
        className={`
            ${props.className || ''}
            py-24 lg:py-32
            relative
            overflow-visible
        `}
    />
);