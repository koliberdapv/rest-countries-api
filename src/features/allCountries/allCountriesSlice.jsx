import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';

const initialFilterState = {
	search: '',
	searchStatus: '',
	searchType: '',
	region: '',
	regionList: ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'],
};

const initialState = {
	isLoading: true,
	countries: {},
	page: 1,
	countriesPerPage: 12,
	numOfPages: 1,
	isSearchFailed: false,
	...initialFilterState,
};

export const getAllCountries = createAsyncThunk(
	'allCountries/getCounties',
	async (_, thunkAPI) => {
		const { region, search } = thunkAPI.getState().allCountries;

		let url;
		if (search) {
			url = `/name/${search}`;
		} else if (region && region !== 'All') {
			url = `/region/${region}`;
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
			if (name === 'region') {
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
	extraReducers: (builder) => {
		builder
			.addCase(getAllCountries.pending, (state) => {
				state.isLoading = true;
				state.isSearchFailed = false;
			})
			.addCase(getAllCountries.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.countries = payload;
				state.page = 1;
				state.numOfPages = Math.ceil(payload.length / state.countriesPerPage);
				state.isSearchFailed = false;
			})
			.addCase(getAllCountries.rejected, (state) => {
				state.isLoading = false;
				state.numOfPages = 1;
				state.countries = [];
				state.isSearchFailed = true;
			});
	},
});

export const { handleChange, clearFilters, changePage } =
	allCountriesSlice.actions;

export default allCountriesSlice.reducer;
