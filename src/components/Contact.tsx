import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Icon } from '@iconify/react'
import './Contact.css'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', org: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Compose mailto link
    const subject = encodeURIComponent(`Staffing Inquiry from ${form.name} – ${form.org}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganisation: ${form.org}\nPhone: ${form.phone}\nService Required: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:Shreerasoratna@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__bg" />
      <div className="contact__orb" />

      <div className="container contact__inner">
        {/* Info */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Contact Us</div>
          <h2 className="section-title contact__title">
            Let's Discuss Your <br />
            <span className="text-lime-on-dark">Staffing Requirements</span>
          </h2>
          <p className="contact__desc">
            Reach out to discuss your roles, headcount and deployment needs. We confirm scope and commercial terms in writing before work begins.
          </p>

          <div className="contact__details">
            {[
              { icon: 'mdi:phone', label: 'Phone / WhatsApp', val: '+91-9870418329', href: 'tel:+919870418329' },
              { icon: 'mdi:email-outline', label: 'Email', val: 'Shreerasoratna@gmail.com', href: 'mailto:Shreerasoratna@gmail.com' },
              { icon: 'mdi:map-marker-outline', label: 'Registered Address', val: 'C1, Motil Apartment, Kanke Road, Gandhinagar, Ranchi – 834008', href: undefined },
              { icon: 'mdi:certificate-outline', label: 'UDYAM Registration', val: 'UDYAM-JH20-0143778', href: undefined },
            ].map((d) => (
              <div key={d.label} className="contact__detail">
                <div className="contact__detail-icon">
                  <Icon icon={d.icon} width={22} />
                </div>
                <div>
                  <div className="contact__detail-label">{d.label}</div>
                  {d.href
                    ? <a href={d.href} className="contact__detail-val contact__detail-val--link">{d.val}</a>
                    : <div className="contact__detail-val">{d.val}</div>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="contact__wa">
            <a href="https://wa.me/919870418329" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Icon icon="mdi:whatsapp" width={20} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="contact__form-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {sent ? (
            <div className="contact__success">
              <Icon icon="mdi:check-circle" width={56} className="contact__success-icon" />
              <h3>Opening your email client…</h3>
              <p>Fill in your preferred email app and send. We'll get back to you shortly!</p>
              <button className="btn-primary" onClick={() => setSent(false)}>Send Another Inquiry</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label>Organisation *</label>
                  <input
                    type="text"
                    name="org"
                    placeholder="Company / Hospital / Institution"
                    value={form.org}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91-XXXXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option>Housekeeping & Sanitation</option>
                    <option>Non-Clinical Hospital Support</option>
                    <option>Office & Administrative Support</option>
                    <option>Warehouse, Packing & Logistics</option>
                    <option>General Helpers & Site Support</option>
                    <option>Requirement-Based Staffing</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="contact__form-group">
                <label>Message / Requirements</label>
                <textarea
                  name="message"
                  placeholder="Describe your roles, headcount needed, shift pattern and location…"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>
              <button type="submit" className="btn-primary contact__form-btn">
                Send Inquiry
                <Icon icon="mdi:send" width={18} />
              </button>
              <p className="contact__form-note">
                <Icon icon="mdi:shield-check-outline" width={14} />
                Your details are only used to respond to your inquiry.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

