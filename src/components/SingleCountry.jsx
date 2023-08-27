import { Link } from 'react-router-dom';
import formatPopulation from '../utils/formatPopulation';
import Wrapper from '../assets/wrappers/SingleCountryWrapper';
import { CardCategory } from './';

const SingleCountry = ({ name, population, capital, flags, region, code }) => {
	return (
		<Wrapper>
			<Link to={`/name/${code}`}>
				<div className="img-container">
					<img
						src={flags.png}
						alt={flags.alt}
					/>
				</div>
				<div className="info">
					<h5>{name}</h5>
					<div className="stats">
						<CardCategory
							category="population"
							value={formatPopulation(population)}
							format="string"
						/>
						<CardCategory
							category="region"
							value={region}
							format="string"
						/>
						<CardCategory
							category="capital"
							value={capital}
							format="string"
						/>
					</div>
				</div>
			</Link>
		</Wrapper>
	);
};

export default SingleCountry;
