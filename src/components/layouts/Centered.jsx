import styled from 'styled-components';

const CenteredStyles = styled.main`
	max-width: 1000px;
	margin: auto;
	padding: 0 calc(var(--one-space) * 2);
	height: 90vh;
	display: grid;

	div {
		margin: auto;
	}
`;

const Centered = ({ children }) => <CenteredStyles><div>{children}</div></CenteredStyles>;

export default Centered;
