import { ImageWBorder } from '../../components/ImageWBorder'

const AboutPage = () => {
  return (
    <section className="flex flex-col h-screen bg-dark snap-start" id="about">
      <div className="text-right">
        <h2 className="mt-20 text-white mr-60">
          About <span>Us</span>
        </h2>
      </div>

      <div className="flex items-center justify-center mt-20">
        <div className="mr-60">
          <h3 className="mb-5 text-white">What We Do.</h3>
          <p className="w-full max-w-lg mb-2 text-white">
            Eagle Music is your go-to source for all things entertainment. We
            specialize in providing live music, DJ services, multimedia, and
            visual performances for events. Our goal is to create unforgettable
            experiences for everyone in attendance.
          </p>

          <div className="relative mt-7">
            <p className="w-full max-w-lg">
              With a focus on excellence, we ensure that every performance is of
              the highest quality and sure to be a hit with all who witness it.
            </p>
            <div
              style={{
                height: '1px',
                width: '200%',
                top: '-.8rem',
              }}
              className="absolute left-0 bg-white"
            />
          </div>
        </div>
        <ImageWBorder
          alt="Man With Microphone"
          src="/image-assets/pix-2.avif"
        />
      </div>
    </section>
  )
}

export default AboutPage
