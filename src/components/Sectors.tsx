import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './Sectors.css'

const sectors = [
  {
    id: '01',
    icon: 'mdi:hospital-building',
    title: 'Healthcare & Hospitals',
    desc: 'Ward attendants, sanitation staff, non-clinical patient support and infection-control conscious cleaning.',
    img: '/images/sector-healthcare.jpg',
    roles: 'Ward Attendants · Sanitation · Patient Escorts',
  },
  {
    id: '02',
    icon: 'mdi:office-building',
    title: 'Corporate Offices & IT/ITES',
    desc: 'Office boys, pantry stewards, boardroom coordinators, and administrative facility assistants.',
    img: '/images/sector-office.jpg',
    roles: 'Office Boys · Pantry Stewards · Facility Aides',
  },
  {
    id: '03',
    icon: 'mdi:store',
    title: 'Retail, E-commerce & FMCG',
    desc: 'Store shelf restocking, high-velocity packing, order sorting, and seasonal sales ramp-up staffing.',
    img: '/images/sector-retail.jpg',
    roles: 'Store Helpers · Packers · Dispatch Sorters',
  },
  {
    id: '04',
    icon: 'mdi:warehouse',
    title: 'Logistics & Warehousing',
    desc: 'Container loading/unloading, pallet staging, inventory movement, and reliable shift-based helpers.',
    img: '/images/sector-warehouse.jpg',
    roles: 'Loaders · Sorters · Pallet Movers',
  },
  {
    id: '05',
    icon: 'mdi:factory',
    title: 'Manufacturing & Industrial',
    desc: 'Plant-floor helpers, machine tender aides, material transfer labor, and safety PPE compliant crew.',
    img: '/images/sector-manufacturing.jpg',
    roles: 'Shop-Floor Helpers · Material Handlers',
  },
  {
    id: '06',
    icon: 'mdi:school',
    title: 'Educational Institutions',
    desc: 'Background-verified campus housekeeping, lab aides, exam hall coordinators, and classroom hygiene staff.',
    img: '/images/sector-education.jpg',
    roles: 'Campus Cleaners · Lab Aides · Exam Staff',
  },
  {
    id: '07',
    icon: 'mdi:hard-hat',
    title: 'Construction & Engineering',
    desc: 'General site helpers, building material movement, debris clearing, and supervised civil work support.',
    img: '/images/sector-construction.jpg',
    roles: 'Site Helpers · Material Handling · Debris Crew',
  },
  {
    id: '08',
    icon: 'mdi:cog-outline',
    title: 'Facilities Management',
    desc: 'Strategic local manpower subcontracting partner with verified attendance and transparent billing.',
    img: '/images/service-housekeeping.jpg',
    roles: 'Subcontracted Staff · Deployment Squads',
  },
]

export default function Sectors() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sectors" className="sectors" ref={ref}>
      <div className="container">
        <motion.div
          className="sectors__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Sectors We Serve</div>
          <h2 className="section-title sectors__title">
            Industries We <span className="text-lime-on-light">Support</span>
          </h2>
          <p className="sectors__sub">
            Verified, trained manpower deployed across Bihar & Jharkhand. Click any industry to view dedicated staffing solutions, deliverables, and role specifications.
          </p>
          <div className="sectors__header-cta">
            <Link to="/sectors" className="btn-explore-sectors">
              <span>View All 8 Industry Detail Pages</span>
              <Icon icon="lucide:arrow-right" width={16} />
            </Link>
          </div>
        </motion.div>

        <div className="sectors__grid">
          {sectors.map((s, i) => (
            <motion.div
              key={s.id}
              className="sectors__card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Link to="/sectors" className="sectors__card-link" aria-label={`View ${s.title} staffing details`}>
                {/* Visual Window - 100% Unobscured AI Photo */}
                <div className="sectors__card-visual">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="sectors__card-img"
                    loading="lazy"
                  />
                  {/* Subtle edge vignette at very bottom of photo only */}
                  <div className="sectors__card-scrim" />

                  {/* Top Floating Badge Row */}
                  <div className="sectors__card-badges">
                    <span className="sectors__badge-num">{s.id}</span>
                    <span className="sectors__badge-icon">
                      <Icon icon={s.icon} width={20} />
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="sectors__card-body">
                  <span className="sectors__card-roles-badge">{s.roles}</span>
                  <h3 className="sectors__card-title">{s.title}</h3>
                  <p className="sectors__card-desc">{s.desc}</p>
                  
                  <div className="sectors__card-footer">
                    <span className="sectors__learn-more">
                      <span>Explore Requirements</span>
                      <Icon icon="lucide:arrow-up-right" width={16} className="learn-more-arrow" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

