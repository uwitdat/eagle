import { PATHS } from '../../constants/paths'
import { SiEagle } from 'react-icons/si/index'
import { RxHamburgerMenu } from 'react-icons/rx/index'
import { useState, useEffect } from 'react'
import disableScroll from 'disable-scroll'
import { MobileNavMenu } from './MobileNavMenu'

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false)

  useEffect(() => {
    if (toggleNav) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [toggleNav])

  return (
    <nav
      style={{ height: '4rem' }}
      className="relative z-50 w-full px-4 transition-all duration-300 md:px-16"
    >
      <div className="flex items-center h-full text-lg text-white">
        <div className="flex items-center mr-12">
          <SiEagle fontSize="2rem" />
          <h3 className="ml-2 text-3xl font-extrabold border-b-2 border-white">
            EMS
          </h3>
        </div>

        <ul className="items-center hidden gap-12 md:flex">
          <li>
            <a href={PATHS.HOME}>Home</a>
          </li>
          <li>
            <a href={PATHS.ABOUT}>About</a>
          </li>
          <li>
            <a href={PATHS.SERVICES}>Services</a>
          </li>
        </ul>

        <button
          className="relative z-20 block ml-auto md:hidden"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <span className="text-2xl text-white">
            <RxHamburgerMenu />
          </span>
        </button>

        <a href={PATHS.CONTACT} className="hidden ml-auto md:block">
          <button className="px-4 py-2 text-white border border-white rounded-md pointer">
            Contact
          </button>
        </a>
      </div>

      <MobileNavMenu active={toggleNav} setActive={setToggleNav} />
    </nav>
  )
}
export default Nav
