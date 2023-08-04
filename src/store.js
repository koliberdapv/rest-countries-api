import { configureStore } from '@reduxjs/toolkit';
import allCountriesSlice from './features/allCountries/allCountriesSlice';

export const store = configureStore({
	reducer: {
		allCountries: allCountriesSlice,
	},
});
