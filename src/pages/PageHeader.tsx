import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './PageHeader.css'

interface PageHeaderProps {
  badge: string
  title: string
  highlight?: string
  subtitle: string
  breadcrumbs: { label: string; path?: string }[]
}

export default function PageHeader({
  badge,
  title,
  highlight,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="page-header__pattern" />
      <div className="page-header__glow" />

      <div className="container page-header__inner">
        {/* Breadcrumb Trail */}
        <motion.nav
          className="page-header__breadcrumbs"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumbs"
        >
          <Link to="/" className="breadcrumb-item breadcrumb-item--home">
            <Icon icon="lucide:home" width={14} />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="breadcrumb-wrapper">
              <Icon icon="lucide:chevron-right" width={12} className="breadcrumb-sep" />
              {crumb.path ? (
                <Link to={crumb.path} className="breadcrumb-item">
                  {crumb.label}
                </Link>
              ) : (
                <span className="breadcrumb-item breadcrumb-item--active">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Tag Pill */}
        <motion.div
          className="page-header__badge"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="badge-dot" />
          <span className="badge-bar" />
          <span className="badge-text">{badge}</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="page-header__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title} {highlight && <span className="title-highlight">{highlight}</span>}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="page-header__subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}

