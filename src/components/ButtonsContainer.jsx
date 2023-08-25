import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../features/allCountries/allCountriesSlice';
import Wrapper from '../assets/wrappers/ButtonsContainerWrapper';

const ButtonsContainer = ({ paginatedCountries }) => {
	const { page } = useSelector((store) => store.allCountries);
	const dispatch = useDispatch();
	const numOfPages = paginatedCountries.length;

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const nextPage = () => {
		let newPage = page + 1;
		if (newPage > numOfPages) {
			newPage = 1;
		}
		scrollUp();
		dispatch(changePage(newPage));
	};

	const prevPage = () => {
		let newPage = page - 1;
		if (newPage < 1) {
			newPage = numOfPages;
		}
		scrollUp();
		dispatch(changePage(newPage));
	};
	return (
		<Wrapper>
			<button
				type="button"
				className="prev-btn"
				onClick={prevPage}
			>
				<HiChevronDoubleLeft />
				prev
			</button>
			<button
				type="button"
				className="first-btn"
				onClick={() => {
					scrollUp();
					dispatch(changePage(1));
				}}
			>
				first
			</button>

			<div className="btn-container">
				{paginatedCountries.map((_, index) => {
					const pageNumber = index + 1;
					const maxLimit = page + 2;
					const minLimit = page - 2;
					if (page > 4 && pageNumber > maxLimit) return;
					if (page > 4 && pageNumber < minLimit) return;
					if (page < 5 && pageNumber > 5) return;

					return (
						<button
							key={index}
							className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
							onClick={() => {
								scrollUp();
								dispatch(changePage(pageNumber));
							}}
						>
							{pageNumber}
						</button>
					);
				})}
			</div>

			<button
				type="button"
				className="last-btn"
				onClick={() => {
					scrollUp();
					dispatch(changePage(numOfPages));
				}}
			>
				last
			</button>
			<button
				type="button"
				className="next-btn"
				onClick={nextPage}
			>
				next
				<HiChevronDoubleRight />
			</button>
		</Wrapper>
	);
};

export default ButtonsContainer;
