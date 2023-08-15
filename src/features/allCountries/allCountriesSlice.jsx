import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';

const initialFilterState = {
	search: '',
	searchStatus: '',
	searchType: '',
	sort: '',
	sortOptions: ['africa', 'america', 'asia', 'europe', 'oceania'],
};

const initialState = {
	isLoading: true,
	countries: {},
	totalCountries: 0,
	numOfPages: 1,
	page: 1,
	...initialFilterState,
};

export const getAllCountries = createAsyncThunk(
	'allCountries/getCounties',
	async (_, thunkAPI) => {
		let url = '/all';
		try {
			const resp = await customFetch(url);
			const data = resp.data.map((country) => {
				const {
					name,
					capital,
					flags,
					population,
					region,
					cca3: code,
				} = country;
				return {
					name: name.common,
					population,
					capital: capital?.[0] || 'N/A',
					flags,
					region,
					code,
				};
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue('There was an error');
		}
	}
);

const allCountriesSlice = createSlice({
	name: 'allCountries',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllCountries.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllCountries.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.countries = payload;
		},
		[getAllCountries.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export const {} = allCountriesSlice.actions;

export default allCountriesSlice.reducer;
