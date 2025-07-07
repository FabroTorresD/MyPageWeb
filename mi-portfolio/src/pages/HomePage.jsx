// src/pages/HomePage.jsx
import React from 'react'
import FloatingTitle from '../components/FloatingTitle'
import Badge from '../components/Badge'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Skills from '../components/Skills'
import styles from '../components/Badge.module.css'
import About from '../components/About'
import CurrentStatus from '../components/CurrentStatus'

export const HomePage = () => {
  // Lista de skills y texto de “what I’m learning”
  const mySkills = [
    'JavaScript',
    'React',
    'Node.js',
    'Django',
    'TypeScript',
    'Tailwind CSS',
    'Docker',
    'PostgreSQL',
    'Designer Patterns',
    'Postman',
    'Git',
    'CI/CD',
  ]

  const learningText =
    'Currently diving deep into cloud architecture, microservices y patrones avanzados de React.'

  const handleBadgeClick = (platform) => {
    let url = ''
    switch (platform) {
      case 'github':
        url = 'https://github.com/FabroTorresD'
        break
      case 'linkedin':
        url = 'https://linkedin.com/in/Fabrizio-Torres-Daniele'
        break
      case 'email':
        url = 'mailto:fabrotorres3@gmail.com'
        break
      default:
        break
    }
    if (url) window.open(url)
  }

  return (
    <>

      <div className="home-page">

        <FloatingTitle text="Hello, I'm Fabrizio" />
        <h1 className="subtitle">Systems Engineering Student</h1>
        <p>This is the home page of my portfolio website.</p>
        <p>Here you can find information about my projects, skills, and experience.</p>
      </div>

      <div className={styles.badgeContainer}>
        <Badge icon={<FaGithub size={20} />} onClick={() => handleBadgeClick('github')} />
        <Badge icon={<FaLinkedin size={20} />} onClick={() => handleBadgeClick('linkedin')} />
        <Badge icon={<FaEnvelope size={20} />} onClick={() => handleBadgeClick('email')} />
      </div>

      <About></About>
      <CurrentStatus year={4} major="Systems Engineering" status="Looking for opportunities" />

      <Skills skills={mySkills} learningText={learningText} />
    </>
  )
}
