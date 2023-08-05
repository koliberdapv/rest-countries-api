import styled from 'styled-components';

const SingleCountry = ({ name, population, capital, flags }) => {
	// console.log(flags);
	return (
		<Wrapper>
			<div className="img-container">
				<img
					src={flags.png}
					alt={flags.alt}
				/>
			</div>
			<div className="info">
				<h4>{name}</h4>
				<p>population: {population}</p>
				<p>capital: {capital}</p>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: grid;
	grid-template-rows: 50% 50%;
	grid-template-columns: auto;
	background-color: var(--clr-elements);
	border-radius: var(--borderRadius);
	overflow: hidden;
	text-transform: capitalize;
	.img-container {
		img {
			height: 100%;
		}
	}
	.info {
		display: grid;
		align-items: center;
		justify-content: flex-start;
		padding: 2rem;
		p {
		}
	}
`;

export default SingleCountry;
