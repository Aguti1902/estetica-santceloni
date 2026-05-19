import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="inicio" style={{ background: '#fff', position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'stretch' }}>

      <div style={{ display: 'flex', width: '100%', flexDirection: 'row' }}>

        {/* Columna izquierda — texto */}
        <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem) clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)', background: '#fff', borderRight: '1px solid #e8e8e8', position: 'relative' }} className="hero-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <span className="label">— {t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-heading"
            style={{ marginBottom: '1rem' }}
          >
            {t.hero.headline.split(' ').slice(0, 2).join(' ')}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="display-heading"
            style={{ fontStyle: 'italic', fontWeight: 300, color: '#888', marginBottom: '2.5rem' }}
          >
            {t.hero.headline.split(' ').slice(2).join(' ')}
          </motion.h1>

          {/* Divider */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: 'block', width: '48px', height: '1.5px', background: '#0d0d0d', marginBottom: '2rem', transformOrigin: 'left' }}
          />

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#6b7280', maxWidth: '380px', marginBottom: '2.5rem' }}
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '3.5rem' }}
          >
            <a href="#contacte" className="btn-dark">
              {t.hero.cta1} <Arrow />
            </a>
            <a href="#servicios" className="btn-ghost">
              {t.hero.cta2}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ display: 'flex', gap: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e8e8e8', flexWrap: 'wrap' }}
          >
            {[
              { val: t.hero.stat1, label: t.hero.stat1Label },
              { val: t.hero.stat2, label: t.hero.stat2Label },
              { val: t.hero.stat3, label: t.hero.stat3Label },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, color: '#0d0d0d', lineHeight: 1 }}>{s.val}</div>
                <div className="label" style={{ marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Columna derecha — imagen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ flex: '0 0 50%', position: 'relative', background: '#f5f5f5', overflow: 'hidden' }}
          className="hero-right hidden lg:block"
        >
          <img
            src="/images/woman-receiving-beauty-treatment-at-a-clinic-2026-03-16-06-05-53-utc.jpg"
            alt="Tratamiento estético"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          {/* Overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />

          {/* Card flotante — certificados */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ position: 'absolute', top: '2.5rem', left: '-1px', background: '#fff', borderTop: '1.5px solid #e8e8e8', borderRight: '1.5px solid #e8e8e8', borderBottom: '1.5px solid #e8e8e8', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ width: '36px', height: '36px', background: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="16" fill="none" stroke="#fff" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0d0d0d' }}>Médicos certificados</div>
              <div style={{ fontSize: '0.65rem', color: '#a3a3a3', marginTop: '2px', letterSpacing: '0.04em' }}>Equipo especializado</div>
            </div>
          </motion.div>

          {/* Card flotante — reseñas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{ position: 'absolute', bottom: '3rem', right: '-1px', background: '#0d0d0d', borderTop: '1.5px solid #333', borderLeft: '1.5px solid #333', borderBottom: '1.5px solid #333', padding: '1rem 1.25rem' }}
          >
            <div style={{ display: 'flex', gap: '3px', marginBottom: '6px' }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="11" height="11" viewBox="0 0 20 20" fill="#fff">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff', letterSpacing: '0.06em' }}>+200 reseñas</div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px', letterSpacing: '0.04em' }}>Pacientes satisfechos</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile: imagen de fondo */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-left { flex: unset !important; width: 100% !important; border-right: none !important; }
          .hero-right { display: none !important; }
          #inicio { min-height: auto !important; }
        }
      `}</style>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}
