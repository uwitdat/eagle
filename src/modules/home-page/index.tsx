import Nav from '../../components/Nav'
import { PATHS } from '../../constants/paths'
import { Button } from '../../components/Button'
import { ImageWBorder } from '../../components/ImageWBorder'

const HomePage = () => {
  return (
    <section className="h-screen snap-start">
      <Nav />
      <div className="p-5 md:p-10 text-center mobile:text-start">
        <h1 className="mt-4 sm:mt-8 lg:mt-20 text-white">
          Eagle Music <span>Services</span>
        </h1>
        <div className="flex flex-col mobile:flex-row items-center justify-center mt-10 mobile:mt-20">
          <div className=" mr-0 mobile:mr-24 lg:mr-32 xl:mr-60">
            <ImageWBorder
              src="/images/pix.avif"
              alt="main band image"
              leftBorder
            />
          </div>

          <div className="mt-10 sm:mt-14 mobile:mt-0">
            <p>
              Redefining the way you book, <br />
              interact, and enjoy your entertainment.{' '}
            </p>
            <div className="flex flex-col sm:flex-row justify-center mobile:justify-start gap-3 mt-4 sm:mt-6 mobile:mt-8">
              <a href={PATHS.CONTACT}>
                <Button variant="solid">Get In Touch</Button>
              </a>

              <a href={PATHS.SERVICES}>
                <Button>Check Us Out</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
