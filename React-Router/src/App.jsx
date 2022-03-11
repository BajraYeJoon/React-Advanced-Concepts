import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import {Home} from './components/Home'
import Navigaotor from './components/Navigaotor'

function App() {
  return (
   <>
    <Navigaotor />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
    </Routes>
   
   
   </>
    
  )
}

export default App