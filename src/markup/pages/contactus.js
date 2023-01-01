import React, { Component } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageTitle from '../layouts/PageTitle'
import FormStyle from '../components/FormStyle'

//Images
import bnr from './../../images/banner/bnr2.jpg'

class ContactUs extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white" >
          <div
            className="dlab-bnr-inr overlay-primary"
            style={{ backgroundImage: 'url(' + bnr + ')'}}
          >
            <PageTitle motherMenu="Contact Us" activeMenu="Contact Us" />
          </div>
          <div className="content-block" >
            <div
              className="section-full overlay-primary-dark bg-img-fix"
            >
              <FormStyle />
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default ContactUs
