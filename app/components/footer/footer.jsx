import Link from "next/link";
import "./_footer.scss";
import { BsFacebook, BsInstagram, BsLinkedin, BsSearch, BsTwitter } from "react-icons/bs";
import FooterModal from "./footer_modal/footer_modal";

const Footer = () => {
	return (
		<footer className="footer w-100">
			<div className="section_top row row-gap-3">
				<h1 className="col-12 col-lg-5 text-center mb-0">Realmbank</h1>
				<div className="col-12 col-lg-7 d-md-flex justify-content-md-center align-items-md-center">

					{/* mobile */}
					<ul className="footer_links d-md-none row row-cols-2 m-0 p-0">
						<div className="col d-flex flex-column justify-content-center align-items-center row-gap-4">
							<li><Link href={"/"}>Main page</Link></li>
							<li><Link href={"/houses"}>Houses</Link></li>
							<li><Link href={"users"}>users</Link></li>
						</div>
						<div className="col d-flex flex-column justify-content-center align-items-center row-gap-4">
							<li><Link href={"about-us"}>About us</Link></li>
							<li><Link href={"contact-us"}>contact us</Link></li>
							<li><Link href={"faq"}>FAQ</Link></li>
						</div>
					</ul>

					{/* desktop */}
					<ul className="footer_links d-none d-md-flex justify-content-center align-items-center column-gap-4 m-0 p-0">
							<li><Link href={"/"}>Main page</Link></li>
							<li><Link href={"/houses"}>Houses</Link></li>
							<li><Link href={"users"}>users</Link></li>
							<li><Link href={"about-us"}>About us</Link></li>
							<li><Link href={"contact-us"}>contact us</Link></li>
							<li><Link href={"faq"}>FAQ</Link></li>
					</ul>


				</div>
				<div className="mt-5 w-100 text-center">
					<h3 className="w-100">Follow us</h3>
					<div className="social_links">
						<FooterModal />
					</div>
				</div>
			</div>
			<div className="section_bot row">
				<div className="search_container col-12 col-sm-8 col-lg-5 mx-auto">
					<input type="search" className="search_input" placeholder="Search..."/>
					<button type="button" className="btn_search"><BsSearch /></button>
				</div>
				<h4 className="text-center mt-4">All rights reseved</h4>
			</div>
		</footer>
	);
};

export default Footer;