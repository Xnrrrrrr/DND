import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from "../../components";
import { useRegisterMutation } from '../../slices/user/userApiSlice.js';
import { ClipLoader } from 'react-spinners';

const SignUp = () => {
	const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

	const [register, { isLoading }] = useRegisterMutation();

	const submitHandler = async (e) => {
        e.preventDefault();
		
        if (password !== confirmPassword) {
            console.error(`Passwords do not match`);
        } else {
            try {
                const res = await register({ username, email, password}).unwrap();
				if (res) {
					navigate('/login');
				}
            } catch (err) {
                console.error(err?.data?.message || err.error);
            }
        }
    };

	return (
		<>
			<Header />
			<div className="sign-up-container">
				<div className="sign-up-form">
					<form onSubmit={submitHandler}>
						<h2>Sign Up</h2>
						<label htmlFor="sign-up-username">Username:</label>
						<input
							type="text"
							id="sign-up-username"
							name="username"
							required
							placeholder='Enter Username...'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label htmlFor="sign-up-email">Email:</label>
						<input
							type="text"
							id="sign-up-email"
							name="email"
							required
							placeholder='Enter Email...'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="sign-up-password">Password:</label>
						<input
							type="password"
							id="sign-up-password"
							name="password"
							required
							placeholder='Enter Password...'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label htmlFor="confirm-sign-up-password">Confirm Password:</label>
						<input
							type="password"
							id="confirm-sign-up-password"
							name="password"
							required
							placeholder='Confirm Your Password...'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<button type="submit" disabled={isLoading}>
                            {isLoading ? <ClipLoader color="#fff" /> : 'Sign Up'}
                        </button>
					</form>
					<p>
						Already have an account? {' '}
						<Link to="/login">Login here</Link>.
					</p>
				</div>
			</div>
		</>
	)
}

export default SignUp;