import styled from 'styled-components';
const Wrapper = styled.nav`
	background-color: var(--clr-elements);
	box-shadow: var(--shadow-2);
	min-height: 5rem;
	display: flex;
	align-items: center;
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
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
