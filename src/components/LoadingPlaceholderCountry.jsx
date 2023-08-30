import { BsArrowLeft } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/LoadingPlaceholderCountryWrapper';

const LoadingPlaceholderCountry = () => {
	return (
		<Wrapper className="grid">
			<div>
				<button
					className="btn back flex justify-center"
					disabled
				>
					<BsArrowLeft />
					back
				</button>
			</div>
			<div className="content grid">
				<div className="img-container skeleton"></div>
				<div className="info flex justify-center">
					<h4>
						<div className="skeleton skeleton-text header"></div>
						<div className="skeleton skeleton-text header"></div>
					</h4>
					<div className="sub-info grid justify-space">
						<div className="flex column">
							<div className="flex column">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>
							<div className="flex column">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>
							<div className="flex column">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>
							<div className="flex column">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>
							<div className="flex column">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>
						</div>
						<div className="flex column">
							<div className="flex column">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>

							<div className="flex column">
								<div className="skeleton skeleton-text title"></div>
								<div className="skeleton skeleton-text"></div>
							</div>
							<div className="flex column">
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
