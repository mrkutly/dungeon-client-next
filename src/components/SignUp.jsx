import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/actions/auth';
import Centered from './layouts/Centered';

const SignIn = () => {
	const dispatch = useDispatch();
	const [clientError, setClientError] = useState(null);
	const { loading, error } = useSelector(({ auth }) => auth);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const {
		name, email, password, confirmPassword,
	} = formData;

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
		const controller = new AbortController();
		dispatch(signup(name, email, password, confirmPassword, controller));
	};

	return (
		<Centered>
			<h1>Sign up</h1>
			<form method="POST" onSubmit={handleSubmit} aria-busy={loading} disabled={loading}>
				<label htmlFor="name">
					Username
					<input type="text" name="name" onChange={handleChange} value={name} />
				</label>
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
			<h2>
				{loading && 'loading...'}
				{clientError && `${clientError}`}
				{error && `${error}`}
			</h2>
		</Centered>
	);
};

export default SignIn;
