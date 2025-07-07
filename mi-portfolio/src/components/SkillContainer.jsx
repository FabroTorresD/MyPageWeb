// src/components/SkillContainer.jsx
import React from 'react';
import { Star } from 'lucide-react';
import styles from './skill.module.css';
import SkillCard from './SkillCard';

export default function SkillContainer({ skills = [], learningText = '' }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Star className={styles.icon} />
        <h3 className={styles.title}>Technical Skills</h3>
      </div>
      <div className={styles.grid}>
        {skills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
}
