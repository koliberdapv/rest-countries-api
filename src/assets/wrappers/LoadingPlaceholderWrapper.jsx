import styled from 'styled-components';

const Wrapper = styled.article`
	box-shadow: var(--shadow-2);
	border-radius: var(--borderRadius);
	max-width: 300px;
	.link {
		display: grid;
		grid-template-rows: auto 1fr;
		align-content: space-between;
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
	.flex {
		display: flex;
		gap: 0.75rem;
	}
	.header {
		height: 1.25rem;
		width: 9rem;
	}
`;

export default Wrapper;
