import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getCharacterDetails } from '../redux/actions/characters';

const CharacterCard = ({ character, token }) => {
	const dispatch = useDispatch();
	const {
		name, level,
	} = character;
	const race = character.race.name;
	const characterClass = character.character_class.name;
	const handleSelect = () => dispatch(getCharacterDetails(character, token));


	return (
		<CardStyles
			onClick={handleSelect}
			onKeyPress={({ key }) => key === 'Enter' && handleSelect()}
			tabIndex="0"
			role="button"
			aria-label={`Select ${name}`}
		>
			<h2>
				{name}
			</h2>
			<span>
				Lvl
				{' '}
				{level}
				{' '}
				{race}
				{' '}
				{characterClass}
			</span>
		</CardStyles>
	);
};

const CardStyles = styled.div`
	display: block;
	margin: calc(var(--one-space) * 5) 0;
	cursor: pointer;
	color: var(--primary);
	text-decoration: none;
	padding: calc (var(--one-space) / 2) 0;
	border-bottom: var(--one-width) solid var(--highlight-2);
	transition: all 0.3s ease;

	&:hover, &:focus {
		outline: none;
		letter-spacing: 0.5px;
		border-bottom-color: var(--highlight);
	}

	span {
		margin-left: calc(var(--one-space) * 3)
	}
`;
export default CharacterCard;
