import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import House from './House';

function CharacterDetail({ characters }) {
	const defaultImg =
		'https://logowik.com/content/uploads/images/harry-potter.jpg';
	//La constante id tiene que tener el mismo nombre que me devuelve el useParams
	const { id } = useParams();
	const findResult = characters.find((char) => char.id === id);
	const condition = () => {
		if (findResult) {
			const alternateNames = findResult.alternate.map((char, i) => (
				<li key={i}>
					<span className="charResult">{char}</span>
				</li>
			));
			if (alternateNames.length > 0) {
				return (
					<div>
						<p>Alternative names:</p>
						<ul>{alternateNames}</ul>
					</div>
				);
			} else {
				return '';
			}
		}
	};

	return (
		<>
			{findResult ? (
				<article className="charDetail">
					<Link className="backButton" to="/">
						Back
					</Link>
					<img
						className="detailImg"
						src={
							findResult.image !== ''
								? findResult.image
								: defaultImg
						}
						alt={findResult.name}
					/>
					<p>
						Name:{' '}
						<span className="charResult">{findResult.name}</span>
					</p>
					<p>
						House:{' '}
						<span className="charResult">
							<House findResult={findResult} />
						</span>
					</p>
					<p>
						Dead or alive?{' '}
						<span className="charResult">
							{findResult.alive ? 'Alive' : 'Dead'}
						</span>
					</p>
					<p>
						Gender:{' '}
						<span className="charResult">{findResult.gender}</span>
					</p>
					<p>
						Specie:{' '}
						<span className="charResult">{findResult.species}</span>
					</p>
					<div>{condition()}</div>
				</article>
			) : (
				<>
					<Link className="backButton" to="/">
						Back
					</Link>
					<h4 className="detailError">
						The character you are looking for does not exist in our
						page :/
					</h4>
				</>
			)}
		</>
	);
}
CharacterDetail.propTypes = {
	characters: PropTypes.array,
	setHouse: PropTypes.func,
};
export default CharacterDetail;
