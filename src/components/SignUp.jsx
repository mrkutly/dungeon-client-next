import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/actions';
import Centered from './layouts/Centered';

const SignIn = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [clientError, setClientError] = useState(null);
	const { loading, token, error } = useSelector(({ auth }) => auth);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { email, password, confirmPassword } = formData;

	const handleChange = ({ target }) => {
		setFormData({
			...formData,
			[target.name]: target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setClientError(null);
		if (password !== confirmPassword) return setClientError('Passwords gotta match :)');
		dispatch(signup(email, password));
	};


	useEffect(() => {
		if (token) {
			router.push('/home');
		}
	}, [token]);


	return (
		<Centered>
			<h1>Sign up</h1>
			<form method="POST" onSubmit={handleSubmit}>
				<label htmlFor="email">
					Email
					<input type="email" name="email" onChange={handleChange} value={email} />
				</label>
				<label htmlFor="password">
					Password
					<input type="password" name="password" onChange={handleChange} value={password} />
				</label>
				<label htmlFor="confirmPassword">
					Confirm Password
					<input type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} />
				</label>
				<button type="submit">Sign Up</button>
			</form>
			<Link href="/">
				<a>Go Back</a>
			</Link>
			<h2 style={{ minHeight: '2rem' }}>
				{loading && 'loading...'}
				{clientError && `${clientError}`}
				{error && `${error}`}
			</h2>
		</Centered>
	);
};

export default SignIn;
