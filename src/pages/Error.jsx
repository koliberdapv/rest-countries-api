import { Link } from 'react-router-dom';
import not_found from '../assets/not_found.svg';
import not_found_white from '../assets/not_found_white.svg';
import styled from 'styled-components';

const Error = () => {
	return (
		<Wrapper>
			<div>
				<img
					src={not_found}
					alt="not fount"
				/>
				<h3>Ohh! Page not found</h3>
				<p>We can't seem to find the page you are looking for</p>
				<Link to="/">Back home</Link>
			</div>
		</Wrapper>
	);
};

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

export default Error;
