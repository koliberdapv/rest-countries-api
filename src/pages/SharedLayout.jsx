import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '../components/';

const SharedLayout = () => {
	const handleClick = () => {
		document.body.classList.add('dark-mode');
	};
	return (
		<Wrapper>
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;
`;

export default SharedLayout;
