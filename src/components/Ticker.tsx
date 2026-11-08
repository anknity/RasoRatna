import { Icon } from '@iconify/react'
import './Ticker.css'

const tickerItems = [
  'Healthcare & Hospitals',
  'Corporate Offices & IT Workplaces',
  'Logistics & Warehousing Helpers',
  'Housekeeping & Sanitation Support',
  'Retail & E-commerce Operations',
  'Industrial & Factory Floor Support',
  'Educational Institutions Facilities',
  'Construction & Site Helpers',
]

const loopItems = [...tickerItems, ...tickerItems, ...tickerItems]

export default function Ticker() {
  return (
    <div className="ticker-band">
      <div className="ticker-band__track">
        {loopItems.map((item, index) => (
          <div key={index} className="ticker-band__item">
            <span className="ticker-text">{item}</span>
            <span className="ticker-asterisk">
              <Icon icon="mdi:star-four-points" width={16} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
