import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signinSuccess, localSignInFailed } from '../redux/actions/auth';

const useLocalToken = () => {
	const { token, checkedLocal } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token && !checkedLocal) {
			const foundToken = localStorage.getItem('authToken');
			if (foundToken) {
				dispatch(signinSuccess(foundToken));
			} else {
				dispatch(localSignInFailed());
			}
		}
	}, []);

	return null;
};

export default useLocalToken;
