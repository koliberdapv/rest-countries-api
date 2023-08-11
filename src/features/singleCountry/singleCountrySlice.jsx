import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';

const initialState = {
	isLoading: true,
	country: {},
	countryName: '',
};

export const getSingleCountry = createAsyncThunk(
	'singleCountry/getCountry',
	async (_, thunkAPI) => {
		const { countryName } = thunkAPI.getState().singleCountry;
		let url = `/name/${countryName}`;
		try {
			const resp = await customFetch(url);
			// check for the status
			const {
				name,
				population,
				region,
				subregion,
				capital,
				tld,
				currencies,
				languages,
				borders,
				flags,
			} = resp.data?.[0];

			return {
				name,
				population,
				region,
				subregion,
				capital,
				tld,
				currencies,
				languages,
				borders,
				flags,
			};
		} catch (error) {
			return thunkAPI.rejectWithValue('No data found');
			// redirect to main page
		}
	}
);

const singleCountry = createSlice({
	name: 'singleCountry',
	initialState,
	reducers: {
		setCountryName: (state, { payload }) => {
			state.countryName = payload;
		},
	},
	extraReducers: {
		[getSingleCountry.pending]: (state) => {
			state.isLoading = true;
		},
		[getSingleCountry.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.country = payload;
		},
		[getSingleCountry.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export const { setCountryName } = singleCountry.actions;

export default singleCountry.reducer;
