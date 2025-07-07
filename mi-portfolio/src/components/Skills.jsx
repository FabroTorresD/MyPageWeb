// src/components/Skills/Skills.jsx
import React from 'react'
import SkillContainer from './SkillContainer'

export default function Skills({ skills, learningText }) {
  return (
    <SkillContainer 
      skills={skills} 
      learningText={learningText} 
    />
  )
}
