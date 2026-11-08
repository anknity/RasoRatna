import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import PageHeader from './PageHeader'
import './Pages.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    sector: 'Healthcare & Hospitals',
    location: 'Patna, Bihar',
    headcount: '10 to 25 Staff',
    shiftPattern: 'General Day Shift (8-9 hrs)',
    timeline: 'Within 1 to 2 Weeks',
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Staffing Requirement Inquiry - ${formData.companyName || 'New Client'} (${formData.sector})`
    )
    const body = encodeURIComponent(
      `Company Name: ${formData.companyName}\n` +
      `Contact Person: ${formData.contactPerson}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Sector: ${formData.sector}\n` +
      `Target Location: ${formData.location}\n` +
      `Required Headcount: ${formData.headcount}\n` +
      `Shift Pattern: ${formData.shiftPattern}\n` +
      `Deployment Timeline: ${formData.timeline}\n\n` +
      `Additional Notes / Job Roles:\n${formData.notes}\n`
    )

    // Open mailto
    window.open(`mailto:Shreerasoratna@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setSubmitted(true)
  }

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello SHREE RaSo RATNA, I would like to discuss a manpower requirement for our organization (${formData.companyName || 'our company'}) in ${formData.location || 'Patna/Ranchi'}. Please connect with us.`
    )
    window.open(`https://wa.me/919870418329?text=${text}`, '_blank')
  }

  return (
    <div className="subpage contact-page">
      <PageHeader
        badge="Direct Operations Desk"
        title="Discuss Your Manpower"
        highlight="& Staffing Requirements"
        subtitle="Connect directly with our operational desk in Ranchi and Patna. We are ready to evaluate your headcount, shift rosters, and deployment schedules."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="subpage-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Info Column */}
            <div className="contact-info-col">
              <div className="hero__pill-tag">
                <span className="pill-dot" />
                <span className="pill-divider" />
                <span className="pill-text">Official Enterprise Contacts</span>
              </div>

              <h2 className="contact-info-heading">
                Let's Discuss Roles, Headcount & Deployment Schedules
              </h2>

              <p className="contact-info-lead">
                Have an upcoming facility opening, ongoing hospital staffing shortage, or seasonal warehouse surge? Reach out directly via phone, WhatsApp, or our requirement form.
              </p>

              {/* Contact Cards */}
              <div className="contact-cards-stack">
                {/* Phone Card */}
                <div className="contact-card-box">
                  <div className="contact-card-icon">
                    <Icon icon="lucide:phone" width={22} color="#9bde4a" />
                  </div>
                  <div className="contact-card-body">
                    <span className="contact-card-label">Direct Phone & Coordination Desk</span>
                    <a href="tel:+919870418329" className="contact-card-val">
                      +91-9870418329
                    </a>
                    <span className="contact-card-sub">Mon to Sat: 8:00 AM – 8:00 PM</span>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="contact-card-box">
                  <div className="contact-card-icon contact-card-icon--wa">
                    <Icon icon="mdi:whatsapp" width={24} color="#25D366" />
                  </div>
                  <div className="contact-card-body">
                    <span className="contact-card-label">Instant WhatsApp Communication</span>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="contact-card-val contact-card-val--link"
                    >
                      Chat on WhatsApp (+91-9870418329)
                    </button>
                    <span className="contact-card-sub">Instant response for requirement queries</span>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-card-box">
                  <div className="contact-card-icon">
                    <Icon icon="lucide:mail" width={22} color="#9bde4a" />
                  </div>
                  <div className="contact-card-body">
                    <span className="contact-card-label">Official Correspondence Email</span>
                    <a href="mailto:Shreerasoratna@gmail.com" className="contact-card-val">
                      Shreerasoratna@gmail.com
                    </a>
                    <span className="contact-card-sub">Send formal RFPs, scopes & tenders</span>
                  </div>
                </div>

                {/* Registered Address Card */}
                <div className="contact-card-box">
                  <div className="contact-card-icon">
                    <Icon icon="lucide:map-pin" width={22} color="#9bde4a" />
                  </div>
                  <div className="contact-card-body">
                    <span className="contact-card-label">Registered Office (Jharkhand)</span>
                    <p className="contact-card-text">
                      C1, Motil Apartment, Kanke Road, Gandhinagar, Ranchi, Jharkhand – 834008
                    </p>
                  </div>
                </div>

                {/* Operational Focus Card */}
                <div className="contact-card-box">
                  <div className="contact-card-icon">
                    <Icon icon="lucide:building-2" width={22} color="#9bde4a" />
                  </div>
                  <div className="contact-card-body">
                    <span className="contact-card-label">Operational Expansion Focus (Bihar)</span>
                    <p className="contact-card-text">
                      Actively seeking client and facility management partnerships across <strong>Patna, Bihar</strong> and surrounding industrial belts.
                    </p>
                  </div>
                </div>
              </div>

              {/* MSME Badge */}
              <div className="msme-pill-badge">
                <Icon icon="mdi:check-decagram" width={20} color="#9bde4a" />
                <span>Govt. of India MSME Registered · UDYAM-JH20-0143778</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-form-col">
              <div className="form-card-container">
                <div className="form-header">
                  <h3 className="form-title">Staffing Requirement Intake Form</h3>
                  <p className="form-subtitle">
                    Submit your requirement details and our coordinator will respond with role profiles, quotations, and deployment timelines.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    className="form-success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="success-icon-wrap">
                      <Icon icon="lucide:check-circle" width={48} color="#9bde4a" />
                    </div>
                    <h4 className="success-title">Inquiry Submitted Successfully!</h4>
                    <p className="success-desc">
                      Thank you for contacting SHREE RaSo RATNA. Your email client has drafted the message to <strong>Shreerasoratna@gmail.com</strong>. Our coordinator will review your requirements and reach out within 24 hours.
                    </p>
                    <div className="success-actions">
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="btn-success-wa"
                      >
                        <Icon icon="mdi:whatsapp" width={20} />
                        <span>Follow up on WhatsApp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="btn-success-reset"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="requirement-form">
                    <div className="form-row form-row--two">
                      <div className="form-group">
                        <label className="form-label" htmlFor="companyName">
                          Organization / Company Name <span className="req-star">*</span>
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Apex Hospital / ABC Logistics"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="contactPerson">
                          Contact Person & Designation <span className="req-star">*</span>
                        </label>
                        <input
                          id="contactPerson"
                          type="text"
                          name="contactPerson"
                          required
                          value={formData.contactPerson}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Kumar (Facility Mgr)"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-row form-row--two">
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                          Phone Number <span className="req-star">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91-XXXXX XXXXX"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          Email Address <span className="req-star">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contact@company.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-row form-row--two">
                      <div className="form-group">
                        <label className="form-label" htmlFor="sector">
                          Industry Sector
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option>Healthcare & Hospitals</option>
                          <option>Corporate Offices & IT/ITES</option>
                          <option>Retail, E-commerce & FMCG</option>
                          <option>Logistics & Warehousing</option>
                          <option>Manufacturing & Industrial Units</option>
                          <option>Educational Institutions</option>
                          <option>Construction & Engineering Sites</option>
                          <option>Facilities Management Partners</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="location">
                          Target Deployment Location
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option>Patna, Bihar</option>
                          <option>Ranchi, Jharkhand</option>
                          <option>Jamshedpur / Dhanbad / Bokaro</option>
                          <option>Other Bihar Location</option>
                          <option>Other Jharkhand Location</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row form-row--two">
                      <div className="form-group">
                        <label className="form-label" htmlFor="headcount">
                          Estimated Headcount Required
                        </label>
                        <select
                          id="headcount"
                          name="headcount"
                          value={formData.headcount}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option>2 to 5 Personnel (Small lean team)</option>
                          <option>5 to 10 Personnel</option>
                          <option>10 to 25 Staff (Standard deployment)</option>
                          <option>25 to 50 Personnel</option>
                          <option>50+ Personnel (Bulk / Facility wide)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="timeline">
                          Target Deployment Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option>Immediate / Within 3 to 5 Days</option>
                          <option>Within 1 to 2 Weeks</option>
                          <option>Within 1 Month</option>
                          <option>Planning / Budgeting Phase</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="shiftPattern">
                        Shift Pattern Required
                      </label>
                      <select
                        id="shiftPattern"
                        name="shiftPattern"
                        value={formData.shiftPattern}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option>General Day Shift (8-9 hrs)</option>
                        <option>2 Shifts (Morning / Evening)</option>
                        <option>24/7 Coverage (3 Rotational Shifts)</option>
                        <option>Night Shift Only</option>
                        <option>Custom Shift Schedule</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="notes">
                        Specific Roles, Tasks or Work Scope Details
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Please describe the job roles (e.g., 6 hospital ward attendants + 4 floor cleaners for morning shift), timing, and any specific requirements..."
                        className="form-textarea"
                      />
                    </div>

                    <div className="form-actions-row">
                      <button type="submit" className="btn-submit-primary">
                        <span>Send Staffing Requirement</span>
                        <Icon icon="lucide:arrow-right" width={18} />
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="btn-submit-wa"
                      >
                        <Icon icon="mdi:whatsapp" width={20} />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

