import styled from 'styled-components';

const Wrapper = styled.main`
	min-height: 100vh;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--clr-text);
	img {
		width: 90vw;
		max-width: 600px;
		display: block;
		margin-bottom: 2rem;
	}
	h3 {
		margin-bottom: 0.5rem;
	}
	p {
		margin-bottom: 0.5rem;
	}
	a {
		color: var(--clr-text);
		text-decoration: underline;
		text-transform: capitalize;
	}
`;

export default Wrapper;
