import gryf from '../images/gryffindor.png';
import huff from '../images/hufflepuff.png';
import rave from '../images/ravenclaw.png';
import slyt from '../images/slythering.png';
import PropTypes from 'prop-types';
function House({ findResult }) {
	console.log(findResult.house);
	if (findResult.house === 'Gryffindor') {
		return (
			<div className="houseDiv">
				<p className="houseDiv">{findResult.house}</p>
				<img
					className="houseImg houseDiv"
					src={gryf}
					alt={findResult.house}
				/>
			</div>
		);
	} else if (findResult.house === 'Hufflepuff') {
		return (
			<div className="houseDiv">
				<p className="houseDiv">{findResult.house}</p>
				<img
					className="houseImg houseDiv"
					src={huff}
					alt={findResult.house}
				/>
			</div>
		);
	} else if (findResult.house === 'Ravenclaw') {
		return (
			<div className="houseDiv">
				<p className="houseDiv">{findResult.house}</p>
				<img
					className="houseImg houseDiv"
					src={rave}
					alt={findResult.house}
				/>
			</div>
		);
	} else if (findResult.house === 'Slytherin') {
		return (
			<div className="houseDiv">
				<p className="houseDiv">{findResult.house}</p>
				<img
					className="houseImg houseDiv"
					src={slyt}
					alt={findResult.house}
				/>
			</div>
		);
	}

	return <div>House</div>;
}
House.propTypes = {
	findResult: PropTypes.object,
};
export default House;
