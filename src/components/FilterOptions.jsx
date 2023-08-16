import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from '../features/allCountries/allCountriesSlice';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FilterOptions = () => {
	const dispatch = useDispatch();
	const { sort, sortOptions } = useSelector((store) => store.allCountries);
	const handleSearch = (e) => {
		dispatch(handleChange({ value: e.target.value }));
	};
	return (
		<Wrapper>
			<form>
				<div className="search">
					<input
						type="text"
						placeholder="Search for a country..."
					/>
				</div>
				<div className="filters">
					<select
						name="sort"
						id=""
						value={sort}
						onChange={handleSearch}
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
	select {
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
	select:focus {
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
