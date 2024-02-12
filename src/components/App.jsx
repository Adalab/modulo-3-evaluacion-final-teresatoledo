import { useEffect, useState } from 'react';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import callToApi from '../services/CallToApi';
import Filters from './Filters';
import { Route, Routes } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
//import { Link, Route, Routes } from 'react-router-dom';

function App() {
	const [characters, setCharacters] = useState([]);
	const [selectValue, setSelectValue] = useState('Gryffindor');
	const [filterCharacter, setFilterCharacter] = useState('');
	const [resultMessage, setResultMessage] = useState(false);
	const [genderValue, setGenderValue] = useState('');
	const filter = characters
		.filter((char) => char.name.toLowerCase().includes(filterCharacter))
		.filter((char) => {
			if (genderValue === '') {
				return true;
			} else {
				return char.gender === genderValue;
			}
		});

	useEffect(() => {
		if (filter.length === 0) {
			setResultMessage(true);
		} else {
			setResultMessage(false);
		}
	}, [filterCharacter, filter]);
	useEffect(() => {
		callToApi(selectValue).then((result) => {
			setCharacters(result);
		});
	}, [selectValue]);
	const handleResetButton = () => {
		setSelectValue('Gryffindor');
		setFilterCharacter('');
		setGenderValue('');
	};

	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Filters
								setFilterCharacter={setFilterCharacter}
								setSelectValue={setSelectValue}
								filterCharacter={filterCharacter}
								handleResetButton={handleResetButton}
								selectValue={selectValue}
								setGenderValue={setGenderValue}
								genderValue={genderValue}
							/>
							{resultMessage && (
								<h2>
									There is no character that matches your
									search
								</h2>
							)}
							<CharacterList characters={filter} />
						</>
					}
				></Route>
				<Route
					path="/character/:id"
					element={<CharacterDetail characters={characters} />}
				/>
			</Routes>
		</>
	);
}

export default App;
