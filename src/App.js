import React, { useEffect } from 'react'

import './App.css';
import { Navbar, Footer } from './components'
import { Home, Profile, Solution, Consulting, Maintenance, ContactUS, Blog, Client, Term, Privacy, Pricing, Team, BlogDetails, FAQ } from './Pages'
import { Routes, Route, useLocation } from 'react-router-dom'


  

function App() {
  
  return (
    <div>
        <Navbar/>
          <div className='container'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/service-solution' element={<Solution />}/>
                <Route path='/service-consulting' element={<Consulting />}/>
                <Route path='/service-maintenance' element={<Maintenance />}/>
                <Route path='/pricing' element={<Pricing />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/detail' element={<BlogDetails />}/>
                <Route path='/contact-us' element={<ContactUS />}/>
                <Route path='/team' element={<Team />}/>
                <Route path='/client' element={<Client />}/>
                <Route path='/term-condition' element={<Term />}/>
                <Route path='/privacy-policy' element={<Privacy />}/>
                <Route path='/faq' element={<FAQ />}/>
            </Routes>
          </div>
        <Footer />
    </div>
  )
}

export default App