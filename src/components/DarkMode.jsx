import { useEffect, useState } from 'react';
import { BsMoon } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/DarkModeWrapper';

const isDarkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';

const DarkMode = () => {
	const [darkMode, setDarkMode] = useState(isDarkModeEnabled);
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
	return (
		<Wrapper
			className="flex align-center"
			aria-label="dark-mode"
			onClick={handleClick}
		>
			{darkMode ? <BsMoonFill color="white" /> : <BsMoon />}
			<span>Dark Mode</span>
		</Wrapper>
	);
};

export default DarkMode;
