import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  MonitorSmartphone,
  MoonStar,
  PanelsTopLeft,
  Send,
  Server,
  Sparkles,
  SunMedium,
  Wrench,
  X,
} from 'lucide-react'
import './HomePage.css'

const STORAGE_KEYS = {
  theme: 'ftd-theme',
  language: 'ftd-language',
}

const NAV_ITEMS = ['home', 'about', 'skills', 'studies', 'projects', 'contact']

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme)
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'es'
  }

  return window.localStorage.getItem(STORAGE_KEYS.language) === 'en' ? 'en' : 'es'
}

const content = {
  es: {
    navLabel: 'Navegación principal',
    role: 'Desarrollador full stack',
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Skills',
      studies: 'Estudios',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    controls: {
      light: 'Claro',
      dark: 'Oscuro',
      toggleTheme: 'Cambiar tema',
      languageLabel: 'Idioma',
      themeLabel: 'Tema',
      openMenu: 'Abrir navegación',
      closeMenu: 'Cerrar navegación',
    },
    hero: {
      title: 'Fabrizio Torres Daniele',
      subtitle: 'Estudiante de Ingeniería en Sistemas de Información',
      description:
        'Curso 5to año en la UTN FRC y actualmente trabajo en desarrollo full stack, con foco en NestJS, microservicios y soluciones mantenibles.',
      badges: ['UTN FRC', 'Lotería de Córdoba', 'NestJS & microservicios'],
      primaryCta: 'Descargar CV',
      secondaryCta: 'Ver GitHub',
      tertiaryCta: 'Ver proyecto destacado',
      stats: [
        { value: '5to', label: 'año de la carrera' },
        { value: '1 año', label: 'de experiencia en desarrollo full stack' },
        { value: 'NestJS', label: 'foco actual en backend y microservicios' },
      ],
      showcaseTitle: 'Perfil técnico con mirada de producto',
      showcaseText:
        'Me interesa que una interfaz no solo se vea bien: también tiene que comunicar, ser clara y sentirse profesional.',
      showcasePoints: [
        'Frontend moderno con React y JavaScript',
        'Aprendizaje continuo en cloud y microservicios',
        'Listo para sumar en entornos colaborativos',
      ],
      modesLabel: 'Light / Dark',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Una presentación clara de quién soy y cómo trabajo.',
      description:
        'Soy Fabrizio Torres Daniele. Estudio Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, Facultad Regional Córdoba, y hoy continúo desarrollándome profesionalmente mientras trabajo en desarrollo full stack.',
      body:
        'Tengo una base sólida en desarrollo de software, gestión de bases de datos y patrones de diseño. Me gusta trabajar con criterio, resolver problemas en equipo y seguir mejorando en cada proyecto. Actualmente busco seguir creciendo a nivel profesional, sumar desafíos técnicos y consolidar mi perfil full stack en entornos donde la arquitectura, la colaboración y la calidad del producto importen.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tecnologías y fortalezas que hoy forman mi stack.',
      description:
        'Mi perfil combina frontend, backend y herramientas técnicas que me ayudan a construir productos web más completos, ordenados y listos para escalar.',
      strengths: [
        {
          title: 'Resolución de problemas',
          text: 'Me gusta entender el problema real antes de construir la solución y priorizar claridad en la implementación.',
        },
        {
          title: 'Trabajo en equipo',
          text: 'Valoro la comunicación, el feedback y la colaboración para llegar a mejores resultados.',
        },
        {
          title: 'Aprendizaje constante',
          text: 'Estoy profundizando en cloud, microservicios y patrones avanzados de React para seguir creciendo.',
        },
      ],
    },
    studies: {
      eyebrow: 'Formación',
      title: 'Dónde estoy hoy y hacia dónde estoy creciendo.',
      description:
        'Quiero que la página muestre no solo mis herramientas actuales, sino también la etapa de carrera en la que estoy y el tipo de crecimiento profesional que busco.',
      cards: [
        {
          title: 'Carrera',
          text: 'Ingeniería en Sistemas de Información.',
        },
        {
          title: 'Nivel actual',
          text: '5to año en UTN FRC.',
        },
        {
          title: 'En este momento',
          text: 'Profundizando en arquitectura cloud, microservicios y patrones avanzados de React.',
        },
        {
          title: 'Objetivo',
          text: 'Seguir desarrollándome profesionalmente mientras amplío mi experiencia en desarrollo full stack.',
        },
      ],
    },
    projects: {
      eyebrow: 'Experiencia actual',
      title: 'Trabajo en Lotería de Córdoba desarrollando soluciones full stack.',
      description:
        'La sección ahora refleja mejor mi presente profesional: llevo un año trabajando en Lotería de Córdoba, con foco en desarrollo full stack, backend con NestJS y arquitectura basada en microservicios.',
      badge: 'Experiencia profesional',
      logoAlt: 'Logo de Lotería de Córdoba',
      projectTitle: 'Lotería de Córdoba',
      projectText:
        'Hace un año trabajo en desarrollo full stack, participando en soluciones con foco en NestJS, servicios desacoplados y evolución continua de productos internos.',
      bullets: [
        'Desarrollo backend con NestJS y enfoque en arquitecturas de microservicios.',
        'Participación en tareas full stack, integrando lógica de negocio, servicios y mejoras funcionales.',
        'Trabajo continuo sobre soluciones que requieren mantenimiento, evolución y criterio técnico.',
      ],
      primaryCta: 'Ver GitHub',
      secondaryCta: 'Ir al contacto',
      sideTitle: 'Objetivo actual',
      sideText:
        'Mi foco hoy está en seguir creciendo profesionalmente, ganar más profundidad técnica y consolidarme en entornos de desarrollo modernos.',
      sideBullets: [
        'Profundizar en backend con NestJS y microservicios.',
        'Seguir sumando experiencia en desarrollo full stack.',
        'Aportar cada vez más valor técnico dentro del equipo.',
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Mandame un mensaje y seguimos la conversación por WhatsApp.',
      description:
        'Si querés hablar sobre una oportunidad, una colaboración o simplemente ponerte en contacto, podés escribirme desde acá y te redirijo con un mensaje armado a WhatsApp.',
      formTitle: 'Escribime por WhatsApp',
      formText:
        'Completá estos datos y se abrirá WhatsApp con un mensaje listo para enviarme.',
      whatsappStatus: 'Respuesta rápida por WhatsApp',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Contame en qué te gustaría que conversemos...',
      submitButton: 'Abrir WhatsApp',
      whatsappHint: 'Se abre una conversación con el mensaje ya armado.',
      mailHelper: 'Escribime directamente',
      githubHelper: 'Código, práctica y próximos proyectos',
      linkedinHelper: 'Perfil profesional y networking',
    },
  },
  en: {
    navLabel: 'Main navigation',
    role: 'Full stack developer',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      studies: 'Studies',
      projects: 'Projects',
      contact: 'Contact',
    },
    controls: {
      light: 'Light',
      dark: 'Dark',
      toggleTheme: 'Toggle theme',
      languageLabel: 'Language',
      themeLabel: 'Theme',
      openMenu: 'Open navigation',
      closeMenu: 'Close navigation',
    },
    hero: {
      title: 'Fabrizio Torres Daniele',
      subtitle: 'Information Systems Engineering Student',
      description:
        'I am in my 5th year at UTN FRC and I currently work in full stack development, focused on NestJS, microservices and maintainable solutions.',
      badges: ['UTN FRC', 'Lotería de Córdoba', 'NestJS & microservices'],
      primaryCta: 'Download resume',
      secondaryCta: 'View GitHub',
      tertiaryCta: 'See featured project',
      stats: [
        { value: '5th', label: 'year of the degree' },
        { value: '1 year', label: 'of experience in full stack development' },
        { value: 'NestJS', label: 'current focus on backend and microservices' },
      ],
      showcaseTitle: 'Technical profile with product mindset',
      showcaseText:
        'I care about interfaces that do more than look good: they should communicate clearly, feel polished and support the product.',
      showcasePoints: [
        'Modern frontend with React and JavaScript',
        'Continuous learning in cloud and microservices',
        'Ready to contribute inside collaborative teams',
      ],
      modesLabel: 'Light / Dark',
    },
    about: {
      eyebrow: 'About me',
      title: 'A clearer way to show who I am and how I work.',
      description:
        'I am Fabrizio Torres Daniele. I study Information Systems Engineering at the National Technological University, Córdoba Regional Faculty, and I am continuing to grow professionally while working in full stack development.',
      body:
        'I have a strong foundation in software development, database management and design patterns. I enjoy working with intention, solving problems in teams and improving through every project. My current goal is to keep growing professionally, take on stronger technical challenges and consolidate my full stack profile in environments where architecture, collaboration and product quality matter.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technologies and strengths that shape my current stack.',
      description:
        'My profile blends frontend, backend and technical tools that help me build more complete, organized and scalable web products.',
      strengths: [
        {
          title: 'Problem solving',
          text: 'I like understanding the real problem before building the solution and keeping the implementation clear.',
        },
        {
          title: 'Teamwork',
          text: 'I value communication, feedback and collaboration to achieve better outcomes.',
        },
        {
          title: 'Constant learning',
          text: 'I am going deeper into cloud, microservices and advanced React patterns to keep improving.',
        },
      ],
    },
    studies: {
      eyebrow: 'Education',
      title: 'Where I am today and where I am growing next.',
      description:
        'The page should show not only my current tools, but also the academic stage I am in and the kind of professional growth I am aiming for.',
      cards: [
        {
          title: 'Degree',
          text: 'Information Systems Engineering.',
        },
        {
          title: 'Current level',
          text: '5th year at UTN FRC.',
        },
        {
          title: 'Right now',
          text: 'Going deeper into cloud architecture, microservices and advanced React patterns.',
        },
        {
          title: 'Goal',
          text: 'Keep growing professionally while expanding my experience in full stack development.',
        },
      ],
    },
    projects: {
      eyebrow: 'Current experience',
      title: 'I work at Lotería de Córdoba building full stack solutions.',
      description:
        'This section now reflects my current professional stage better: I have been working at Lotería de Córdoba for one year, focused on full stack development, NestJS backend work and microservice-based architecture.',
      badge: 'Professional experience',
      logoAlt: 'Lotería de Córdoba logo',
      projectTitle: 'Lotería de Córdoba',
      projectText:
        'For the past year I have been working in full stack development, contributing to solutions focused on NestJS, decoupled services and continuous product evolution.',
      bullets: [
        'Backend development with NestJS and a microservices architecture mindset.',
        'Full stack participation across business logic, services and functional improvements.',
        'Ongoing work on solutions that require maintenance, evolution and technical judgment.',
      ],
      primaryCta: 'View GitHub',
      secondaryCta: 'Go to contact',
      sideTitle: 'Current goal',
      sideText:
        'My focus today is to keep growing professionally, deepen my technical skills and strengthen my role inside modern development environments.',
      sideBullets: [
        'Go deeper into backend work with NestJS and microservices.',
        'Keep expanding my experience in full stack development.',
        'Bring more technical value to the team over time.',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Send me a message and let’s continue on WhatsApp.',
      description:
        'If you want to talk about an opportunity, a collaboration or just reach out, you can write to me here and I will redirect you to WhatsApp with a ready-to-send message.',
      formTitle: 'Message me on WhatsApp',
      formText:
        'Fill in these details and WhatsApp will open with a message ready to send.',
      whatsappStatus: 'Fast reply on WhatsApp',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me what you would like to talk about...',
      submitButton: 'Open WhatsApp',
      whatsappHint: 'A conversation opens with the prefilled message.',
      mailHelper: 'Reach out directly',
      githubHelper: 'Code, practice and upcoming projects',
      linkedinHelper: 'Professional profile and networking',
    },
  },
}

const skillGroups = [
  {
    icon: MonitorSmartphone,
    title: {
      es: 'Frontend',
      en: 'Frontend',
    },
    items: ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: {
      es: 'Backend y datos',
      en: 'Backend and data',
    },
    items: ['Node.js', 'Django', 'PostgreSQL'],
  },
  {
    icon: Wrench,
    title: {
      es: 'Herramientas y base técnica',
      en: 'Tools and technical foundation',
    },
    items: ['Docker', 'Postman', 'Design Patterns'],
  },
]

const aboutHighlights = [
  {
    icon: BriefcaseBusiness,
    title: {
      es: 'Objetivo actual',
      en: 'Current goal',
    },
    text: {
      es: 'Seguir desarrollándome profesionalmente, asumir desafíos técnicos más complejos y fortalecer mi perfil full stack.',
      en: 'Keep growing professionally, take on more complex technical challenges and strengthen my full stack profile.',
    },
  },
  {
    icon: Code2,
    title: {
      es: 'Forma de trabajo',
      en: 'How I work',
    },
    text: {
      es: 'Busco claridad, criterio visual y buenas bases técnicas para que el resultado sea sólido y entendible.',
      en: 'I aim for clarity, visual judgment and strong technical foundations so the result feels solid and easy to understand.',
    },
  },
  {
    icon: Globe,
    title: {
      es: 'Lo que me motiva',
      en: 'What motivates me',
    },
    text: {
      es: 'Construir software útil, interfaces bien cuidadas y experiencias que transmitan profesionalismo.',
      en: 'Building useful software, polished interfaces and experiences that communicate professionalism.',
    },
  },
]

const studyIcons = [GraduationCap, PanelsTopLeft, Sparkles, BriefcaseBusiness]
const strengthIcons = [CheckCircle2, PanelsTopLeft, Sparkles]

const contactLinks = [
  {
    icon: Mail,
    title: 'Email',
    value: 'fabrotorres3@gmail.com',
    href: 'mailto:fabrotorres3@gmail.com',
    helperKey: 'mailHelper',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: '@FabroTorresD',
    href: 'https://github.com/FabroTorresD',
    helperKey: 'githubHelper',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: '/in/Fabrizio-Torres-Daniele',
    href: 'https://linkedin.com/in/Fabrizio-Torres-Daniele',
    helperKey: 'linkedinHelper',
  },
]

const projectTech = ['NestJS', 'Microservices', 'Full Stack', 'Node.js', 'APIs']

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-intro">
      <div className="section-label">
        <Sparkles size={16} />
        {eyebrow}
      </div>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  )
}

export function HomePage() {
  const headerRef = useRef(null)
  const [theme, setTheme] = useState(getInitialTheme)
  const [language, setLanguage] = useState(getInitialLanguage)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const copy = content[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = language
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(STORAGE_KEYS.theme, theme)
    window.localStorage.setItem(STORAGE_KEYS.language, language)
  }, [theme, language])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.landing-section[id]'))

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.55],
        rootMargin: '-18% 0px -42% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setMobileNavOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = mobileNavOpen ? 'hidden' : previousOverflow

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileNavOpen])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const headerHeight = headerRef.current?.offsetHeight ?? 0
    const extraOffset = window.innerWidth <= 720 ? 10 : 16
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    })
    setMobileNavOpen(false)
  }

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleWhatsAppSubmit = (event) => {
    event.preventDefault()

    const name = contactForm.name.trim()
    const email = contactForm.email.trim()
    const message = contactForm.message.trim()

    if (!name || !message) {
      return
    }

    const whatsappLines =
      language === 'es'
        ? [
            'Hola Fabrizio, te escribo desde tu portfolio.',
            `Nombre: ${name}`,
            email ? `Email: ${email}` : null,
            `Mensaje: ${message}`,
          ]
        : [
            'Hi Fabrizio, I am reaching out from your portfolio.',
            `Name: ${name}`,
            email ? `Email: ${email}` : null,
            `Message: ${message}`,
          ]

    const whatsappMessage = encodeURIComponent(whatsappLines.filter(Boolean).join('\n'))
    window.open(`https://wa.me/5493513976008?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="portfolio-shell">
      <header ref={headerRef} className="topbar">
        <button type="button" className="brand-pill" onClick={() => scrollToSection('home')}>
          <span className="brand-mark">
            <span className="brand-monogram">FTD</span>
          </span>
          <span className="brand-copy">
            <span className="brand-name">Fabrizio Torres Daniele</span>
            <span className="brand-role">{copy.role}</span>
          </span>
        </button>

        <nav className="apple-nav" aria-label={copy.navLabel}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              className={`apple-tab ${activeSection === item ? 'is-active' : ''}`}
              onClick={() => scrollToSection(item)}
            >
              {copy.nav[item]}
            </button>
          ))}
        </nav>

        <div className="toolbar">
          <div className="segment-control" aria-label="Language toggle">
            <button
              type="button"
              className={`segment-button ${language === 'es' ? 'is-selected' : ''}`}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={`segment-button ${language === 'en' ? 'is-selected' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="theme-button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={copy.controls.toggleTheme}
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
            <span>{theme === 'dark' ? copy.controls.light : copy.controls.dark}</span>
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`mobile-nav-fab ${mobileNavOpen ? 'is-open' : ''}`}
        onClick={() => setMobileNavOpen((currentValue) => !currentValue)}
        aria-label={mobileNavOpen ? copy.controls.closeMenu : copy.controls.openMenu}
        aria-expanded={mobileNavOpen}
      >
        {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        className={`mobile-nav-overlay ${mobileNavOpen ? 'is-open' : ''}`}
        onClick={() => setMobileNavOpen(false)}
        aria-hidden={!mobileNavOpen}
      />

      <aside className={`mobile-sidebar ${mobileNavOpen ? 'is-open' : ''}`} aria-hidden={!mobileNavOpen}>
        <div className="mobile-sidebar__header">
          <div className="mobile-sidebar__brand">
            <span className="brand-mark">
              <span className="brand-monogram">FTD</span>
            </span>
            <div className="mobile-sidebar__brand-copy">
              <strong>Fabrizio Torres Daniele</strong>
              <span>{copy.role}</span>
            </div>
          </div>

          <button
            type="button"
            className="mobile-sidebar__close"
            onClick={() => setMobileNavOpen(false)}
            aria-label={copy.controls.closeMenu}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-sidebar__nav" aria-label={copy.navLabel}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              className={`mobile-sidebar__link ${activeSection === item ? 'is-active' : ''}`}
              onClick={() => scrollToSection(item)}
            >
              {copy.nav[item]}
            </button>
          ))}
        </nav>

        <div className="mobile-sidebar__section">
          <span className="mobile-sidebar__label">{copy.controls.languageLabel}</span>
          <div className="segment-control mobile-sidebar__segment">
            <button
              type="button"
              className={`segment-button ${language === 'es' ? 'is-selected' : ''}`}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={`segment-button ${language === 'en' ? 'is-selected' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>

        <div className="mobile-sidebar__section">
          <span className="mobile-sidebar__label">{copy.controls.themeLabel}</span>
          <button
            type="button"
            className="theme-button mobile-sidebar__theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={copy.controls.toggleTheme}
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
            <span>{theme === 'dark' ? copy.controls.light : copy.controls.dark}</span>
          </button>
        </div>

        <div className="mobile-sidebar__section">
          <a href="/CV_FabrizioTorres.pdf" download className="button-primary mobile-sidebar__cta">
            <Download size={18} />
            {copy.hero.primaryCta}
          </a>
        </div>
      </aside>

      <main className="landing-main">
        <section id="home" className="landing-section hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span>{copy.hero.title}</span>
              </h1>

              <p className="hero-subtitle">{copy.hero.subtitle}</p>
              <p className="hero-description">{copy.hero.description}</p>

              <div className="hero-badges">
                {copy.hero.badges.map((badge) => (
                  <span key={badge} className="hero-badge">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="hero-actions">
                <a href="/CV_FabrizioTorres.pdf" download className="button-primary">
                  <Download size={18} />
                  {copy.hero.primaryCta}
                </a>
                <a
                  href="https://github.com/FabroTorresD"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  <Github size={18} />
                  {copy.hero.secondaryCta}
                </a>
                <button
                  type="button"
                  className="button-ghost"
                  onClick={() => scrollToSection('projects')}
                >
                  <ArrowUpRight size={18} />
                  {copy.hero.tertiaryCta}
                </button>
              </div>

              <div className="hero-stats">
                {copy.hero.stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-floating left">
                  <Globe size={16} />
                  ES / EN
                </div>

                <div className="visual-floating right">
                  {theme === 'dark' ? <MoonStar size={16} /> : <SunMedium size={16} />}
                  {copy.hero.modesLabel}
                </div>

                <div className="visual-logo-wrap">
                  <div className="visual-logo-orb">
                    <span className="visual-monogram">FTD</span>
                  </div>
                </div>

                <div className="spotlight-card">
                  <span className="spotlight-pill">
                    <Sparkles size={16} />
                    {copy.hero.showcaseTitle}
                  </span>
                  <h3>{copy.hero.showcaseTitle}</h3>
                  <p>{copy.hero.showcaseText}</p>

                  <div className="spotlight-list">
                    {copy.hero.showcasePoints.map((point) => (
                      <div key={point} className="spotlight-item">
                        <CheckCircle2 size={18} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="landing-section section-shell">
          <SectionHeading
            eyebrow={copy.about.eyebrow}
            title={copy.about.title}
            description={copy.about.description}
          />

          <div className="about-grid">
            <article className="glass-card about-card">
              <p>{copy.about.body}</p>
            </article>

            <div className="info-stack">
              {aboutHighlights.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title.en} className="info-card">
                    <div className="info-card-header">
                      <span className="info-icon">
                        <Icon size={20} />
                      </span>
                      <h3>{item.title[language]}</h3>
                    </div>
                    <p>{item.text[language]}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="landing-section section-shell">
          <SectionHeading
            eyebrow={copy.skills.eyebrow}
            title={copy.skills.title}
            description={copy.skills.description}
          />

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon

              return (
                <article key={group.title.en} className="glass-card skill-card">
                  <div className="skill-card-header">
                    <span className="skill-icon">
                      <Icon size={20} />
                    </span>
                    <h3>{group.title[language]}</h3>
                  </div>

                  <div className="skill-pills">
                    {group.items.map((item) => (
                      <span key={item} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          <div className="strength-grid">
            {copy.skills.strengths.map((strength, index) => {
              const Icon = strengthIcons[index]

              return (
                <article key={strength.title} className="glass-card strength-card">
                  <span className="strength-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{strength.title}</h3>
                  <p>{strength.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="studies" className="landing-section section-shell">
          <SectionHeading
            eyebrow={copy.studies.eyebrow}
            title={copy.studies.title}
            description={copy.studies.description}
          />

          <div className="study-grid">
            {copy.studies.cards.map((card, index) => {
              const Icon = studyIcons[index]

              return (
                <article key={card.title} className="glass-card study-card">
                  <span className="study-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="projects" className="landing-section section-shell">
          <SectionHeading
            eyebrow={copy.projects.eyebrow}
            title={copy.projects.title}
            description={copy.projects.description}
          />

          <div className="projects-grid">
            <article className="glass-card project-card">
              <div className="project-brand">
                <div className="project-logo-shell">
                  <img
                    src="/loteria-cordoba-logojpg.webp"
                    alt={copy.projects.logoAlt}
                    className="project-logo"
                    loading="lazy"
                  />
                </div>
              </div>

              <span className="project-badge">
                <Sparkles size={16} />
                {copy.projects.badge}
              </span>

              <div className="project-top">
                <span className="project-icon">
                  <PanelsTopLeft size={20} />
                </span>
                <h3>{copy.projects.projectTitle}</h3>
              </div>

              <p>{copy.projects.projectText}</p>

              <div className="tech-pills">
                {projectTech.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-list">
                {copy.projects.bullets.map((bullet) => (
                  <div key={bullet} className="project-list-item">
                    <CheckCircle2 size={18} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/FabroTorresD"
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  <Github size={18} />
                  {copy.projects.primaryCta}
                </a>
                <button
                  type="button"
                  className="button-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  <ArrowUpRight size={18} />
                  {copy.projects.secondaryCta}
                </button>
              </div>
            </article>

            <aside className="glass-card side-note-card">
              <span className="project-icon">
                <Code2 size={20} />
              </span>
              <h3>{copy.projects.sideTitle}</h3>
              <p>{copy.projects.sideText}</p>

              <div className="side-note-list">
                {copy.projects.sideBullets.map((item) => (
                  <div key={item} className="side-note-item">
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="contact" className="landing-section section-shell">
          <SectionHeading
            eyebrow={copy.contact.eyebrow}
            title={copy.contact.title}
            description={copy.contact.description}
          />

          <div className="contact-grid">
            <form className="glass-card contact-form-card" onSubmit={handleWhatsAppSubmit}>
              <span className="project-icon">
                <MessageSquare size={20} />
              </span>
              <h3>{copy.contact.formTitle}</h3>
              <p>{copy.contact.formText}</p>

              <div className="cv-status">
                <Send size={16} />
                {copy.contact.whatsappStatus}
              </div>

              <div className="contact-form-fields">
                <label className="contact-field">
                  <span>{copy.contact.nameLabel}</span>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    placeholder={copy.contact.namePlaceholder}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>{copy.contact.emailLabel}</span>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    placeholder={copy.contact.emailPlaceholder}
                  />
                </label>

                <label className="contact-field">
                  <span>{copy.contact.messageLabel}</span>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder={copy.contact.messagePlaceholder}
                    rows="6"
                    required
                  />
                </label>
              </div>

              <div className="contact-form-actions">
                <button type="submit" className="button-primary contact-submit">
                  <Send size={18} />
                  {copy.contact.submitButton}
                </button>
                <span className="contact-form-hint">{copy.contact.whatsappHint}</span>
              </div>
            </form>

            <div className="contact-links-grid">
              {contactLinks.map((link) => {
                const Icon = link.icon
                const externalProps = link.href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noreferrer' }

                return (
                  <a key={link.title} href={link.href} className="glass-card contact-link-card" {...externalProps}>
                    <div className="contact-link-main">
                      <span className="contact-icon">
                        <Icon size={20} />
                      </span>
                      <div className="contact-link-text">
                        <h3>{link.title}</h3>
                        <p>{copy.contact[link.helperKey]}</p>
                        <span>{link.value}</span>
                      </div>
                    </div>

                    <ArrowUpRight className="link-arrow" size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
