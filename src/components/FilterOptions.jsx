import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearFilters,
	handleChange,
} from '../features/allCountries/allCountriesSlice';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { TfiClose } from 'react-icons/tfi';
import { useMemo, useState } from 'react';

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
	.filters select,
	.search {
		height: 4rem;
		background-color: var(--clr-elements);
		border-radius: var(--borderRadius);
		border: none;
		color: var(--clr-text);
		box-shadow: var(--shadow-2);
		appearance: none;
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
		min-width: 100%;
	}
	.search input {
		color: var(--clr-text);
		border: none;
		background-color: var(--clr-elements);
		flex-basis: 100%;
		height: 100%;
	}
	.lens {
		height: 100%;
		aspect-ratio: 1/1;
		display: grid;
		place-items: center;
	}
	.close-btn {
		height: 100%;
		aspect-ratio: 1/1;
		margin-left: auto;
		visibility: hidden;
	}
	.visible {
		visibility: visible;
	}
	.lens svg,
	.close-btn svg {
		width: 40%;
		height: 40%;
	}
	.filters select {
		padding: 0 2rem;
		min-width: 14rem;
	}
	@media screen and (width > 700px) {
		.search {
			min-width: 25rem;
		}
	}
	.search input::placeholder {
		color: var(--clr-text);
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
	.title {
		display: none;
	}
`;

export default FilterOptions;
