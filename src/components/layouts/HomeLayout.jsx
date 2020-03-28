import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/actions/auth';

const HomeLayout = ({ children }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const handleSignout = (e) => {
		e.preventDefault();
		dispatch(signout());
	};

	return (
		<HomeStyles>
			<nav>
				<a
					tabIndex="0"
					role="link"
					onKeyPress={(e) => e.key === 'Enter' && router.back()}
					onClick={() => router.back()}
				>Go Back
				</a>
				<a href="/" onClick={handleSignout}>Sign Out</a>
			</nav>

			{children}
		</HomeStyles>
	);
};

const HomeStyles = styled.main`
	max-width: 1000px;
	margin: auto;

	nav{
		display: block;
		a {
		margin-right: var(--one-space);
	}}
`;

export default HomeLayout;
