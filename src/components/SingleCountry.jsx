import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatPopulation from '../utils/formatPopulation';

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

const Wrapper = styled.article`
	box-shadow: var(--shadow-2);
	a {
		display: grid;
		grid-template-rows: auto 1fr;
		align-content: space-between;
		height: 100%;
		background-color: var(--clr-elements);
		border-radius: var(--borderRadius);
		overflow: hidden;
		text-transform: capitalize;
		max-width: 300px;
	}
	h5 {
		margin-bottom: 1rem;
		text-wrap: balance;
	}
	.img-container {
		width: 300px;
		aspect-ratio: 16/9;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.info {
		display: grid;
		grid-template-rows: auto auto;
		align-content: space-between;
		align-content: flex-start;
		padding: 2rem;
	}
	.stats {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	span {
		font-weight: var(--fw-600);
	}
`;

export default SingleCountry;
