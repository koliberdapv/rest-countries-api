import { useDispatch, useSelector } from 'react-redux';

const paginate = () => {
	const dispatch = useDispatch();
	const { countriesPerPage, numOfPages, countries, isLoading } = useSelector(
		(store) => store.allCountries
	);
	if (isLoading) return;
	const newCountries = Array.from({ length: numOfPages }, (_, index) => {
		const start = index * countriesPerPage;
		return countries.slice(start, start + countriesPerPage);
	});
	return newCountries;
};
export default paginate;
