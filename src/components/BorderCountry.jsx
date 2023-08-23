import { Link } from 'react-router-dom';
import customFetch from '../utils/axios';
import { useEffect, useState } from 'react';

const BorderCountry = ({ country }) => {
	const [countryName, setCountryName] = useState('');
	const [loading, setLoading] = useState(true);
	const getBorderCountry = async (country) => {
		try {
			const resp = await customFetch(`/alpha/${country}`);
			const result = resp.data[0].name.common;
			setCountryName(result);
			setLoading(false);
			return;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBorderCountry(country);
	});

	if (loading) return;

	return (
		<Link
			to={`/name/${country}`}
			className="btn"
		>
			{countryName}
		</Link>
	);
};

export default BorderCountry;
