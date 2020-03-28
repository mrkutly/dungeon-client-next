import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signinSuccess, localSignInFailed } from '../redux/actions/auth';

const useLocalToken = () => {
	const { token, checkedLocal } = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token && !checkedLocal) {
			const foundUser = localStorage.getItem('dungeonUser');
			if (foundUser) {
				const user = JSON.parse(foundUser);
				dispatch(signinSuccess(user));
			} else {
				dispatch(localSignInFailed());
			}
		}
	}, []);

	return null;
};

export default useLocalToken;
