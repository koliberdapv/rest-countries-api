import { useEffect } from 'react';
import paginate from '../utils/paginate';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/AllCountriesWrapper';
import { LoadingPlaceholder, ButtonsContainer, SingleCountry } from './';
import { getAllCountries } from '../features/allCountries/allCountriesSlice';

const AllCountriesContainer = () => {
	const { isLoading, region, search, page, isSearchFailed } = useSelector(
		(store) => store.allCountries
	);
	const dispatch = useDispatch();
	const paginatedCountries = paginate();
	useEffect(() => {
		dispatch(getAllCountries());
	}, [region, search]);
	if (isLoading) {
		const loadingArray = Array.apply(null, Array(12));
		return (
			<Wrapper className="grid justify-center">
				{loadingArray.map((_, index) => {
					return <LoadingPlaceholder key={index} />;
				})}
			</Wrapper>
		);
	}
	if (isSearchFailed) {
		return (
			<div className="error">
				<div>No countries found</div>
			</div>
		);
	}
	return (
		<>
			<Wrapper className="grid justify-center">
				{paginatedCountries[page - 1].map((country, index) => {
					return (
						<SingleCountry
							{...country}
							key={index}
						/>
					);
				})}
			</Wrapper>
			<ButtonsContainer
				paginatedCountries={paginatedCountries}
				page={page}
			/>
		</>
	);
};
export default AllCountriesContainer;
