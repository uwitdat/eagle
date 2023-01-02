const AboutPage = () => {
  return (
    <section className="bg-dark h-screen snap-start flex flex-col" id="about">
      <div className="text-right">
        <h2 className="text-white mt-20 mr-60">
          About <span>Us</span>
        </h2>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="mr-60">
          <h3 className="text-white mb-5">What We Do</h3>
          <p className="text-white mb-2 w-full max-w-lg">
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
              className="absolute bg-white left-0"
            />
          </div>
        </div>
        <div
          style={{ aspectRatio: '1', height: '28rem' }}
          className="relative z-10"
        >
          <img
            alt="man with microphone"
            src="/images/pix-2.jpg"
            className="h-full w-full rounded-full object-cover"
          />
          <div
            style={{ zIndex: -1 }}
            className="top-4 left-4 h-full w-full absolute border-2 border-accent rounded-full"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutPage
