import Wrapper from '../assets/wrappers/CardCategoryWrapper';
const CardCategory = ({ category, value, format }) => {
	return (
		<Wrapper>
			<span>{category}:</span>
			{!value && 'N/A'}
			{format === 'string' && <p>{value}</p>}
			{format !== 'string' &&
				value.map((item, index) => {
					return (
						<p key={index}>
							{item.name || item}
							{value.length - 1 === index ? ' ' : ', '}
						</p>
					);
				})}
		</Wrapper>
	);
};

export default CardCategory;
