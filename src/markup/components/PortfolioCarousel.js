import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'

//Images
import ecommerce from './../../images/portfolio/djlightingdiscount.png'
import simplybella from './../../images/portfolio/simplybella.png'
import tlprolighting from './../../images/portfolio/tlprolighting.png'
import sbzlaundry from './../../images/portfolio/sbzlaundry.png'
import divinemeats from './../../images/portfolio/divinemeats.png'
import londonMinistryTechnology from "./../../images/portfolio/lmt.png";
import spacex from './../../images/portfolio/spacex.png'
import queen from './../../images/portfolio/queen.png'
import ciisco from "./../../images/portfolio/ciisco.png";
import covid from './../../images/portfolio/covid.png'
import mutify from './../../images/portfolio/mutify.png'
import blog from './../../images/portfolio/blog.png'
import quiz from './../../images/portfolio/quiz.png'
import vlolly from './../../images/portfolio/vlolly.png'
import flayer1 from './../../images/portfolio/flayer1.png'
import flayer2 from './../../images/portfolio/flayer2.png'
import flayer3 from './../../images/portfolio/flayer3.png'
import logo from './../../images/portfolio/logo.png'
import quotes from './../../images/portfolio/quotes.png'
import screens from './../../images/portfolio/screens.png'
import screen2 from './../../images/portfolio/screen2.png'

const contentBlog = [
  { images: ecommerce, url: 'https://djlightingdiscount.com/', name: 'DJ Lighting', tech: 'Wordpress' },
  { images: divinemeats, url: 'http://divinemeats.com/', name: 'Divine Meats', tech: 'Wordpress' },
  { images: simplybella, url: 'https://simplybellasalonandspa.com/', name: 'simplybella', tech: 'Wordpress' },
  { images: tlprolighting, url: 'https://tlprolighting.com/', name: 'tlprolighting', tech: 'Wordpress' },
  { images: sbzlaundry, url: 'http://sbzlaundry.com/', name: 'sbzlaundry', tech: 'Wordpress' },
  { images: mutify, url: 'http://clone-mutifyapp.surge.sh/', name: 'mutify', tech: 'Gatsby' },
  { images: spacex, url: 'https://spacex-application.netlify.app/', name: 'spacex', tech: 'GraphQl' },
  { images: queen, url: 'http://alice-queen.surge.sh/', name: 'Queen', tech: 'Web Animation' },
  { images: ciisco, url: 'https://ciisco.com/', name: 'Ciisco', tech: 'Wordpress' },
  { images: londonMinistryTechnology, url: 'https://www.londonministry.technology/', name: 'LMT', tech: 'Nextjs' },
  { images: covid, url: 'https://covid-19-analytics.netlify.app/', name: 'Covid-19', tech: 'React' },
  { images: blog, url: 'https://gatsby-contentfull-blog.netlify.app/', name: 'Blog', tech: 'Gatsby' },
  { images: vlolly, url: 'https://v-lolly.netlify.app/', name: 'VLolly', tech: 'Lambda' },
  { images: quiz, url: 'https://quize-app.netlify.app/', name: 'Quiz', tech: 'Typescript' },
  { images: flayer1, url: '', name: 'Flayer', tech: 'Photoshop' },
  { images: flayer2, url: '', name: 'Flayer', tech: 'Photoshop' },
  { images: flayer3, url: '', name: 'Flayer', tech: 'Photoshop' },
  { images: logo, url: '', name: 'Furor', tech: 'Illustrater' },
  { images: quotes, url: '', name: 'Quote', tech: 'Illustrater' },
  { images: screens, url: '', name: 'Mobile Shop', tech: 'XD' },
  { images: screen2, url: '', name: 'Food Valley', tech: 'XD' },
]
//Light Gallery on icon click
const Iconimage = (props) => {
  const { openLightbox } = useLightbox()
  return (
    <Link
      to={'#'}
      onClick={() => openLightbox(props.imageToOpen)}
      className="mfp-link"
      title="Title Come Here"
    >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}

class PortfolioCarousel extends Component {
  render() {
    var settings = {
      arrows: false,
      slidesToShow: 4,
      speed: 3000,
      navSpeed: 3000,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
    return (
      <>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Slider
              className="img-carousel-content owl-carousel text-center text-white owl-none "
              {...settings}
            >
              {contentBlog.map((item, index) => (
                <div className="item p-3" key={index}>
                  <div className="dlab-box portfolio-box">
                    <div className="dlab-media dlab-img-effect dlab-img-overlay1">
                      {' '}
                      <img src={item.images} alt={item.name} />
                      <div className="dlab-info-has p-a15 bg-primary">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="site-button outline radius-xl white pull-left"
                        >
                          {item.tech}
                        </a>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="site-button outline radius-xl white pull-right"
                        >
                          {item.name}
                        </a>
                      </div>
                      <div className="overlay-bx">
                        <div className="overlay-icon text-white">
                          <Iconimage />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </SRLWrapper>
        </SimpleReactLightbox>
      </>
    )
  }
}

export default PortfolioCarousel
