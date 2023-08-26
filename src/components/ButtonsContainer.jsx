import Wrapper from '../assets/wrappers/ButtonsContainerWrapper';
import PageButton from './PageButton';

const ButtonsContainer = ({ paginatedCountries, page }) => {
	return (
		<Wrapper>
			<PageButton
				btnClassName="first-btn"
				content="first"
				chevron={true}
			/>
			<PageButton
				btnClassName="prev-btn"
				content="prev"
			/>
			<div className="btn-container">
				{paginatedCountries.map((_, index) => {
					const pageNumber = index + 1;
					const maxLimit = page + 2;
					const minLimit = page - 2;
					if (page > 4 && pageNumber > maxLimit) return;
					if (page > 4 && pageNumber < minLimit) return;
					if (page < 5 && pageNumber > 5) return;
					return (
						<PageButton
							key={index}
							btnClassName={
								pageNumber === page ? 'page-btn active' : 'page-btn'
							}
							content={pageNumber}
							pageId={pageNumber}
						/>
					);
				})}
			</div>

			<PageButton
				btnClassName="next-btn"
				content="next"
			/>
			<PageButton
				btnClassName="last-btn"
				content="last"
				chevron={true}
			/>
		</Wrapper>
	);
};

export default ButtonsContainer;
