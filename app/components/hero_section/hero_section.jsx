"use client";
import "./_hero_section.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

const HeroSection = () => {

	return (
		<section className="hero_section w-100 mx-auto p-3">
			<div className="titles">
				<h1>THIS HOME IS FOR YOU!</h1>
				<p className="text-white">we offer the best for you :)</p>
			</div>
			<div className="filter_container container rounded-4 p-4">
				<div className="row gy-4">
					<div className="col-6 col-sm d-flex justify-content-center align-items-center">
						<input type="search" className="search_input form-control" placeholder="Enter the keyword..."/>
					</div>
					<div className="col-6 col-sm d-flex justify-content-center align-items-center">
						<div className="dropdown">
							<button className="dropdown_btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Plot Types</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">residential</a></li>
								<li><a className="dropdown-item" href="#">commerical</a></li>
								<li><a className="dropdown-item" href="#">Farm</a></li>
								<li><a className="dropdown-item" href="#">villa</a></li>
							</ul>
						</div>
					</div>
					<div className="col-6 col-sm d-flex justify-content-center align-items-center">
						<div className="dropdown">
							<button className="dropdown_btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">cities</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Birmingham</a></li>
								<li><a className="dropdown-item" href="#">Bristol</a></li>
								<li><a className="dropdown-item" href="#">Edinburgh</a></li>
								<li><a className="dropdown-item" href="#">Glasgow</a></li>
							</ul>
						</div>
					</div>
					<div className="col-6 col-sm d-flex justify-content-center align-items-center">
						<div className="dropdown">
							<button className="dropdown_btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">rooms</button>
							<ul className="dropdown-menu">
								<li className="dropdown-item">1</li>
								<li className="dropdown-item">2</li>
								<li className="dropdown-item">3</li>
								<li className="dropdown-item">4</li>
								<li className="dropdown-item">5</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-sm d-flex justify-content-center align-items-center">
						<button type="button" className="search_btn">Search</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;