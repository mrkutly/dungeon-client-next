import styled from 'styled-components';

const HomeLayout = ({ children }) => (
	<HomeStyles>
		{children}
	</HomeStyles>
);

const HomeStyles = styled.main`
	max-width: 1000px;
	padding: 0 calc(var(--one-space) * 4);
	margin: auto;
`;

export default HomeLayout;
