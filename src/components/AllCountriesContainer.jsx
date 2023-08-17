import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../features/allCountries/allCountriesSlice';
import { useEffect } from 'react';
import SingleCountry from './SingleCountry';

const AllCountriesContainer = () => {
	const { isLoading, countries, sort, search } = useSelector(
		(store) => store.allCountries
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, [sort, search]);

	if (isLoading) return <h1>Loading</h1>;

	return (
		<Wrapper>
			{countries.map((country, index) => {
				return (
					<SingleCountry
						{...country}
						key={index}
					/>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.main`
	display: grid;
	grid-template-columns: auto;
	row-gap: 3rem;
	justify-content: center;
	@media screen and (width > 725px) {
		grid-template-columns: repeat(2, auto);
		justify-content: space-between;
	}
	@media screen and (width > 1120px) {
		grid-template-columns: repeat(3, auto);
	}
	@media screen and (width > 1450px) {
		grid-template-columns: repeat(4, auto);
	}
`;

export default AllCountriesContainer;
