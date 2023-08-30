import Wrapper from '../assets/wrappers/SharedLayoutWrapper';
import { Outlet } from 'react-router-dom';
import { Navbar } from '.';

const SharedLayout = () => {
	return (
		<Wrapper className="grid">
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</Wrapper>
	);
};

export default SharedLayout;
