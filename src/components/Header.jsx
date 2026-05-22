import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { servicesData } from '../data/services'

// Iconos SVG por categoría
const categoryIcons = {
  facial: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" /></svg>,
  corporal: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  medics: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.414 2.798H4.912c-1.444 0-2.413-1.798-1.414-2.798L5 14.5" /></svg>,
  laser: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
}

const categoryOrder = ['facial', 'corporal', 'medics', 'laser']
const categoryLabels = {
  es: { facial: 'Facial', corporal: 'Corporal', medics: 'Médico-Estético', laser: 'Láser' },
  ca: { facial: 'Facial', corporal: 'Corporal', medics: 'Mèdic-Estètic', laser: 'Làser' },
}

export default function Header() {
  const { t, lang, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)
  const services = servicesData[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location])

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isActive = (to) => location.pathname === to || location.pathname.startsWith(to + '/')

  // Agrupar servicios por categoría
  const grouped = categoryOrder.map(cat => ({
    cat,
    label: categoryLabels[lang][cat],
    items: services.filter(s => s.category === cat),
  }))

  return (
    <>
      {/* Topbar */}
      <div style={{ background: '#0d0d0d', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.08em', padding: '10px 0' }} className="hidden md:block">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href={`tel:${t.topbar.phone.replace(/\s/g, '')}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
              <PhoneIcon /> {t.topbar.phone}
            </a>
            <a href={`mailto:${t.topbar.email}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
              <EmailIcon /> {t.topbar.email}
            </a>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ClockIcon /> {t.topbar.schedule}
          </span>
        </div>
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ position: 'sticky', top: 0, zIndex: 50, background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff', borderBottom: '1.5px solid #e8e8e8', backdropFilter: scrolled ? 'blur(12px)' : 'none', transition: 'all 0.3s' }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px', position: 'relative' }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img src="/logo.png" alt="Vela Segala Estètica" style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" style={{ gap: '0', alignItems: 'center' }}>

            {/* Servicios con dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={() => setServicesOpen(o => !o)}
                style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: isActive('/servicios') ? '#0d0d0d' : '#6b7280', background: 'none', border: 'none', cursor: 'pointer', padding: '0 1rem', height: '70px', borderBottom: isActive('/servicios') ? '1.5px solid #0d0d0d' : '1.5px solid transparent', transition: 'color 0.2s' }}
                onFocus={() => setServicesOpen(true)}
              >
                {lang === 'es' ? 'Servicios' : 'Serveis'}
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega dropdown */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: '780px', background: '#fff', border: '1.5px solid #e8e8e8', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', zIndex: 100, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}
                  >
                    {grouped.map((group, gi) => (
                      <div key={group.cat} style={{ borderRight: gi < 3 ? '1px solid #f0f0f0' : 'none', padding: '1.5rem' }}>
                        <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a3a3a3', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f0f0f0' }}>
                          {group.label}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          {group.items.map(service => (
                            <Link
                              key={service.id}
                              to={`/servicios/${service.slug}`}
                              onClick={() => setServicesOpen(false)}
                              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', textDecoration: 'none', borderRadius: '2px', transition: 'background 0.15s', color: '#0d0d0d' }}
                              onMouseEnter={e => { e.currentTarget.style.background = '#f5f5f5' }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                            >
                              <span style={{ color: '#6b7280', flexShrink: 0, display: 'flex' }}>{categoryIcons[service.category]}</span>
                              <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#0d0d0d', lineHeight: 1.3 }}>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    {/* Footer del dropdown */}
                    <div style={{ gridColumn: '1 / -1', borderTop: '1px solid #f0f0f0', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafafa' }}>
                      <span style={{ fontSize: '0.7rem', color: '#a3a3a3', letterSpacing: '0.06em' }}>
                        {lang === 'es' ? '47 tratamientos disponibles' : '47 tractaments disponibles'}
                      </span>
                      <Link to="/servicios" onClick={() => setServicesOpen(false)} style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0d0d0d', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {lang === 'es' ? 'Ver todos' : 'Veure tots'}
                        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resto de links */}
            {[
              { labelEs: 'Nosotros', labelCa: 'Nosaltres', to: '/sobre-nosotros' },
              { labelEs: 'Galería', labelCa: 'Galeria', to: '/galeria' },
              { labelEs: 'Contacto', labelCa: 'Contacte', to: '/contacto' },
            ].map(link => (
              <Link key={link.to} to={link.to}
                style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: isActive(link.to) ? '#0d0d0d' : '#6b7280', textDecoration: 'none', padding: '0 1rem', height: '70px', display: 'flex', alignItems: 'center', borderBottom: isActive(link.to) ? '1.5px solid #0d0d0d' : '1.5px solid transparent', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#0d0d0d'}
                onMouseLeave={e => e.currentTarget.style.color = isActive(link.to) ? '#0d0d0d' : '#6b7280'}
              >
                {lang === 'es' ? link.labelEs : link.labelCa}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex" style={{ gap: '12px', alignItems: 'center', flexShrink: 0 }}>
            <button onClick={toggleLang}
              style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280', background: 'none', border: '1px solid #e8e8e8', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0d0d0d'; e.currentTarget.style.color = '#0d0d0d' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.color = '#6b7280' }}
            >{t.nav.lang}</button>
            <Link to="/contacto" className="btn-dark" style={{ padding: '10px 24px', fontSize: '0.7rem' }}>
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile burger */}
          <div className="flex lg:hidden" style={{ gap: '10px', alignItems: 'center' }}>
            <button onClick={toggleLang} style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280', background: 'none', border: '1px solid #e8e8e8', padding: '5px 10px', cursor: 'pointer' }}>
              {t.nav.lang}
            </button>
            <button onClick={() => setMenuOpen(o => !o)}
              style={{ width: '40px', height: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Menú">
              <motion.span style={{ display: 'block', width: '22px', height: '1.5px', background: '#0d0d0d' }} animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
              <motion.span style={{ display: 'block', width: '22px', height: '1.5px', background: '#0d0d0d' }} animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
              <motion.span style={{ display: 'block', width: '22px', height: '1.5px', background: '#0d0d0d' }} animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
              className="lg:hidden"
              style={{ borderTop: '1px solid #e8e8e8', overflow: 'hidden', maxHeight: '80vh', overflowY: 'auto' }}
            >
              <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                <Link to="/" style={{ display: 'block', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0d0d0d', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                  {lang === 'es' ? 'Inicio' : 'Inici'}
                </Link>

                {/* Servicios accordion */}
                <div style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <button
                    onClick={() => setMobileServicesOpen(o => !o)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0d0d0d', background: 'none', border: 'none', cursor: 'pointer', padding: '12px 0' }}>
                    {lang === 'es' ? 'Servicios' : 'Serveis'}
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} style={{ overflow: 'hidden' }}>
                        {grouped.map(group => (
                          <div key={group.cat} style={{ marginBottom: '1rem' }}>
                            <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a3a3a3', padding: '8px 0 4px 12px' }}>{group.label}</div>
                            {group.items.map(service => (
                              <Link key={service.id} to={`/servicios/${service.slug}`}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', textDecoration: 'none', color: '#0d0d0d', fontSize: '0.82rem' }}>
                                <span style={{ color: '#6b7280' }}>{categoryIcons[service.category]}</span>
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link to="/servicios" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 12px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0d0d0d', textDecoration: 'none', background: '#f5f5f5', marginBottom: '0.5rem' }}>
                          {lang === 'es' ? 'Ver todos los servicios' : 'Veure tots els serveis'} →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {[
                  { labelEs: 'Nosotros', labelCa: 'Nosaltres', to: '/sobre-nosotros' },
                  { labelEs: 'Galería', labelCa: 'Galeria', to: '/galeria' },
                  { labelEs: 'Contacto', labelCa: 'Contacte', to: '/contacto' },
                ].map(link => (
                  <Link key={link.to} to={link.to}
                    style={{ display: 'block', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0d0d0d', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                    {lang === 'es' ? link.labelEs : link.labelCa}
                  </Link>
                ))}
                <Link to="/contacto" className="btn-dark" style={{ marginTop: '1.5rem', justifyContent: 'center', padding: '14px', display: 'flex' }}>
                  {t.nav.cta}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

function PhoneIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
}
function EmailIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
}
function ClockIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
}
