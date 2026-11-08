import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PageHeader from './PageHeader'
import './Pages.css'

const sectorsDetail = [
  {
    id: '01',
    name: 'Healthcare & Hospitals',
    icon: 'mdi:hospital-building',
    img: '/images/sector-healthcare.jpg',
    lead: 'Non-clinical attendants and sanitation personnel providing essential support to hospitals, clinics, diagnostic centers, and nursing homes.',
    roles: ['Ward Attendants', 'Sanitation Staff', 'Stretcher & Wheelchair Escorts', 'Linen & Pantry Attendants'],
    deliverables: [
      'Infection-control conscious cleaning across OPD, ICU corridors, and patient rooms.',
      'Compassionate and patient-sensitive assistance for elderly and non-ambulatory patients.',
      'Flexible 3-shift rotation (morning, evening, night) maintaining unbroken ward coverage.',
      'Emergency room support attendants ready for swift patient intake assistance.',
    ],
  },
  {
    id: '02',
    name: 'Corporate Offices & IT/ITES',
    icon: 'mdi:office-building',
    img: '/images/sector-office.jpg',
    lead: 'Courteous, well-groomed facility support teams elevating workplace productivity and administrative workflow for enterprises in Patna & Ranchi.',
    roles: ['Office Boys', 'Pantry Stewards', 'Mail & Courier Runners', 'Meeting Room Coordinators'],
    deliverables: [
      'Daily surface maintenance, glass cleaning, and workstation hygiene.',
      'Executive boardroom preparation and tea/coffee beverage service.',
      'Internal documentation movement, parcel receipts, and inter-department courier deliveries.',
      'Strict adherence to enterprise confidentiality and workplace decorum.',
    ],
  },
  {
    id: '03',
    name: 'Retail, E-commerce & FMCG',
    icon: 'mdi:store',
    img: '/images/sector-retail.jpg',
    lead: 'Agile workforce backing supermarket stores, FMCG depots, and high-velocity e-commerce delivery hubs.',
    roles: ['Store Shelf Helpers', 'Packing Associates', 'Billing Counter Helpers', 'Inventory Checkers'],
    deliverables: [
      'Rapid picking, packing, scanning, and taping of customer orders.',
      'Retail shelf restocking, product facing, and expired goods sorting.',
      'Rapid ramp-up of temporary headcount during festive sales and festival peaks.',
      'Stock counting and barcode verification alongside store managers.',
    ],
  },
  {
    id: '04',
    name: 'Logistics & Warehousing',
    icon: 'mdi:warehouse',
    img: '/images/sector-warehouse.jpg',
    lead: 'Sturdy, shift-ready workforce powering freight logistics, distribution hubs, transport hubs, and container terminals.',
    roles: ['Container Loaders', 'Pallet Movers', 'Forklift Assistants', 'Dispatch Stagers'],
    deliverables: [
      'Fast turnaround for freight truck loading, unloading, and cross-docking.',
      'Pallet stacking, shrink wrapping, and safe cargo strapping.',
      'Warehouse floor sweeping, carton debris clearance, and aisle maintenance.',
      'Zero unauthorized absenteeism through active backup coordinator replacement.',
    ],
  },
  {
    id: '05',
    name: 'Manufacturing & Industrial Units',
    icon: 'mdi:factory',
    img: '/images/sector-manufacturing.jpg',
    lead: 'Disciplined plant-floor helpers supporting assembly lines, fabrication units, and industrial manufacturing plants.',
    roles: ['Shop-floor Helpers', 'Machine Tender Aides', 'Material Transfer Staff', 'Industrial Cleaners'],
    deliverables: [
      'Raw material transport to workstations and finished goods transfer to staging.',
      'Assembly line assistance under direct guidance of line supervisors.',
      'Mandatory PPE compliance: safety boots, helmets, gloves, and protective eyewear.',
      'Industrial housekeeping: swarf removal, chip clearance, and oil spill containment.',
    ],
  },
  {
    id: '06',
    name: 'Educational Institutions',
    icon: 'mdi:school',
    img: '/images/sector-education.jpg',
    lead: 'Trustworthy and background-verified support staff maintaining clean, safe campus environments for schools, colleges, and coaching centers.',
    roles: ['Campus Sweepers', 'Classroom Assistants', 'Laboratory Aides', 'Sports Ground Helpers'],
    deliverables: [
      'Classroom sanitisation, bench wiping, whiteboard cleaning, and waste management.',
      'Laboratory equipment cleaning, glassware washing, and setup help.',
      'Auditorium and examination hall seating arrangements and stage preparation.',
      'Clean background checks ensuring complete student safety and peace of mind.',
    ],
  },
  {
    id: '07',
    name: 'Construction & Engineering Sites',
    icon: 'mdi:hard-hat',
    img: '/images/sector-construction.jpg',
    lead: 'Hardworking general site helpers providing manual support for civil building, renovation, and infrastructure projects.',
    roles: ['Civil Helpers', 'Material Handling Labor', 'Debris Clearing Crew', 'Scaffolding Assistants'],
    deliverables: [
      'Moving cement bags, bricks, sand, aggregate, and building supplies on site.',
      'Mortar mixing assistance, curing watering, and surface preparation.',
      'Construction debris clearance, rubble disposal, and access path maintenance.',
      'Strict safety adherence to helmets, safety boots, and high-visibility vests.',
    ],
  },
  {
    id: '08',
    name: 'Facilities Management Partners',
    icon: 'mdi:cog-outline',
    img: '/images/service-housekeeping.jpg',
    lead: 'Strategic local workforce subcontracting partner for national and regional facility management (FM) firms seeking verified staff in Bihar & Jharkhand.',
    roles: ['Subcontracted Staffing', 'Deployment Squads', 'Relief Backfills', 'On-ground Coordinators'],
    deliverables: [
      'Fast local candidate sourcing through established ground networks in Patna and Ranchi.',
      'Transparent billing and verified time-sheet attendance records.',
      'Seamless alignment with your primary FM contract SLA and service quality metrics.',
      'Guaranteed replacement coordination for planned leaves and unexpected dropouts.',
    ],
  },
]

export default function SectorsPage() {
  return (
    <div className="subpage sectors-page">
      <PageHeader
        badge="Industry Sectors"
        title="Sectors We Serve Across"
        highlight="Bihar & Jharkhand"
        subtitle="Tailored manpower sourcing and workforce management solutions supporting key economic sectors across hospitals, corporate hubs, supply chains, and industrial facilities."
        breadcrumbs={[{ label: 'Sectors' }]}
      />

      {/* Sectors Grid */}
      <section className="subpage-section">
        <div className="container">
          <div className="sectors-detailed-grid">
            {sectorsDetail.map((sec, index) => (
              <motion.div
                key={sec.id}
                className="sector-detail-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              >
                {/* Image Banner */}
                <div className="sector-detail-card__img-box">
                  <img src={sec.img} alt={sec.name} className="sector-detail-card__img" />
                  <div className="sector-detail-card__overlay" />
                  <div className="sector-detail-card__id-badge">
                    <span className="sec-id">{sec.id}</span>
                  </div>
                  <div className="sector-detail-card__icon-badge">
                    <Icon icon={sec.icon} width={22} color="#9bde4a" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="sector-detail-card__body">
                  <h3 className="sector-detail-card__title">{sec.name}</h3>
                  <p className="sector-detail-card__lead">{sec.lead}</p>

                  <div className="sector-detail-card__roles">
                    <span className="roles-head">Key Roles Supplied:</span>
                    <div className="roles-pill-row">
                      {sec.roles.map((role) => (
                        <span key={role} className="sec-role-pill">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="sector-detail-card__deliverables">
                    <span className="deliv-head">Core Operational Highlights:</span>
                    <ul className="deliv-list">
                      {sec.deliverables.map((deliv, idx) => (
                        <li key={idx} className="deliv-item">
                          <Icon icon="lucide:check" width={14} className="deliv-check" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sector-detail-card__footer">
                    <Link to="/contact" className="btn-sector-contact">
                      <span>Request Staffing for {sec.name.split(' ')[0]}</span>
                      <Icon icon="lucide:arrow-right" width={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards Note from PDF */}
      <section className="subpage-section subpage-section--dark">
        <div className="container">
          <div className="compliance-notice-box">
            <div className="compliance-icon-wrap">
              <Icon icon="lucide:shield-check" width={36} color="#9bde4a" />
            </div>
            <div className="compliance-text-wrap">
              <h3 className="compliance-title">Compliance, Standards & Registrations</h3>
              <p className="compliance-desc">
                SHREE RaSo RATNA is a Registered Micro Enterprise under the Ministry of MSME, Government of India (Udyam Registration No.: <strong>UDYAM-JH20-0143778</strong>). All staffing discussions, deployments, and commercial terms are subject to mutually agreed written scope, client-specific operating requirements, statutory compliance (PF, ESIC, GST), and applicable labor laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Have a Specific Sector Requirement?
              </h2>
              <p className="cta-banner-desc">
                Whether you need a full team of hospital ward attendants in Patna, warehouse pickers during festive spikes, or ongoing facility helpers in Ranchi, we tailor our deployment to your exact operational schedule.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn-banner-primary">
                <span>Contact Our Coordinator</span>
                <Icon icon="lucide:arrow-right" width={18} />
              </Link>
              <a
                href="tel:+919870418329"
                className="btn-banner-phone"
              >
                <Icon icon="lucide:phone" width={18} />
                <span>+91-9870418329</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

