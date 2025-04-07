import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Proyects from '../pages/Projects'
import Contact from '../pages/Contact'
import Footer from '../src/components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />  
        <Route path='/home' element={<Home />} />  
        <Route path='/aboutme' element={<AboutMe/>} />  
        <Route path='/proyects' element={<Proyects />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
      <Footer></Footer>
      </>
  )
}

export default App
