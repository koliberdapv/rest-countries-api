import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changePage } from '../features/allCountries/allCountriesSlice';

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
				// className="pageBtn"
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

const Wrapper = styled.section`
	height: 6rem;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.5rem;
	.btn-container {
		border-radius: var(--borderRadius);
		display: flex;
		gap: 0.5rem;
	}
	.pageBtn {
		border-color: transparent;
		width: 1.75rem;
		aspect-ratio: 1/1;
		transition: var(--transition);
		border-radius: var(--borderRadius);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.active {
		background: var(--clr-elements);
		color: var(--white);
		box-shadow: var(--shadow-2);
	}
	.prev-btn,
	.next-btn,
	.last-btn,
	.first-btn {
		padding: 0.5rem;
		text-transform: capitalize;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		cursor: pointer;
		transition: var(--transition);
		border-radius: var(--borderRadius);
	}
	.prev-btn:hover,
	.first-btn:hover,
	.last-btn:hover,
	.next-btn:hover,
	.pageBtn:hover {
		background: var(--clr-elements);
	}

	@media screen and (width < 700px) {
		.last-btn,
		.first-btn {
			display: none;
		}
	}
`;

export default ButtonsContainer;
