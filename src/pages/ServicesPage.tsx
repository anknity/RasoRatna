import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PageHeader from './PageHeader'
import './Pages.css'

const servicesData = [
  {
    id: '01',
    title: 'Housekeeping & Sanitation Support',
    category: 'Commercial & Healthcare Facilities',
    img: '/images/service-housekeeping.jpg',
    lead: 'Maintaining clean, safe, and welcoming working environments for corporate workplaces, hospitals, and commercial establishments.',
    details: [
      'Daily scheduled cleaning and surface sanitisation for corporate offices, banks, and commercial premises.',
      'Hospital infection-control sanitisation, OPD waiting area cleaning, and ward housekeeping support.',
      'Common area maintenance including lobbies, corridors, glass partitions, and cafeteria areas.',
      'Restroom hygiene maintenance with continuous inspection and supply replenishment.',
      'Trained in the use of industrial cleaning equipment, eco-friendly chemicals, and protective equipment.',
    ],
    roles: ['Floor Cleaners', 'Sanitation Stewards', 'Waste Handlers', 'Facility Helpers'],
  },
  {
    id: '02',
    title: 'Non-Clinical Hospital Support',
    category: 'Healthcare & Nursing Homes',
    img: '/images/sector-healthcare.jpg',
    lead: 'Dedicated non-clinical attendants providing essential ward assistance, patient mobility support, and hospital operational coordination.',
    details: [
      'Ward support attendants assisting nursing staff with routine non-medical patient needs.',
      'Safe patient transfer and escort support across OPD, triage, diagnostics, and wards.',
      'Stretcher, wheelchair, and emergency triage transfer handling with care and respect.',
      'Dietary meal tray distribution and pantry delivery to inpatient rooms.',
      'Linen collection, fresh bedsheet changing assistance, and utility disposal.',
    ],
    roles: ['Ward Attendants', 'Patient Escorts', 'Pantry Staff', 'Stretcher Handlers'],
  },
  {
    id: '03',
    title: 'Corporate Office & Administrative Support',
    category: 'IT/ITES & Corporate Workplaces',
    img: '/images/sector-office.jpg',
    lead: 'Punctual and courteous support personnel keeping corporate headquarters, branches, and institutions running smoothly.',
    details: [
      'Pantry and cafeteria assistants managing executive refreshments, tea/coffee service, and pantry hygiene.',
      'Office assistants managing internal mail, documents, file movement, and courier dispatch.',
      'Meeting room and conference setup including stationery stocking and refreshment prep.',
      'Photocopying, basic scanning, shredding, and record archiving assistance.',
      'Well-groomed, courteous staff trained in professional office etiquette.',
    ],
    roles: ['Office Boys', 'Pantry Stewards', 'Document Runners', 'Front Desk Aides'],
  },
  {
    id: '04',
    title: 'Warehouse, Packing & Logistics Helpers',
    category: 'E-commerce, Retail & FMCG',
    img: '/images/sector-warehouse.jpg',
    lead: 'Energetic, shift-ready workforce powering fast-paced supply chain, sorting, packing, and distribution operations.',
    details: [
      'Inbound and outbound loading and unloading of transport trucks and shipping containers.',
      'Pick, pack, and label operations for retail stores and fast-growing e-commerce fulfillment hubs.',
      'Barcode scanning, inventory stacking, bin allocation, and pallet movement support.',
      'Dispatch staging and last-mile vehicle loading for scheduled deliveries.',
      'Flexible deployment scaling up rapidly during festive or seasonal peak sales demand.',
    ],
    roles: ['Loading Helpers', 'Pick & Pack Staff', 'Sorter Aides', 'Inventory Helpers'],
  },
  {
    id: '05',
    title: 'General Helpers & Manufacturing Site Support',
    category: 'Industrial Plants & Construction',
    img: '/images/sector-manufacturing.jpg',
    lead: 'Reliable helpers adhering strictly to safety regulations, PPE protocols, and plant-floor operational schedules.',
    details: [
      'Shop-floor assistance for machine operators, material feeding, and part staging.',
      'Finished goods packaging, strapping, boxing, and dispatch preparation.',
      'General industrial housekeeping, chip/scrap clearance, and spill cleanup.',
      'Civil construction site helper tasks: brick movement, mortar assistance, and cleanup.',
      'Strict adherence to industrial PPE (helmets, safety shoes, hi-vis jackets, and masks).',
    ],
    roles: ['Plant Helpers', 'Machine Aides', 'Material Handlers', 'Site Cleanup Crew'],
  },
]

const steps = [
  {
    step: '01',
    title: 'Requirement-Based Staffing',
    desc: 'We discuss your specific roles, headcount requirements, shift patterns (day/night/rotational), and deployment timelines before confirming any engagement.',
  },
  {
    step: '02',
    title: 'Practical Coordination',
    desc: 'Our dedicated coordinator oversees candidate screening, identity verification, onboarding briefings, attendance follow-up, and direct communication with your site manager.',
  },
  {
    step: '03',
    title: 'Transparent Engagement',
    desc: 'We agree on written scope, commercial terms, compliance standards, responsibilities, and payment schedules upfront — zero hidden conditions.',
  },
]

export default function ServicesPage() {
  return (
    <div className="subpage services-page">
      <PageHeader
        badge="Our Core Capabilities"
        title="Professional Workforce"
        highlight="& Staffing Solutions"
        subtitle="Comprehensive manpower supply, reliable staffing coordination, and on-ground workforce support for hospitals, corporate offices, warehouses, and industrial facilities across Bihar & Jharkhand."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services List */}
      <section className="subpage-section">
        <div className="container">
          <div className="services-detailed-list">
            {servicesData.map((service, index) => (
              <motion.article
                key={service.id}
                className={`service-detail-row ${index % 2 === 1 ? 'service-detail-row--reverse' : ''}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
              >
                {/* Visual Image Column */}
                <div className="service-detail__visual">
                  <div className="service-detail__img-frame">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="service-detail__img"
                    />
                    <div className="service-detail__badge-tag">
                      <span className="badge-tag-id">{service.id}</span>
                      <span className="badge-tag-cat">{service.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="service-detail__content">
                  <div className="service-detail__num">SERVICE #{service.id}</div>
                  <h2 className="service-detail__title">{service.title}</h2>
                  <p className="service-detail__lead">{service.lead}</p>

                  <h3 className="service-detail__subhead">Scope of Responsibilities:</h3>
                  <ul className="service-detail__points">
                    {service.details.map((point, idx) => (
                      <li key={idx} className="service-point-item">
                        <Icon icon="lucide:check-circle-2" width={18} className="point-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-detail__roles-box">
                    <span className="roles-box-label">Typical Roles Deployed:</span>
                    <div className="roles-tags">
                      {service.roles.map((role) => (
                        <span key={role} className="role-tag">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-detail__action">
                    <Link to="/contact" className="btn-service-inquire">
                      <span>Inquire About This Service</span>
                      <Icon icon="lucide:arrow-right" width={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Service Approach */}
      <section className="subpage-section subpage-section--dark">
        <div className="container">
          <div className="section-head-center">
            <div className="hero__pill-tag hero__pill-tag--glass">
              <span className="pill-dot" />
              <span className="pill-divider" />
              <span className="pill-text">Operational Methodology</span>
            </div>
            <h2 className="section-title-white">
              Our 3-Step Service Delivery Approach
            </h2>
            <p className="section-desc-light">
              How SHREE RaSo RATNA ensures transparent, dependable, and swift workforce coordination from requirement to shift deployment.
            </p>
          </div>

          <div className="methodology-grid">
            {steps.map((step) => (
              <div key={step.step} className="methodology-card">
                <div className="methodology-num">{step.step}</div>
                <h3 className="methodology-title">{step.title}</h3>
                <p className="methodology-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Need Customized Workforce for Your Facility?
              </h2>
              <p className="cta-banner-desc">
                Contact our deployment coordination desk. We provide role breakdowns, commercial quotations, and candidate deployment timelines for your specific requirements in Patna & Ranchi.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn-banner-primary">
                <span>Request Staffing Quote</span>
                <Icon icon="lucide:arrow-right" width={18} />
              </Link>
              <a
                href="https://wa.me/919870418329"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-banner-whatsapp"
              >
                <Icon icon="mdi:whatsapp" width={20} />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

