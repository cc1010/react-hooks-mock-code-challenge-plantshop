import React, { useState } from "react";

function PlantCard({ item }) {
	const [toggleStock, setToggleStock] = useState(true);
	function handleToggle() {
		setToggleStock(!toggleStock);
	}
	return (
		<li className="card">
			<img src={item.image} alt={item.name} />
			<h4>{item.name}</h4>
			<p>Price: {item.price}</p>
			{toggleStock ? (
				<button className="primary" onClick={handleToggle}>
					In Stock
				</button>
			) : (
				<button onClick={handleToggle}>Out of Stock</button>
			)}
		</li>
	);
}

export default PlantCard;
