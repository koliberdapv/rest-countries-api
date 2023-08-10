import { configureStore } from '@reduxjs/toolkit';
import allCountriesSlice from './features/allCountries/allCountriesSlice';
import singleCountrySlice from './features/singleCountry/singleCountrySlice';

export const store = configureStore({
	reducer: {
		allCountries: allCountriesSlice,
		singleCountry: singleCountrySlice,
	},
});
