import React, { useEffect, useState } from "react";

function Search({ searchFilter }) {
	// const [formData, setFormData] = useState("");

	// function handleSearch(e) {
	// 	setFormData(e.target.value);
	// }

	return (
		<div className="searchbar">
			<label htmlFor="search">Search Plants:</label>
			<input
				type="text"
				id="search"
				// value={formData}
				placeholder="Type a name to search..."
				onChange={(e) => searchFilter(e.target.value)}
			/>
		</div>
	);
}

export default Search;
