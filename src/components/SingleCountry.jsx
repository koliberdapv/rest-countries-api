import { Link } from 'react-router-dom';
import formatPopulation from '../utils/formatPopulation';
import Wrapper from '../assets/wrappers/SingleCountryWrapper';

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
						<p>
							<span>population:</span> {formatPopulation(population)}
						</p>
						<p>
							<span>region:</span> {region}
						</p>
						<p>
							<span>capital:</span> {capital}
						</p>
					</div>
				</div>
			</Link>
		</Wrapper>
	);
};

export default SingleCountry;
