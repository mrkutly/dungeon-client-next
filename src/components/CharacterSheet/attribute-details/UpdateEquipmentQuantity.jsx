import styled from 'styled-components';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateQuantity } from '../../../redux/actions/characters';

const UpdateEquipmentQuantity = ({ data	 }) => {
	const characterId = Router.query.id;
	const [edited, setEdited] = useState(false);
	const [quantity, setQuantity] = useState(data.quantity);
	const dispatch = useDispatch();
	const loading = useSelector((s) => s.characters.loading);

	const handleChange = (e) => {
		const value = Number(e.target.value);

		if (value < 0) return;
		if (!edited && value !== data.quantity) {
			setEdited(true);
		}
		if (edited && value === data.quantity) {
			setEdited(false);
		}
		setQuantity(Number(e.target.value));
	};

	const save = () => {
		setEdited(false);
		const controller = new AbortController();
		dispatch(
			updateQuantity({
				characterId,
				quantity,
				equipmentId: data._id,
			}, controller),
		);
	};

	return (
		<QuantityStyles>
			<label htmlFor="item-quantity">
				Update Quantity
				<input
					type="number"
					id="item-quantity"
					value={quantity}
					onChange={handleChange}
					disabled={loading}
				/>
			</label>
			<button
				type="button"
				disabled={!edited || loading}
				onClick={save}
			>Save
			</button>
		</QuantityStyles>
	);
};

const QuantityStyles = styled.div`
	button, label {
		display: inline;
		margin-left: 0;
	}
	button {
		display: inline;
	}
	input {
		width: 5rem;
	}
`;

export default UpdateEquipmentQuantity;
