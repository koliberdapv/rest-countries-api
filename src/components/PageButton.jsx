import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../features/allCountries/allCountriesSlice';

const PageButton = ({ btnClassName, content, chevron, pageId }) => {
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
		const direction = e.target.classList.value;
		if (direction === 'next-btn') {
			newPage = page + 1;
			if (newPage > numOfPages) {
				newPage = 1;
			}
		}
		if (direction === 'prev-btn') {
			newPage = page - 1;
			if (newPage < 1) {
				newPage = numOfPages;
			}
		}
		if (direction === 'first-btn') {
			newPage = 1;
		}
		if (direction === 'last-btn') {
			newPage = numOfPages;
		}
		if (direction === 'page-btn') {
			newPage = Number(e.target.id);
		}
		scrollUp();
		dispatch(changePage(newPage));
	};
	return (
		<button
			type="button"
			className={btnClassName}
			onClick={handlePageChange}
			id={pageId}
		>
			{chevron && content === 'first' && <HiChevronDoubleLeft />}
			{content}
			{chevron && content === 'last' && <HiChevronDoubleRight />}
		</button>
	);
};

export default PageButton;
