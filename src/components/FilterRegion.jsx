import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from '../features/allCountries/allCountriesSlice';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Wrapper from '../assets/wrappers/FilterRegionWrapper';

const FilterRegion = () => {
	const { region, regionList } = useSelector((store) => store.allCountries);
	const dispatch = useDispatch();
	const handleFilter = (e) => {
		dispatch(handleChange({ name: e.target.name, value: e.target.value }));
	};
	return (
		<Wrapper>
			<select
				name="region"
				id="region"
				value={region}
				onChange={handleFilter}
			>
				{!region && (
					<option
						value=""
						disabled
						defaultValue={'Filter by Region'}
						className="title"
					>
						Filter by Region
					</option>
				)}
				{regionList.map((item, index) => {
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
			<span className="custom-arrow grid items-center">
				<RiArrowDropDownLine />
			</span>
		</Wrapper>
	);
};

export default FilterRegion;
