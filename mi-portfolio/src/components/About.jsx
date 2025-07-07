// src/components/About/About.jsx
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import styles from './About.module.css'

export default function About() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                <FaUserCircle className={styles.icon} />
                About Me
            </h2>
            <p className={styles.text}>
                Hello everyone, my name is Fabrizio Torres Daniele. I am a Systems Engineering student at the National Technological University, Córdoba Regional Faculty (UTN FRC). I have skills in software development, database management and design patterns. I have great problem-solving skills to work as a team. I am actively looking for my first job to apply my skills and gain work experience. Please feel free to connect with me to discuss potential opportunities.
            </p>
        </section>
    )
}
