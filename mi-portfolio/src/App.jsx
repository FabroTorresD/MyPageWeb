// src/App.jsx
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // 2.8s: activa fade-out
    const fadeTimer = setTimeout(() => setFadeOut(true), 2800)
    // 3s: oculta loader
    const endTimer  = setTimeout(() => setLoading(false), 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(endTimer)
    }
  }, [])

  if (loading) {
    return <Loader fadeOut={fadeOut} />
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
