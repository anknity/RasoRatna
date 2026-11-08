import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Sectors', path: '/sectors' },
  { label: 'About Us', path: '/about' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-wrapper--scrolled' : ''}`}>
      {/* Top Info Bar matching reference image */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contacts">
            <a href="tel:+919870418329" className="topbar__item">
              <Icon icon="lucide:phone" width={13} />
              <span>+91-9870418329</span>
            </a>
            <a href="mailto:Shreerasoratna@gmail.com" className="topbar__item">
              <Icon icon="lucide:mail" width={13} />
              <span>Shreerasoratna@gmail.com</span>
            </a>
            <div className="topbar__item topbar__item--address">
              <Icon icon="lucide:map-pin" width={13} />
              <span>C1, Motil Apt, Kanke Rd, Ranchi · Patna, Bihar</span>
            </div>
          </div>

          <div className="topbar__social-pill">
            <a
              href="https://wa.me/919870418329"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Icon icon="mdi:whatsapp" width={14} />
            </a>
            <a href="mailto:Shreerasoratna@gmail.com" aria-label="Email">
              <Icon icon="mdi:email" width={14} />
            </a>
            <a href="tel:+919870418329" aria-label="Phone">
              <Icon icon="mdi:phone" width={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <div className="container main-nav__inner">
          {/* Logo with double-capsule icon */}
          <Link to="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
            <div className="brand-logo__mark">
              <span className="mark-circle" />
              <span className="mark-bar" />
            </div>
            <div className="brand-logo__titles">
              <span className="brand-name">SHREE RaSo RATNA</span>
              <span className="brand-sub">Manpower & Workforce</span>
            </div>
          </Link>

          {/* Center Links */}
          <div className="nav-menu">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'nav-item--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right CTA Button: Dark Green Pill */}
          <div className="nav-actions">
            <Link to="/contact" className="btn-get-quote">
              Get A Quote
            </Link>
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              <Icon icon={mobileOpen ? 'lucide:x' : 'lucide:menu'} width={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-drawer__links">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `mobile-nav-item ${isActive ? 'mobile-nav-item--active' : ''}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="btn-get-quote btn-get-quote--mobile"
                onClick={() => setMobileOpen(false)}
              >
                Get A Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
