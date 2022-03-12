import React from 'react'
import { OverviewSolution, ERPModules, Serve, WMUD, ERPShowcase, ERPBenefit} from '../../container'
import HeroService from '../../container/Hero/HeroService'
import './Solution.css'

const Solution = () => {
  return (
    <div>
      <HeroService />
      <OverviewSolution />
      <ERPModules />
      <ERPBenefit />
      <ERPShowcase />
    </div>
  )
}

export default Solution