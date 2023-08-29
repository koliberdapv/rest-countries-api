import Wrapper from '../assets/wrappers/FilterOptionsWrapper';
import { Search, FilterRegion } from './';

const FilterOptions = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<section>
			<Wrapper
				onSubmit={handleSubmit}
				className="flex align-center justify-space"
			>
				<Search />
				<FilterRegion />
			</Wrapper>
		</section>
	);
};

export default FilterOptions;
