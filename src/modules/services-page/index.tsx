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
      className="flex flex-col h-auto pb-3 mb-20 mobile:mb-0 bg-dark snap-start"
      id="services"
    >
      <div className="mt-20 ml-0 text-center mobile:mt-20 mobile:ml-20 mobile:text-start">
        <h2 className="px-4 mb-2 mobile:mb-10 sm:px-0">
          Our <span>Services</span>
        </h2>
      </div>

      <div className="flex flex-col justify-between flex-grow px-5">
        <div className="flex flex-col items-center justify-center py-0 mt-3 mobile:py-10 md:flex-row">
          <div className="self-start hidden ml-8 mobile:block lg:ml-0">
            <ImageWBorder alt="Woman DJ" src="images/pix-3.webp" leftBorder />
          </div>

          <div className="relative mt-4 ml-0 text-center isolate sm:mt-10 mobile:text-start mobile:ml-24 lg:ml-48 mobile:mt-0">
            <div
              style={{ zIndex: -1 }}
              className="absolute z-20 flex items-center justify-center w-full h-full isolate mobile:hidden"
            >
              <div className="relative w-64 sm:w-80 inbetween:w-96 aspect-square">
                <img
                  alt="Woman DJ"
                  src="images/pix-3.webp"
                  className="object-cover w-full h-full rounded-full"
                />
                <div
                  style={{ zIndex: -10 }}
                  className="absolute w-full h-full border-2 rounded-full top-4 border-accent left-4"
                />
                <div className="absolute top-0 left-0 z-20 w-screen h-screen opacity-90 bg-dark" />
              </div>
            </div>

            <h3 className="mb-5 text-white">Is Eagle For You?</h3>
            <p className="self-center w-full max-w-lg mb-2 text-white mobile:max-w-sm lg:max-w-lg">
              The short answer is yes. EMS is great for any and all events/
              venues including:
            </p>

            <div className="flex mt-10 justify-evenly mobile:justify-start">
              <ul className="flex flex-col gap-1 mobile:gap-0">
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
              <ul className="flex flex-col gap-1 ml-0 mobile:gap-0 mobile:ml-14 lg:ml-20 xl:ml-24">
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
                  ? `${ANIMATIONS.FADE_IN.initial} ${ANIMATIONS.FADE_IN.animate} ml-0 mobile:ml-32 mt-14`
                  : `${ANIMATIONS.FADE_IN.initial} ml-0 mobile:ml-32 mt-14`
              }
              ref={ref}
            >
              <a href={PATHS.CONTACT}>
                <Button className="w-full px-4 py-3 text-sm font-bold border-2 rounded-lg mobile:w-auto sm:w-4/5 md:text-base lg:text-xl sm:px-8">
                  Interested?
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const EVENT_CLASS =
  'text-sm xxs:text-base text-white sm:text-lg lg:text-xl leading-relaxed text-gray-400 font-extralight opacity-0'

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
