import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';

const initialFilterState = {
	search: '',
	searchStatus: '',
	searchType: '',
	sort: '',
	sortOptions: ['Africa', 'america', 'asia', 'europe', 'oceania'],
};

const initialState = {
	isLoading: true,
	countries: {},
	page: 0,
	countriesPerPage: 10,
	...initialFilterState,
};

export const getAllCountries = createAsyncThunk(
	'allCountries/getCounties',
	async (_, thunkAPI) => {
		const { sort, search } = thunkAPI.getState().allCountries;

		let url;
		if (search) {
			url = `/name/${search}`;
		} else if (sort) {
			url = `/region/${sort}`;
		} else {
			url = '/all';
		}

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
	reducers: {
		handleChange: (state, { payload: { name, value } }) => {
			// state.page = 1;
			if (name === 'sort') {
				state.search = '';
			}
			state[name] = value;
		},
		clearFilters: (state) => {
			return { ...state, ...initialFilterState };
		},
		changePage: (state, { payload }) => {
			state.page = payload;
		},
	},
	extraReducers: {
		[getAllCountries.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllCountries.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.countries = payload;
			state.page = 1;
		},
		[getAllCountries.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export const { handleChange, clearFilters, changePage } =
	allCountriesSlice.actions;

export default allCountriesSlice.reducer;
