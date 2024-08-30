"use client";
import "./_house_contact_us.scss";

const HouseContactUs = () => {

	const handle_submit = (e) => {
		e.preventDefault();
	}

	return (
		<section className="contact_us_page">
			<h1 className="mb-4">Do you want such as this case?</h1>
			<p className="fw-bold fs-4 mb-4">Please fill out the form below. Out collegues will contact you</p>
			<form className="row gy-3 gx-3" onSubmit={handle_submit}>
				<div className="col-12 col-md-4">
					<input type="text" name="full_name" className="form-control" placeholder="Your name..."/>
				</div>
				<div className="col-12 col-md-4">
					<input type="email" name="email" className="form-control" placeholder="Your email..."/>
				</div>
				<div className="col-12 col-md-4">
					<input type="tel" name="phone_number" className="form-control" placeholder="Your number..."/>
				</div>
				<div className="col-12">
					<textarea name="message" id="message" className="form-control" placeholder="Message" rows={7}></textarea>
				</div>
				<div className="col-12 d-flex justify-content-end align-items-center">
					<button type="submit" className="submit_btn border-0 py-3 px-5 text-white rounded-3 col-12 col-lg-3">SHATE IT WITH US</button>
				</div>
			</form>
		</section>
	);
};

export default HouseContactUs;