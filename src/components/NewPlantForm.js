import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
	const [formData, setFormData] = useState({ name: "", image: "", price: 0 });
	function handleForm(e) {
		const key = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
		console.log({ [key]: value });
	}
	function handleSubmit(e) {
		e.preventDefault();
		addNewPlant(formData);
	}
	return (
		<div className="new-plant-form">
			<h2>New Plant</h2>
			<form>
				<input
					type="text"
					name="name"
					placeholder="Plant name"
					value={formData.name}
					onChange={handleForm}
				/>
				<input
					type="text"
					name="image"
					placeholder="Image URL"
					value={formData.image}
					onChange={handleForm}
				/>
				<input
					type="number"
					name="price"
					step="0.01"
					placeholder="Price"
					value={formData.price}
					onChange={handleForm}
				/>
				<button type="submit" onClick={handleSubmit}>
					Add Plant
				</button>
			</form>
		</div>
	);
}

export default NewPlantForm;
