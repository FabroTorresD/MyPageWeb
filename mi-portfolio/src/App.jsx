import { useEffect, useState } from 'react'
import TechIntro from './components/TechIntro'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introClosing, setIntroClosing] = useState(false)

  useEffect(() => {
    const closeTimer = window.setTimeout(() => setIntroClosing(true), 1120)
    const hideTimer = window.setTimeout(() => setShowIntro(false), 1460)

    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="app-root">
      <HomePage />
      {showIntro ? <TechIntro isLeaving={introClosing} /> : null}
    </div>
  )
}

export default App
