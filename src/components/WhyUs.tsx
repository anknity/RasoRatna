import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './WhyUs.css'

const reasons = [
  {
    icon: 'mdi:account-search',
    title: 'Flexible Sourcing',
    desc: 'Staffing discussions based on your required roles and headcount — no rigid packages.',
  },
  {
    icon: 'mdi:headset',
    title: 'Responsive Coordination',
    desc: 'A single point of contact for requirement updates and deployment planning throughout.',
  },
  {
    icon: 'mdi:file-sign',
    title: 'Clear Written Terms',
    desc: 'Written scope, rates, attendance process and payment terms confirmed before any deployment begins.',
  },
  {
    icon: 'mdi:map-marker-check',
    title: 'Local Opportunity Focus',
    desc: 'Seeking client and facility-management partnerships specifically in Patna, Bihar.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" className="why-us" ref={ref}>
      <div className="container why-us__inner">
        {/* Left */}
        <motion.div
          className="why-us__left"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Why Work With Us?</div>
          <h2 className="section-title why-us__title">
            Why <span className="text-lime">SHREE RaSo RATNA</span>
            <br />is the Right Partner
          </h2>
          <p className="why-us__desc">
            Our goal is to build long-term service relationships through clear communication, reliable coordination and agreed service standards. We engage transparently — writing down every scope, term and responsibility before work begins.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link to="/why-us" className="btn-explore">
              <span>Compare Our Advantages</span>
              <Icon icon="lucide:arrow-right" width={18} />
            </Link>
          </div>

          <div className="why-us__process">
            {[
              { n: '01', t: 'Discuss Requirements', d: 'Roles, headcount, shift pattern and deployment timeline confirmed before we agree.' },
              { n: '02', t: 'Coordinate & Source', d: 'Candidate sourcing, attendance follow-up and ongoing client communication.' },
              { n: '03', t: 'Transparent Deployment', d: 'Commercial terms, responsibilities and payment schedule in writing before work starts.' },
            ].map((step) => (
              <div key={step.n} className="why-us__step">
                <div className="why-us__step-num">{step.n}</div>
                <div>
                  <div className="why-us__step-title">{step.t}</div>
                  <div className="why-us__step-desc">{step.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — cards */}
        <div className="why-us__cards">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="why-us__card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="why-us__card-icon">
                <Icon icon={r.icon} width={26} />
              </div>
              <h3 className="why-us__card-title">{r.title}</h3>
              <p className="why-us__card-desc">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

