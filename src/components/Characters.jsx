import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';

const Characters = () => {
	const { error, data } = useSelector((s) => s.characters);
	const name = useSelector((s) => s.auth.user?.name);
	const characters = Object.values(data);

	if (error) return <h1>{error}</h1>;
	if (!characters) return null;

	return (
		<CharacterListStyles>
			<h1 className="heading">{name}'s characters</h1>
			<ul>
				{characters.map((c) => <li key={c._id}><CharacterCard character={c} /></li>)}
			</ul>
		</CharacterListStyles>
	);
};

const CharacterListStyles = styled.div`
	margin-top: calc(var(--one-space) * 8);

	h1.heading {
		display: inline-block;
		border-bottom: var(--one-width) solid var(--highlight);
		margin-bottom: calc(var(--one-space) * 8);
	}

	ul {
		margin: 0 auto;
		list-style: none;
		padding-left: 0;
	}

	li {
		margin-bottom: calc(var(--one-space) * 8);
	}
`;

export default Characters;
