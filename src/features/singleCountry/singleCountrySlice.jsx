import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';

const initialState = {
	isLoading: true,
	country: {},
	countryName: '',
	previousCountryName: '',
};

export const getSingleCountry = createAsyncThunk(
	'singleCountry/getCountry',
	async (_, thunkAPI) => {
		const { countryName } = thunkAPI.getState().singleCountry;
		let url = `/alpha/${countryName}`;

		const getBorderCountry = async (bc) => {
			try {
				const resp = await customFetch(`/alpha/${bc}`);
				// console.log(resp.data?.[0].name.common);
				return resp.data?.[0].name.common;
			} catch (error) {
				console.log(error);
			}
		};

		try {
			const resp = await customFetch(url);
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

			const newBorders = borders.map((item) => {
				getBorderCountry(item);
			});

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
		setPrevCountryName: (state) => {
			state.previousCountryName = state.countryName;
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

export const { setCountryName, setPrevCountryName } = singleCountry.actions;

export default singleCountry.reducer;
