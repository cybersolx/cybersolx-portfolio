import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import Aboutus from './pages/aboutus'
import Team from './pages/Team'
import { Index3Index } from './components/OurTeam'
import { TeamDetail } from './components/OurTeam'
// import Error403 from './Pages/Error/Error403';
// import Error404 from './Pages/Error/Error404';
// import Error405 from './Pages/Error/Error405';
// import Expertise from './Pages/Expertise';
// import ProjectManagement from './Pages/ProjectManagement';
// import OurProjects from './Pages/OurProjects';
// import ProjectDetails from './Pages/ProjectDetails';
// import Team from './Pages/Team';
// import Faqs from './Pages/Faqs';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
import ContactUs from './pages/contactus'
import Services from './pages/services'
import PrivacyPolicy from './pages/privacyPolicy'
import Protfolio from './pages/protfolio'
import ScrollToTop from './components/ScrollToTop'

class Markup extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="page-wraper">
          <Routes>
            <Route path="/" element={<Homepage />}>
              <Route path="//" element={<Index3Index />} />
            </Route>
            <Route path="/about" element={<Aboutus />} />
            <Route path="/team" element={<Team />}>
              <Route path="/team/" element={<Index3Index />} />
              <Route path=":slug" element={<TeamDetail />} />
            </Route>

            {/* <Route path='/error-403' element ={Error403} />
                        <Route path='/error-404' element ={Error404} />
                        <Route path='/error-405' element ={Error405} /> */}
            {/* <Route path='/expertise' element ={Expertise} />
                        <Route path='/project-management' element ={ProjectManagement} />
                        <Route path='/our-projects' element ={OurProjects} />
                        <Route path='/project-details' element ={ProjectDetails} />
                        <Route path='/team' element ={Team} />
                        <Route path='/faqs' element ={Faqs} />
                        <Route path='/login' element ={Login} />
                        <Route path='/register' element ={Register} /> */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path='/services-details' element={ServicesDetails} /> */}
            <Route path="/portfolio" element={<Protfolio />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <ScrollToTop />
        {/* <ThemeButton /> */}
      </BrowserRouter>
    )
  }
}

export default Markup
