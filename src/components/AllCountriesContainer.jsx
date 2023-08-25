import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../features/allCountries/allCountriesSlice';
import { useEffect } from 'react';
import SingleCountry from './SingleCountry';
import paginate from '../utils/paginate';
import ButtonsContainer from './ButtonsContainer';
import LoadingPlaceholder from './LoadingPlaceholder';
import Wrapper from '../assets/wrappers/AllCountriesWrapper';

const AllCountriesContainer = () => {
	const { isLoading, countries, sort, search, page } = useSelector(
		(store) => store.allCountries
	);
	const dispatch = useDispatch();
	const paginatedCountries = paginate(countries);
	const loadingArray = Array.apply(null, Array(12));

	useEffect(() => {
		dispatch(getAllCountries());
	}, [sort, search]);

	if (isLoading) {
		return (
			<Wrapper>
				{loadingArray.map((item, index) => {
					return <LoadingPlaceholder key={index} />;
				})}
			</Wrapper>
		);
	}

	return (
		<>
			<Wrapper>
				{paginatedCountries[page - 1].map((country, index) => {
					return (
						<SingleCountry
							{...country}
							key={index}
						/>
					);
				})}
			</Wrapper>
			<ButtonsContainer paginatedCountries={paginatedCountries} />
		</>
	);
};

export default AllCountriesContainer;
