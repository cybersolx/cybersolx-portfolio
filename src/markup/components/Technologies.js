import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'

//Images
import after from './../../images/Tecgnologies/after.png'
import xd from './../../images/Tecgnologies/xd.png'
import figma from './../../images/Tecgnologies/figma.png'
import priemer from './../../images/Tecgnologies/priemer.png'
import photoshop from './../../images/Tecgnologies/photoshop.png'
import illustrater from './../../images/Tecgnologies/illustrater.png'
import javascript from './../../images/Tecgnologies/javascript.png'
import typescript from './../../images/Tecgnologies/typescript.png'
import pwa from './../../images/Tecgnologies/pwa.png'
import react from './../../images/Tecgnologies/react.png'
import next from './../../images/Tecgnologies/next.png'
import gatsby from './../../images/Tecgnologies/gatsby.png'
import graphql from './../../images/Tecgnologies/graphql.png'
import git from './../../images/Tecgnologies/git.png'
import flutter from './../../images/Tecgnologies/flutter.png'
import shopify from './../../images/Tecgnologies/shopify.png'
import strapi from './../../images/Tecgnologies/strapi.png'
import contentfull from './../../images/Tecgnologies/contentfull.png'
import amplify from './../../images/Tecgnologies/amplify.png'
import lambda from './../../images/Tecgnologies/lambda.png'
import stepfunctions from './../../images/Tecgnologies/stepfunctions.png'
import event from './../../images/Tecgnologies/event.png'
import cognito from './../../images/Tecgnologies/cognito.png'
import dynamodb from './../../images/Tecgnologies/dynamodb.png'
import apigateway from './../../images/Tecgnologies/apigateway.png'
import ses from './../../images/Tecgnologies/ses.png'
import pipeline from './../../images/Tecgnologies/pipeline.png'
import fauna from './../../images/Tecgnologies/fauna.png'
import mongoose from './../../images/Tecgnologies/mongoose.png'
import oracle from './../../images/Tecgnologies/oracle.png'
import firebase from './../../images/Tecgnologies/firebase.png'
import sns from './../../images/Tecgnologies/sns.png'

const contentBlog = [
  { images: amplify, name: 'Amplify', url: 'https://aws.amazon.com/amplify/' },
  { images: lambda, name: 'Lambda', url: 'https://aws.amazon.com/lambda/' },
  {
    images: stepfunctions,
    name: 'Step Functions',
    url:
      'https://docs.aws.amazon.com/step-functions/latest/dg/getting-started.html',
  },
  {
    images: event,
    name: 'Event Bridge',
    url: 'https://aws.amazon.com/eventbridge/',
  },
  { images: cognito, name: 'Cognito', url: 'https://aws.amazon.com/cognito/' },
  {
    images: dynamodb,
    name: 'Dynamodb',
    url: 'https://aws.amazon.com/dynamodb/',
  },
  {
    images: apigateway,
    name: 'Apigateway',
    url: 'https://aws.amazon.com/api-gateway/',
  },
  { images: figma, name: 'Figma', url: 'https://www.figma.com/' },
  {
    images: javascript,
    name: 'Javascript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    images: typescript,
    name: 'Typescript',
    url: 'https://www.typescriptlang.org/',
  },
  { images: react, name: 'React', url: 'https://reactjs.org/' },
  { images: pwa, name: 'PWA', url: 'https://web.dev/progressive-web-apps/' },
  { images: next, name: 'Nextjs', url: 'https://nextjs.org/' },
  { images: gatsby, name: 'GatsbyJs', url: 'https://www.gatsbyjs.com/' },
  { images: graphql, name: 'GraphQl', url: 'https://graphql.org/' },
  { images: git, name: 'Git', url: 'https://git-scm.com/' },
  { images: flutter, name: 'Flutter', url: 'https://flutter.dev/' },
  { images: shopify, name: 'Shopify', url: 'https://www.shopify.com/' },
  { images: strapi, name: 'Strapi', url: 'https://strapi.io/' },
  {
    images: contentfull,
    name: 'Content Full',
    url: 'https://www.contentful.com/',
  },
  {
    images: after,
    name: 'After Effect',
    url: 'https://www.adobe.com/products/aftereffects.html',
  },
  {
    images: xd,
    name: 'Adobe XD',
    url: 'https://www.adobe.com/products/xd.html',
  },
  {
    images: priemer,
    name: 'Priemer pro',
    url: 'https://www.adobe.com/products/premiere.html',
  },
  {
    images: photoshop,
    name: 'Photoshop',
    url: 'https://www.adobe.com/products/photoshop.html',
  },
  {
    images: illustrater,
    name: 'Illustrater',
    url: 'https://www.adobe.com/products/illustrator.html',
  },
  { images: ses, name: 'SES', url: 'https://aws.amazon.com/ses/' },
  { images: sns, name: 'SNS', url: 'https://aws.amazon.com/sns/' },
  {
    images: pipeline,
    name: 'PipeLine',
    url: 'https://aws.amazon.com/codepipeline/',
  },
  { images: fauna, name: 'FaunaDb', url: 'https://fauna.com/' },
  { images: mongoose, name: 'Mongoose', url: 'https://www.mongodb.com/' },
  { images: firebase, name: 'Firebase', url: 'https://firebase.google.com/' },
  {
    images: oracle,
    name: 'Oracle',
    url: 'https://www.oracle.com/id/index.html',
  },
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

class Technologies extends Component {
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
        <div className="container" style = {{
            marginTop: "50px"
        }}>
          <div className="section-head text-black text-center">
            <h4 className="text-gray-dark m-b10">Technologies we Use</h4>
          </div>
        </div>
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
                        <Link
                          to={'#'}
                          className="site-button outline radius-xl white pull-right"
                        >
                          {item.name}
                        </Link>
                        <a
                          href ={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="site-button outline radius-xl white pull-left"
                        >
                          Visit
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

export default Technologies
