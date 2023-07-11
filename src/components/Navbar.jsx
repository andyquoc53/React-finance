import React, {useState} from "react";
import {SlMenu, SlClose} from 'react-icons/sl';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div>
      <div className="flex justify-between h-24 items-center max-w-[100%] mx-auto text-white border-b border-gray-400 ps-2 pe-[5%]">
        <h1 className="p-4 text-4xl uppercase text-[#00df9a]">React.</h1>
        <ul className="hidden sm:flex text-white uppercase">
          <li className="p-4">Company</li>
          <li className="p-4">Home</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block sm:hidden">
          {!nav ? <SlClose size={20}/> : <SlMenu size={20}/>}
        </div>
      </div>
      <div className={!nav ?'absolute ps-10 pe-10 items-center right-0  text-white h-full w-[45%] border-l border-gray-600 bg-[#1c1b1b] ease-in-out duration-500 block sm:hidden' : 'fixed right-[-100%] transition ease-in-out duration-300 block'} >
        <ul className="text-white uppercase">
          <li className="p-7 ps-0 border-b border-gray-600">Company</li>
          <li className="p-7 ps-0 border-b border-gray-600">Home</li>
          <li className="p-7 ps-0 border-b border-gray-600">Resources</li>
          <li className="p-7 ps-0 border-b border-gray-600">About</li>
          <li className="p-7 ps-0">Contact</li>
        </ul>
        <div className="flex justify-center">
         <p className="py-5 italic text-sm fixed bottom-0">Created by Andy 2023 &copy;</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar