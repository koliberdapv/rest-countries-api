import styled from 'styled-components';

const Wrapper = styled.div`
	height: 4rem;
	background-color: var(--clr-elements);
	border-radius: var(--borderRadius);
	border: none;
	color: var(--clr-text);
	box-shadow: var(--shadow-2);
	appearance: none;
	padding: 0 0.5rem;
	min-width: 100%;
	@media screen and (width > 700px) {
		min-width: 25rem;
	}
	input {
		color: var(--clr-text);
		border: none;
		background-color: var(--clr-elements) !important;
		flex-basis: 100%;
		height: 100%;
	}
	input::placeholder {
		color: var(--clr-text);
	}
	input:focus {
		outline: transparent;
	}
	.lens {
		height: 100%;
		aspect-ratio: 1/1;
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
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-background-clip: text;
		-webkit-text-fill-color: var(--clr-text);
	}
`;

export default Wrapper;
