import Image from "next/image";
import "./_about_us.scss";
import LearnMoreBtn from "./learn_more_btn/learn_more_btn";

const AboutUs = () => {

	const data = [
		{
			id: 1,
			title: "Realtors",
			description: "You need a trustworthy partner who understands your needs."
		},
		{
			id: 2,
			title: "Buyers",
			description: "Are you buyers or selling? Reliance will partner with you."
		},
		{
			id: 3,
			title: "Lenders",
			description: "Ensuring simple and quick transaaction for everyone."
		},
		{
			id: 4,
			title: "Cyber Security",
			description: "Learn how your money can be stolen and ways to avoid write froud."
		},
	];

	return (
		<main className="about_us_page container px-4">

		<section className="section_1">
			<h1 className="fs-3 fw-bold border-bottom border-2 pb-3 mb-4">How Can We Help?</h1>
			<div className="row row-cols-2 row-cols-md-4 gx-4 gy-5">
				{
					data.map((item) => {
						return (
							<div key={item.id} className="col d-flex flex-column justify-content-between align-items-center text-center" >
								<div className="info d-flex flex-column justify-content-start align-items-center">
									<div className="image_border rounded-circle bg-white mb-4"></div>
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
				<div className="col d-flex justify-content-start align-items-center">
					<h2 className="fw-bold mb-3">Why Choose Us?</h2>
				</div>
		</section>
		</main>
	);
};

export default AboutUs;