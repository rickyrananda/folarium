import React from 'react'

import { HeroPricing, ERPConsulting, ERPMaintenance, LTDPricing } from '../../container'

const Pricing = () => {
  return (
    <div>
    <HeroPricing />
    <LTDPricing />
    <ERPConsulting />
    <ERPMaintenance /> 
    </div>
  )
}

export default Pricing