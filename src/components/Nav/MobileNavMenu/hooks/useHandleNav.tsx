import { useState, useEffect } from 'react'
import disableScroll from 'disable-scroll'

export const useHandleNav = () => {
  const [navActive, setNavActive] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const handleToggleNav = () => setNavActive(!navActive)

  useEffect(() => {
    if (navActive) {
      disableScroll.on()
      setShowNav(true)
    } else {
      disableScroll.off()
      setTimeout(() => {
        setShowNav(false)
      }, 600)
    }
  }, [navActive])

  return { navActive, showNav, handleToggleNav }
}
