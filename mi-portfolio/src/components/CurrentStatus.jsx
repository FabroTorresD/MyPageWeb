import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import styles from './CurrentStatus.module.css';

export default function CurrentStatus({ year, major, status }) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <FaGraduationCap className={styles.icon} />
        <h3 className={styles.title}>Current Status</h3>
      </header>

      <div className={styles.grid}>
        <div className={styles.row}>
          <span className={styles.label}>Study Year</span>
          <span className={styles.value}>{year}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Major</span>
          <span className={styles.value}>{major}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Status</span>
          <span className={styles.valueHighlight}>{status}</span>
        </div>
      </div>
    </section>
)}