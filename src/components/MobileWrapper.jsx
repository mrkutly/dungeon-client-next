import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMobileTrue } from '../redux/actions/mobile';

const MobileWrapper = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (window.innerWidth <= 600) {
			dispatch(setMobileTrue());
		}
	}, []);

	return null;
};

export default MobileWrapper;
