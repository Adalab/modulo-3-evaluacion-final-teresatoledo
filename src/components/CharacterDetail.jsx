import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterDetail({ characters }) {
	const defaultImg =
		'https://logowik.com/content/uploads/images/harry-potter.jpg';
	//La constante id tiene que tener el mismo nombre que me devuelve el useParams
	const { id } = useParams();
	const findResult = characters.find((char) => char.id === id);
	const alternateNames = findResult.alternate.map((char, i) => (
		<li key={i}>{char}</li>
	));

	return (
		<>
			<article className="charDetail">
				<Link className="backButton" to="/">
					Back
				</Link>
				<img
					src={
						findResult.image !== '' ? findResult.image : defaultImg
					}
					alt={findResult.name}
				/>
				<h4>Name: {findResult.name}</h4>
				<p>House: {findResult.house}</p>
				<p>Dead or alive? {findResult.alive ? 'Alive' : 'Dead'}</p>
				<p>Gender: {findResult.gender}</p>
				<p>Specie: {findResult.species}</p>
				<ul>Alternative names: {alternateNames}</ul>
			</article>
		</>
	);
}
CharacterDetail.propTypes = {
	characters: PropTypes.object,
};
export default CharacterDetail;
