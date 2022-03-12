import React from 'react'

import HeroService from '../../container/Hero/HeroService'
import OverviewMaintenance from '../../container/Overview/OverviewMaintenance'
import './Maintenance.css'

const Maintenance = () => {
  return (
    <div>
      <HeroService />
      <OverviewMaintenance />
    </div>
  )
}

export default Maintenance