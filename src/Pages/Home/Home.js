import React from 'react'


import { HeroMain, ERPModules, Serve, WMUD, ERPShowcase, Comparison } from '../../container'
import { Navbar, Partners } from '../../components'
import './Home.css';

function Home() {
  return (
    <div>
      <HeroMain />
      <Serve />
      <ERPModules />
      <WMUD />
      <Comparison />
      <ERPShowcase />
      <Partners />
    </div>
  );
}

export default Home