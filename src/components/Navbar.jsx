import { Link } from 'react-router-dom';
import { clearFilters } from '../features/allCountries/allCountriesSlice';
import Wrapper from '../assets/wrappers/NavbarWrapper';
import { DarkMode } from './';
import { useDispatch } from 'react-redux';

const Navbar = () => {
	const dispatch = useDispatch();
	const handleClickBack = () => {
		dispatch(clearFilters());
	};
	return (
		<Wrapper className="flex align-center">
			<div className="container">
				<div className="flex align-center justify-space ">
					<button onClick={handleClickBack}>
						<Link to="/">
							<h4>Where in the world?</h4>
						</Link>
					</button>
					<DarkMode />
				</div>
			</div>
		</Wrapper>
	);
};
export default Navbar;
