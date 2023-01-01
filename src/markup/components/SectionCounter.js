import { Component} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';

import bg1 from './../../images/background/bg1.jpg';

const iconBlog =[
	{icon: <i className="flaticon-pen" />,	   title: 'Creative', desc: "The organization's creativity is a strong point. Cybersolx is a group of young geeks who are creative, approachable, and decisive."},
	{icon: <i className="flaticon-diamond" />, title: 'Innovative', desc: "Cybersolx is open to new ideas, so if you have one and want to put it into action, you can choose us to help you realize your goal."},
	{icon: <i className="flaticon-devices" />, title: 'Functional', desc: "Cybersolx is a group of people who share a functional expertise and work together to achieve a common goal."},
];

class SectionCounter extends Component{
	render(){
		return(
			<>
				<div className="section-full content-inner-1 overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
					<div className="container">
						<div className="section-head text-white text-center">
							<h2 className="box-title m-tb0 max-w800 m-auto">Amazing things happen to your business when we connect those dots of utility and value<span className="bg-primary"></span></h2>
							
						</div>
					</div>
					<div className="container">
						<div className="row text-white">
							{iconBlog.map((item, index)=> (
								<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
									<div className="icon-bx-wraper bx-style-1 p-a30 center">
										<div className="icon-lg text-white m-b20"> <Link to={"#"} className="icon-cell text-white">{item.icon}</Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
											<p>{item.desc}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="choses-info text-white">
						<Counter />
					</div>
				</div>	
			</>
		)
	}
}
export default SectionCounter;