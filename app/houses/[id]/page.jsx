import "./_house.scss";
import houses from "../houses_data";
import Image from "next/image";
import { BsCheck, BsX } from "react-icons/bs";
import HouseContactUs from "@/app/components/contact_us/house_contact_us";

const House = ({params}) => {

	const house_id = Number(params.id);
	const house = houses.find((house) => house.id === house_id);

	return (
		<main className="house_container container-sm p-3">
			<div className="row row-cols-1 justify-content-center align-items-center row-gap-5">
				<div className="col">
					<div className="image_border w-100 overflow-hidden">
						<Image src={house.image} alt={house.city} width={1366} height={766} className="w-100 h-100 object-fit-contain"/>
					</div>
				</div>
				<div className="house_info col">
					<div className="row row-cols-1 row-cols-md-2 row-gap-5 row-gap-md-0">
						<div className="col d-md-flex flex-column justify-content-start align-items-center">
						<p><strong>Country:</strong> {house.country}</p>
						<p><strong>City:</strong> {house.city}</p>
						<p><strong>Region:</strong> {house.region}</p>
						<p><strong>Area:</strong> {house.area}</p>
						<p><strong>Rooms:</strong> {house.rooms}</p>
						<p><strong>Price:</strong> {house.price}$</p>
						</div>
						<div className="col d-md-flex flex-column justify-content-start align-items-center">
							<h3 className="">Facilities:</h3>
						<ul>
							<li>{house.facilities.pool === true ? <BsCheck /> : <BsX />}Pool</li>
							<li>{house.facilities.jacuzzi=== true ? <BsCheck /> : <BsX />}Jacuzzy</li>
							<li>{house.facilities.warehouse === true ? <BsCheck /> : <BsX />}Warehouse</li>
							<li>{house.facilities.garden === true ? <BsCheck /> : <BsX />}Garden</li>
							<li>{house.facilities.parking === true ? <BsCheck /> : <BsX />}Parking</li>
							<li>{house.facilities.furnished === true ? <BsCheck /> : <BsX />}Furnished</li>
						</ul>
						</div>
					</div>
				</div>
			</div>

			<HouseContactUs />
		</main>
	);
};

export default House;