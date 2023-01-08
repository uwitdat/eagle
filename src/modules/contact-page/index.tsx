import {
  AiFillPhone,
  AiFillInstagram,
  AiFillYoutube,
  AiFillMail,
} from 'react-icons/ai/index'
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
      className="relative flex flex-col justify-center h-screen bg-dark snap-start px-6"
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
        <h2>
          Get In <span>Touch</span>
        </h2>
        <p className="mt-2">
          Quality entertainment. Catered to you, is only a click away.
        </p>
      </div>

      <div className="mt-14">
        <div
          className={
            inView
              ? `flex gap-8 sm:gap-14 md:gap-20 w-max mx-auto ${ANIMATIONS.SLIDE_LEFT.initial} ${ANIMATIONS.SLIDE_LEFT.animate}`
              : `flex gap-8 sm:gap-14 md:gap-20 w-max mx-auto ${ANIMATIONS.SLIDE_LEFT.initial}`
          }
          ref={ref}
        >
          {ICONS.map(({ id, icon, link, ariaLabel }) => (
            <div
              className={clsx(
                'transition-all p-2',
                'rounded-full bg-white cursor-pointer'
              )}
              key={id}
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={ariaLabel}
              >
                {icon}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
        <p className="text-sm sm:text-base">
          &copy; {currentYear} Eagle Music Services. All Rights Reserved.
        </p>
      </div>
    </section>
  )
}

const ICON_CLASS = 'text-black text-xl sm:text-3xl md:text-3xl'

const ICONS = [
  {
    id: 0,
    icon: (
      <span className={ICON_CLASS}>
        <AiFillMail />
      </span>
    ),
    link: 'mailto:contact@eaglemusicservices.ca',
    ariaLabel: 'Mail',
  },
  {
    id: 1,
    icon: (
      <span className={ICON_CLASS}>
        <AiFillPhone />
      </span>
    ),
    link: 'tel:+16473385058',
    ariaLabel: 'Phone',
  },
  {
    id: 2,
    icon: (
      <span className={ICON_CLASS}>
        <AiFillYoutube />
      </span>
    ),
    link: 'https://www.youtube.com/watch?v=VH14HmAvxQE',
    ariaLabel: 'Youtube',
  },
  {
    id: 3,
    icon: (
      <span className={ICON_CLASS}>
        <AiFillInstagram />
      </span>
    ),
    link: '#',
    ariaLabel: 'Instagram',
  },
]

export default ContactPage
