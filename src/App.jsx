import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddKinkun from './pages/AddKinkun'
import EditKinkun from './pages/EditKinkun'
import ShowallKinkun from './pages/ShowallKinkun'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/addkinkun" element={<AddKinkun />} />
          <Route path="/editkinkun" element={<EditKinkun />} />
          <Route path="/showallkinkun" element={<ShowallKinkun />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}
