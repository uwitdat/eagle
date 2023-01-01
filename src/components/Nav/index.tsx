import { NAV_HEIGHT } from '../../constants'
import { PATHS } from '../../constants/paths'
import { SiEagle } from 'react-icons/si'

const Nav = () => {
  return (
    <nav
      style={{ height: `${NAV_HEIGHT}rem` }}
      className="w-full px-16 transition-all duration-300 z-50"
    >
      <ul className="flex items-center h-full gap-12 text-md text-white text-lg">
        <div className="flex items-center">
          <SiEagle fontSize="2rem" />
          <h3 className="text-3xl font-extrabold ml-2 border-b-2 border-white">
            EMS
          </h3>
        </div>

        <li>
          <a href={PATHS.HOME}>Home</a>
        </li>
        <li>
          <a href={PATHS.ABOUT}>About</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <a href={PATHS.CONTACT} className="ml-auto">
          <button className="pointer border border-white rounded-md px-4 py-2 text-white">
            Contact
          </button>
        </a>
      </ul>
    </nav>
  )
}
export default Nav
