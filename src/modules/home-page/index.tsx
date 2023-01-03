import Nav from '../../components/Nav'
import { PATHS } from '../../constants/paths'
import { Button } from '../../components/Button'
import { ImageWBorder } from '../../components/ImageWBorder'

const HomePage = () => {
  return (
    <section className="h-screen snap-start">
      <Nav />
      <div className="p-10">
        <h1 className="mt-20 text-white">
          Eagle Music <span>Services</span>
        </h1>
        <div className="flex items-center justify-center mt-20">
          <ImageWBorder
            src="/images/pix.avif"
            alt="main band image"
            className="mr-60"
          />
          <div>
            <p>
              Redefining the way you book, <br />
              interact, and enjoy your entertainment.{' '}
            </p>
            <div className="flex gap-3 mt-8">
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
