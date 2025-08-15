import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { menu, close } from '../assets'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [teamDropdown, setTeamDropdown] = useState(false)
  const dropdownRef = useRef(null)

  const navigate = useNavigate()
  const location = useLocation().pathname
  const handleLogout = () => {
    sessionStorage.clear()
    window.location.reload()
    window.location.href = '/login'
  }

  const token = sessionStorage.getItem('Token')
  const team_token = sessionStorage.getItem('team_token')

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTeamDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav
      id='NAV'
      className='w-screen flex items-center sm:py-5 sticky my-1 sm:top-2 z-20 justify-center '
    >
      <div
        className='px-4 hidden list-none lg:flex-row md:flex-col sm:flex w-full justify-between items-center 
        text-lg text-white 
      glass font-sans fixed uppercase
      '
      >
        <div className='lg:w-1/2 md:mt-10 lg:mt-0 p-3 pt-10 hover:text-[#ffeb3b] flex justify-between'>
          <NavLink to='/'>
            <img src='/logo_white.png' className='xl:h-16 xl:w-16 h-16 w-16' />
          </NavLink>
          <img src="/uem_logo_white.png" className='xl:h-16 xl:w-25 h-16 w-16' />
          <img src="/iic_logo_white.png" className='xl:h-16 xl:w-32 h-16 w-16' />
          <img src="/nss_logo_white.png" className='xl:h-16 xl:w-20 h-16 w-16' />
        </div>

        <div className="flex w-full justify-evenly  md:text-xl">
          <motion.li
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.93 }}
            className=' p-1 mt-2 hover:text-[#ffeb3b] navbar center-underline-hover'
          >
            <NavLink id='events' to='/events'>
              Events
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.93 }}
            className='p-1 mt-2 hover:text-[#ffeb3b]  navbar center-underline-hover'
          >
            
            <NavLink to='/team'>Team</NavLink>
          </motion.li>


          {/* <motion.li
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.93 }}
            className='p-1 mt-2 hover:text-[#ffeb3b] text-xl navbar center-underline-hover'
          >
            <NavLink to='/sponsors'>Sponsors</NavLink>
          </motion.li> */}

        </div>

        {/* End of Navbar for lagrge screen */}
      </div>
      <div className='sm:hidden flex flex-1 justify-between gap-8 w-full items-center backdrop-blur-sm bg-white/10 ... '>
        <div className=''>
          <NavLink to='/'>
            <img src='/logo.webp' className='h-16 w-16' />
          </NavLink>
        </div>
        <img
          src={toggle ? close : menu}
          className='w-[28px] h-[28px] object-contain mr-3'
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className='font-robm list-none flex flex-col justify-end items-start flex-1 gap-4'>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle)
              }}
            >
              <NavLink to='/events'>Events</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle)
              }}
            >
             
              <NavLink to='/team'>Team</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle)
              }}
            >
            </li>
              {/* <NavLink to='/sponsors'>Sponsors</NavLink>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle)
              }}
            > */}
              
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
