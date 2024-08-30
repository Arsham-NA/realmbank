import "./_top_consultants.scss";
import axios from "axios";
import Image from "next/image";


const Top_Consultants = async() => {
	
	const fetch_data = async() => {
		const response = await axios.get("https://reqres.in/api/users?page=1")
		return response.data;
	}
	const response = await fetch_data();
	const data = response.data.slice(0, 3);

	return (
		<div className="top_consultants">
			<h2 className="text-center fs-1">Our top consultants</h2>
			<div className="consultants_container row row-cols-1 row-cols-sm-3">
				{
					data.map((consultant) => {
						return (
							<div key={consultant.id} className="consultant text-center">
								<Image src={consultant.avatar} alt="consultant_avatar" width={120} height={120} className="consultant_img mb-3"/>
								<p className="fs-5">{consultant.first_name} {consultant.last_name}</p>
								<p>{consultant.email}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
};

export default Top_Consultants;