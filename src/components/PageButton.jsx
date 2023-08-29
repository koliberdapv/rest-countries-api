import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../features/allCountries/allCountriesSlice';

const PageButton = ({
	btnClassName,
	content,
	chevron,
	pageId,
	dataDirection,
}) => {
	const { page, numOfPages } = useSelector((store) => store.allCountries);
	const dispatch = useDispatch();
	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};
	const handlePageChange = (e) => {
		let newPage;
		const direction = e.target.dataset.direction;
		if (direction === 'next') {
			newPage = page + 1;
			if (newPage > numOfPages) {
				newPage = 1;
			}
		}
		if (direction === 'prev') {
			newPage = page - 1;
			if (newPage < 1) {
				newPage = numOfPages;
			}
		}
		if (direction === 'first') {
			newPage = 1;
		}
		if (direction === 'last') {
			newPage = numOfPages;
		}
		if (direction === 'page') {
			newPage = Number(e.target.id);
		}
		setTimeout(() => {
			scrollUp();
		}, [100]);
		dispatch(changePage(newPage));
	};
	return (
		<button
			type="button"
			className={btnClassName}
			onClick={handlePageChange}
			id={pageId}
			data-direction={dataDirection}
		>
			{chevron && content === 'first' && <HiChevronDoubleLeft />}
			{content}
			{chevron && content === 'last' && <HiChevronDoubleRight />}
		</button>
	);
};

export default PageButton;
