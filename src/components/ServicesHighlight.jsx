import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { servicesData } from '../data/services'

export default function ServicesHighlight() {
  const { t, lang } = useLang()
  const services = servicesData[lang].slice(0, 6)

  return (
    <section style={{ background: '#fff', padding: 'clamp(5rem, 10vw, 7rem) 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="label" style={{ marginBottom: '1.25rem' }}>
              — {t.services.badge}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title" style={{ maxWidth: '520px' }}>
              {t.services.title}
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/servicios" className="btn-ghost">
              {lang === 'es' ? 'Ver todos los servicios' : 'Veure tots els serveis'} →
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: '#e8e8e8' }} className="services-highlight-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} lang={lang} />
          ))}
        </div>

      </div>
      <style>{`
        .services-highlight-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 900px) { .services-highlight-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .services-highlight-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function ServiceCard({ service, index, lang }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: (index % 3) * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? '#0d0d0d' : '#fff', transition: 'background 0.3s' }}
    >
      <Link to={`/servicios/${service.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {service.image && (
          <div style={{ height: '180px', overflow: 'hidden' }}>
            <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.5s' }} />
          </div>
        )}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: hovered ? 'rgba(255,255,255,0.4)' : '#a3a3a3', marginBottom: '0.75rem', transition: 'color 0.3s' }}>
            {service.categoryLabel}
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: hovered ? '#fff' : '#0d0d0d', lineHeight: 1.2, marginBottom: '0.5rem', transition: 'color 0.3s' }}>
            {service.name}
          </h3>
          <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: hovered ? 'rgba(255,255,255,0.5)' : '#a3a3a3', marginTop: 'auto', paddingTop: '1rem', transition: 'color 0.3s' }}>
            {lang === 'es' ? 'Ver tratamiento' : 'Veure tractament'} →
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
