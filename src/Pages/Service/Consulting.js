import React from 'react'

import HeroService from '../../container/Hero/HeroService'
import { OverviewConsulting } from '../../container'
import './Consulting.css'

const Consulting = () => {
  return (
    <div>
      <HeroService />
      <OverviewConsulting />
    </div>
  )
}

export default Consulting