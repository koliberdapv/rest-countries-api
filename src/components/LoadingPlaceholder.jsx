import Wrapper from '../assets/wrappers/LoadingPlaceholderWrapper';

const LoadingPlaceholder = () => {
	return (
		<Wrapper>
			<div className="card grid">
				<div className="img-container skeleton"></div>
				<div className="info grid">
					<h5>
						<div className="skeleton skeleton-text  header"></div>
					</h5>
					<div className="stats grid">
						<div className="flex flex-row">
							<div className="skeleton skeleton-text title"></div>
							<div className="skeleton skeleton-text"></div>
						</div>
						<div className="flex flex-row">
							<div className="skeleton skeleton-text title"></div>
							<div className="skeleton skeleton-text"></div>
						</div>
						<div className="flex flex-row">
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
