import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

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

class EventSlider extends Component{	
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 1500,
			navSpeed: 1500,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<Slider className="img-carousel-content owl-carousel owl-none" {...settings}>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>UI/UX Solutions</h5>
							<p className="m-b0">Your clients will acknowledge you if you have an excellent front end. You can count on our staff to generate a good first impression for your company.</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={uiux} alt="UI/UX Solutions" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={web} alt="Web App & API's  Solutions" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Web App & API's  Solutions</h5>
							<p className="m-b0">Having strong backend API only improves the operation of your website; Our staff is experienced in developing Cloud-based SaaS APIs.</p>
						</div>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Mobile App Developent Solutions</h5>
							<p className="m-b0">We also provide end-to-end mobile application development, for which our mobile development team employs the most cutting-edge, efficient, and effective technology available.</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={app} alt="Mobile App Developent Solutions" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={seo} alt="SEO/SMO Solutions" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>SEO/SMO Solutions</h5>
							<p className="m-b0">Do you want your website to be found on the first page of any search engine? You've arrived to the correct location.
</p>
						</div>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Database Administration</h5>
							<p className="m-b0">You need a powerful database to maintain your structured data intact with your projects, and our Database staff is available 24 hours a day, 7 days a week with the best option.</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={database} alt="Database Administration" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={project} alt="Project Maintenance" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Project Maintenance</h5>
							<p className="m-b0">You may entrust us with any part of project management since we can handle it from start to finish, from finance to accounting.</p>
						</div>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Finance Solutions</h5>
							<p className="m-b0">Financial matters are the most important aspect of any business or project, which is why we have the most experienced finance and accounting professionals on our team.</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={finance} alt="Finance Solutions" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={content} alt="Techinical Content Writing" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>Techinical Content Writing</h5>
							<p className="m-b0">Our first obligation is to write the documentation for your projects. Do you need content for your blog, marketing, website, or other purposes? You've arrived to the correct location.
</p>
						</div>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="item-service-content m-b40">
							<h5>Video Editing</h5>
							<p className="m-b0">Our talent is turning your ideas into digital reality, and we have some of the top video editors on board.</p>
						</div>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="icon-bx-md radius border-1 m-t40 m-b20"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={editing} alt="Video Editing" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2"><span className="font-weight-500">Read More</span></Link>
					</div>
				</div>
				<div className="item p-1">
					<div className="box-item-service text-center">
						<div className="icon-bx-md radius border-1 m-b20 m-t0"> 
							<span className="icon-cell"><img style={{
								display: "block",
								marginLeft: "auto",
								marginRight: "auto"
							}} src={animation} alt="After Effects Animations / Illustrations" /></span> 
						</div>
						<Link to={'/services'} className="site-button outline outline-2 m-b40"><span className="font-weight-500">Read More</span></Link>
						<div className="clearfix">
							<span className="text-primary round-center"></span>
						</div>
						<div className="item-service-content m-t40">
							<h5>After Effects Animations / Illustrations</h5>
							<p className="m-b0">Got a brilliant idea? Let our After Effects team visualize it and make it creative.</p>
						</div>
					</div>
				</div>
				
			</Slider>			
		)
		
	}
	
}

export default EventSlider;