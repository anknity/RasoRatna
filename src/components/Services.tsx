import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './Services.css'

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="services__header">
          <div className="services__header-left">
            <div className="hero__pill-tag hero__pill-tag--dark">
              <span className="pill-dot" />
              <span className="pill-divider pill-divider--light" />
              <span className="pill-text pill-text--light">Our Services</span>
            </div>
            <motion.h2
              className="services__title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Boost Your Operations <br />
              with Our Workforce Expertise
            </motion.h2>
          </div>

          <motion.div
            className="services__header-right"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link to="/services" className="btn-outline-pill">
              <span>View All Services</span>
              <Icon icon="lucide:arrow-right" width={16} />
            </Link>
          </motion.div>
        </div>

        {/* 3 Featured Cards: [Dark Card] [Lime Highlight Card] [Dark Card] */}
        <div className="services__cards-grid">
          {/* Card 1: Dark Card */}
          <motion.div
            className="service-card service-card--dark"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <div className="service-card__image-box service-card__image-box--photo">
              <img
                src="/images/service-housekeeping.jpg"
                alt="Housekeeping & Sanitation"
                className="service-card__photo"
              />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__title">Housekeeping & Sanitation</h3>
              <p className="service-card__desc">
                Offices, commercial complexes, and hospital facilities housekeeping and sanitation support with reliable, verified staff.
              </p>
              <Link to="/services" className="service-card__link">
                <span>Learn more</span>
                <Icon icon="lucide:arrow-right" width={15} />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: LIME ACCENT CARD (Middle Highlight, inverted layout) */}
          <motion.div
            className="service-card service-card--lime"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6 }}
          >
            <div className="service-card__body">
              <h3 className="service-card__title service-card__title--dark">
                Non-Clinical Hospital Support
              </h3>
              <p className="service-card__desc service-card__desc--dark">
                Ward attendants, patient assistance, pantry staff, and general support attendants deployed according to strict hospital hygiene and attendance protocols.
              </p>
              <Link to="/services" className="service-card__link service-card__link--dark">
                <span>Learn more</span>
                <Icon icon="lucide:arrow-right" width={15} />
              </Link>
            </div>
            <div className="service-card__image-box service-card__image-box--lime-photo">
              <img
                src="/images/sector-healthcare.jpg"
                alt="Hospital Support Staff"
                className="service-card__photo"
              />
            </div>
          </motion.div>

          {/* Card 3: Dark Card */}
          <motion.div
            className="service-card service-card--dark"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -6 }}
          >
            <div className="service-card__image-box service-card__image-box--photo">
              <img
                src="/images/sector-warehouse.jpg"
                alt="Logistics & Warehousing"
                className="service-card__photo"
              />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__title">Warehouse, Packing & Logistics</h3>
              <p className="service-card__desc">
                Helpers for retail, e-commerce fulfilment, parcel sorting, loading/unloading, inventory management, and last-mile operations support.
              </p>
              <Link to="/services" className="service-card__link">
                <span>Learn more</span>
                <Icon icon="lucide:arrow-right" width={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
