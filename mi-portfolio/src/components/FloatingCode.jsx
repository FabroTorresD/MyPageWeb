import React from 'react';
import styles from './FloatingCode.module.css';

export default function FloatingCode() {
    return (
        <div className={styles['floating-code']}>
        <span className={styles['code-char']}> &lt;/&gt; </span>
        <span className={styles['code-char']}>&#123;&#125;</span>
        <span className={styles['code-char']}>;</span>
        <span className={styles['code-char']}>//</span>
        <span className={styles['code-char']}>0x1F</span>
        <span className={styles['code-char']}>func()</span>
        <span className={styles['code-char']}>var</span>
        <span className={styles['code-char']}>λ</span>

        </div>
    )
    }