interface ImageProps {
  src: string
  alt: string
  leftBorder?: boolean
  className?: string
}

export const ImageWBorder = ({
  src,
  alt,
  leftBorder = false,
  className,
}: ImageProps) => {
  const styles = leftBorder
    ? 'absolute w-full h-full border-2 rounded-full top-4 right-4 border-accent'
    : 'absolute w-full h-full border-2 rounded-full top-4 left-4 border-accent'

  return (
    <div
      style={{
        aspectRatio: '1',
        height: '28rem',
        zIndex: 10,
        position: 'relative',
      }}
      className={className || ''}
    >
      <img
        alt={alt}
        src={src}
        className="object-cover w-full h-full rounded-full"
      />
      <div style={{ zIndex: -1 }} className={styles} />
    </div>
  )
}
