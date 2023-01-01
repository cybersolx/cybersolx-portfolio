import React from 'react'

import Careers from '../components/Careers'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageTitle from '../layouts/PageTitle'

import bnr from './../../images/banner/bnr2.jpg'

function Team() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary"
        style={{ backgroundImage: 'url(' + bnr + ')' }}
      >
        <PageTitle motherMenu="Careers With Us!" activeMenu="Careers" />
      </div>
      <div>
        <Careers />

      </div>
      <Footer />
    </>
  )
}

export default Team
