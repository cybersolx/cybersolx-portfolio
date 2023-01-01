import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'

//Images
import pic5 from './../../images/about/pic5.jpg'
import pic7 from './../../images/about/pic7.jpg'

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="dlab-tabs choseus-tabs">
          <ul
            className="nav row justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li>
              <Link
                to={'#'}
                className={classnames({ active: activeTab === '1' }) + ''}
                onClick={() => {
                  toggle('1')
                }}
              >
                <span className="title-head">Cost Effectiveness</span>
              </Link>
            </li>
            <li>
              <Link
                to={'#'}
                className={classnames({ active: activeTab === '3' }) + ''}
                onClick={() => {
                  toggle('3')
                }}
              >
                <span className="title-head">Technology Expertization</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="tab-content chosesus-content">
          <div id="cost" className="tab-pane active">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="row p-tb50">
                  <div className="col-lg-6 m-b10 col-md-4 about-img ">
                    <img src={pic5} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30 ">
                      <h4 className="font-weight-300">
                        Project Cost Effectiveness
                      </h4>
                      <ul className="list-checked primary">
                        <li>
                          <span>
                            We will use the efficient approach for your project
                          </span>
                        </li>
                        <li>
                          <span>
                            We shall adopt Agile software development Approach
                          </span>
                        </li>
                        <li>
                          <span>
                            Launching a product with essential features based on
                            usability over visual impact
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="abuot-box p-lr30">
                      <p>
                        With enormous breakthroughs in computer hardware
                        technology, the creation of superfast computer systems
                        with extremely high speeds and throughputs has
                        accelerated in recent years. Simultaneously, software
                        expenses are becoming a larger portion of total system
                        costs. Some of the most essential concerns in the
                        development and maintenance of computer software are
                        described in terms of cost-effective, reliable software
                        engineering and development. Our team would handle the
                        cost of your project and give you an efficient and
                        feasible cost plan.
                      </p>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="row p-tb50">
                  <div className="col-lg-6 col-md-4 about-img">
                    <img src={pic7} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30">
                      <h4 className="font-weight-300">
                        Technology Expertization
                      </h4>
                      <ul className="list-checked primary">
                        <li>
                          <span>
                            Our team is Expert in Serverless to decentralaized
                            Technologies
                          </span>
                        </li>
                        <li>
                          <span>
                            Our team knows which efficient way to solve your
                            problem no matter the complexity
                          </span>
                        </li>
                        <li>
                          <span>
                            {' '}
                            We not only would deploy the tech but we would also
                            train your organization to use that technology
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="abuot-box p-lr30">
                      <p>
                        Our technology expertise includes (AWS), Firebase, React.js, Django, Nodejs
                        ,Serverless approach, JAMStack, GraphQL, Flutter, along with other
                        comprehensive technologies. Combining them, we offer
                        custom software development solutions of any scale,
                        complexity and type.Our team uses the Latest state of
                        art technologies to solve any obstacles. Cloud is always
                        our preffered platform (AWS/AZURE/GCP).
                      </p>
                    </div>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomeTab
