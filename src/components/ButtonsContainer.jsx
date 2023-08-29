import Wrapper from '../assets/wrappers/ButtonsContainerWrapper';
import PageButton from './PageButton';

const ButtonsContainer = ({ paginatedCountries, page }) => {
	return (
		<Wrapper className="flex center">
			<PageButton
				btnClassName="first-btn flex center"
				content="first"
				chevron={true}
				dataDirection="first"
			/>
			<PageButton
				btnClassName="prev-btn flex center"
				content="prev"
				dataDirection="prev"
			/>
			<div className="btn-container flex center">
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
							dataDirection="page"
							content={pageNumber}
							pageId={pageNumber}
						/>
					);
				})}
			</div>

			<PageButton
				btnClassName="next-btn flex center"
				content="next"
				dataDirection="next"
			/>
			<PageButton
				btnClassName="last-btn flex center"
				content="last"
				chevron={true}
				dataDirection="last"
			/>
		</Wrapper>
	);
};

export default ButtonsContainer;
