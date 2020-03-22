import styled from 'styled-components';

const HomeLayout = ({ children }) => (
	<HomeStyles>
		{children}
	</HomeStyles>
);

const HomeStyles = styled.main`
	max-width: 1000px;
	margin: auto;
`;

export default HomeLayout;
