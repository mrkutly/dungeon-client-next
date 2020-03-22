// import styled from 'styled-components';
import Header from './Header';
import Stats from './Stats';

const CharacterSheet = ({ character }) => (
	<div>
		<Header character={character} />
		<Stats character={character} />
	</div>
);

// const SheetStyles = styled.div`
// 	display: grid;

// `;

export default CharacterSheet;
