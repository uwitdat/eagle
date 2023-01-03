interface ImageProps {
  src: string
  alt: string
  leftBorder?: boolean
}

const BASE = 'absolute w-full h-full border-2 rounded-full top-4 border-accent'

export const ImageWBorder = ({ src, alt, leftBorder = false }: ImageProps) => {
  const styles = leftBorder ? `${BASE} right-4` : `${BASE} left-4`

  return (
    <div className="aspect-square relative z-10 h-64 sm:h-72 sm:h-80 mobile:h-96 xl:h-100">
      <img
        alt={alt}
        src={src}
        className="object-cover w-full h-full rounded-full"
      />
      <div style={{ zIndex: -1 }} className={styles} />
    </div>
  )
}
