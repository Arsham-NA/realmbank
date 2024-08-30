"use client";
import "./_our_services_btn.scss";
import { useRouter } from "next/navigation";

const OurServicesBtn = () => {

	const router = useRouter();

	return (
		<button type="button" className="our_services_btn border-0 py-2 px-3 rounded-pill text-white rounded-pill text-white" onClick={() => router.push("/houses")}>Our Servicess</button>
	);
};

export default OurServicesBtn;