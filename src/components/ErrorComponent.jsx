import Wrapper from '../assets/wrappers/ErrorComponentWrapper';
import { Link } from 'react-router-dom';
import not_found from '../assets/images/not_found.svg';
const ErrorComponent = () => {
	return (
		<Wrapper className="flex center">
			<div>
				<img
					src={not_found}
					alt="not fount"
				/>
				<h3>Ohh! Page not found</h3>
				<p>We can't seem to find the page you are looking for</p>
				<Link to="/">Back home</Link>
			</div>
		</Wrapper>
	);
};

export default ErrorComponent;
