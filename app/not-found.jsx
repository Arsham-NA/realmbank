"use client";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

const NotFound = () => {

	const router = useRouter();

	return (
		<main className="w-100 vh-5 d-flex flex-column justify-content-center align-items-center" style={{marginTop: "70px", height: "70vh"}}>
			<h1 className="mb-5">Page Not Found :(</h1>
			<button className="btn text-white rounded-3 d-flex justify-content-center align-items-center column-gap-3 px-3 py-2" style={{backgroundColor: "#ba0000"}} onClick={() => router.push("/")}>
				<span style={{fontSize: "1.2rem"}}>Back To Home</span>
				<FaAngleRight style={{width: "18px", height: "18px"}}/>
			</button>
		</main>
	);
};

export default NotFound;