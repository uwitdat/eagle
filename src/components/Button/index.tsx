import { useMemo } from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'solid'
}

const BASE = 'border-2 rounded-lg text-xl py-3 px-8 font-bold'

export const Button = ({ children, variant }: ButtonProps) => {
  const btnClass = useMemo(() => {
    switch (variant) {
      case 'solid':
        return `${BASE} text-black border-black bg-white`

      default:
        return `${BASE} text-white`
    }
  }, [variant])

  return <button className={btnClass}>{children}</button>
}