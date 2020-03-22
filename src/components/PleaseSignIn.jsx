import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signinSuccess } from '../redux/actions';
import SignIn from './SignIn';
import Centered from './layouts/Centered';

const PleaseSignIn = ({ children }) => {
	const [checked, setChecked] = useState(false);
	const token = useSelector(({ auth }) => auth.token);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) {
			const foundToken = localStorage.getItem('authToken');
			if (foundToken) {
				dispatch(signinSuccess(foundToken));
			}
		}
		setChecked(true);
	}, []);

	if (!checked) return <Centered><h1>loading...</h1></Centered>;
	if (!token) return <SignIn />;
	return <>{children}</>;
};

export default PleaseSignIn;
