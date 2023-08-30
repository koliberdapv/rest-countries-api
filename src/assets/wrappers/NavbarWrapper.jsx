import styled from 'styled-components';
const Wrapper = styled.nav`
	background-color: var(--clr-elements);
	box-shadow: var(--shadow-2);
	min-height: 5rem;
	h4 {
		text-transform: none;
		font-weight: var(--fw-800);
	}
	@media screen and (width < 500px) {
		h4 {
			font-size: 1rem;
		}
	}
`;

export default Wrapper;
