import { useSelector } from 'react-redux';
import useLocalToken from '../hooks/useLocalToken';
import SignIn from './SignIn';

const PleaseSignIn = ({ children }) => {
	const { token, checkedLocal } = useSelector((s) => s.auth);
	useLocalToken();

	if (!checkedLocal) return null;
	if (!token) return <SignIn />;
	return <>{children}</>;
};

export default PleaseSignIn;
