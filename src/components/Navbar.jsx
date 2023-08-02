import styled from 'styled-components';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';

const Navbar = () => {
	return (
		<Wrapper>
			<div className="container">
				<div className="navbar">
					<h4>Where in the world?</h4>
					<button className="dark-mode">
						<BsMoon />
						{/* <BsMoonFill /> */}
						<span>Dark Mode</span>
					</button>
				</div>
			</div>
		</Wrapper>
	);
};

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
	.dark-mode {
		display: flex;
		gap: 0.5rem;
	}
	@media screen and (width < 500px) {
		h4 {
			font-size: 1rem;
		}
	}
`;

export default Navbar;
