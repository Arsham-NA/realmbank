import ContactUsForm from "../components/contact_us/contact_us_form/contact_us_form";
import "./_contact_us.scss";
import { BsTelephoneFill, BsEnvelope } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";


export const metadata = {
	title: "Contact us",
}

const ContactUs = () => {

	return (
		<main className="contact_us_page w-100 d-flex justify-content-center align-items-center">
			<div className="contact_us_body px-4 px-md-4 mx-lg-5">
				<div className="contact_us_container row row-cols-1 row-cols-md-2 overflow-hidden">
					<div className="col p-4 bg-white rounded-3">
						<h3 className="mb-5 fs-4">if you have question about this topic, please Contact Us</h3>
						<ContactUsForm />
					</div>

						{/* contact info */}
					<div className="contact_info col px-4 py-5 d-flex flex-column justify-content-center align-items-start row-gap-5 text-white">
						<h1 className="fs-3">Contact Info</h1>
						<div className="d-flex justify-content-start align-items-center">
							<FaLocationDot />
							<span className="fs-5 ms-3">Esfahan</span>
						</div>
						<div className="d-flex justify-content-start align-items-center">
							<BsEnvelope />
							<span className="fs-5 ms-3">arsham.naghash<br/>@yahoo.com</span>
						</div>
						<div className="d-flex justify-content-start align-items-center">
							<BsTelephoneFill/>
							<span className="fs-5 ms-3">+989335593213</span>
						</div>
					</div>
				</div>

			{/* image */}
			<div className="col-md-6 d-none d-md-flex justify-content-end align-items-center p-0 image_border position-relative"></div>
		</div>
	</main>
	);
};

export default ContactUs;
