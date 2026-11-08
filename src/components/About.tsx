import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './About.css'

const metrics = [
  { label: 'Requirement-Based Staffing', value: '85%' },
  { label: 'Coordination & Attendance Tracking', value: '80%' },
  { label: 'Transparent Terms & Compliance', value: '95%' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="about__top-header">
          <motion.div
            className="hero__pill-tag"
            initial={{ opacity: 0, y: -15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="pill-dot" />
            <span className="pill-divider" />
            <span className="pill-text">About Us</span>
          </motion.div>

          <motion.h2
            className="about__heading"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Empowering Your Success <br />
            with Workforce Expertise
          </motion.h2>
        </div>

        {/* 2-Column Split */}
        <div className="about__grid">
          {/* Left Column: Stacked Cards + Circle Badge */}
          <motion.div
            className="about__visual-column"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about__cards-wrapper">
              {/* Top Card */}
              <div className="about__stacked-card about__stacked-card--top">
                <img
                  src="/images/sector-healthcare.jpg"
                  alt="Hospitals & Healthcare Facilities"
                  className="about__stacked-img"
                />
                <div className="about__stacked-overlay" />
                <div className="card-mockup-content">
                  <div className="mockup-header">
                    <Icon icon="mdi:hospital-building" width={22} color="#9bde4a" />
                    <span>Hospitals & Healthcare Facilities</span>
                  </div>
                  <div className="mockup-meta">Ward Attendants · Sanitation · Non-Clinical Staff</div>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="about__stacked-card about__stacked-card--bottom">
                <img
                  src="/images/sector-office.jpg"
                  alt="Corporate Offices & IT Workplaces"
                  className="about__stacked-img"
                />
                <div className="about__stacked-overlay" />
                <div className="card-mockup-content">
                  <div className="mockup-header">
                    <Icon icon="mdi:office-building" width={22} color="#9bde4a" />
                    <span>Corporate Offices & IT Workplaces</span>
                  </div>
                  <div className="mockup-meta">Office Helpers · Pantry · Facility Support</div>
                </div>
              </div>

              {/* Spinning Circular Badge */}
              <motion.div
                className="about__circle-badge"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              >
                <svg viewBox="0 0 100 100" className="badge-svg">
                  <path
                    id="aboutCirclePath"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                  <text fill="#ffffff" fontSize="9.5" fontWeight="700" letterSpacing="2.2">
                    <textPath href="#aboutCirclePath">
                      ★ HIRE US ★ EXPERT TEAM ★ HIRE US ★
                    </textPath>
                  </text>
                </svg>
                <div className="about-badge-icon">
                  <Icon icon="mdi:check-decagram" width={18} color="#9bde4a" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Paragraph + Progress Bars + Button */}
          <motion.div
            className="about__text-column"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="about__lead">
              SHREE RaSo RATNA is a Micro Enterprise registered under the Ministry of MSME, Government of India (UDYAM-JH20-0143778). We aim to support organizations with manpower sourcing, staffing coordination and workforce support for day-to-day operations.
            </p>
            <p className="about__subtext">
              We are actively seeking opportunities to serve clients in Patna, Bihar, while our registered operational base is in Ranchi, Jharkhand. Our goal is to build long-term service relationships through clear communication and agreed service standards.
            </p>

            {/* Slider / Progress Bars with Circular Handles */}
            <div className="about__sliders">
              {metrics.map((m, i) => (
                <div key={m.label} className="slider-item">
                  <div className="slider-label-row">
                    <span className="slider-title">{m.label}</span>
                    <span className="slider-pct">{m.value}</span>
                  </div>
                  <div className="slider-track">
                    <motion.div
                      className="slider-bar"
                      initial={{ width: 0 }}
                      animate={inView ? { width: m.value } : {}}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                    >
                      <span className="slider-handle" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="about__action-row">
              <Link to="/about" className="btn-explore">
                <span>Learn More About Us</span>
                <Icon icon="lucide:arrow-right" width={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
