import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const content = {
  es: {
    heroLabel: 'Información legal',
    heroTitle: 'Política de Privacidad y Cookies',
    updated: 'Última actualización: mayo 2025',
    sections: [
      {
        title: '1. Responsable del tratamiento',
        body: `Estètica Vela Segala (en adelante, "la Clínica") es la responsable del tratamiento de los datos personales recogidos a través de este sitio web.

Datos de contacto:
- Dirección: Plaça 1 d'Octubre, 6, 08470 Sant Celoni, Barcelona
- Teléfono: 938 67 58 22
- WhatsApp: 621 30 72 35
- Email: vela@velasegala.com`,
      },
      {
        title: '2. Datos que recogemos',
        body: `Recogemos los datos que usted nos facilita voluntariamente a través del formulario de contacto: nombre y apellidos, correo electrónico, teléfono (opcional), servicio de interés y mensaje.

No recogemos datos de categorías especiales (salud, etc.) salvo que usted los incluya expresamente en su mensaje.`,
      },
      {
        title: '3. Finalidad y base legal del tratamiento',
        body: `Sus datos se tratan para:
- Gestionar su solicitud de cita o consulta (base legal: ejecución de contrato / interés legítimo).
- Enviar comunicaciones relacionadas con los servicios solicitados (base legal: consentimiento).

No utilizamos sus datos para elaborar perfiles ni para tomar decisiones automatizadas.`,
      },
      {
        title: '4. Conservación de los datos',
        body: `Conservamos sus datos durante el tiempo necesario para gestionar su solicitud y, en su caso, durante los plazos legales aplicables. Una vez finalizada la relación, los datos se bloquean y se eliminan al término del período de prescripción legal.`,
      },
      {
        title: '5. Cesión de datos a terceros',
        body: `No cedemos sus datos a terceros, salvo obligación legal. Podemos utilizar proveedores de servicios (hosting, email) que actúan como encargados del tratamiento bajo contrato y con las debidas garantías conforme al RGPD.`,
      },
      {
        title: '6. Sus derechos',
        body: `De conformidad con el RGPD (UE) 2016/679 y la LOPDGDD, usted tiene derecho a:
- Acceder a sus datos personales.
- Rectificar datos inexactos.
- Solicitar la supresión cuando ya no sean necesarios.
- Oponerse al tratamiento o solicitar su limitación.
- Portabilidad de los datos.
- Retirar el consentimiento en cualquier momento.

Para ejercer estos derechos, contacte con nosotros en vela@velasegala.com. Si considera que el tratamiento no es conforme, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
      },
      {
        title: '7. Política de Cookies',
        body: `Este sitio web utiliza cookies para mejorar su experiencia de navegación.

¿Qué son las cookies?
Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.

Tipos de cookies que utilizamos:
- Cookies técnicas esenciales: necesarias para el funcionamiento básico del sitio. No requieren consentimiento.
- Cookies analíticas: permiten medir el tráfico y el uso del sitio (p.ej. Google Analytics). Solo se activan con su consentimiento.

¿Cómo gestionar las cookies?
Puede aceptar o rechazar las cookies no esenciales mediante el banner que aparece en su primera visita. También puede configurar su navegador para bloquear o eliminar cookies, aunque esto puede afectar al funcionamiento del sitio.`,
      },
      {
        title: '8. Seguridad',
        body: `Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos contra el acceso no autorizado, la pérdida o la alteración, de conformidad con el RGPD.`,
      },
      {
        title: '9. Modificaciones',
        body: `Nos reservamos el derecho a actualizar esta política para adaptarla a cambios legislativos o de nuestra actividad. La fecha de última actualización figura al inicio de este documento.`,
      },
    ],
  },
  ca: {
    heroLabel: 'Informació legal',
    heroTitle: 'Política de Privacitat i Cookies',
    updated: 'Darrera actualització: maig 2025',
    sections: [
      {
        title: '1. Responsable del tractament',
        body: `Estètica Vela Segala (d'ara endavant, "la Clínica") és la responsable del tractament de les dades personals recollides a través d'aquest lloc web.

Dades de contacte:
- Adreça: Plaça 1 d'Octubre, 6, 08470 Sant Celoni, Barcelona
- Telèfon: 938 67 58 22
- WhatsApp: 621 30 72 35
- Email: vela@velasegala.com`,
      },
      {
        title: '2. Dades que recollim',
        body: `Recollim les dades que vostè ens facilita voluntàriament a través del formulari de contacte: nom i cognoms, correu electrònic, telèfon (opcional), servei d'interès i missatge.

No recollim dades de categories especials (salut, etc.) llevat que vostè les inclogui expressament en el seu missatge.`,
      },
      {
        title: '3. Finalitat i base legal del tractament',
        body: `Les seves dades es tracten per:
- Gestionar la seva sol·licitud de cita o consulta (base legal: execució de contracte / interès legítim).
- Enviar comunicacions relacionades amb els serveis sol·licitats (base legal: consentiment).

No utilitzem les seves dades per elaborar perfils ni per prendre decisions automatitzades.`,
      },
      {
        title: '4. Conservació de les dades',
        body: `Conservem les seves dades durant el temps necessari per gestionar la seva sol·licitud i, si escau, durant els terminis legals aplicables. Un cop finalitzada la relació, les dades es bloquegen i s'eliminen en acabar el període de prescripció legal.`,
      },
      {
        title: '5. Cessió de dades a tercers',
        body: `No cedim les seves dades a tercers, llevat d'obligació legal. Podem utilitzar proveïdors de serveis (allotjament, correu electrònic) que actuen com a encarregats del tractament sota contracte i amb les degudes garanties d'acord amb el RGPD.`,
      },
      {
        title: '6. Els seus drets',
        body: `De conformitat amb el RGPD (UE) 2016/679 i la LOPDGDD, vostè té dret a:
- Accedir a les seves dades personals.
- Rectificar dades inexactes.
- Sol·licitar la supressió quan ja no siguin necessàries.
- Oposar-se al tractament o sol·licitar-ne la limitació.
- Portabilitat de les dades.
- Retirar el consentiment en qualsevol moment.

Per exercir aquests drets, poseu-vos en contacte amb nosaltres a vela@velasegala.com. Si considereu que el tractament no és conforme, podeu presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).`,
      },
      {
        title: '7. Política de Cookies',
        body: `Aquest lloc web utilitza cookies per millorar la vostra experiència de navegació.

Què són les cookies?
Les cookies són petits fitxers de text que s'emmagatzemen al vostre dispositiu quan visiteu un lloc web.

Tipus de cookies que utilitzem:
- Cookies tècniques essencials: necessàries per al funcionament bàsic del lloc. No requereixen consentiment.
- Cookies analítiques: permeten mesurar el trànsit i l'ús del lloc (p.ex. Google Analytics). Només s'activen amb el vostre consentiment.

Com gestionar les cookies?
Podeu acceptar o rebutjar les cookies no essencials mitjançant el bàner que apareix en la vostra primera visita. També podeu configurar el navegador per bloquejar o eliminar cookies, tot i que això pot afectar el funcionament del lloc.`,
      },
      {
        title: '8. Seguretat',
        body: `Apliquem mesures tècniques i organitzatives adequades per protegir les vostres dades contra l'accés no autoritzat, la pèrdua o l'alteració, de conformitat amb el RGPD.`,
      },
      {
        title: '9. Modificacions',
        body: `Ens reservem el dret d'actualitzar aquesta política per adaptar-la a canvis legislatius o de la nostra activitat. La data de darrera actualització figura a l'inici d'aquest document.`,
      },
    ],
  },
}

export default function PrivacyPage() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      {/* Hero */}
      <div style={{ background: '#0d0d0d', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="label-white" style={{ marginBottom: '1.25rem' }}>
            — {c.heroLabel}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title-white">
            {c.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '1rem', letterSpacing: '0.06em' }}>
            {c.updated}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <section style={{ background: '#f5f5f5', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          {c.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.04 }}
              style={{ background: '#fff', padding: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '2px', borderLeft: '3px solid #0d0d0d' }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: '#0d0d0d', marginBottom: '1rem' }}>
                {section.title}
              </h2>
              <div style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {section.body}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
