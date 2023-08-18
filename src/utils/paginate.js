import { useSelector } from 'react-redux';

const paginate = (countries) => {
	const { countriesPerPage } = useSelector((store) => store.allCountries);
	const pages = Math.ceil(countries.length / countriesPerPage);

	const newCountries = Array.from({ length: pages }, (_, index) => {
		const start = index * countriesPerPage;
		return countries.slice(start, start + countriesPerPage);
	});
	return newCountries;
};
export default paginate;
