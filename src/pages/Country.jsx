import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSingleCountry,
	setCountryName,
	setPrevCountryName,
} from '../features/singleCountry/singleCountrySlice';
import styled from 'styled-components';
import formatPopulation from '../utils/formatPopulation';
import { BsArrowLeft } from 'react-icons/bs';
import BorderCountry from '../components/BorderCountry';
import LoadingPlaceholderCountry from '../components/LoadingPlaceholderCountry';

const Country = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { isLoading, country, previousCountryName, countryName } = useSelector(
		(store) => store.singleCountry
	);

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
		if (previousCountryName !== countryName) dispatch(setPrevCountryName());
		dispatch(setCountryName(params.id));
		dispatch(getSingleCountry());
	}, [params.id]);

	if (isLoading) return <LoadingPlaceholderCountry />;

	const currency = currencies ? Object.values(currencies) : '';
	const nativeName = Object.values(name?.nativeName);
	const language = Object.values(languages);

	return (
		<Wrapper>
			<Link
				to={`/${
					previousCountryName.length > 1 ? `name/${previousCountryName}` : ''
				}`}
			>
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
					<h4 className="bold">{name?.common}</h4>
					<div className="sub-info">
						<div>
							<p>
								<span className="bold">native name: </span>
								{nativeName?.[nativeName.length - 1]?.common}
							</p>
							<p>
								<span className="bold">population: </span>
								{population && formatPopulation(population)}
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
								{tld?.map((item, index) => {
									return (
										<span
											key={index}
											className="tld"
										>
											{item}
											{tld.length - 1 === index ? ' ' : ', '}
										</span>
									);
								})}
							</p>
							<p>
								<span className="bold">currencies: </span>
								{currency &&
									currency.map((curr, index) => {
										return (
											<span
												key={index}
												className="currency"
											>
												{curr.name}
												{currency.length - 1 === index ? ' ' : ', '}
											</span>
										);
									})}
							</p>
							<p>
								<span className="bold">languages: </span>
								{language?.map((lang, index) => {
									return (
										<span
											className="language"
											key={index}
										>
											{lang}
											{language.length - 1 === index ? ' ' : ', '}
										</span>
									);
								})}
							</p>
						</div>
					</div>
					<ul className="border-countries">
						<span className="bold border-countries">border countries: </span>
						{borders
							? borders?.map((borderCountryName, index) => {
									return (
										<BorderCountry
											key={index}
											country={borderCountryName}
										/>
									);
							  })
							: 'None'}
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
		gap: 2rem;
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

	.border-countries {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.btn {
		background-color: var(--clr-elements);
		padding: 0.75rem 1.75rem;
		border-radius: 5px;
		box-shadow: var(--shadow-2);
		text-transform: capitalize;
	}
	.back {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		margin-top: 2rem;
	}
	.border-countries {
		font-size: 1.15rem;
	}
	@media screen and (width > 700px) {
		.content {
			justify-content: space-between;
			grid-template-columns: repeat(2, 45%);
			gap: 0;
		}
		.img-container {
			max-width: 40vw;
		}
		.sub-info {
			display: grid;
			grid-template-columns: repeat(2, auto);
			justify-content: space-between;
		}
		.border-countries {
			font-size: var(--fs-details-normal);
		}
	}
`;

export default Country;
