import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SharedLayoutWrapper';
import { Navbar } from '.';

const SharedLayout = () => {
	return (
		<Wrapper>
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</Wrapper>
	);
};

export default SharedLayout;
