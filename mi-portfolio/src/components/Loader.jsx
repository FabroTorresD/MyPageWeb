// src/components/Loader.jsx
import React from 'react'
import './Loader.css'
import logo from '../assets/logoFTD1.png' // ajusta ruta si hace falta

export default function Loader({ fadeOut }) {
  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      {/* Círculo girando */}
      {/* Logo */}
      <img src={logo} alt="Logo" className="loader-logo" />
    </div>
  )
}
