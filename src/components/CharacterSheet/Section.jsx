import styled from 'styled-components';
import Attribute from './Attribute';
import Search from './Search';

const Section = ({ type, data }) => {
	const title = type[0].toUpperCase() + type.slice(1);

	return (
		<section id={type}>
			<h2>{title}</h2>
			<Search type={type} />
			<ListStyles>
				{data.map((f) => (
					<Attribute key={`${type}-${f._id}`} type={type} value={f} />
				))}
			</ListStyles>
		</section>
	);
};

const ListStyles = styled.ul`
	list-style: none;
	padding-left: 0;
	font-size: 1.1rem;
	margin-top: 0;
`;

export default Section;
