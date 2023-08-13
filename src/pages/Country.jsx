import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSingleCountry,
	setCountryName,
} from '../features/singleCountry/singleCountrySlice';
import styled from 'styled-components';
import formatPopulation from '../utils/formatPopulation';

const Country = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { isLoading, country } = useSelector((store) => store.singleCountry);

	console.log(country);
	const {
		name,
		population,
		region,
		subregion,
		capital,
		tld,
		currencies,
		languages,
		borders,
		flags,
	} = country;

	useEffect(() => {
		dispatch(setCountryName(params.id));
		dispatch(getSingleCountry());
	}, [params.id]);

	if (isLoading) return <div>Loading</div>;

	return (
		<Wrapper>
			<div className="img-container">
				<img
					src={flags?.svg || flags?.png}
					alt={flags?.alt}
				/>
			</div>
			<div className="info">
				<h3 className="bold">{name?.official}</h3>
				<div className="sub-info">
					<div>
						<p>
							<span className="bold">native name: </span>
							{}
						</p>
						<p>
							<span className="bold">population: </span>
							{formatPopulation(population)}
						</p>
						<p>
							<span className="bold">region: </span>
							{region}
						</p>
						<p>
							<span className="bold">sub region: </span>
							{subregion}
						</p>
						<p>
							<span className="bold">capital: </span>
							{capital}
						</p>
					</div>
					<div>
						<p>
							<span className="bold">top level domain: </span>
							{tld}
						</p>
						<p>
							<span className="bold">currencies: </span>
							{}
						</p>
						<p>
							<span className="bold">languages: </span>
						</p>
					</div>
				</div>
				<ul>
					<p>
						<span className="bold">border countries: </span>
					</p>
					{borders.map((item, index) => {
						return (
							<Link
								key={index}
								to={`/name/${item}`}
							>
								{item}
							</Link>
						);
					})}
				</ul>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	display: grid;
	grid-template-columns: 1fr;
`;

export default Country;
