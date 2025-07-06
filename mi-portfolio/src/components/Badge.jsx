// src/components/Badge.jsx
import React from 'react';
import styles from './Badge.module.css';

/**
 * @param {{ icon: React.ReactNode, onClick?: () => void, className?: string }} props
 */
export default function Badge({ icon, onClick, className = '' }) {
  return (
    <div
      className={`${styles.badge} ${className}`}
      onClick={onClick}
    >
      <div className={styles.icon}>
        {icon}
      </div>
    </div>
  );
}
