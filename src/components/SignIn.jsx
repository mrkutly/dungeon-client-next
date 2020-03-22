import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/actions';
import Centered from './layouts/Centered';


const SignIn = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { loading, token, error } = useSelector(({ auth }) => auth);
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
		dispatch(signin(email, password));
	};

	useEffect(() => {
		if (token) {
			router.push('/home');
		}
	}, [token]);

	return (
		<Centered>
			<h1>Sign in</h1>
			<form method="POST" onSubmit={handleSubmit}>
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
			<h2 style={{ minHeight: '2rem' }}>
				{loading && 'Loading...'}
				{error}
			</h2>
		</Centered>
	);
};

export default SignIn;
