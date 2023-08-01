import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className="full-page">
			<div>
				<img
					src=""
					alt="not fount"
				/>
				<h3>Ohh! Page not found</h3>
				<p>We can't seem to find the page you are looking for</p>
				<Link to="/">Back home</Link>
			</div>
		</div>
	);
};

export default Error;
