import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="site-footer text-uppercase">
          <div className="footer-top bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b30 text-white">Company</h5>
                    <ul>
                      <li>
                        <Link to={"/"}>Home </Link>
                      </li>
                      <li>
                        <Link to={"/about"}>About Us </Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact Us</Link>
                      </li>
                      <li>
                        <Link to={"/team"}>Our Team</Link>
                      </li>
                      <li>
                        <Link to={"/services"}>Our Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-7 col-lg-2 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_services border-0">
                    <h5 className="m-b30 text-white">Useful Link</h5>
                    <ul>
                      <li>
                        <Link to={"/portfolio"}>Portfolio</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
                  <div className="widget widget_getintuch">
                    <h5 className="m-b30 text-white ">Contact us</h5>
                    <ul>
                      <li>
                        <i className="ti-location-pin"></i>
                        <strong>Offices located in</strong> London England
                        United Kingdom & Doha Qatar & Dallas, TX, USA &
                        Islamabad Pakistan{" "}
                      </li>
                      <li>
                        <i className="ti-mobile"></i>
                        <strong>Pakistan</strong>+ 92 3155537059
                      </li>
                      <li>
                        <i className="ti-mobile"></i>
                        <strong>UK</strong>+ 44 7553 818594
                      </li>
                      <li>
                        <i className="ti-email"></i>
                        <strong>email</strong>info@Cybersolx.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
                  <div className="widget">
                    <h5 className="m-b30 text-white">
                      Subscribe To Our Newsletter
                    </h5>
                    <p className="text-capitalize m-b20">
                      If you have any questions, please contact us so that we
                      can provide you with a meaningful response. To receive our
                      most recent products, sign up for our newsletter.
                    </p>
                    <div className="subscribe-form m-b20">
                      <form
                        className="dzSubscribe"
                        action="script/mailchamp.php"
                        method="post"
                      >
                        <div className="dzSubscribeMsg"></div>
                        <div className="input-group">
                          <input
                            name="dzEmail"
                            required="required"
                            className="form-control"
                            placeholder="Your Email Id"
                            type="email"
                          />
                          <span className="input-group-btn">
                            <button
                              name="submit"
                              value="Submit"
                              type="submit"
                              className="site-button"
                            >
                              Subscribe
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <ul className="list-inline m-a0">
                      <li>
                        <a
                          href="https://www.facebook.com/Cybersolx"
                          className="site-button facebook circle mr-1"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/Cybersolx"
                          className="site-button linkedin circle mr-1"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      {/* <li>
                        <Link
                          to={"#"}
                          className="site-button instagram circle mr-1"
                        >
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"#"}
                          className="site-button twitter circle mr-1"
                        >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom bg-primary">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 text-left ">
                  {" "}
                  <span>Copyright © 2021 - 2022 Cybersolx</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
