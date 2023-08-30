import styled from 'styled-components';

const Wrapper = styled.article`
	box-shadow: var(--shadow-2);
	border-radius: var(--borderRadius);
	max-width: 300px;
	.card {
		grid-template-rows: auto 1fr;
		height: 100%;
		background-color: var(--clr-elements);
		border-radius: var(--borderRadius);
		overflow: hidden;
		text-transform: capitalize;
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
		padding: 2rem;
	}
	.stats {
		gap: 0.75rem;
	}
	span {
		font-weight: var(--fw-600);
	}
	.skeleton {
		animation: skeleton-loading 600ms linear infinite alternate;
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
		height: 0.85rem;
		margin-bottom: 0.25rem;
		border-radius: 0.25rem;
	}
	.title {
		width: 7rem;
	}
	.flex-row {
		gap: 0.75rem;
	}
	.header {
		height: 1.25rem;
		width: 9rem;
	}
`;

export default Wrapper;
