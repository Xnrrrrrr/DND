import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Header } from "../../components";
import { useLoginMutation } from '../../slices/user/userApiSlice.js';
import { ClipLoader } from 'react-spinners';

const Login = () => {
	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

	const navigate = useNavigate();
	
	const [login, { isLoading }] = useLoginMutation();

	const submitHandler = async (e) => {
        e.preventDefault();

        try {
			const res = await login({ username, password }).unwrap;
			if (res) {
				navigate('/');
			}
            window.location.reload();
        } catch (err) {
            console.error(err?.data?.message || err.error)
        }
    };

	return (
		<>
			<Header />
			<div className="login-container">
				<div className="login-form">
					<form onSubmit={submitHandler}>
						<h2>Login</h2>
						<label htmlFor="login-username">Username:</label>
						<input
							type="text"
							id="login-username"
							name="username"
							required
							placeholder='Enter Username...'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label htmlFor="login-password">Password:</label>
						<input
							type="password"
							id="login-password"
							name="password"
							required
							placeholder='Enter Password...'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit" disabled={isLoading}>
                            {isLoading ? <ClipLoader color="#fff" /> : 'Login'}
                        </button>
					</form>
					<p>
						Don't have an account?{" "}
						<Link to="/sign-up">Sign up here</Link>.
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
