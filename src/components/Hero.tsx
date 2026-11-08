import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Full-Screen Looping Cinematic Background Video */}
      <div className="hero__video-wrapper">
        <video
          className="hero__video-element"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-bg-flow.mp4" type="video/mp4" />
          <source src="/videos/hero-bg-1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-scrim" />
      </div>

      <div className="container hero__inner">
        {/* Bottom-Anchored Content (Reference-Matched Layout) */}
        <div className="hero__content">
          {/* Eyebrow Label: Clean direct text without pill bubble */}
          <motion.div
            className="hero__direct-label"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="direct-label__dot" />
            <span className="direct-label__text">
              Ministry of MSME Registered · <span className="nowrap-text">UDYAM-JH20-0143778</span>
            </span>
          </motion.div>

          {/* Main Title: Bold, Crisp, Large */}
          <motion.h1
            className="hero__title hero__title--light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Empowering Your <br className="hero-br" />
            <span className="hero__title-highlight">Operations with Skilled</span> <br className="hero-br" />
            Workforce Support
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            className="hero__desc hero__desc--light"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Rapid, reliable manpower sourcing, staffing coordination, and on-ground workforce support for hospitals, corporate offices, warehouses, and industrial facilities across Bihar & Jharkhand.
          </motion.p>

          {/* Two Sleek Full-Width Action Buttons (Exact Reference Match) */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {/* Primary Action Button (Brand Lime) */}
            <Link to="/contact" className="btn-pill-primary">
              <span className="btn-pill-text">Request Staffing 24/7</span>
              <span className="btn-pill-circle btn-pill-circle--primary">
                <Icon icon="lucide:phone-call" width={16} />
              </span>
            </Link>

            {/* Secondary Action Button (Reference Cream / Light) */}
            <Link to="/services" className="btn-pill-secondary">
              <span className="btn-pill-text">Book / View All Services</span>
              <span className="btn-pill-circle btn-pill-circle--dark">
                <Icon icon="lucide:arrow-right" width={16} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop-Only Visual Collage (Hidden on Mobile Screens) */}
        <motion.div
          className="hero__collage-wrap desktop-only"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="collage-ambient-glow" />

          <div className="hero__collage">
            {/* Card 1: Tall Arched Portrait Card */}
            <motion.div
              className="collage-card collage-card--tall"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/hero-team.jpg"
                alt="Corporate Workforce Leadership Team"
                className="collage-img"
              />
              <div className="collage-card__badge">
                <Icon icon="lucide:users" width={13} color="#9bde4a" />
                <span>Workforce Team</span>
              </div>
            </motion.div>

            {/* Card 2: Mid-Left Landscape Card */}
            <motion.div
              className="collage-card collage-card--mid"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/sector-healthcare.jpg"
                alt="Healthcare & Ward Attendant Support"
                className="collage-img"
              />
              <div className="collage-card__badge">
                <Icon icon="lucide:hospital" width={13} color="#9bde4a" />
                <span>Healthcare Support</span>
              </div>
            </motion.div>

            {/* Card 3: Bottom-Right Landscape Card */}
            <motion.div
              className="collage-card collage-card--bottom"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/sector-warehouse.jpg"
                alt="Logistics & Warehousing Helpers"
                className="collage-img"
              />
              <div className="collage-card__badge">
                <Icon icon="lucide:package-check" width={13} color="#9bde4a" />
                <span>Logistics & Warehousing</span>
              </div>
            </motion.div>

            {/* Rotating Starburst Seal */}
            <motion.div
              className="collage-seal"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 100 100" className="collage-seal__svg">
                <path
                  id="collageSealPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text fill="#ffffff" fontSize="9.2" fontWeight="700" letterSpacing="2.2">
                  <textPath href="#collageSealPath">
                    ★ HIRE US ★ SHREE RATNA ★ HIRE US ★
                  </textPath>
                </text>
              </svg>
              <div className="collage-seal__star">
                <Icon icon="mdi:star-four-points" width={18} color="#9bde4a" />
              </div>
            </motion.div>

            {/* Floating 4-Point Lime Accent Star */}
            <motion.div
              className="collage-sparkle-star"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 0C24 13.255 13.255 24 0 24C13.255 24 24 34.745 24 48C24 34.745 34.745 24 48 24C34.745 24 24 13.255 24 0Z"
                  fill="#9bde4a"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
