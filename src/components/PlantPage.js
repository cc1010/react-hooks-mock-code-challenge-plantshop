import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
	const [list, setList] = useState([]);
	const [searchList, setSearchList] = useState("");
	const [selected, setSelected] = useState("");
	const [formData, setFormData] = useState("");
	// GET
	useEffect(() => {
		fetch("http://localhost:6001/plants")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setList(data);
			});
	}, []);
	// POST
	function addNewPlant(e) {
		console.log(e);
		fetch("http://localhost:6001/plants", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(e),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setList([...list, e]);
			});
	}
	// DELETE
	function deletePlant(id) {
		console.log(id);
		fetch(`http://localhost:6001/plants/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}
	// SEARCH

	function searchFilter(e) {
		setFormData(e);
	}
	console.log(formData);
	const renderSearch = list.filter(
		(item) =>
			formData === "" ||
			item.name.toLowerCase().includes(formData.toLowerCase())
	);
	return (
		<main>
			<NewPlantForm addNewPlant={addNewPlant} />
			<Search searchFilter={searchFilter} />
			<PlantList list={renderSearch} />
		</main>
	);
}

export default PlantPage;
