import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Confirm } from './components/Confirm'
import {Home} from './components/Home'
import Navigaotor from './components/Navigaotor'

function App() {
  return (
   <>
    <Navigaotor />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path ='confirm'element={<Confirm />}/>
    </Routes>
   
   
   </>
    
  )
}

export default App