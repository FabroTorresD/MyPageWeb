// src/components/FloatingTitle.jsx
import React from 'react';
import styles from './FloatingTitle.module.css';

export default function FloatingTitle({ text }) {
    return (
        <h1 className={styles.title}>
            {text}
        </h1>
    );
}
