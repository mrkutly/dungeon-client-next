import styled from 'styled-components';
import Feature from './attribute-details/Feature';
import Feat from './attribute-details/Feat';
import Proficiency from './attribute-details/Proficiency';
import Skill from './attribute-details/Skill';
import Spell from './attribute-details/Spell';
import Equipment from './attribute-details/Equipment';
import Language from './attribute-details/Language';
import Trait from './attribute-details/Trait';
import Condition from './attribute-details/Condition';
import UpdateControls from './attribute-details/UpdateControls';
import {
	FEATURES,
	PROFICIENCIES,
	SKILLS,
	SPELLS,
	EQUIPMENT,
	CONDITIONS,
	LANGUAGES,
	TRAITS,
	FEATS,
} from '../../redux/attributeTypes';

const Modal = ({
	type, outerRef, closeBtnRef, data,
}) => (
	<ModalStyles ref={outerRef}>
		<div className="wrapper">
			<button ref={closeBtnRef} className="close" type="button">&times;</button>
			<div className="details">
				{type === TRAITS && <Trait data={data} />}
				{type === FEATS && <Feat data={data} />}
				{type === FEATURES && <Feature data={data} />}
				{type === PROFICIENCIES && <Proficiency data={data} />}
				{type === SKILLS && <Skill data={data} />}
				{type === SPELLS && <Spell data={data} />}
				{type === EQUIPMENT && <Equipment data={data} />}
				{type === LANGUAGES && <Language data={data} />}
				{type === CONDITIONS && <Condition data={data} />}
				<UpdateControls type={type} data={data} />
			</div>
		</div>
	</ModalStyles>
);

const ModalStyles = styled.div`
	display: grid;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: #00000066;
	z-index: 1;

	button.close {
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
		min-width: 30rem;
		overflow: scroll;
		border: var(--one-width) solid var(--highlight);
	}
`;

export default Modal;
