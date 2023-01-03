import { PATHS } from '../../../constants/paths'

interface MobileNavProps {
  active: boolean
  setActive: (active: boolean) => void
}

export const MobileNavMenu = ({ active, setActive }: MobileNavProps) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      setActive(false)
      element.scrollIntoView()
    }
  }
  return (
    <div
      className={
        active
          ? 'absolute top-0 left-0 h-screen w-screen bg-dark-nav z-0 animate-fade-in backdrop-blur-sm'
          : 'absolute top-0 left-0 h-screen w-screen bg-dark-nav z-0 animate-fade-out backdrop-blur-sm'
      }
    >
      <ul className="flex flex-col h-full gap-10 px-5 pt-40 text-5xl font-extrabold text-center text-white animate-fade-in">
        <li>Home</li>
        <li onClick={() => handleScroll('about')}>About</li>
        <li onClick={() => handleScroll('services')}>Services</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
    </div>
  )
}
