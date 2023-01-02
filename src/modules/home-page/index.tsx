import Nav from '../../components/Nav'
import { PATHS } from '../../constants/paths'

const HomePage = () => {
  return (
    <section className="h-screen snap-start">
      <Nav />
      <div className="p-10">
        <h1 className="mt-20 text-white">
          Eagle Music <span>Services</span>
        </h1>
        <div className="flex justify-center items-center mt-20">
          <div
            style={{ aspectRatio: '1', height: '28rem' }}
            className="relative z-10 mr-60"
          >
            <img
              src="/images/pix.avif"
              alt="main band image"
              className="h-full w-full rounded-full object-cover"
            />
            <div className="top-4 right-4 h-full w-full absolute border-2 mix-blend-darken border-accent rounded-full" />
          </div>

          <div>
            <p>
              Redefining the way you book, <br />
              interact, and enjoy your entertainment.{' '}
            </p>
            <div className="flex mt-8 gap-3">
              <a href={PATHS.CONTACT}>
                <button className="text-black border-2 border-black bg-white rounded-lg text-xl py-3 px-8 font-bold">
                  Get In Touch
                </button>
              </a>

              <a href={PATHS.SERVICES}>
                <button className="text-white border-2 rounded-lg text-xl py-3 px-8 font-bold">
                  Check Us Out
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
