import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/actions/auth';
import Centered from './layouts/Centered';

const SignIn = () => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector(({ auth }) => auth);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;


	const handleChange = ({ target }) => {
		setFormData({
			...formData,
			[target.name]: target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(signin(email, password));
	};

	return (
		<Centered>
			<h1>Sign in</h1>
			<form method="POST" onSubmit={handleSubmit} aria-busy={loading} disabled={loading}>
				<label htmlFor="email">
					Email
					<input type="email" name="email" vale={email} onChange={handleChange} />
				</label>
				<label htmlFor="password">
					Password
					<input type="password" name="password" value={password} onChange={handleChange} />
				</label>
				<button type="submit">Sign In</button>
			</form>
			<Link href="/">
				<a>Go Back</a>
			</Link>
			<h2>
				{error}
			</h2>
		</Centered>
	);
};

export default SignIn;
