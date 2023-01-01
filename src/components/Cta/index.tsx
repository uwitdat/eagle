import styles from './animations.module.scss'
import { useEffect, useState } from 'react'

const TEXT_TRANSITION_SPEED = 4000
const ANIM_SPEED = TEXT_TRANSITION_SPEED - 1000 // text transition speed - 1s (animation duration)

const Cta = () => {
  const [active, setActive] = useState(0)
  const [animation, setAnimation] = useState<string>('')

  const handleTriggerFadeIn = () => {
    setAnimation('animate-fade')
    setTimeout(() => {
      setAnimation('animate-fade-out')
    }, ANIM_SPEED)
  }

  useEffect(() => {
    handleTriggerFadeIn()

    const interval = setInterval(() => {
      setActive((active) =>
        active === TEXT.length - 1 ? (active = 0) : active + 1
      )
      handleTriggerFadeIn()
    }, TEXT_TRANSITION_SPEED)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full flex gap-3 p-3" style={{ perspective: '1000px' }}>
      <div className="w-full text-white flex flex-col items-center justify-center">
        <div className="flex items-center">
          <div className={styles.icon}>
            <span />
            <span />
            <span />
          </div>
          <h3 className={`text-4xl font-bold ml-5 w-40 ${animation}`}>
            {TEXT[active]}{' '}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Cta

const TEXT = ['Reliable', 'Respectable', 'Affordable']
