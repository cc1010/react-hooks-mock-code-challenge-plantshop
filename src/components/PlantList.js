import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ list }) {
	console.log("card", list);
	return (
		<ul className="cards">
			{list.map((item) => (
				<PlantCard key={item.id} item={item} />
			))}
		</ul>
	);
}

export default PlantList;
