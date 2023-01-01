import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageTitle from '../layouts/PageTitle'
import SectionCounter from '../components/SectionCounter'
import Technologies from '../components/Technologies'

//Images
import about9 from './../../images/about/pic9.jpg'
import bg2 from './../../images/background/bg-map.jpg'
import services1 from './../../images/our-services/pic1.jpg'
import services2 from './../../images/our-services/pic2.jpg'
import bnr from './../../images/banner/bnr2.jpg'

class Aboutus extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-primary"
            style={{ backgroundImage: 'url(' + bnr + ')' }}
          >
            <PageTitle motherMenu="About Us" activeMenu="About Us" />
          </div>
          <div className="content-block">
            <div className="section-full content-inner-2">
              <div className="container">
                <div className="section-head text-black text-center">
                  <h4 className="text-gray-dark m-b10">About Us</h4>
                  <h2 className="box-title m-tb0">
                    We create brand new corporate identities
                    <span className="bg-primary"></span>
                  </h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                </div>
              </div>
              <div className="container">
                <div className="row ">
                  <div className="col-lg-5 col-md-4 about-img">
                    <img src={about9} data-tilt alt="" />
                  </div>
                  <div className="col-lg-7 col-md-8">
                    <div className="abuot-box left row m-lr0 ">
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
                          {' '}
                          Our objective and vision include a digital and secure
                          world for all of us, as well as future generations. In
                          this regard, we are aiming to build strong and
                          tolerant communities by utilizing IT as a foundation
                          and taking a holistic approach to simplifying and
                          resolving difficulties that we face on a daily basis.
                        </p>
                        <p>
                          Cybersolx is a group of young innovators. We create
                          innovative and creative solutions for the most
                          difficult client problems. We have the ability to
                          investigate and study new technologies in order to
                          build the most appropriate solutions, such as
                          Blockchain, Android, Web, and Cloud.
                        </p>
                        {/* <p className="m-b0">Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Our Team */}

            {/* <OurTeam /> */}

            {/* Counetr section */}
            <SectionCounter />
            {/* Counetr section End*/}
            <VisionBlog />

            <Technologies />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
function VisionBlog() {
  return (
    <>
      <div
        className="section-ful our-about-info content-inner-1 "
        style={{
          backgroundImage: 'url(' + bg2 + ')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <div className="section-head text-center">
            <h2 className="box-title m-tb0">
              Mission & Vision<span className="bg-primary"></span>
            </h2>
            <p>
              {' '}
              Our mission and vision both, are to provide you with the best and
              the most efficient solution in the marketplace{' '}
            </p>
          </div>
          <div className=" row dzseth  m-b30">
            <div className="col-lg-6 col-md-12 m-b30 about-img ">
              <img src={services1} data-tilt alt="" />
            </div>
            <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
              <div className="dis-tbl-cell">
                <h3 className="box-title">
                  Mission<span className="bg-primary"></span>
                </h3>
                <p className="font-16">
                  Our objective is to go above and above for our clients by
                  providing best-in-class solutions that translate and help them
                  solve their problems.
                </p>
                <p className="font-16">
                  We make every effort to provide high-quality solutions and
                  services at a reasonable price. We place a high value on
                  customer happiness. We serve our customers with respect, which
                  allows us to keep current clients and grow our customer base.
                </p>
                <p className="font-16">
                  {' '}
                  We're always on the lookout for new ways to increase our
                  products' quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row dzseth column-reverse">
            <div className="col-lg-6 col-md-12 dis-tbl text-justify">
              <div className="dis-tbl-cell">
                <h3 className="box-title">
                  Vision<span className="bg-primary"></span>
                </h3>
                <p className="font-16">
                  Our goal is to establish ourselves as a competitive IT
                  solution provider and to strengthen our current market
                  position. We recognize that our customers' success is also our
                  success, thus we pledge to assist them in achieving their
                  business goals.
                </p>
                <p className="font-16">
                  We place a premium on work that is precise and of the greatest
                  quality. We want to be known as a dependable, innovative, and
                  user-friendly software service provider in the IT industry.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 about-img ">
              <img src={services2} data-tilt alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { VisionBlog }
export default Aboutus
