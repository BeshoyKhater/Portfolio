import Navbar from './sections/Navbar'
import Header from './sections/Header'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Testimonials from './sections/Testimonials'
import FAQs from './sections/FAQs'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import FloatingNav from './sections/FloatingNav'
import React, { useEffect, useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  const [background , setBackGround]=useState('')

  useEffect(() => {
   AOS.init({duration:2000})
  }, []);
   
  useEffect(() => {
    setBackGround(localStorage.getItem('background'))
  }, []);
  return (
    <main className={`${background}`}>
      <Navbar  setBackGround={setBackGround}/>
      <Header/>
      <About />
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  );
}

export default App;
