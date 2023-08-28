import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from '../features/allCountries/allCountriesSlice';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Wrapper from '../assets/wrappers/FilterOptionsWrapper';
import { Search } from './';

const FilterOptions = () => {
	const { sort, sortOptions } = useSelector((store) => store.allCountries);
	const dispatch = useDispatch();
	const handleFilter = (e) => {
		dispatch(handleChange({ name: e.target.name, value: e.target.value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<Search />
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
