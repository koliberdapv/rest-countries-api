import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	select {
		height: 4rem;
		background-color: var(--clr-elements);
		border-radius: var(--borderRadius);
		border: none;
		color: var(--clr-text);
		box-shadow: var(--shadow-2);
		appearance: none;
		padding: 0 2rem;
		min-width: 14rem;
	}
	.custom-arrow {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		aspect-ratio: 1/1;
		font-size: 1.5rem;
		pointer-events: none;
	}
	.title {
		display: none;
	}
`;

export default Wrapper;
