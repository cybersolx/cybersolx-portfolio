import React, { Component } from 'react'

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import HomeOwlSlider from '../components/HomeOwlSlider'
import HomeOwlSlider2 from '../components/HomeOwlSlider2'
import ImgCarouselContent from '../components/ImgCarouselContent'
import HomeTab from '../components/HomeTab'
import Counter from '../components/Counter'
import PortfolioCarousel from '../components/PortfolioCarousel'
import FormStyle from '../components/FormStyle'
import OurTeam from '../components/OurTeam'

//Images
import pic4 from './../../images/about/pic4.jpg'
import bgimg from './../../images/background/bg1.jpg'
import bgimg3 from './../../images/background/bg1.jpg'

class Homepage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="page-wraper">
        <Header />
        <div className="page-content bg-white">
          {/*  Slider Banner */}
          <div className="owl-slider-banner main-slider">
            <HomeOwlSlider />
            {/*  Service   */}
            <div className="service-box-slide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <ImgCarouselContent />
                  </div>
                </div>
              </div>
            </div>
            {/*  Service End  */}
          </div>
          {/*  Slider Banner */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white content-inner-1 about-us">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-7 col-md-8">
                    <div className="abuot-box row">
                      <div className="col-lg-4">
                        <h2 className="box-title m-tb0">
                          About Us<span className="bg-primary"></span>
                        </h2>
                        <h4 className="text-gray-dark">
                          We create unique experiences
                        </h4>
                      </div>
                      <div className="col-lg-8">
                        <p>
                          A digitized and safe world for all of us, as well as
                          future generations, is our goal and ambition. In this
                          sense, we want to use IT as a foundation for building
                          strong and accepting societies, and we want to take a
                          holistic approach to simplifying and resolving the
                          problems we confront on a daily basis. Cybersolx is a
                          group of up-and-coming innovators. For the most
                          complex client situations, we develop inventive and
                          imaginative solutions. We have the ability to research
                          and study new technologies, such as Blockchain,
                          Android, Web, and Cloud, in order to provide the most
                          relevant solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 about-img">
                    <img src={pic4} data-tilt alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- About Us End --> */}
            {/* <!-- Our Services --> */}
            <div className="section-full content-inner-2">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="text-gray-dark m-b10">Our Services</h4>
                  <p>
                    Our team's technological expertise spans the IT and
                    financial sectors. We can help you with practically any
                    technological difficulty, including web development, UI/UX
                    Design, Database Design, and Financial Challenges.
                  </p>
                </div>
              </div>
              <div className="development-box">
                <div className="container">
                  <HomeOwlSlider2 />
                </div>
              </div>
            </div>
            {/* <!-- Our Services --> */}
            {/* <!-- Why Chose Us --> */}
            <div
              className="section-full content-inner-1 overlay-primary choseus-tabs  bg-img-fix"
              style={{ backgroundImage: 'url(' + bgimg + ')' }}
            >
              <div className="container">
                <div className="section-head text-white text-center">
                  <h2 className="box-title m-tb0">
                    Why Choose Us<span className="bg-primary"></span>
                  </h2>
                  <p>
                    We will not finish a project until both you and we are
                    completely happy. We encourage innovation and assist our
                    customers in staying ahead of the competition.
                  </p>
                </div>
              </div>
              <HomeTab />
              <div className="choses-info text-white">
                <Counter />
              </div>
            </div>
            {/* <!-- Why Chose Us End --> */}
            {/* <!-- Our Portfolio --> */}
            <div className="section-full content-inner-1 mfp-gallery">
              <div className="container-fluid">
                <div className="section-head text-center">
                  <h4 className="text-gray-dark m-b10">Our Portfolio</h4>
                  <h2 className="box-title m-tb0">
                    We work to innovate & are proud
                    <br /> of what we've created
                    <span className="bg-primary"></span>
                  </h2>
                  <h5>
                    YOU WOULD LOVE TO SEE SOME OF OUR BEST PROJECTS. TAKE A
                    LOOK!
                  </h5>
                </div>
                <PortfolioCarousel />
              </div>
            </div>
            {/* <!-- Our Portfolio END --> */}

            {/* Our Team */}

            <div
              className="container"
              style={{
                marginBottom: '60px',
              }}
            >
              <OurTeam />
            </div>

            {/* <!-- Get in touch --> */}
            <div
              className="section-full overlay-primary-dark bg-img-fix"
              style={{ backgroundImage: 'url(' + bgimg3 + ')' }}
            >
              <FormStyle />
            </div>
            {/* <!-- Get in touch --> */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Homepage
