import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSingleCountry,
	setCountryName,
} from '../features/singleCountry/singleCountrySlice';
import formatPopulation from '../utils/formatPopulation';
import { BsArrowLeft } from 'react-icons/bs';
import { LoadingPlaceholderCountry, BorderCountry } from '../components/';
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
								{region || 'N/A'}
							</p>
							<p>
								<span className="bold">sub region: </span>
								{subregion || 'N/A'}
							</p>
							<p>
								<span className="bold">capital: </span>
								{capital || 'N/A'}
							</p>
						</div>
						<div>
							<p>
								<span className="bold">top level domain: </span>
								{tld
									? tld?.map((item, index) => {
											return (
												<span
													key={index}
													className="tld"
												>
													{item}
													{tld.length - 1 === index ? ' ' : ', '}
												</span>
											);
									  })
									: 'N/A'}
							</p>
							<p>
								<span className="bold">currencies: </span>
								{currency
									? currency.map((curr, index) => {
											return (
												<span
													key={index}
													className="currency"
												>
													{curr.name}
													{currency.length - 1 === index ? ' ' : ', '}
												</span>
											);
									  })
									: 'N/A'}
							</p>
							<p>
								<span className="bold">languages: </span>
								{language
									? language?.map((lang, index) => {
											return (
												<span
													className="language"
													key={index}
												>
													{lang}
													{language.length - 1 === index ? ' ' : ', '}
												</span>
											);
									  })
									: 'N/A'}
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

export default CountryComponent;
