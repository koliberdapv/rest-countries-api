import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { TfiClose } from 'react-icons/tfi';
import { useMemo, useState } from 'react';
import {
	clearFilters,
	handleChange,
} from '../features/allCountries/allCountriesSlice';
import Wrapper from '../assets/wrappers/SearchWrapper';

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
	const handleCloseBtn = () => {
		dispatch(clearFilters());
		setLocalSearch('');
	};
	return (
		<Wrapper className="flex align-center">
			<span className="lens grid items-center">
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
		</Wrapper>
	);
};

export default Search;
