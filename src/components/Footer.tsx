import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './Footer.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Sectors', path: '/sectors' },
  { label: 'About Us', path: '/about' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Contact', path: '/contact' },
]

const servicesList = [
  { label: 'Housekeeping & Sanitation', path: '/services' },
  { label: 'Non-Clinical Hospital Support', path: '/services' },
  { label: 'Office & Administrative Support', path: '/services' },
  { label: 'Warehouse, Packing & Logistics', path: '/services' },
  { label: 'General Helpers & Site Support', path: '/services' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main 4-Column Grid: Clean & Uncongested */}
        <div className="site-footer__grid">
          {/* Col 1: Brand & Registration */}
          <div className="site-footer__col site-footer__col--brand">
            <Link to="/" className="site-footer__logo">
              <span className="logo-dot" />
              <span className="logo-bar" />
              <span className="logo-name">SHREE RaSo RATNA</span>
            </Link>
            <p className="site-footer__about">
              Registered Micro Enterprise (UDYAM-JH20-0143778) under the Ministry of MSME, Government of India. Providing reliable manpower supply and workforce staffing support across Bihar & Jharkhand.
            </p>
            <div className="site-footer__meta-list">
              <div className="meta-item">
                <Icon icon="lucide:map-pin" width={16} className="meta-icon" />
                <span>C1, Motil Apt, Kanke Rd, Ranchi – 834008</span>
              </div>
              <div className="meta-item">
                <Icon icon="lucide:phone" width={16} className="meta-icon" />
                <a href="tel:+919870418329">+91-9870418329</a>
              </div>
              <div className="meta-item">
                <Icon icon="lucide:mail" width={16} className="meta-icon" />
                <a href="mailto:Shreerasoratna@gmail.com">Shreerasoratna@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="site-footer__col">
            <h4 className="site-footer__heading">Quick Links</h4>
            <ul className="site-footer__links">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="site-footer__link">
                    <Icon icon="lucide:chevron-right" width={14} className="link-arrow" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="site-footer__col">
            <h4 className="site-footer__heading">Our Services</h4>
            <ul className="site-footer__links">
              {servicesList.map((svc) => (
                <li key={svc.label}>
                  <Link to={svc.path} className="site-footer__link">
                    <Icon icon="lucide:chevron-right" width={14} className="link-arrow" />
                    <span>{svc.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get in Touch & Direct Action */}
          <div className="site-footer__col site-footer__col--action">
            <h4 className="site-footer__heading">Get in Touch</h4>
            <p className="site-footer__action-text">
              Have workforce requirements for your hospital, facility, office, or warehouse? Discuss roles and headcount directly with us.
            </p>
            <div className="site-footer__btn-group">
              <Link to="/contact" className="btn-footer-cta">
                <span>Request Staffing</span>
                <Icon icon="lucide:arrow-right" width={16} />
              </Link>
              <a
                href="https://wa.me/919870418329"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-footer-whatsapp"
              >
                <Icon icon="mdi:whatsapp" width={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean single-line layout */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} SHREE RaSo RATNA · Udyam Reg: UDYAM-JH20-0143778 · All rights reserved.
          </p>
          <p className="site-footer__disclaimer">
            Services subject to agreed scope, client requirements & statutory compliance.
          </p>
        </div>
      </div>
    </footer>
  )
}
