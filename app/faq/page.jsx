import Link from "next/link";
import "./_faq.scss";
import FaqAccordion from "./faq_accordion/faq_accordion";

export const metadata = {
	title: "FAQ",
}

const Faq = () => {
	return (
		<main className="faq_page w-100 overflow-hidden">

			{/* section_1 */}
			<section className="section_1 d-flex flex-column justify-content-center align-items-start row-gap-4">
				<h1 className="fs-5">The FAQs</h1>
				<h2>Help center</h2>
				<p className="text-secondary">Everything you need to know about the houses and billing.</p>
			</section>

			{/* section_2 */}
			<section className="section_2 bg-white row px-4 gy-2">
				<div className="sup_section col-12 col-md-5 d-flex flex-column justify-content-start align-items-start row-gap-3">
						<h2 className="fs-4">Support</h2>
						<h3 className="fs-1">FAQs</h3>
						<p className="text-secondary">
							Everything you need to know about the houses and billing. Cant find the answer youre looking for? Please <Link href={"/contact-us"}>chat to our friendly team</Link>.
						</p>
					</div>
					<div className="col-12 col-md-7 px-4">
						<FaqAccordion />
					</div>
			</section>

			{/* section_3 */}
			<section className="section_3 container bg-white mt-5 rounded-3 p-5">
				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col">
						<p className="fs-4 fw-bold">Join 2,000+ subscribers</p>
						<p className="text-secondary">Stay in the loop with everything you need to know.</p>
					</div>
					<div className="col">
						<form className="col-12 row mb-4 gx-3 gy-4">
							<div className="col-12 col-sm-8">
								<input type="email" className="form-control py-3" placeholder="Enter your email" />
							</div>
							<div className="col-12 col-sm-4">
								<button className="submit_btn w-100 rounded-2 py-3">Subscribe</button>
							</div>
						</form>
						<div className="w-100 text-secondary text-center">We care about data in out <Link href={"/contact-us"}>privacy policy</Link></div>
					</div>
				</div>
			</section>

		</main>
	);
};

export default Faq;