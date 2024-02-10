const callToApi = (selectValue) => {
	return fetch(
		`https://hp-api.onrender.com/api/characters/house/${selectValue}`
	)
		.then((response) => response.json())
		.then((data) => {
			const result = data.map((char) => {
				return {
					name: char.name,
					id: char.id,
					species: char.species,
					image: char.image,
					house: char.house,
					alive: char.alive,
					gender: char.gender,
					alternate: char.alternate_names,
				};
			});
			result.sort((a, b) => a.name.localeCompare(b.name));
			return result;
		});
};

export default callToApi;
