import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderMenu extends Component {
  render() {
    return (
      <>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to={'/'}>Home</Link>
          </li>
          <li >
            <Link to={'/about'}>About Us</Link>
          </li>
          <li >
            <Link to={'/services'}>Our Services</Link>
          </li>
          <li >
            <Link to={'/portfolio'}>Our Portfolio</Link>
          </li>
          <li >
            <Link to={'/team'}>Our Team</Link>
          </li>
          <li >
            <Link to={'/contact'}>Contact Us</Link>
          </li>
        </ul>
      </>
    )
  }
}
export default HeaderMenu
