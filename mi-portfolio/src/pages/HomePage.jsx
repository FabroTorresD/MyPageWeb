// src/pages/HomePage.jsx
import React from 'react'
import FloatingTitle from '../components/FloatingTitle'
import Badge from '../components/Badge'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Skills from '../components/Skills'
import About from '../components/About'
import CurrentStatus from '../components/CurrentStatus'
import DownloadBadge from '../components/DowloandBadge'
import ContactCard from '../components/ContactCard'
import FloatingCode from '../components/FloatingCode'
import AnimatedSubtitle from '../styles/AnimatedSubtitle'

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
  ]

  const learningText =
    'Currently diving deep into cloud architecture, microservices y patrones avanzados de React.'


  return (
    <>
      <FloatingTitle text="Hello, I'm Fabrizio" />
      <AnimatedSubtitle text="Systems Engineering Student" />

      <div className="home-page">


        <p>This is the home page of my portfolio website.</p>
        <p>Here you can find information about my projects, skills, and experience.</p>
      </div>

      <FloatingCode />

      <ContactCard />

      <DownloadBadge />

      <About />
      <CurrentStatus year={4} major="Systems Engineering" status="Looking for opportunities" />

      <Skills skills={mySkills} learningText={learningText} />

    </>
  )
}
