import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoinPage from './pages/CoinPage'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
   <Router>
     <NavBar/>
    <div className="container2 pt-10 flex justify-center items-center">
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/coinpage/:coinId" element={<CoinPage/>} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact/>} />
  

   </Routes>

    </div>
   </Router>
  )
}

export default App
