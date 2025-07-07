// src/components/SkillCard.jsx
import React from 'react';
import styles from './skill.module.css';

export default function SkillCard({ skill }) {
  return <div className={styles.skillCard}>{skill}</div>;
}
