import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function WhyUs() {
  const { t } = useLang()

  return (
    <section id="nosaltres" style={{ background: '#fff', padding: 'clamp(5rem, 10vw, 7rem) 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5rem', alignItems: 'center' }} className="why-grid">

          {/* Izquierda: Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src="/images/woman-receiving-injection-in-beauty-clinic-2026-04-13-03-04-46-utc.jpg"
                alt="Clínica"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', maxHeight: '560px' }}
              />
              {/* Overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)' }} />
            </div>

            {/* Stat flotante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              style={{ position: 'absolute', bottom: '2rem', right: '-2rem', background: '#0d0d0d', padding: '1.5rem 2rem', border: '1px solid #333' }}
              className="hidden md:block"
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: '#fff', lineHeight: 1 }}>98%</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '6px' }}>Satisfacción</div>
            </motion.div>

            {/* Puntos decorativos */}
            <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }} className="hidden md:grid">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} style={{ width: '3px', height: '3px', background: '#e8e8e8' }} />
              ))}
            </div>
          </motion.div>

          {/* Derecha: Features */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="label" style={{ marginBottom: '1.25rem' }}
            >— {t.whyUs.badge}</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title" style={{ marginBottom: '1rem' }}
            >{t.whyUs.title}</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '2.5rem' }}
            >{t.whyUs.subtitle}</motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {t.whyUs.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-20px' }} transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', gap: '1.25rem', padding: '1.25rem 0', borderBottom: '1px solid #f0f0f0', alignItems: 'flex-start' }}
                >
                  <div style={{ width: '28px', height: '28px', background: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ color: '#fff', fontFamily: 'var(--font-serif)', fontSize: '0.8rem', fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#0d0d0d', marginBottom: '4px', textTransform: 'uppercase' }}>{feature.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6 }}>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </section>
  )
}
