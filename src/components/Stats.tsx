import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Stats.css'

const statsData = [
  { value: '8+', label: 'Major Industry Sectors' },
  { value: '100%', label: 'Transparent Terms' },
  { value: '1', label: 'Single Point Coordinator' },
  { value: 'MSME', label: 'Gov. Registered Enterprise' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="stats" ref={ref}>
      <div className="container stats__inner">
        {statsData.map((stat, index) => (
          <div key={stat.label} className="stat-group">
            <motion.div
              className="stat-box"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>

            {index < statsData.length - 1 && (
              <div className="stat-pill-divider">
                <span className="divider-dot" />
                <span className="divider-bar" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
