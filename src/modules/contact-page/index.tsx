import {
  AiFillPhone,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from 'react-icons/ai'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'
import { ANIMATIONS } from '../../constants/animations'

const ContactPage = () => {
  const currentYear = new Date().getFullYear()

  const { ref, inView } = useInView({
    threshold: 0,
  })

  return (
    <section
      className="bg-dark h-screen snap-start flex flex-col justify-center relative"
      id="contact"
    >
      <div
        ref={ref}
        className={
          inView
            ? `text-center ${ANIMATIONS.FADE_IN.initial} ${ANIMATIONS.FADE_IN.animate}`
            : `text-center ${ANIMATIONS.FADE_IN.initial}`
        }
      >
        <h2 className="text-white">
          Get In <span>Touch</span>
        </h2>
        <p className="mt-2">Quality entertainment, is only a click away...</p>
      </div>

      <div className="mt-14">
        <div
          className={
            inView
              ? `flex gap-20 w-max mx-auto ${ANIMATIONS.SLIDE_LEFT.initial} ${ANIMATIONS.SLIDE_LEFT.animate}`
              : `flex gap-20 w-max mx-auto ${ANIMATIONS.SLIDE_LEFT.initial}`
          }
          ref={ref}
        >
          {ICONS.map(({ id, icon, link }) => (
            <div
              className={clsx(
                'transition-all duration-200 p-2',
                'rounded-full bg-white cursor-pointer',
                'hover:bg-gray-400 hover:translate-y-[-.25rem]'
              )}
              key={id}
            >
              <a href={link} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 p-5 w-full text-center">
        <p className="text-base">
          &copy; {currentYear} Eagle Music Services. All Rights Reserved.
        </p>
      </div>
    </section>
  )
}

const iconStyle = {
  color: 'black',
  fontSize: '2rem',
}

const ICONS = [
  {
    id: 1,
    icon: <AiFillPhone {...iconStyle} />,
    link: 'tel:+16473385058',
  },
  {
    id: 2,
    icon: <AiFillInstagram {...iconStyle} />,
    link: '#',
  },
  {
    id: 3,
    icon: <AiFillLinkedin {...iconStyle} />,
    link: '#',
  },
  {
    id: 4,
    icon: <AiFillMail {...iconStyle} />,
    link: 'mailto:eaglemusicservices@gmail.com',
  },
]

export default ContactPage
