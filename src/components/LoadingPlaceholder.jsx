import Wrapper from '../assets/wrappers/LoadingPlaceholderWrapper';

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
export default LoadingPlaceholder;
