import { useDispatch, useSelector } from 'react-redux';
import {
	clearFilters,
	handleChange,
} from '../features/allCountries/allCountriesSlice';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { TfiClose } from 'react-icons/tfi';
import { useMemo, useState } from 'react';
import Wrapper from '../assets/wrappers/FilterOptionsWrapper';

const FilterOptions = () => {
	const [localSearch, setLocalSearch] = useState('');
	const { sort, sortOptions } = useSelector((store) => store.allCountries);
	const dispatch = useDispatch();

	const handleFilter = (e) => {
		dispatch(handleChange({ name: e.target.name, value: e.target.value }));
	};
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
		<Wrapper>
			<form onSubmit={handleSubmit}>
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
						className={
							localSearch.length > 1 ? 'close-btn visible' : 'close-btn'
						}
						onClick={handleCloseBtn}
					>
						<TfiClose />
					</button>
				</div>
				<div className="filters">
					<select
						name="sort"
						id="sort"
						value={sort}
						onChange={handleFilter}
					>
						{!sort && (
							<option
								value=""
								disabled
								defaultValue={'Filter by Region'}
								className="title"
							>
								Filter by Region
							</option>
						)}
						{sortOptions.map((item, index) => {
							return (
								<option
									value={item}
									key={index}
								>
									{item}
								</option>
							);
						})}
					</select>
					<span className="custom-arrow">
						<RiArrowDropDownLine />
					</span>
				</div>
			</form>
		</Wrapper>
	);
};

export default FilterOptions;
