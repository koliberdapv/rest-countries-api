import styled from 'styled-components';

const Wrapper = styled.section`
	form {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 0;
	}
	@media screen and (width < 700px) {
		form {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.5rem;
		}
	}
	.filters select,
	.search {
		height: 4rem;
		background-color: var(--clr-elements);
		border-radius: var(--borderRadius);
		border: none;
		color: var(--clr-text);
		box-shadow: var(--shadow-2);
		appearance: none;
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
		min-width: 100%;
	}
	.search input {
		color: var(--clr-text);
		border: none;
		background-color: var(--clr-elements);
		flex-basis: 100%;
		height: 100%;
	}
	.lens {
		height: 100%;
		aspect-ratio: 1/1;
		display: grid;
		place-items: center;
	}
	.close-btn {
		height: 100%;
		aspect-ratio: 1/1;
		margin-left: auto;
		visibility: hidden;
	}
	.visible {
		visibility: visible;
	}
	.lens svg,
	.close-btn svg {
		width: 40%;
		height: 40%;
	}
	.filters select {
		padding: 0 2rem;
		min-width: 14rem;
	}
	@media screen and (width > 700px) {
		.search {
			min-width: 25rem;
		}
	}
	.search input::placeholder {
		color: var(--clr-text);
	}
	select:focus,
	input:focus {
		outline: transparent;
	}
	.filters {
		position: relative;
	}
	.custom-arrow {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		aspect-ratio: 1/1;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		pointer-events: none;
		justify-content: center;
	}
	.title {
		display: none;
	}
`;

export default Wrapper;
