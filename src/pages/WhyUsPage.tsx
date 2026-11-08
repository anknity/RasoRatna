import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PageHeader from './PageHeader'
import './Pages.css'

const valueProps = [
  {
    icon: 'lucide:sliders',
    title: 'Flexible Sourcing',
    tagline: 'Customized To Your Exact Roles & Headcount',
    desc: 'Every business has distinct staffing dynamics. We don’t force rigid package deals. Whether you require a lean 4-person housekeeping team for an office, 20 shift-based hospital attendants for a hospital ward, or a 50+ seasonal helper squad for warehouse operations, we customize our recruitment and deployment to your exact headcount and shift needs.',
    highlights: [
      'Tailored headcount from small batches to bulk deployments',
      'Day, night, or 24/7 rotating 3-shift coverage',
      'Short-term project support or ongoing multi-year engagements',
      'Fast ramp-up for seasonal, festive, or emergency requirements',
    ],
  },
  {
    icon: 'lucide:user-check',
    title: 'Responsive Coordination',
    tagline: 'Single Dedicated Point of Contact (SPOC)',
    desc: 'Dealing with uncoordinated middlemen causes operational friction. With SHREE RaSo RATNA, your operations managers communicate with one dedicated coordinator who oversees candidate screening, daily attendance follow-ups, dispute resolution, and shift backfills.',
    highlights: [
      'Direct contact via phone, WhatsApp, and email',
      'Daily attendance reporting and muster roll verification',
      'Immediate action on unexpected staff leaves or dropouts',
      'Proactive escalation handling without bureaucratic delays',
    ],
  },
  {
    icon: 'lucide:file-text',
    title: 'Clear & Transparent Terms',
    tagline: 'Everything in Writing Before Work Begins',
    desc: 'Trust starts with absolute transparency. We establish written scope of work, agreed commercial billing rates, attendance verification protocols, statutory compliance guidelines, and payment schedules upfront before deploying a single team member.',
    highlights: [
      'Pre-agreed commercial quotation with zero hidden charges',
      'Transparent billing matched strictly against verified attendance logs',
      'Defined replacement timeline and performance expectations',
      'Written scope and compliance obligations agreed mutually',
    ],
  },
  {
    icon: 'lucide:map-pin',
    title: 'Local Opportunity Focus',
    tagline: 'Strategic Focus on Patna & Ranchi Ecosystem',
    desc: 'Headquartered in Ranchi, Jharkhand, and actively seeking expansion opportunities to serve clients and facility management partners in Patna, Bihar. We leverage grassroots local recruitment networks to source reliable, vetted, and motivated local workforce.',
    highlights: [
      'Strong on-ground candidate pipeline in Bihar & Jharkhand',
      'Familiarity with regional industrial areas, hospital zones, and IT parks',
      'Open to partnerships with national Facility Management (FM) providers',
      'Fast local response and on-site client visit capability',
    ],
  },
]

const comparisonData = [
  {
    metric: 'Entity Registration & Legitimacy',
    unorganized: 'Unregistered local middlemen, high risk of dispute',
    shreeRatna: 'Registered Micro Enterprise under Ministry of MSME, Govt. of India (UDYAM-JH20-0143778)',
  },
  {
    metric: 'Commercial Agreement',
    unorganized: 'Informal verbal promises, sudden rate hikes',
    shreeRatna: 'Written agreement with scope, rates, and payment schedule agreed before deployment',
  },
  {
    metric: 'Accountability & Coordination',
    unorganized: 'Multiple disconnected agents, poor follow-up',
    shreeRatna: 'Dedicated single coordinator managing daily attendance, shifts, and client updates',
  },
  {
    metric: 'Absenteeism & Replacement',
    unorganized: 'Unannounced dropouts left unreplaced for days',
    shreeRatna: 'Guaranteed coordinator replacement process with standby backup candidates',
  },
  {
    metric: 'Billing & Muster Audit',
    unorganized: 'Manual inflated bills with zero verification',
    shreeRatna: 'Transparent billing calculated strictly from verified client-approved muster rolls',
  },
]

const faqs = [
  {
    q: 'How quickly can SHREE RaSo RATNA deploy workforce after requirement confirmation?',
    a: 'For standard helper, housekeeping, or non-clinical roles in Patna or Ranchi, initial deployment can typically be mobilized within 3 to 7 business days following finalization of written scope, headcount agreement, and commercial terms. For specialized or bulk requirements (30+ personnel), a phased deployment schedule is planned collaboratively.',
  },
  {
    q: 'How is daily attendance tracked and verified?',
    a: 'Attendance is recorded on-site using the client’s designated punch/biometric system or physical muster rolls signed by your authorized site supervisor. Our coordinator performs daily check-ins to verify headcount, and monthly invoices are generated strictly based on these verified records.',
  },
  {
    q: 'What happens if a deployed candidate is unsuitable or absent?',
    a: 'If any deployed personnel fails to meet work standards or is absent unexpectedly, notify our single-point coordinator immediately. We initiate a prompt replacement from our standby pool within an agreed turnaround window (typically 24 to 48 hours).',
  },
  {
    q: 'Are you seeking facility management (FM) subcontracting partnerships?',
    a: 'Yes. We actively welcome partnerships with national and regional Facility Management (FM) companies who have won master service agreements in Patna, Bihar, or Ranchi, Jharkhand, and need a dependable, compliant local manpower supplier to execute on-ground staffing.',
  },
  {
    q: 'How are statutory obligations (PF, ESIC, GST) handled?',
    a: 'As stated in our official company charter, client-specific deployment, statutory compliance, PF/ESI, payroll, and other obligations will be confirmed according to the agreed contract scope and applicable labor laws. All commercial proposals outline statutory heads with 100% clarity.',
  },
]

export default function WhyUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="subpage why-us-page">
      <PageHeader
        badge="Why Partner With Us"
        title="Why Organisations Choose"
        highlight="SHREE RaSo RATNA"
        subtitle="Transparent terms, flexible sourcing, single-point coordination, and a dedicated focus on serving Bihar & Jharkhand enterprises."
        breadcrumbs={[{ label: 'Why Us' }]}
      />

      {/* 4 Core Value Propositions */}
      <section className="subpage-section">
        <div className="container">
          <div className="value-props-grid">
            {valueProps.map((prop, idx) => (
              <motion.div
                key={prop.title}
                className="value-prop-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="value-prop-icon">
                  <Icon icon={prop.icon} width={26} color="#9bde4a" />
                </div>
                <h3 className="value-prop-title">{prop.title}</h3>
                <h4 className="value-prop-tagline">{prop.tagline}</h4>
                <p className="value-prop-desc">{prop.desc}</p>
                <div className="value-prop-highlights">
                  {prop.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <Icon icon="lucide:check-circle-2" width={16} color="#9bde4a" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table: Unorganized vs SHREE RaSo RATNA */}
      <section className="subpage-section subpage-section--dark">
        <div className="container">
          <div className="section-head-center">
            <div className="hero__pill-tag hero__pill-tag--glass">
              <span className="pill-dot" />
              <span className="pill-divider" />
              <span className="pill-text">The Quality Difference</span>
            </div>
            <h2 className="section-title-white">
              Unorganized Sourcing vs. SHREE RaSo RATNA
            </h2>
            <p className="section-desc-light">
              See why leading hospitals, offices, and warehouses choose structured manpower coordination over chaotic informal hiring.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="col-aspect">Operational Aspect</th>
                  <th className="col-unorganized">Unorganized Local Middlemen</th>
                  <th className="col-shree">SHREE RaSo RATNA (MSME Registered)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="cell-metric">{row.metric}</td>
                    <td className="cell-unorg">
                      <div className="unorg-content">
                        <Icon icon="lucide:x-circle" width={16} className="x-icon" />
                        <span>{row.unorganized}</span>
                      </div>
                    </td>
                    <td className="cell-shree">
                      <div className="shree-content">
                        <Icon icon="lucide:check-circle-2" width={18} className="check-icon" />
                        <span>{row.shreeRatna}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="subpage-section">
        <div className="container">
          <div className="faq-section-wrapper">
            <div className="section-head-center">
              <div className="hero__pill-tag">
                <span className="pill-dot" />
                <span className="pill-divider" />
                <span className="pill-text">Frequently Asked Questions</span>
              </div>
              <h2 className="faq-main-title">
                Common Questions About Our Manpower Supply
              </h2>
              <p className="faq-main-desc">
                Everything you need to know about our recruitment process, deployment timelines, attendance audits, and operational locations.
              </p>
            </div>

            <div className="faq-accordion">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    key={index}
                    className={`faq-accordion-item ${isOpen ? 'faq-accordion-item--open' : ''}`}
                  >
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <div className="faq-icon-pill">
                        <Icon
                          icon={isOpen ? 'lucide:minus' : 'lucide:plus'}
                          width={16}
                          color="#0b1a11"
                        />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className="faq-answer-drawer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="faq-answer-inner">
                            <p>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Experience Hassle-Free Workforce Coordination
              </h2>
              <p className="cta-banner-desc">
                Contact us today for a straightforward discussion on your required roles, shift rosters, and headcount. We look forward to serving your facility in Patna or Ranchi.
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
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

