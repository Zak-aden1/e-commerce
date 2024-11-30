import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'

// import { useState } from 'react'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
