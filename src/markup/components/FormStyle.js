import React, { Fragment, Component } from "react";

class FormStyle extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 content-inner chosesus-content text-white">
              <h2 className="box-title m-b15 ">
                Let's get in touch<span className="bg-primary"></span>
              </h2>
              <p className="font-16 op8">
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days.
              </p>
              {/* <h3 className="font-weight-500 m-b50 op6 " >By 50+ customers for 100+ Web and Mobile App development projects.</h3> */}
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h4 className="title-font font-semibold text-gray-500 tracking-widest text-xs">
                  EMAIL
                </h4>
                <a
                  href="mailto:info@Cybersolx.com"
                  className="text-white leading-relaxed"
                >
                  info@Cybersolx.com
                </a>
                <h4 className="title-font font-semibold text-gray-500 tracking-widest text-xs mt-4">
                  PHONE
                </h4>
                <p>
                  <a
                    href="callto:+92 3155537059"
                    className="text-white leading-relaxed"
                  >
                    + 92 3155537059
                  </a>
                </p>
                <p>
                  <a
                    href="callto:+ 44 7553 818594"
                    className="text-white leading-relaxed"
                  >
                    + 44 7553 818594{" "}
                  </a>
                </p>
              </div>
              <h4 className="">& What you will get:</h4>
              <ul className="list-checked primary ">
                <li>
                  <span>Quick Response </span>
                </li>
                <li>
                  <span>Software requirement assistance</span>
                </li>
                <li>
                  <span>Get a Qoute</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-7 m-b30">
              <form
                className="inquiry-form  dzForm"
                action="script/contact.php"
              >
                <div className="dzFormMsg"></div>
                <h3 className="box-title m-t0 m-b10">
                  Let's Convert Your Idea into Reality{" "}
                  <span className="bg-primary"></span>
                </h3>
                <p>
                  Our feedback team is available for your inquiries 24/7-365,
                  feel free to inquire about your projects or anything that we
                  could help you with.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-user text-primary"></i>
                        </span>
                        <input
                          name="dzName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-user text-primary"></i>
                        </span>
                        <input
                          name="dzName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-mobile text-primary"></i>
                        </span>
                        <input
                          name="dzOther[Phone]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-agenda text-primary"></i>
                        </span>
                        <input
                          name="dzSubject"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-email text-primary"></i>
                        </span>
                        <input
                          name="dzEmail"
                          type="email"
                          className="form-control"
                          required
                          placeholder="Your Email Id"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-agenda text-primary"></i>
                        </span>
                        <textarea
                          name="dzMessage"
                          rows="4"
                          className="form-control"
                          required
                          placeholder="Tell us about your project or idea"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        ></div>
                        <input
                          className="form-control d-none"
                          data-recaptcha="true"
                          required
                          data-error="Please complete the Captcha"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="site-button button-lg"
                    >
                      {" "}
                      <span>Get A Free Quote!</span>{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FormStyle;
