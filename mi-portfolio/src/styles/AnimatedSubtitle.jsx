// src/components/AnimatedSubtitle.js
import React from 'react';
import { motion } from 'framer-motion';

// Variantes para el contenedor de caracteres
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
};

// Variantes para cada carácter
const charVariants = {
  hidden: { opacity: 0, y: '0.25em' },
  visible: {
    opacity: 1,
    y: '0em',
    transition: {
      duration: 0.3,
    },
  },
};

// Estilos inline para el subtitle adaptativo
const subtitleStyle = {
  fontSize: 'clamp(1.25rem, 5vw, 2rem)', // mínimo, ideal y máximo
  margin: 0,
  lineHeight: 1.2,
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'hidden',
};

export default function AnimatedSubtitle({ text }) {
  return (
    <motion.h1
      style={subtitleStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, idx) => (
        <motion.span key={idx} variants={charVariants}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
