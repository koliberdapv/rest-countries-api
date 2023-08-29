import Wrapper from '../assets/wrappers/CardCategoryWrapper';
const CardCategory = ({ category, value, format }) => {
	return (
		<Wrapper className="flex">
			<span>{category}:</span>
			{!value && 'N/A'}
			{format === 'string' && <p>{value}</p>}
			{format !== 'string' &&
				value.map((item, index) => {
					return (
						<div key={index}>
							{item.name || item}
							{value.length - 1 === index ? ' ' : ', '}
						</div>
					);
				})}
		</Wrapper>
	);
};

export default CardCategory;
