import './styles.css'

interface MobileNavIconProps {
  navActive: boolean
}

export const MobileNavIcon = ({ navActive }: MobileNavIconProps) => {
  return (
    <div id="nav-icon" className={navActive ? 'open-icon' : ''}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
