import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import NavbarItem from './NavbarItem';


const Header = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  
  };

  return (
    <div className='p-3'>

<div className="flex flex-row justify-between text-center items-center">
        <div className="flex flex-row md:mt-4 justify-center">
            <img src="/src/assets/images/LOGO_AthleticInstinctNew.png" className= "w-10 h-10 font-Poppins md:ml-20 text-black font-extrabold" alt="" />
            <h1 className="font-Poppins text-2xl ml-2 mt-0.5">Athletic</h1> 
        </div>
        <div className='md:hidden'>
          <AiOutlineMenu size={30} onClick={handleNav} />
        </div>
        <div className="hidden md:flex mt-1 flex-row">
            <a href="#" className="a_parent p-4 text-1xl font-Poppins hover:text-gray-400 hover:underline">Men</a>
            
            <a href="#" className="a_parent p-4 text-1xl font-Poppins hover:text-gray-400 hover:underline">Women</a>
            <a href="#" className="a_parent p-4 text-1xl font-Poppins hover:text-gray-400 hover:underline">Kids</a>
            
            
              <a href="#" className="bg-black text-gray-50 hover:bg-gray-400 p-3 px-3 sm:px-5 rounded-full ml-4 mb-2 font-Kelly mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 sm:h-6 sm:w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart (0)
              </a>
              <a href="/src/login.html" className="bg-black text-gray-50 btn text-primary p-3 px-3 sm:px-5 rounded-full ml-2 mb-2 font-Poppins mr-2 uppercase text-sm self-start hover:bg-gray-400">Log in</a>
              <a href="./register.html" className="bg-black text-gray-50 btn text-primary p-3 px-3 sm:px-5 rounded-full ml-2 mb-2 font-Poppins mr-4 uppercase text-sm self-start hover:bg-gray-400">Sign Up</a>
              <form action="" className="relative mx-auto w-max">
                <input type="search" placeholder="Search products"
                      className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 peer-focus:border-black peer-focus:stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>
              
            
              

        </div>
        {nav && <NavbarItem setNav={setNav}/> }
    </div>

    </div>
  )
}

export default Header
