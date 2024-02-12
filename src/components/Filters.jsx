import PropTypes from 'prop-types';

function Filters({
	setFilterCharacter,
	setSelectValue,
	filterCharacter,
	handleResetButton,
	selectValue,
	setGenderValue,
	genderValue,
}) {
	const handleInput = (event) => {
		setFilterCharacter(event.target.value);
	};
	const handleSelect = (event) => {
		setSelectValue(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	const handleReset = () => {
		handleResetButton();
	};
	const handleGender = (event) => {
		setGenderValue(event.target.value);
	};
	return (
		<>
			<form onSubmit={handleSubmit} className="form">
				<div>
					<label className="label" htmlFor="name">
						Search by character name
					</label>
					<input
						className="input"
						type="text"
						name="name"
						id="name"
						placeholder="Harry Potter"
						onChange={handleInput}
						value={filterCharacter}
					/>
					<label className="label" htmlFor="house">
						Search by house
					</label>
					<select
						className="input"
						name="house"
						id="house"
						onChange={handleSelect}
						value={selectValue}
					>
						<option value="Gryffindor">Gryffindor</option>
						<option value="Slytherin">Slytherin</option>
						<option value="Hufflepuff">Hufflepuff</option>
						<option value="Ravenclaw">Ravenclaw</option>
					</select>
					<label className="label" htmlFor="gender">
						Select the gender
					</label>

					<select
						name="gender"
						id="gender"
						onChange={handleGender}
						value={genderValue}
					>
						<option value="">All</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>

				<button className="resetButton" onClick={handleReset}>
					Reset
				</button>
			</form>
		</>
	);
}
Filters.propTypes = {
	setFilterCharacter: PropTypes.func,
	setSelectValue: PropTypes.func,
	filterCharacter: PropTypes.string,
	handleResetButton: PropTypes.func,
	selectValue: PropTypes.string,
	setGenderValue: PropTypes.func,
	genderValue: PropTypes.string,
};
export default Filters;
