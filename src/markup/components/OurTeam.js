import React, { Component } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

//Images
import bg13 from './../../images/background/bg13.jpg'
import Hassaan from './../../images/our-team/Hassaan.png'
import AbdulRehman from './../../images/our-team/armohsin.jpeg'
import HabibHanif from './../../images/our-team/avatar.jpg'
import MohsinAziz from './../../images/our-team/MohsinAziz.png'
import Usman from './../../images/our-team/Usman.png'
import Ahmed from './../../images/our-team/avatar.jpg'

import styles from './../../css/OurTeam.module.css'

const teamBlog = {
  habib: {
    image: HabibHanif,
    name: 'Habib Hanif',
    role:
      'Lead Technical Design (Multi Cloud) Architect Azure/ Cisco/ VMware/ AWS',
    designation: ' CEO & CTO',
    desc:
      'IT Consultant with 22 years experience to 95% of the FTSE100 companies and major government organisations both in the UK and Internationally - additionally have also worked with Qatar Govt ministries for various cloud projects (Azure and Office365) BC/SC/DBS clearance achieved. Experience of working with large infrastructures ranging from 10,000s of users with £million projects to small volunteer and Charity budgets. Vast experience in Cloud ,Cyber and Infrastructure technologies covering a variety of aspects in IT. Special interest in cutting edge technologies. Microsoft Cloud Partner. Working for projects both nationally and internationally whenever required. Some of the organisations I have worked for include (but not limited to) Metropolitan Police (MPS), Financial Services Authority (FSA), HSBC, Shell, BNP Paribas, HBOS, RBOS-Fin. Markets, Mercer, Marsh, Mellon Bank, LloydsTSB, Nationwide, Santander, BT, Vodafone, Computacenter, ATOS Origin, Cable & Wireless, Merrill Lynch, Level 3, Virgin, NTL, Marks & Spencer, Chubb, Tiscali, First National, Greater London Authority, EDF energy, Emma.TV, Pearson TV, London Sch. of Economics, ARC Intl, NHS, Lorien, London Ambulance Service, Hudson, OFSTED, Guildhall Sch. M&D , Barbican, Gartmore, Vector, COAL IT, Ramsay Healthcare, ACE Community Education, Capita IT, Lon Borough Harrow, HBS Business School, Kelway IT,UGHS, Uneekclothing, Segro, NextiraOne, Ipswich NHS, Synetix, Xor, JohnJones, NGOe, Vision Institute (Oman), Tamkeen (Lebanon), Qatar Football Assoc, Al Jazeera (Qatar), Qatar Red Crescent, Kahramaa (Qatar), Ebla (Qatar), Exceed (Qatar), Qatar Stars League, Customs (Qatar), Lusail Intl. Sports (Qatar), Qatar News Agency, Aman (Qatar), Civil Aviation Authority (Qatar), Ministry Comm Industry (Qatar), SCC, NEL CSU (NHS). Specialties: Microsoft Azure Cloud Partner, AWS, 3CX VOIP PBX Partner, Cisco Networking, Microsoft Server Technologies, ITIL, HP/Dell Blades, Virtualisation Specialist (HyperV & VMWARE). Datacenter Projects and Infrastructure work.',
    email: 'Habib@Cybersolx.com',
    linkedin: "https://www.linkedin.com/in/HabibHanif",
    github: "#",
    twitter: "#",

  },
  mohsin: {
    image: MohsinAziz,
    name: 'Mohsin Aziz',
    role: 'Finance Manager ',
    designation: 'Founder & CFO',
    desc:
      '20+ years of experience as the Chief Accountant and Head of Accounts Al-Sadd Exchange in Doha Qatar. Managed the Financial and Accounting operation at Al-Sadd Exchange. Also worked as a Marketing Executive/Sales at KING ASSOCIATES GULF AIR',
    email: ' mohsin@Cybersolx.com',
    github: "#",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/mohsin-aziz-23595196"
  },
  usman: {
    image: Usman,
    name: 'Usman Naeem',
    role:
      'Full-Stack Cloud Developer | Modern Full-Stack Web Application Developer',
    designation: 'Full-Stack Cloud Developer',
    desc:
      "Passionate and result oriented professional. Having indepth knowledge about modern tools and technologies. Highly organized individual who believes in teamwork, highly adoptable, fast learner and effective communicator. I am a computer science undergrad student with an obsession with modern web technologies. I am quite confident with Javascript, React, Nodejs, Python, Graphql, AWS(cdk) and related technologies. Other then that I try to learn new technologies everyday to grow my arsenal.I am CS 3rd year Student at Comsats University. Living in the city of pines Abbottabad. Currently working on Aws services and DApps ✈️",
    email: 'usman@Cybersolx.com',
    linkedin: "https://www.linkedin.com/in/usmanbinnaeem",
    twitter: "https://twitter.com/usmanbinnaeem",
    github: "https://github.com/usmanbinnaeem"
  },
  hassaan: {
    image: Hassaan,
    name: 'Hassaan Ahmed',
    role: 'UI/UX Designer & Flutter Developer',
    designation: 'UI/UX Designer',
    desc:
      'I am looking to offer my expertise and experience in developing modern designs to a growing company. Bringing more than a 2+ year of experience to a graphic design role that seeks a lead designer with the ability to offer unique and modern design solutions such as UI/UX conceptualizing and implementing a range of marketing and advertising materials for the success.',
    email: 'Hassan@Cybersolx.com',
    linkedin: "https://www.linkedin.com/in/hassaan-ahmed-692003179/",
    twitter: "https://twitter.com/hassaanahmed844",
    github: "https://github.com/hassaanahmed844"
  },
  ahmed: {
    image: Ahmed,
    name: 'Muhammad Ahmad',
    role: 'Database Engineer',
    designation: 'Database Engineer',
    desc: "Hi there. I'm Muhammad Ahmad and I work on database designing tasks and SQL queries tasks within time. I have 1+ years of experience in database designing. Databases are now becoming one of the most important fields and the database world, in this regard, database designing (ER Diagram), SQL Queries, Database creation, Schema Designs are one of the most in-demand services. I am one of the Database designers, who is offering these services after a vast experience in client-based projects.",
    email: 'ahmad@Cybersolx.com',
    linkedin: "#",
    twitter: "#",
    github: "https://github.com/aeongt710"
  },
  abdul: {
    image: AbdulRehman,
    name: 'Abdul Rehman',
    role: 'Front End Web Developer',
    designation: 'Front End Developer',
    desc:
      'Hi there, I am Abdul Rehman, a 3rd-year undergraduate Student at COMSATS University, Abbottabad. My vision is to combine the art of design with the art of  programming. My areas of Interest are in Web design and Front-End Web development. I would love to share my skills and learn more on my journey in life.',
    email: 'AbdulRahman@Cybersolx.com',
    linkedin: "https://www.linkedin.com/in/armohsin",
    twitter: "",
    github: "https://github.com/armohsin"
  },
}

export function Index3Index() {
  return (
    <div className="row m-b50">
      {Object.entries(teamBlog).map(([slug, { name, image, designation, github, twitter, linkedin }]) => (
        <div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={slug}>
          <div className="team-section">
            <img src={image} alt="" />
            <div className="team-content text-white">
              <Link to={`/team/${slug}`}>
                <h6 className="text-uppercase text-black m-b0">{name}</h6>
                <p className="m-a0">{designation}</p>
              </Link>
              <div className="dlab-divider bg-white mt-2 mb-2"></div>
              <ul className="list-inline m-a0">
                <li>
                  <a href={github} className="text-white">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href={linkedin} className="text-white">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
               
                <li>
                  <a href={twitter} className="text-white">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function TeamDetail() {
  const { slug } = useParams()
  const teamMember = teamBlog[slug]

  if (!teamMember) {
    return <h2>Not Found</h2>
  }

  const { name, image, role, email, desc } = teamMember

  return (
    <div className={styles.flex_container}>
      <div className={styles.flex_item_right}>
        <img
          src={image}
          alt={name}
          style={{
            height: '300px',
            width: '300px',
          }}
        />
      </div>
      <div className={styles.flex_item_left}>
        <h2>{name}</h2>
        <h6>{role}</h6>
        <h6>{email}</h6>
        <p>{desc}</p>
      </div>
    </div>
  )
}

class Index3 extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          {/* <!-- contact area --> */}
          <div className="content-block">
            <div
              className="section-full content-inner-2 bg-img-fix"
              style={{ backgroundImage: 'url(' + bg13 + ')' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center section-head">
                    <h4 className="text-gray-dark m-b10">Our Team</h4>
                    <p className="m-b0">
                      Cybersolx is a group of young innovators. We create
                      innovative and creative solutions for the most difficult
                      client problems. We have the ability to investigate and
                      study new technologies in order to build the most
                      appropriate solutions, such as Blockchain, Android, Web,
                      and Cloud.
                    </p>
                  </div>
                </div>
                <Outlet />
              </div>
            </div>
            {/* <!-- About Quotes End --> */}
          </div>
          {/* <!-- contact area END --> */}
        </div>
      </>
    )
  }
}
export default Index3
