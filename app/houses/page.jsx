import Image from "next/image";
import "./_houses.scss";
import houses from "./houses_data";
import ReadMoreBtn from "./read_more_btn/read_more_btn";

const Houses = () => {

	return (
		<main className="houses_page p-3">
			<h1 className="text-center">Realmbank recent sale</h1>
			<div className="house_container container-md mt-4">
			{
				houses.map((house) => {
					return (
						<div key={house.id} className="mb-5 p-5 border-bottom">
							<div className="image_border w-100 overflow-hidden rounded-1">
								<Image src={house.image} alt={house.city} width={1366} height={766} className="w-100 h-100 object-fit-cover" />
							</div>
							<div className="house_info mt-5">
								<p>Country: {house.country}</p>
								<p>City: {house.city}</p>
								<p>Region: {house.region}</p>
								<p>Area: {house.area}</p>
								<p>Rooms: {house.rooms}</p>
								<p>Price: {house.price}$</p>
							</div>
							<ReadMoreBtn house_id={house.id}/>
						</div>
					)
				})
			}
			</div>
		</main>
	);
};

export default Houses;