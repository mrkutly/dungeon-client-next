import styled from 'styled-components';
import Attribute from './Attribute';
import Search from './Search';
import { mobileBreakpoint } from '../styleConfig';

const Section = ({ type, data, editMode }) => {
	if (data.length === 0 && !editMode) return null;

	const title = type[0].toUpperCase() + type.slice(1);

	return (
		<SectionStyles id={type} className="attribute-section">
			<h2>{title}</h2>
			{editMode && <Search type={type} />}
			<ListStyles>
				{data?.map((f) => (
					<Attribute key={`${type}-${f._id}`} type={type} value={f} />
				))}
			</ListStyles>
		</SectionStyles>
	);
};

const ListStyles = styled.ul`
	list-style: none;
	padding-left: 0;
	font-size: 1.1rem;
	margin-top: 0;
`;

const SectionStyles = styled.section`
	@media (${mobileBreakpoint}) {
		margin: calc(var(--one-space) * 10) 0;
	}
`;

export default Section;
