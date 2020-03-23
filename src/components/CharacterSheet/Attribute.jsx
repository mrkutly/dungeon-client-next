import styled from 'styled-components';
import { useState, useRef } from 'react';
import Modal from './Modal';

const Attribute = ({ type, value }) => {
	const { name, id } = value;
	const [active, setActive] = useState(false);

	/* Modal logic */
	let close;
	const innerModal = useRef();
	const listener = useRef((e) => {
		if (e.key && e.key === 'Escape') {
			return close();
		}

		if (e.target !== innerModal.current) {
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
				{name}
			</AttributeStyles>
			{active && <Modal type={type} id={id} close={close} innerRef={innerModal} />}
		</>
	);
};

const AttributeStyles = styled.li`
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover, &:focus {
		color: var(--accent);
	}
`;

export default Attribute;
