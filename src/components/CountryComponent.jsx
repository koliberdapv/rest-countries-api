import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSingleCountry,
	setCountryName,
} from '../features/singleCountry/singleCountrySlice';
import formatPopulation from '../utils/formatPopulation';
import { BsArrowLeft } from 'react-icons/bs';
import {
	LoadingPlaceholderCountry,
	BorderCountry,
	CardCategory,
} from '../components/';
import Wrapper from '../assets/wrappers/CountryComponentWrapper';

const CountryComponent = () => {
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

	const handleBackBtn = () => {
		window.history.back();
	};

	useEffect(() => {
		dispatch(setCountryName(params.id));
		dispatch(getSingleCountry());
	}, [params.id]);

	if (isLoading) return <LoadingPlaceholderCountry />;

	const currency = currencies ? Object.values(currencies) : '';
	const nativeName = Object.values(name?.nativeName);
	const language = Object.values(languages);

	return (
		<Wrapper>
			<button
				className="btn back"
				onClick={handleBackBtn}
				disabled={isLoading}
			>
				<BsArrowLeft />
				back
			</button>

			<div className="content">
				<div className="img-container">
					<img
						src={flags?.svg || flags?.png}
						alt={flags?.alt}
					/>
				</div>
				<div className="info">
					<h3 className="bold title">{name?.common}</h3>
					<div className="sub-info">
						<div>
							<CardCategory
								category="native name"
								value={
									nativeName?.[nativeName.length - 1]?.common || nativeName
								}
								format="string"
							/>
							<CardCategory
								category="population"
								value={formatPopulation(population)}
								format="string"
							/>
							<CardCategory
								category="region"
								value={region}
								format="string"
							/>
							<CardCategory
								category="sub region"
								value={subregion}
								format="string"
							/>
							<CardCategory
								category="capital"
								value={capital}
								format="string"
							/>
						</div>
						<div>
							<CardCategory
								category="top level domain"
								value={tld}
							/>
							<CardCategory
								category="currencies"
								value={currency}
							/>
							<CardCategory
								category="language"
								value={language}
							/>
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

export default CountryComponent;
