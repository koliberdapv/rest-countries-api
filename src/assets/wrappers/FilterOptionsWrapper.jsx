import styled from 'styled-components';

const Wrapper = styled.form`
	padding: 2rem 0;
	@media screen and (width < 700px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1.5rem;
	}
`;

export default Wrapper;
