import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterList({ characters }) {
	const renderCharacter = characters.map((char) => {
		return (
			<li key={char.id}>
				<Link className="charLink" to={`/character/${char.id}`}>
					<CharacterCard char={char} />
				</Link>
			</li>
		);
	});
	return (
		<>
			<section>
				<ul className="charSection">{renderCharacter}</ul>
			</section>
		</>
	);
}
CharacterList.propTypes = {
	characters: PropTypes.array,
};
export default CharacterList;
