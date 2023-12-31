import styled from 'styled-components';

const Wrapper = styled.article`
	box-shadow: var(--shadow-2);
	border-radius: var(--borderRadius);
	a {
		grid-template-rows: auto 1fr;
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
		grid-template-rows: auto auto;
		align-content: flex-start;
		padding: 2rem;
	}
	.stats {
		gap: 0.75rem;
	}
`;
export default Wrapper;
