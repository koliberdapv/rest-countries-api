import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../features/allCountries/allCountriesSlice';

const AllCountries = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(getAllCountries());
	};

	// structure
	// const { name, capital, flags, population } = resp.data[0];
	// const result = {
	// 	name: name.official,
	// 	capital: capital[0],
	// 	flag: flags.png,
	// 	population,
	// };
	// console.log(result);

	return (
		<div>
			<h1>All countries</h1>
			<button onClick={handleClick}>get all countries</button>
		</div>
	);
};

export default AllCountries;
