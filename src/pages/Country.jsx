import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSingleCountry,
	setCountryName,
} from '../features/singleCountry/singleCountrySlice';

const Country = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { country } = useSelector((store) => store.singleCountry);
	console.log(country);

	useEffect(() => {
		dispatch(setCountryName(params.id));
		dispatch(getSingleCountry());
	}, []);

	return <div>Country</div>;
};

export default Country;
