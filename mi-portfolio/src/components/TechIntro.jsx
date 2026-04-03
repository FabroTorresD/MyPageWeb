import { Braces, Cpu, Database, Sparkles } from 'lucide-react'
import './TechIntro.css'

function TechIntro({ isLeaving }) {
  return (
    <div className={`tech-intro ${isLeaving ? 'is-leaving' : ''}`} aria-hidden="true">
      <div className="tech-intro__grid" />
      <div className="tech-intro__glow tech-intro__glow--one" />
      <div className="tech-intro__glow tech-intro__glow--two" />
      <div className="tech-intro__scan" />

      <div className="tech-intro__panel">
        <div className="tech-intro__badge">
          <Sparkles size={14} />
          Initializing portfolio
        </div>

        <div className="tech-intro__brand">FTD</div>
        <div className="tech-intro__subtitle">software engineer / full stack systems</div>

        <div className="tech-intro__chips">
          <div className="tech-intro__chip">
            <Cpu size={16} />
            runtime
          </div>
          <div className="tech-intro__chip">
            <Braces size={16} />
            frontend
          </div>
          <div className="tech-intro__chip">
            <Database size={16} />
            backend
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechIntro
