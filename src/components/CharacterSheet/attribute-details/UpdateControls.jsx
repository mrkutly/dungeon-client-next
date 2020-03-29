import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import UpdateEquipmentQuantity from './UpdateEquipmentQuantity';
import { removeAttribute } from '../../../redux/actions/characters';
import { EQUIPMENT } from '../../../redux/attributeTypes';

const UpdateControls = ({ type, data }) => {
	const dispatch = useDispatch();
	const characterId = Router.query.id;
	const attributeId = data._id;

	const remove = () => {
		const controller = new AbortController();
		dispatch(removeAttribute({ characterId, type, attributeId }, controller));
	};

	return (
		<ControlStyles>
			{type === EQUIPMENT && <UpdateEquipmentQuantity data={data} />}
			<button type="button" className="remove" onClick={remove}>Remove from sheet</button>
		</ControlStyles>
	);
};

const ControlStyles = styled.div`
	margin-top: calc(var(--one-space) * 5);
	display: flex;
	flex-direction: row;
	min-width: 40vw;
	
	button {
		font-size: 1rem;
	}
	
	button.remove {
		margin-left: auto;
	}
`;

export default UpdateControls;
