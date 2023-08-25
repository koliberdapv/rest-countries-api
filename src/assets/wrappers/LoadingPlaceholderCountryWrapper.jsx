import styled from 'styled-components';

const Wrapper = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	font-size: var(--fs-details-normal);
	.content {
		display: grid;
		grid-template-columns: 1fr;
		padding: 2rem 0;
		gap: 2rem;
	}
	.img-container {
		width: 100%;

		aspect-ratio: 16/9;
	}
	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
	}
	.sub-info {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		justify-content: space-between;
	}
	h4 {
		text-wrap: balance;
	}

	.border-countries {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.btn {
		background-color: var(--clr-elements);
		padding: 0.75rem 1.75rem;
		border-radius: 5px;
		box-shadow: var(--shadow-2);
		text-transform: capitalize;
	}
	.back {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		margin-top: 2rem;
	}
	.border-countries {
		font-size: 1.15rem;
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
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			justify-content: space-between;
		}
		.border-countries {
			font-size: var(--fs-details-normal);
		}
	}
	.skeleton {
		animation: skeleton-loading 1s linear infinite alternate;
		background-color: var(--clr-text);
	}
	@keyframes skeleton-loading {
		0% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.1;
		}
	}
	.skeleton-text {
		width: 100%;
		height: 1rem;
		margin-bottom: 0.25rem;
		border-radius: 0.25rem;
	}
	.skeleton-text:last-child {
		width: 80%;
	}
	.flex {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.header {
		height: 1.75rem;
	}
	.column {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
`;

export default Wrapper;
