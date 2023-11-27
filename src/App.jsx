// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Service from './routes/Service.jsx'

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/service" element={<Service />} />  
      </Routes>          
    </div>
  )
}

export default App
