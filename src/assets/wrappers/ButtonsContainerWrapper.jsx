import styled from 'styled-components';

const Wrapper = styled.section`
	height: 6rem;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.5rem;
	.btn-container {
		border-radius: var(--borderRadius);
		display: flex;
		gap: 0.5rem;
	}
	.pageBtn {
		border-color: transparent;
		width: 1.75rem;
		aspect-ratio: 1/1;
		transition: var(--transition);
		border-radius: var(--borderRadius);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.active {
		background: var(--clr-elements);
		color: var(--white);
		box-shadow: var(--shadow-2);
	}
	.prev-btn,
	.next-btn,
	.last-btn,
	.first-btn {
		padding: 0.5rem;
		text-transform: capitalize;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		cursor: pointer;
		transition: var(--transition);
		border-radius: var(--borderRadius);
	}
	.prev-btn:hover,
	.first-btn:hover,
	.last-btn:hover,
	.next-btn:hover,
	.pageBtn:hover {
		background: var(--clr-elements);
	}

	@media screen and (width < 700px) {
		.last-btn,
		.first-btn {
			display: none;
		}
	}
`;

export default Wrapper;
