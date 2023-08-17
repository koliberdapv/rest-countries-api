import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
	handleChange,
	clearFilters,
} from '../features/allCountries/allCountriesSlice';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { useMemo, useState } from 'react';

const FilterOptions = () => {
	const [localSearch, setLocalSearch] = useState('');
	const { sort, sortOptions, search } = useSelector(
		(store) => store.allCountries
	);
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
		setLocalSearch('');
		// dispatch(clearFilters());
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
				</div>
				<div className="filters">
					<select
						name="sort"
						id=""
						value={sort}
						placeholder="hello"
						onChange={handleFilter}
					>
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

const Wrapper = styled.section`
	form {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 0;
	}
	@media screen and (width < 700px) {
		form {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.5rem;
		}
	}
	select,
	.search input {
		font-weight: var(--fw-600);
		padding: 1rem 1.75rem;
		min-width: 10rem;
		text-transform: capitalize;
		border-radius: var(--borderRadius);
		background-color: var(--clr-elements);
		border: none;
		color: var(--clr-text);
		box-shadow: var(--shadow-2);
		appearance: none;
	}
	.search input {
		min-width: 100%;
		padding: 1rem 1.75rem 1rem 4rem;
		isolation: isolate;
	}
	.search {
		position: relative;
		min-width: 100%;
	}
	@media screen and (width > 700px) {
		.search {
			min-width: 25rem;
		}
	}
	.search input::placeholder {
		text-transform: none;
		color: var(--clr-text);
	}
	.lens {
		position: absolute;
		height: 100%;
		aspect-ratio: 1.5/1;
		z-index: 10;
		display: grid;
		place-items: center;
	}
	.lens svg {
		width: 40%;
		height: 40%;
	}
	select:focus,
	input:focus {
		outline: transparent;
	}
	.filters {
		position: relative;
	}
	.custom-arrow {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		aspect-ratio: 1/1;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		pointer-events: none;
		justify-content: center;
	}
`;

export default FilterOptions;
