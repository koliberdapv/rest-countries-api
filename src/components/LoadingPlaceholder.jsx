import styled from 'styled-components';

const LoadingPlaceholder = () => {
	return (
		<Wrapper>
			<div className="link">
				<div className="img-container skeleton"></div>
				<div className="info">
					<h5>
						<div className="skeleton skeleton-text  header"></div>
					</h5>
					<div className="stats">
						<div className="flex">
							<div className="skeleton skeleton-text title"></div>
							<div className="skeleton skeleton-text"></div>
						</div>
						<div className="flex">
							<div className="skeleton skeleton-text title"></div>
							<div className="skeleton skeleton-text"></div>
						</div>
						<div className="flex">
							<div className="skeleton skeleton-text title"></div>
							<div className="skeleton skeleton-text"></div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	box-shadow: var(--shadow-2);
	border-radius: var(--borderRadius);
	max-width: 300px;
	.link {
		display: grid;
		grid-template-rows: auto 1fr;
		align-content: space-between;
		height: 100%;
		background-color: var(--clr-elements);
		border-radius: var(--borderRadius);
		overflow: hidden;
		text-transform: capitalize;
	}
	h5 {
		margin-bottom: 1rem;
		text-wrap: balance;
	}
	.img-container {
		width: 300px;
		aspect-ratio: 16/9;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.info {
		display: grid;
		grid-template-rows: auto auto;
		align-content: space-between;
		align-content: flex-start;
		padding: 2rem;
	}
	.stats {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	span {
		font-weight: var(--fw-600);
	}
	.skeleton {
		animation: skeleton-loading 1s linear infinite alternate;
		background-color: var(--clr-text);
	}
	@keyframes skeleton-loading {
		0% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.1;
		}
	}
	.skeleton-text {
		width: 100%;
		height: 0.85rem;
		margin-bottom: 0.25rem;
		border-radius: 0.25rem;
	}
	.title {
		width: 7rem;
	}
	.flex {
		display: flex;
		gap: 0.75rem;
	}
	.header {
		height: 1.25rem;
		width: 9rem;
	}
`;

export default LoadingPlaceholder;
