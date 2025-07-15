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
      when: "beforeChildren"
    }
  }
};

// Variantes para cada carácter
const charVariants = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.3
    }
  }
};

export default function AnimatedSubtitle({ text, className }) {
  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-block', overflow: 'hidden' }}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
