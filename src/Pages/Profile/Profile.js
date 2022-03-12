import React from 'react'

import { Navbar, Partners } from '../../components';
import  { HeroProfile, AboutUs, VisiMisi, MoreAU, Journey, Subsidiaries } from '../../container'


function Profile() {
  return (
    <div>
      <HeroProfile />
      <AboutUs />
      <VisiMisi />
      <Journey />
      <Subsidiaries />
      <MoreAU />
      <Partners />
    </div>
  );
}

export default Profile