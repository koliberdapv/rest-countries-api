import { BsArrowLeft } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/LoadingPlaceholderCountryWrapper';

const LoadingPlaceholderCountry = () => {
	return (
		<Wrapper>
			<div>
				<button
					className="btn back"
					disabled
				>
					<BsArrowLeft />
					back
				</button>
			</div>
			<div className="content">
				<div className="img-container skeleton"></div>
				<div className="info">
					<h4>
						<div className="skeleton skeleton-text header"></div>
						<div className="skeleton skeleton-text header"></div>
					</h4>
					<div className="sub-info">
						<div className="column">
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
							<div className="flex">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>
							<div className="flex">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>
						</div>
						<div className="column">
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
			</div>
		</Wrapper>
	);
};
export default LoadingPlaceholderCountry;
