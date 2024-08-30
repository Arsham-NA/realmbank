"use client";
"./_learn_more_btn.scss";
import { useRouter } from "next/navigation";

const LearnMoreBtn = () => {

	const router = useRouter();

	return (
		<button type="button" className="learn_more_btn border-0 py-2 px-3 rounded-pill text-white" onClick={() => router.push("./contact-us")}>Learn More</button>
	);
};

export default LearnMoreBtn;