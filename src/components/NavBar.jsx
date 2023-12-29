import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className ="bg-gray-800 p-4 fixed w-full ">
  <div className ="container mx-auto flex justify-between items-center">
 
    <a href="#" className ="text-white text-xl font-bold">Crypto-world</a>

    
    <div className ="space-x-4">
      <Link to={"/"} className ="text-white">Home</Link>
      <Link to={"/about"} className ="text-white">About</Link>
      <Link to={"/contact"} className ="text-white">Contact-Us</Link>
    </div>
  </div>
</nav>
  )
}

export default NavBar
