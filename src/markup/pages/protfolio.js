import React, { Component, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageTitle from "../layouts/PageTitle";
import Masonry from "react-masonry-component";

//images
import ecommerce from './../../images/portfolio/djlightingdiscount.png'
import simplybella from './../../images/portfolio/simplybella.png'
import tlprolighting from './../../images/portfolio/tlprolighting.png'
import sbzlaundry from './../../images/portfolio/sbzlaundry.png'
import mutify from './../../images/portfolio/mutify.png'
import bnr1 from "./../../images/banner/bnr1.jpg";
import spacex from "./../../images/portfolio/spacex.png";
import queen from "./../../images/portfolio/queen.png";
import ciisco from "./../../images/portfolio/ciisco.png";
import covid from "./../../images/portfolio/covid.png";
import blog from "./../../images/portfolio/blog.png";
import quiz from "./../../images/portfolio/quiz.png";
import vlolly from "./../../images/portfolio/vlolly.png";
import flayer1 from "./../../images/portfolio/flayer1.png";
import flayer2 from "./../../images/portfolio/flayer2.png";
import flayer3 from "./../../images/portfolio/flayer3.png";
import logo from "./../../images/portfolio/logo.png";
import quotes from "./../../images/portfolio/quotes.png";
import screens from "./../../images/portfolio/screens.png";
import screen2 from "./../../images/portfolio/screen2.png";
import resume from "./../../images/portfolio/resume.png";
import divinemeats from "./../../images/portfolio/divinemeats.png";
import londonMinistryTechnology from "./../../images/portfolio/lmt.png";

const imageBlog = [
{
  Large: simplybella,
  url: "https://simplybellasalonandspa.com/",
  tag: ["Web App", "Wordpress"],
  },
  {
    Large: tlprolighting,
    url: "https://tlprolighting.com/",
    tag: ["Web App", "Wordpress"],
  },
  {
    Large: sbzlaundry,
    url: "http://sbzlaundry.com/",
    tag: ["Web App", "Wordpress"],
  },
  {
    Large: mutify,
    url: "http://clone-mutifyapp.surge.sh",
    tag: ["Web App", "Gatsbyjs"],
  },
	{
		Large: ecommerce,
		url: "https://djlightingdiscount.com",
		tag: ["Web App", "Woocommerce"],
	  },
	{
		Large: divinemeats,
		url: "https://divinemeats.com/",
		tag: ["Web App", "Wordpress"],
	  },
    {
      Large: ciisco,
      url: "https://ciisco.com/",
      tag: ["Web App", "Wordpress"],
      },
	  {
		Large: londonMinistryTechnology,
		url: "https://www.londonministry.technology/",
		tag: ["Web App", "Nextjs"],
	  },
  {
    Large: spacex,
    url: "https://spacex-application.netlify.app/",
    tag: ["Web App", "Graphql"],
  },
  {
    Large: queen,
    url: "https://alice-queen.surge.sh/",
    tag: ["Web App", "Animation"],
  },
  {
    Large: covid,
    url: "https://covid-19-analytics.netlify.app/",
    tag: ["Web App", "Maps"],
  },
  {
    Large: blog,
    url: "https://gatsby-contentfull-blog.netlify.app/",
    tag: ["Web App", "Firebase"],
  },
  {
    Large: quiz,
    url: "https://quize-app.netlify.app/",
    tag: ["Web App", "Typescript"],
  },
  {
    Large: vlolly,
    url: "https://v-lolly.netlify.app/",
    tag: ["Web App", "Lambda Functions"],
  },
  { Large: flayer1, url: "https://www.behance.net/gallery/128150379/Website-Banner", tag: ["Design", "Photoshop"] },
  { Large: flayer3, url: "https://www.behance.net/gallery/128150797/Posters", tag: ["Design", "Photoshop"] },
  { Large: flayer2, url: "https://www.behance.net/gallery/128150197/Product-Packaging", tag: ["Design", "Photoshop"] },
  { Large: logo, url: "https://www.behance.net/gallery/128150271/Brand-Logo", tag: ["Design", "Illustration"] },
  { Large: quotes, url: "https://www.behance.net/gallery/128150565/Quotes?tracking_source=project_owner_other_projects", tag: ["Design", "Illustration"] },
  { Large: screens, url: "https://www.behance.net/gallery/128149295/Mobile-Informer", tag: ["UI/UX", "Adobe XD"] },
  { Large: screen2, url: "https://www.behance.net/gallery/128148447/Food-Valley", tag: ["UI/UX", "Adobe XD"] },
  { Large: resume, url: "https://www.behance.net/gallery/128149085/Resume-Website", tag: ["UI/UX", "Adobe XD"] },
  
];

//Light Gallery on icon click
const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <Link
      to={"#"}
      onClick={() => openLightbox(props.imageToOpen)}
      className="mfp-link portfolio-fullscreen"
    >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  );
};

// Masonry section
const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };
// Masonry section end

const TagLi = ({ name, handlesettag, tagActive }) => {
  return (
    <li
      className={` tag ${tagActive ? "btn active" : "btn"}`}
      onClick={() => handlesettag(name)}
    >
      <input type="radio" />
      <Link to={"#"} className="site-button-secondry radius-sm">
        <span>
          {name} {""}
        </span>{" "}
      </Link>
    </li>
  );
};

class Protfolio extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content bg-white">
          {/*  banner  */}
          <div
            className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
            style={{ backgroundImage: "url(" + bnr1 + ")" }}
          >
            <PageTitle
              motherMenu="Portfolio Full Width"
              activeMenu="Portfolio Full Width"
            />
          </div>
          {/*  Section-1 Start  */}
          <PortfolioItem />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
function PortfolioItem() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilterdImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? setFilterdImages(imageBlog)
      : setFilterdImages(
          imageBlog.filter((image) =>
            image.tag.find((element) => element === tag)
          )
        );
  }, [tag]);

  return (
    <>
      <div className="section-full content-inner-1 portfolio text-uppercase">
        <div className="site-filters clearfix center  m-b40">
          <ul className="filters" data-toggle="buttons">
            <TagLi
              name="All"
              handlesettag={setTag}
              tagActive={tag === "All" ? true : false}
            />
            <TagLi
              name="Web App"
              handlesettag={setTag}
              tagActive={tag === "Web App" ? true : false}
            />
            <TagLi
              name="Content Writing"
              handlesettag={setTag}
              tagActive={tag === "Content Writing" ? true : false}
            />
            <TagLi
              name="UI/UX"
              handlesettag={setTag}
              tagActive={tag === "UI/UX" ? true : false}
            />
            <TagLi
              name="Design"
              handlesettag={setTag}
              tagActive={tag === "Design" ? true : false}
            />
            <TagLi
              name="Database"
              handlesettag={setTag}
              tagActive={tag === "Database" ? true : false}
            />
          </ul>
        </div>
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="clearfix">
              <ul
                id="masonry"
                className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1"
              >
                <Masonry
                  className={"my-gallery-class"}
                  options={masonryOptions}
                  disableImagesLoaded={false}
                  updateOnEachImageLoad={false}
                  imagesLoadedOptions={imagesLoadedOptions}
                >
                  {filteredImages.map((item, index) => (
                    <li
                      className="web design card-container col-lg-3 col-md-6 col-xs-12 col-sm-6 p-a0"
                      key={index}
                    >
                      <div className="dlab-box dlab-gallery-box">
                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                          <img src={item.Large} alt="" />
                          <div className="overlay-bx">
                            <div className="overlay-icon align-b text-white text-left">
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white text-left port-box"
                              >
                                <h5>{item.tag[0]}</h5>
                                <p>{item.tag[1]}</p>
                                <Iconimage />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </Masonry>
              </ul>
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </>
  );
}
export {
  spacex,
  queen,
  ciisco,
  ecommerce,
  divinemeats,
  covid,
  screen2,
  blog,
  quiz,
  vlolly,
  flayer1,
  flayer2,
  flayer3,
  logo,
  quotes,
  screens,
  imageBlog,
};
export default Protfolio;
