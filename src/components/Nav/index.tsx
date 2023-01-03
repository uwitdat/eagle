import { PATHS } from '../../constants/paths'
import { SiEagle } from 'react-icons/si/index'

const Nav = () => {
  return (
    <nav
      style={{ height: '4rem' }}
      className="z-50 w-full px-16 transition-all duration-300"
    >
      <div className="flex items-center h-full text-lg text-white">
        <div className="flex items-center mr-12">
          <SiEagle fontSize="2rem" />
          <h3 className="ml-2 text-3xl font-extrabold border-b-2 border-white">
            EMS
          </h3>
        </div>

        <ul className="flex items-center gap-12">
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

        <a href={PATHS.CONTACT} className="ml-auto">
          <button className="px-4 py-2 text-white border border-white rounded-md pointer">
            Contact
          </button>
        </a>
      </div>
    </nav>
  )
}
export default Nav
