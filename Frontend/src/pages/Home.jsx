import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Models from '../pages/Models'
import Innovation from './Innovation';

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <h2>Models</h2>
    <Models/>
    <Innovation/>
    <Contact/>
    <Footer/>
    </>
  );}

export default Home