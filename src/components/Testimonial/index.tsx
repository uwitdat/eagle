import clsx from 'clsx'

interface TestimonialProps {
  title: string
  body: string
  icon: React.ReactNode
}

export const Testimonial = ({ title, body, icon }: TestimonialProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center',
        'px-12 py-3 text-center text-white',
        'transition-all duration-500 border',
        'border-gray-800 w-96 rounded-xl'
      )}
    >
      {icon}
      <h3 className="mb-3 text-2xl">
        <span>{title}</span>
      </h3>
      <p className="text-base">{body}</p>
    </div>
  )
}
