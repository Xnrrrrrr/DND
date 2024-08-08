import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from "../../slices/user/userApiSlice.js";
import { getUserInfo } from "../../slices/user/userSlice.js";
import { ClipLoader } from "react-spinners";

const Header = () => {
	const [userData, setUserData] = useState();
	const [isUserDataLoading, setIsUserDataLoading] = useState(true);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [logout, { isLoading }] = useLogoutMutation();

	const fetchUserData = async () => {
		try {
			const res = await dispatch(getUserInfo());
			if (res.payload && res.payload.user) {
				setUserData(res.payload.user);
			}
		} catch (error) {
			console.error("Error fetching user data", error);
		} finally {
			setIsUserDataLoading(false);
		}
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	const logoutHandler = async () => {
		try {
			const res = await logout().unwrap();
			if (res) {
				navigate("/");
			}
			window.location.reload();
		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	};

	if (isLoading) {
		return <div></div>;
	}

	return (
		<>
			<header className="landing-header">
				<nav>
					<div className="logo">
						<GiDiceTwentyFacesTwenty size={36} />
						<Link to={"/"} className="home-link">
							Home
						</Link>
					</div>
					{userData ? (
						<ul>
							<li>
								<Link to={"/sign-up"}>Sign Up</Link>
							</li>
							<li>
								<Link to={"/"} onClick={() => logoutHandler()}>Logout</Link>
							</li>
						</ul>
					) : (
						<ul>
							<li>
								<Link to={"/sign-up"}>Sign Up</Link>
							</li>
							<li>
								<Link to={"/login"}>Login</Link>
							</li>
						</ul>
					)}
				</nav>
			</header>
		</>
	);
};

export default Header;
