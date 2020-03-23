import styled from 'styled-components';
import useAttribute from '../../hooks/useAttribute';

const Modal = ({ type, id, innerRef }) => {
	const { data, error, loading } = useAttribute(type, id);
	return (
		<ModalStyles>
			<div ref={innerRef}>
				{loading && <h1>loading...</h1>}
				{error && <h3>{error}</h3>}
				{data && <pre>{JSON.stringify(data, null, 2)}</pre>}
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

	div {
		margin: auto;
		background-color: white;
		max-width: 90vw;
		max-height: 90vh;
		overflow: scroll;
	}
`;

export default Modal;
