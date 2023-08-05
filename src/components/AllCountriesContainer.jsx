import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../features/allCountries/allCountriesSlice';
import { useEffect } from 'react';
import SingleCountry from './SingleCountry';

const AllCountriesContainer = () => {
	const { isLoading, countries, test } = useSelector(
		(store) => store.allCountries
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, []);

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
	grid-template-columns: 1fr;
	gap: 2rem;
`;

export default AllCountriesContainer;
