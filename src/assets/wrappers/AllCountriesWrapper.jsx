import styled from 'styled-components';
const Wrapper = styled.main`
	display: grid;
	grid-template-columns: auto;
	row-gap: 3rem;
	justify-content: center;

	@media screen and (width > 725px) {
		grid-template-columns: repeat(2, auto);
		justify-content: space-between;
	}
	@media screen and (width > 1120px) {
		grid-template-columns: repeat(3, auto);
	}
	@media screen and (width > 1450px) {
		grid-template-columns: repeat(4, auto);
	}
`;

export default Wrapper;
