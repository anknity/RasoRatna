import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import PageHeader from './PageHeader'
import './Pages.css'

const approachPillars = [
  {
    num: '01',
    title: 'Requirement-Based Staffing',
    score: '85%',
    tagline: 'Precision Matching for Every Role',
    desc: 'We never deploy generic manpower without thorough scoping. Before taking on any assignment, we sit down with your operations managers to understand the exact role specifications, headcount requirements, day/night shift schedules, physical demands, and deployment timelines.',
    points: [
      'Site-specific job role profiling',
      'Candidate background & skill screening',
      'Shift-wise headcount allocation',
      'Clear job responsibility briefing prior to day one',
    ],
  },
  {
    num: '02',
    title: 'Practical Coordination',
    score: '80%',
    tagline: 'Single Point of Contact for On-Ground Oversight',
    desc: 'Deploying staff is only step one; maintaining daily continuity is what counts. SHREE RaSo RATNA assigns a dedicated coordination lead who directly manages candidate onboarding, attendance tracking, daily muster roll checks, and swift replacement coordination.',
    points: [
      'Direct phone/WhatsApp coordinator communication',
      'Real-time attendance & roster monitoring',
      'Fast replacement for unexpected absenteeism',
      'Proactive grievance resolution between staff & client',
    ],
  },
  {
    num: '03',
    title: 'Transparent Engagement',
    score: '95%',
    tagline: 'Everything in Writing Before Work Begins',
    desc: 'We believe business relationships are built on total transparency. All commercial rates, scope of work, attendance verification protocols, statutory compliance obligations, and payment terms are agreed upon in writing before deployment.',
    points: [
      'Written service agreement & commercial quote',
      'Transparent billing per verified attendance logs',
      'Statutory compliance (PF/ESI/GST) clarity',
      'No surprise fees or hidden add-ons',
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="subpage about-page">
      <PageHeader
        badge="About SHREE RaSo RATNA"
        title="Empowering Operations with"
        highlight="Reliable Workforce Support"
        subtitle="A registered MSME Micro Enterprise dedicated to delivering practical manpower sourcing, dependable coordination, and transparent staffing engagements across Bihar & Jharkhand."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Overview & Credentials Section */}
      <section className="subpage-section">
        <div className="container">
          <div className="about-overview-grid">
            {/* Left Content */}
            <motion.div
              className="about-overview__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero__pill-tag">
                <span className="pill-dot" />
                <span className="pill-divider" />
                <span className="pill-text">Registered Micro Enterprise</span>
              </div>

              <h2 className="overview-title">
                Building Long-Term Workforce Partnerships on Practical Trust
              </h2>

              <p className="overview-lead">
                <strong>SHREE RaSo RATNA</strong> is a registered Micro Enterprise under the Ministry of MSME, Government of India (Udyam Registration: <strong>UDYAM-JH20-0143778</strong>). We aim to support organisations with reliable manpower sourcing, staffing coordination, and on-ground workforce support for their daily operations.
              </p>

              <p className="overview-body">
                While our registered operational headquarters is based in <strong>Ranchi, Jharkhand</strong> (C1, Motil Apartment, Kanke Road, Gandhinagar), we are actively seeking and expanding opportunities to serve enterprise clients and facility management partners in <strong>Patna, Bihar</strong>.
              </p>

              <p className="overview-body">
                Whether deploying non-clinical hospital ward attendants who uphold compassionate patient care, warehouse helpers who thrive under fast-paced dispatch targets, or corporate office stewards who represent your organization with grooming and respect, our mission is simple: <em>reliable workforce, responsive coordination, and transparent commercial terms.</em>
              </p>

              {/* Verified Details Card */}
              <div className="msme-verification-card">
                <div className="msme-card-header">
                  <Icon icon="mdi:certificate-outline" width={24} color="#9bde4a" />
                  <h4>Official Enterprise Registration Profile</h4>
                </div>
                <div className="msme-card-grid">
                  <div className="msme-item">
                    <span className="msme-label">Enterprise Name</span>
                    <span className="msme-val">SHREE RaSo RATNA</span>
                  </div>
                  <div className="msme-item">
                    <span className="msme-label">MSME Classification</span>
                    <span className="msme-val">Micro Enterprise</span>
                  </div>
                  <div className="msme-item">
                    <span className="msme-label">Udyam Registration</span>
                    <span className="msme-val msme-val--code">UDYAM-JH20-0143778</span>
                  </div>
                  <div className="msme-item">
                    <span className="msme-label">Ministry / Authority</span>
                    <span className="msme-val">Ministry of MSME, Govt. of India</span>
                  </div>
                  <div className="msme-item">
                    <span className="msme-label">Registered Office</span>
                    <span className="msme-val">Ranchi, Jharkhand – 834008</span>
                  </div>
                  <div className="msme-item">
                    <span className="msme-label">Target Service Markets</span>
                    <span className="msme-val">Patna, Bihar & Ranchi, Jharkhand</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Side: Collage & Interactive Sliders */}
            <motion.div
              className="about-overview__visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-visual-card">
                <img
                  src="/images/hero-team.jpg"
                  alt="Workforce Leadership Team"
                  className="about-visual-img"
                />
                <div className="about-visual-tag">
                  <span className="live-pulse" />
                  <span>Deployment Leadership · Patna & Ranchi</span>
                </div>
              </div>

              {/* Performance Sliders Box */}
              <div className="about-metrics-panel">
                <h3 className="metrics-panel-title">Our Operational Commitments</h3>
                <div className="metric-slider-list">
                  <div className="metric-slider-item">
                    <div className="metric-row">
                      <span className="metric-name">Requirement-Based Role Matching</span>
                      <span className="metric-num">85%</span>
                    </div>
                    <div className="slider-track">
                      <div className="slider-bar" style={{ width: '85%' }}>
                        <span className="slider-circle" />
                      </div>
                    </div>
                  </div>

                  <div className="metric-slider-item">
                    <div className="metric-row">
                      <span className="metric-name">Attendance Tracking & On-Time Coordination</span>
                      <span className="metric-num">80%</span>
                    </div>
                    <div className="slider-track">
                      <div className="slider-bar" style={{ width: '80%' }}>
                        <span className="slider-circle" />
                      </div>
                    </div>
                  </div>

                  <div className="metric-slider-item">
                    <div className="metric-row">
                      <span className="metric-name">Transparent Commercial Terms & Compliance</span>
                      <span className="metric-num">95%</span>
                    </div>
                    <div className="slider-track">
                      <div className="slider-bar" style={{ width: '95%' }}>
                        <span className="slider-circle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Approach */}
      <section className="subpage-section subpage-section--dark">
        <div className="container">
          <div className="section-head-center">
            <div className="hero__pill-tag hero__pill-tag--glass">
              <span className="pill-dot" />
              <span className="pill-divider" />
              <span className="pill-text">Operational Philosophy</span>
            </div>
            <h2 className="section-title-white">
              The 3 Pillars of Our Service Approach
            </h2>
            <p className="section-desc-light">
              Taken directly from our official operating charter to ensure predictable, smooth, and accountable workforce management.
            </p>
          </div>

          <div className="pillars-grid">
            {approachPillars.map((pillar) => (
              <div key={pillar.num} className="pillar-card">
                <div className="pillar-header">
                  <span className="pillar-num">{pillar.num}</span>
                  <span className="pillar-score">{pillar.score} Reliability Target</span>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <h4 className="pillar-tagline">{pillar.tagline}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-points">
                  {pillar.points.map((pt, i) => (
                    <div key={i} className="pillar-point-item">
                      <Icon icon="lucide:check" width={14} className="pillar-check" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Profile Disclaimer from Page 3 of PDF */}
      <section className="subpage-section">
        <div className="container">
          <div className="official-disclaimer-box">
            <div className="disclaimer-header">
              <Icon icon="lucide:info" width={22} color="#9bde4a" />
              <h4>Official Statutory Notice & Profile Disclaimer</h4>
            </div>
            <p className="disclaimer-text">
              This profile describes service areas we are prepared to discuss. Client-specific deployment, statutory compliance, PF/ESI, payroll, and other obligations will be confirmed according to the agreed scope and applicable law. No government empanelment or prior client relationship is claimed in this profile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Ready to Discuss Your Staffing Requirements?
              </h2>
              <p className="cta-banner-desc">
                Speak directly with our coordination team in Ranchi & Patna. We are ready to review your headcounts, shifts, and deployment schedules.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn-banner-primary">
                <span>Contact Our Team</span>
                <Icon icon="lucide:arrow-right" width={18} />
              </Link>
              <a
                href="mailto:Shreerasoratna@gmail.com"
                className="btn-banner-email"
              >
                <Icon icon="lucide:mail" width={18} />
                <span>Shreerasoratna@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

