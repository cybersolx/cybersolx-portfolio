import React from 'react'

import OurTeam from '../components/OurTeam'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageTitle from '../layouts/PageTitle'
import SectionCounter from './../components/SectionCounter'

import bnr from './../../images/banner/bnr2.jpg'

function Team() {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr overlay-primary"
        style={{ backgroundImage: 'url(' + bnr + ')' }}
      >
        <PageTitle motherMenu="Our Team" activeMenu="Our Team" />
      </div>
      <div>
        <OurTeam />
        {/* <!-- Our Services --> */}
        {/* <!-- Why Chose Us --> */}
        <div
          style={{
            marginBottom: '50px',
          }}
        >
          <SectionCounter />
        </div>

        {/* <!-- Why Chose Us End --> */}
      </div>
      <Footer />
    </>
  )
}

export default Team
