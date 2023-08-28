import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { TfiClose } from 'react-icons/tfi';
import { useMemo, useState } from 'react';
import {
	clearFilters,
	handleChange,
} from '../features/allCountries/allCountriesSlice';

const Search = () => {
	const [localSearch, setLocalSearch] = useState('');
	const dispatch = useDispatch();
	const debounce = () => {
		let timeoutId;
		return (e) => {
			setLocalSearch(e.target.value);
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				dispatch(handleChange({ name: e.target.name, value: e.target.value }));
			}, 1000);
		};
	};
	const optimizedDebounce = useMemo(() => debounce(), []);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleCloseBtn = () => {
		dispatch(clearFilters());
		setLocalSearch('');
	};
	return (
		<div className="search">
			<span className="lens">
				<BiSearch />
			</span>

			<input
				type="text"
				value={localSearch}
				onChange={optimizedDebounce}
				name="search"
				placeholder="Search for a country..."
			/>
			<button
				type="button"
				className={localSearch.length > 1 ? 'close-btn visible' : 'close-btn'}
				onClick={handleCloseBtn}
			>
				<TfiClose />
			</button>
		</div>
	);
};

export default Search;
