import styled from 'styled-components';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { clearFilters } from '../features/allCountries/allCountriesSlice';
import { useDispatch } from 'react-redux';

const isDarkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(isDarkModeEnabled);
	const dispatch = useDispatch();
	const handleClick = () => {
		if (!darkMode) {
			setDarkMode(true);
			localStorage.setItem('dark-mode', 'enabled');
		}
		if (darkMode) {
			setDarkMode(false);
			localStorage.setItem('dark-mode', 'disabled');
		}
	};
	useEffect(() => {
		if (!darkMode) document.body.classList.remove('dark-mode');
		if (darkMode) document.body.classList.add('dark-mode');
	}, [darkMode]);

	const handleClickBack = () => {
		dispatch(clearFilters());
	};
	return (
		<Wrapper>
			<div className="container">
				<div className="navbar">
					<button onClick={handleClickBack}>
						<Link to="/">
							<h4>Where in the world?</h4>
						</Link>
					</button>
					<button
						className="dark-mode-btn"
						aria-label="dark-mode"
						onClick={handleClick}
					>
						{darkMode ? <BsMoonFill color="white" /> : <BsMoon />}
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
	.dark-mode-btn {
		display: flex;
		gap: 0.5rem;
		height: 3rem;
		align-items: center;
	}
	@media screen and (width < 500px) {
		h4 {
			font-size: 1rem;
		}
	}
`;

export default Navbar;
