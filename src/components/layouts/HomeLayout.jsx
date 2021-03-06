import styled from 'styled-components';
import Link from 'next/link';
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

	const getPrev = () => {
		if (router.pathname === '/characters') return '/';
		return '/characters';
	};

	return (
		<HomeStyles>
			<nav>
				{ router.pathname !== '/' && (
					<Link
						href={getPrev()}
					><a>Go Back</a>
					</Link>
				)				}
				<a href="/" onClick={handleSignout}>Sign Out</a>
				<Link href="/characters/new"><a>New Character</a></Link>
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
			margin-right: calc(var(--one-space) * 3);
		}
	}
`;

export default HomeLayout;
