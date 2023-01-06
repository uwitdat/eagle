import clsx from 'clsx'

interface MobileNavProps {
  handleToggleNav: () => void
  navActive: boolean
}

export const MobileNavMenu = ({
  handleToggleNav,
  navActive,
}: MobileNavProps) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      handleToggleNav()
      setTimeout(() => {
        element.scrollIntoView()
      }, 500)
    }
  }

  const animation = navActive ? 'animate-fade-in' : 'animate-fade-out'

  return (
    <div
      className={clsx(
        'absolute top-0 left-0 h-screen',
        'w-screen bg-dark-nav z-0 backdrop-blur-sm',
        `${animation}`
      )}
    >
      <ul
        style={{ animationDelay: '600ms' }}
        className={clsx(
          'flex flex-col justify-center h-full',
          'gap-14 px-5 text-5xl font-extrabold',
          'text-center text-white opacity-0',
          `${animation}`
        )}
      >
        <li onClick={handleToggleNav} className="cursor-pointer">
          Home
        </li>
        <li onClick={() => handleScroll('about')} className="cursor-pointer">
          About
        </li>
        <li onClick={() => handleScroll('services')} className="cursor-pointer">
          Services
        </li>
        <li onClick={() => handleScroll('contact')} className="cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  )
}
