import styled from 'styled-components';
import { useState, useRef } from 'react';
import Modal from './Modal';

const Attribute = ({ type, value }) => {
	const [active, setActive] = useState(false);
	let { name, _id, quantity } = value;

	if (type === 'equipment') {
		name = value.item.name;
		_id = value.item._id;
	}

	/* Modal logic */
	let close;
	const outsideModal = useRef();
	const closeBtn = useRef();

	const listener = useRef((e) => {
		if (e.key === 'Escape') {
			return close();
		}

		const isCloseTarget = [outsideModal.current, closeBtn.current].includes(e.target);
		if (e.type === 'click' && isCloseTarget) {
			close();
		}
	});

	close = () => {
		document.removeEventListener('click', listener.current);
		document.removeEventListener('keydown', listener.current);
		setActive(false);
	};

	const handleSelect = () => {
		setActive(true);
		document.addEventListener('click', listener.current);
		document.addEventListener('keydown', listener.current);
	};

	return (
		<>
			<AttributeStyles
				tabIndex="0"
				role="button"
				aria-label={name}
				onClick={handleSelect}
				onKeyPress={(e) => e.key === 'Enter' && handleSelect()}
			>
				{quantity} {name}
			</AttributeStyles>
			{active && (
				<Modal
					type={type}
					data={value}
					_id={_id}
					close={close}
					outerRef={outsideModal}
					closeBtnRef={closeBtn}
				/>
			)}
		</>
	);
};

const AttributeStyles = styled.li`
	cursor: pointer;
	transition: var(--transition);

	&:hover, &:focus {
		color: var(--accent);
	}
`;

export default Attribute;
