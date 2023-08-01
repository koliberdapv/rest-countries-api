import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
	const handleClick = () => {
		document.body.classList.add('dark-mode');
	};
	return (
		<div className="wrapper">
			<h1>Shared layout</h1>
			<button onClick={handleClick}>dark mode</button>
			<Outlet />
		</div>
	);
};

export default SharedLayout;
