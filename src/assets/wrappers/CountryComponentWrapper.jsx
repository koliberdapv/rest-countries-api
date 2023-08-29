import styled from 'styled-components';

const Wrapper = styled.main`
	grid-template-columns: 1fr;
	font-size: var(--fs-details-normal);
	gap: 3rem;
	.content {
		grid-template-columns: 1fr;
		padding: 2rem 0;
		gap: 2rem;
	}
	.img-container {
		width: 100%;
		aspect-ratio: 16/9;
		img {
			width: 100%;
			box-shadow: var(--shadow-3);
		}
	}
	.info {
		flex-direction: column;
		gap: 1.5rem;
	}
	.sub-info {
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}
	h4 {
		text-wrap: balance;
	}

	.border-countries {
		flex-wrap: wrap;
		gap: 0.75rem;
	}
	.btn {
		background-color: var(--clr-elements);
		padding: 0.75rem 1.75rem;
		border-radius: 5px;
		box-shadow: var(--shadow-2);
		text-transform: capitalize;
	}
	.back {
		gap: 0.5rem;
		margin-top: 2rem;
		justify-self: left;
		padding: 0.5rem 2.5rem;
		svg {
			height: 1.5rem;
			width: 1.5rem;
		}
	}
	@media screen and (width > 700px) {
		.content {
			justify-content: space-between;
			grid-template-columns: repeat(2, 45%);
			gap: 0;
		}
		.img-container {
			max-width: 40vw;
		}
		.sub-info {
			grid-template-columns: repeat(2, auto);
			justify-content: space-between;
		}
		.border-countries {
			font-size: var(--fs-details-normal);
		}
	}
	.border-btn {
		font-size: var(--fs-homepage-normal);
		padding: 0.5rem 1.75rem;
		font-weight: var(--fw-300);
	}
	.title {
		font-weight: var(--fw-800);
	}
`;

export default Wrapper;
