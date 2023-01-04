import Nav from '../../components/Nav'
import { PATHS } from '../../constants/paths'
import { Button } from '../../components/Button'
import { ImageWBorder } from '../../components/ImageWBorder'

const HomePage = () => {
  return (
    <section className="h-auto sm:h-screen snap-start">
      <Nav />
      <div className="p-5 text-center md:p-10 mobile:text-start">
        <h1 className="mt-4 text-white sm:mt-8 lg:mt-20">
          Eagle Music <span>Services</span>
        </h1>
        <div className="flex flex-col items-center justify-center mt-10 mobile:flex-row mobile:mt-20">
          <div className="mr-0  mobile:mr-24 lg:mr-32 xl:mr-60">
            <ImageWBorder
              src="images/pix.avif"
              alt="main band image"
              leftBorder
            />
          </div>

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" />

          <div className="mt-10 sm:mt-14 mobile:mt-0">
            <p>
              Redefining the way you book, <br />
              interact, and enjoy your entertainment.{' '}
            </p>
            <div className="flex flex-col justify-center gap-3 mt-4 sm:flex-row mobile:justify-start sm:mt-6 mobile:mt-8">
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
