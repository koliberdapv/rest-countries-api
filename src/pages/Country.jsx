import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSingleCountry,
	setCountryName,
} from '../features/singleCountry/singleCountrySlice';
import styled from 'styled-components';
import formatPopulation from '../utils/formatPopulation';
import { BsArrowLeft } from 'react-icons/bs';

const Country = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { isLoading, country } = useSelector((store) => store.singleCountry);
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
			<Link to="/">
				<button className="btn back">
					<BsArrowLeft />
					back
				</button>
			</Link>
			<div className="content">
				<div className="img-container">
					<img
						src={flags?.svg || flags?.png}
						alt={flags?.alt}
					/>
				</div>
				<div className="info">
					<h4 className="bold">{name?.official}</h4>
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
									<button className="btn">{item}</button>
								</Link>
							);
						})}
					</ul>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	font-size: var(--fs-details-normal);
	.content {
		display: grid;
		grid-template-columns: 1fr;
		padding: 2rem 0;
	}
	.img-container {
		width: 100%;
		aspect-ratio: 16/9;
		img {
			width: 100%;
		}
	}
	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
	}
	.sub-info {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		justify-content: space-between;
	}
	h4 {
		text-wrap: balance;
	}
	ul {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.btn {
		background-color: var(--clr-elements);
		padding: 0.5rem 1.25rem;
		border-radius: 5px;
		box-shadow: var(--shadow-2);
		text-transform: capitalize;
	}
	.back {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
	}
	@media screen and (width > 700px) {
		.content {
			justify-content: space-between;
			grid-template-columns: repeat(2, 45%);
		}
		.img-container {
			max-width: 40vw;
		}
		.sub-info {
			display: grid;
			grid-template-columns: repeat(2, auto);
			justify-content: space-between;
		}
	}
`;

export default Country;
