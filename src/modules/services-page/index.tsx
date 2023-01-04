import { ImageWBorder } from '../../components/ImageWBorder'
import { useInView } from 'react-intersection-observer'
import { Button } from '../../components/Button'
import { ANIMATIONS } from '../../constants/animations'
import { useEffect, useState } from 'react'
import { PATHS } from '../../constants/paths'

const ServicesPage = () => {
  const [isInView, setIsInView] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])

  return (
    <section
      className="flex flex-col h-auto pb-3 sm:h-screen bg-dark snap-start"
      id="services"
    >
      <div className="mt-8 ml-0 text-center mobile:mt-20 mobile:ml-20 mobile:text-start">
        <h2 className="mb-2 mobile:mb-10">
          Our <span>Services</span>
        </h2>
      </div>

      <div className="flex flex-col justify-between flex-grow px-5">
        <div className="flex flex-col items-center justify-center py-0 mt-3 mobile:py-10 md:flex-row">
          <ImageWBorder
            alt="Woman DJ"
            src="images/pix-3.avif"
            leftBorder
            fallback=""
          />

          <div className="relative mt-10 ml-0 text-center mobile:text-start mobile:ml-36 lg:ml-60 mobile:mt-0">
            <h3 className="mb-5 text-white">Is Eagle For You?</h3>
            <p className="self-center w-full max-w-lg mb-2 text-white">
              The short answer is yes. EMS is great for any and all events/
              venues including:
            </p>

            <div className="flex mt-10">
              <ul className="flex flex-col">
                {EVENTS_1.map((event, idx) => (
                  <li
                    key={event.id}
                    style={{
                      animationFillMode: 'both',
                      animationDelay: `${0.15 * idx}s`,
                    }}
                    className={
                      isInView
                        ? `${EVENT_CLASS} animate-fade-in-list`
                        : EVENT_CLASS
                    }
                    ref={ref}
                  >
                    • {event.title}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col ml-24">
                {EVENTS_2.map((event, idx) => (
                  <li
                    key={event.id}
                    className={
                      isInView
                        ? `${EVENT_CLASS} animate-fade-in-list`
                        : EVENT_CLASS
                    }
                    ref={ref}
                    style={{
                      animationFillMode: 'both',
                      animationDelay: `${0.2 * idx}s`,
                    }}
                  >
                    • {event.title}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{ transitionDelay: '2.5s' }}
              className={
                isInView
                  ? `${ANIMATIONS.FADE_IN.initial} ${ANIMATIONS.FADE_IN.animate} ml-32 mt-14`
                  : `${ANIMATIONS.FADE_IN.initial} ml-32 mt-14`
              }
              ref={ref}
            >
              <a href={PATHS.CONTACT}>
                <Button>Interested?</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const EVENT_CLASS =
  'text-base text-white sm:text-lg lg:text-xl leading-relaxed text-gray-400 font-extralight opacity-0'

const EVENTS_1 = [
  { id: 1, title: 'Weddings' },
  {
    id: 2,
    title: 'Corporate Events',
  },
  {
    id: 3,
    title: 'Restaurants',
  },
  {
    id: 4,
    title: 'Bars',
  },
  {
    id: 5,
    title: 'Festivals',
  },
  {
    id: 6,
    title: 'Clubs',
  },
  {
    id: 7,
    title: 'Charity Events',
  },
  {
    id: 8,
    title: 'Fashion Shows',
  },
]

const EVENTS_2 = [
  {
    id: 1,
    title: 'Concerts',
  },
  {
    id: 2,
    title: 'Conventions',
  },
  {
    id: 3,
    title: 'Private Parties',
  },
  {
    id: 4,
    title: 'School Events',
  },
  {
    id: 5,
    title: 'Church Events',
  },
  {
    id: 6,
    title: 'Mitzvahs',
  },
  {
    id: 7,
    title: 'Sporting Events',
  },
  {
    id: 8,
    title: '& More...',
  },
]

export default ServicesPage
