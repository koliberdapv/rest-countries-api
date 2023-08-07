import styled from 'styled-components';

const SingleCountry = ({ name, population, capital, flags, region }) => {
	return (
		<Wrapper>
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
						<span>population:</span> {population}
					</p>
					<p>
						<span>region:</span> {region}
					</p>
					<p>
						<span>capital:</span> {capital}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: grid;
	grid-template-rows: auto 1fr;
	background-color: var(--clr-elements);
	border-radius: var(--borderRadius);
	overflow: hidden;
	text-transform: capitalize;
	max-width: 280px;
	h5 {
		margin-bottom: 1rem;
	}
	.img-container {
		width: 280px;
		aspect-ratio: 16/9;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.info {
		display: grid;
		align-items: flex-end;
		justify-content: flex-start;
		padding: 2rem;
		p {
		}
	}
	.stats {
	}
	.bold {
	}
	span {
		font-weight: var(--fw-600);
	}
`;

export default SingleCountry;
