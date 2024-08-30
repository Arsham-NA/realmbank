"use client";
import "./_read_more_btn.scss";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

const ReadMoreBtn = ({house_id}) => {

	const router = useRouter();

	return (
		<button type="button" className="read_more_btn" onClick={() => router.push(`/houses/${house_id}`)}>Read More <div className="svg_border"><FaAngleRight /></div></button>
	);
};

export default ReadMoreBtn;