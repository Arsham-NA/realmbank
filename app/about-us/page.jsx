import Image from "next/image";
import "./_about_us.scss";
import LearnMoreBtn from "./learn_more_btn/learn_more_btn";
import OurServicesBtn from "./our_services_btn/our_services_btn";

export const metadata = {
	title: "About us"
}

const AboutUs = () => {

	const data = [
		{
			id: 1,
			title: "Realtors",
			description: "You need a trustworthy partner who understands your needs.",
			image: "/images/about_us/teamwork.svg"
		},
		{
			id: 2,
			title: "Buyers",
			description: "Are you buyers or selling? Reliance will partner with you.",
			image: "/images/about_us/key-lock-protect.svg"
		},
		{
			id: 3,
			title: "Lenders",
			description: "Ensuring simple and quick transaaction for everyone.",
			image: "/images/about_us/lock-protect-security-1.svg"
		},
		{
			id: 4,
			title: "Cyber Security",
			description: "Learn how your money can be stolen and ways to avoid write froud.",
			image: "/images/about_us/lock-protect-security-2.svg"
		},
	];

	return (
		<main className="about_us_page container px-4">

		<section className="section_1 mb-5">
			<h1 className="fs-3 fw-bold border-bottom border-2 pb-3 mb-5">How Can We Help?</h1>
			<div className="row row-cols-2 row-cols-md-4 gx-4 gy-5">
				{
					data.map((item) => {
						return (
							<div key={item.id} className="col d-flex flex-column justify-content-between align-items-center text-center" >
								<div className="info d-flex flex-column justify-content-start align-items-center">
									<Image className="mb-4" src={item.image} alt={item.title} width={80} height={80} />
									<h2 className="fs-4 fw-bold mb-3">{item.title}</h2>
									<p className="text-secondary mb-4">{item.description}</p>
								</div>
								<LearnMoreBtn />
							</div>
						)
					})
				}
			</div>
		</section>

		<section className="section_2 mt-5 row row-cols-1 row-cols-md-2 g-4">
				<div className="col">
					<Image src="/images/about_us/realmbank-support.webp" alt="realmbank-support" width={1280} height={640} className="w-100 h-100 object-fit-cover" />
				</div>
				<div className="col d-flex flex-column justify-content-center align-items-start row-gap-3">
					<h2>Why Choose Us?</h2>
					<p className="text-secondary">Our team works hard to forge and maintain strong relationships with out clents. We recognize rapid economic and technological changes in out world and are driven to stay ahead of the technologu curve to keep our services convenlent for buyers, lenders, and agents.</p>
					<OurServicesBtn />
				</div>
		</section>

		<section className="section_3 mt-5 row row-cols-1 row-cols-md-2 g-4">
			<div className="col order-md-2">
				<Image src="/images/about_us/who-we-are.jpg" alt="realmbank-team" width={2240} height={1260} className="w-100 h-100 object-fit-cover" />
			</div>
			<div className="col d-flex flex-column justify-content-center align-items-start row-gap-3 order-md-1">
			 <h2>Who Are We?</h2>
			 <p className="text-secondary">At Realmbank, we are a dedicated team of real estate professionals committed to helping you find your dream property. With years of experience in the market, we pride ourselves on our deep understanding of the local real estate landscape and our ability to offer personalized solutions tailored to your needs. Whether you're buying, selling, or investing, our mission is to guide you every step of the way, ensuring a seamless and stress-free experience. Trust us to turn your real estate aspirations into reality, with integrity, transparency, and unparalleled service at the heart of everything we do.</p>
			</div>
		</section>

		</main>
	);
};

export default AboutUs;