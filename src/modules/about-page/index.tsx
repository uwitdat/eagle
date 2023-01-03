import { ImageWBorder } from '../../components/ImageWBorder'

const AboutPage = () => {
  return (
    <section className="flex flex-col h-screen bg-dark snap-start" id="about">
      <div className="text-center mobile:text-right">
        <h2 className="mt-10 mr-0 text-white md:mt-20 mobile:mr-60">
          About <span>Us</span>
        </h2>
      </div>

      <div className="flex flex-col-reverse items-center justify-center px-5 mt-6 md:flex-row md:mt-32 mobile:mt-20">
        <div className="mr-0 sm:mr-8 mobile:mr-36 lg:mr-60 mt-14 xs:mt-14 sm:mt-6 md:mt-0">
          <h3 className="mb-5 text-3xl text-white xs:text-4xl lg:text-5xl">
            What We Do.
          </h3>
          <p className="w-full max-w-lg mb-2 text-base text-white sm:text-lg lg:text-2xl">
            Eagle Music is your go-to source for all things entertainment. We
            specialize in providing live music, DJ services, multimedia, and
            visual performances for events. Our goal is to create unforgettable
            experiences for everyone in attendance.
          </p>

          <div className="relative mt-7">
            <p className="w-full max-w-lg text-base sm:text-lg lg:text-2xl">
              With a focus on excellence, we ensure that every performance is of
              the highest quality and sure to be a hit with all who witness it.
            </p>
            <div
              style={{
                height: '1px',
                top: '-.8rem',
              }}
              className="absolute left-0 bg-white w-almost-double sm:w-almost-double mobile:w-double"
            />
          </div>
        </div>
        <ImageWBorder alt="Man With Microphone" src={'/images/pix-2.avif'} />
      </div>
    </section>
  )
}

export default AboutPage
