import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './../layouts/Header'
import Footer from './../layouts/Footer'
import PageTitle from './../layouts/PageTitle'

//Images
import bnr5 from './../../images/banner/bnr5.jpg'
import uiux from './../../images/expertise/webdesign.png'
import web from './../../images/expertise/webdevelopment.png'
import seo from './../../images/expertise/seo.png'
import app from './../../images/expertise/appdevelopment.png'
import database from './../../images/expertise/databaseadministrator.png'
import project from './../../images/expertise/projectmaintenance.png'
import finance from './../../images/expertise/financesolutions.png'
import content from './../../images/expertise/content.png'
import editing from './../../images/expertise/videoediting.png'
import animation from './../../images/expertise/animation.png'

const iconBox = [
  {
    icon: <img src={uiux} alt="UI/UX Solutions" />,
    title: 'UI/UX Solutions',
    desc:
      'Your clients will acknowledge you if you have an excellent front end. You can count on our staff to generate a good first impression for your company. ',
  },
  {
    icon: <img src={web} alt="Web App & API's  Solutions" />,
    title: "Web App & API's  Solutions ",
    desc:
      'Having a fantastic and strong backend API only improves the operation of your website, Our staff is experienced in developing Cloud-based SaaS APIs.',
  },
  {
    icon: <img src={seo} alt="SEO/SMO Solutions" />,
    title: 'SEO/SMO Solutions',
    desc:
      "Do you want your website to be found on the first page of any search engine? You've arrived to the correct location.",
  },
  {
    icon: <img src={app} alt="Mobile App Developent Solutions" />,
    title: 'Mobile App Developent Solutions',
    desc:
      'We also provide end-to-end mobile application development, for which our mobile development team employs the most cutting-edge, efficient, and effective technology available.',
  },
  {
    icon: <img src={database} alt="Database Administration" />,
    title: 'Database Administration',
    desc:
      'You need a powerful database to maintain your structured data intact with your projects, and our Database staff is available 24 hours a day, 7 days a week with the best option.',
  },
  {
    icon: <img src={project} alt="Project Maintenance" />,
    title: 'Project Maintenance',
    desc:
      'You may entrust us with any part of project management since we can handle it from start to finish, from finance to accounting.',
  },
  {
    icon: <img src={finance} alt="Finance Solutions" />,
    title: 'Finance Solutions',
    desc:
      'Financial matters are the most important aspect of any business or project, which is why we have the most experienced finance and accounting professionals on our team.',
  },
  {
    icon: <img src={content} alt="Techinical Content Writing" />,
    title: 'Techinical Content Writing',
    desc:
      "Our first obligation is to write the documentation for your projects. Do you need content for your blog, marketing, website, or other purposes? You've arrived to the correct location.",
  },
  {
    icon: <img src={editing} alt="Video Editing" />,
    title: 'Video Editing',
    desc:
      'Our talent is turning your ideas into digital reality, and we have some of the top video editors on board.',
  },
  {
    icon: (
      <img src={animation} alt="After Effects Animations / Illustrations" />
    ),
    title: 'After Effects Animations / Illustrations',
    desc:
      'Got a brilliant idea? Let our After Effects team visualize it and make it creative',
  },
]

class Services extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          {/* <!-- inner page banner --> */}
          <div
            className="dlab-bnr-inr overlay-primary"
            style={{ backgroundImage: 'url(' + bnr5 + ')' }}
          >
            <PageTitle motherMenu="Our Services" activeMenu="Our Services" />
          </div>
          {/* <!-- inner page banner END --> */}
          <div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full content-inner">
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
              <div className="container">
                <div className="row ">
                  {iconBox.map((data, index) => (
                    <div className="col-md-4 col-sm-6 m-b30 " key={index}>
                      <div
                        style={{
                          border: '2px solid #6DD5FA',
                        }}
                        className="icon-bx-wraper expertise  bx-style-1 p-a30 center"
                      >
                        <div className="icon-lg m-b20">
                          {' '}
                          <Link to={'#'} className="icon-cell">
                            {data.icon}
                          </Link>{' '}
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-uppercase">
                            <Link to={'#'}>{data.title}</Link>
                          </h5>
                          <p style={{ color: '#000' }}>{data.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- contact area END --> */}
        </div>

        <Footer />
      </>
    )
  }
}
export default Services
