import PropTypes from 'prop-types';

function CharacterCard({ char }) {
	const defaultImg =
		'https://logowik.com/content/uploads/images/harry-potter.jpg';
	return (
		<>
			<article>
				<img
					className="charImg"
					src={char.image !== '' ? char.image : defaultImg}
					alt={char.name}
				/>
				<h4>{char.name}</h4>
				<p>{char.species}</p>
			</article>
		</>
	);
}
CharacterCard.propTypes = {
	char: PropTypes.object,
};
export default CharacterCard;
