import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const content = {
  es: {
    eyebrow: 'Atención personalizada',
    title: 'Reserva tu\ncita ahora',
    subtitle: 'Ven a conocernos. Te hacemos una valoración personalizada y te recomendamos el tratamiento más adecuado para ti.',
    cta: 'Reservar cita',
    note: 'Disponibilidad inmediata · Atención personalizada',
  },
  ca: {
    eyebrow: 'Atenció personalitzada',
    title: 'Reserva la teva\ncita ara',
    subtitle: 'Vine a conèixer-nos. Et fem una valoració personalitzada i et recomanem el tractament més adequat per a tu.',
    cta: 'Reservar cita',
    note: 'Disponibilitat immediata · Atenció personalitzada',
  },
}

export default function CtaBanner() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <section style={{ background: '#0d0d0d', padding: 'clamp(5rem, 10vw, 8rem) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Líneas decorativas */}
      <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: 'rgba(255,255,255,0.06)' }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="label-white" style={{ marginBottom: '2rem' }}
        >— {c.eyebrow}</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '2rem', whiteSpace: 'pre-line' }}
        >{c.title}</motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 2.5rem' }}
        >{c.subtitle}</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
        >
          <a href="#contacte" className="btn-light">
            {c.cta}
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p style={{ marginTop: '1.5rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{c.note}</p>
        </motion.div>
      </div>
    </section>
  )
}
