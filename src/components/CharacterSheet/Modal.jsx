import styled from 'styled-components';
import useAttribute from '../../hooks/useAttribute';
import Feature from './attribute-details/Feature';
import Proficiency from './attribute-details/Proficiency';
import Skill from './attribute-details/Skill';
import Spell from './attribute-details/Spell';
import Equipment from './attribute-details/Equipment';
import {
	FEATURES,
	PROFICIENCIES,
	SKILLS,
	SPELLS,
	EQUIPMENT,
} from '../../redux/attributeTypes';

const Modal = ({
	type, id, outerRef, closeBtnRef,
}) => {
	const { data, error, loading } = useAttribute(type, id);

	return (
		<ModalStyles ref={outerRef}>
			<div className="wrapper">
				<button ref={closeBtnRef} type="button">&times;</button>
				<div className="details">
					{loading && <h1>loading...</h1>}
					{error && <h3>{error}</h3>}
					{data && type === FEATURES && <Feature data={data} />}
					{data && type === PROFICIENCIES && <Proficiency data={data} />}
					{data && type === SKILLS && <Skill data={data} />}
					{data && type === SPELLS && <Spell data={data} />}
					{data && type === EQUIPMENT && <Equipment data={data} />}
				</div>
			</div>
		</ModalStyles>
	);
};

const ModalStyles = styled.div`
	display: grid;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: #00000066;
	z-index: 1;

	button {
		display: block;
		margin-left: auto;
		margin-right: var(--one-space);
	}
	
	.details {
		padding: 0 var(--one-space) var(--one-space);
	}

	.wrapper {
		margin: auto;
		background-color: white;
		max-width: 90vw;
		max-height: 90vh;
		min-width: 60vw;
		overflow: scroll;
		border: var(--one-width) solid var(--highlight);
	}
`;

export default Modal;
