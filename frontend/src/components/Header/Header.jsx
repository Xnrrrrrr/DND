import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/user/userApiSlice.js";
import { ClipLoader } from "react-spinners";

const Header = () => {
	const [userData, setUserData] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [logout, { isLoading }] = useLogoutMutation();

	useEffect(() => {
		if (document.cookie.includes("uname")) {
			setUserData(
				document.cookie.split(`uname=`).pop().split(";").shift()
			);
		}
	}, []);

	const logoutHandler = async () => {
		try {
			const res = await logout().unwrap();
			if (res) {
				document.cookie = `uname=${res.username}; path=/; max-age=0`;
			}
			window.location.reload();
		} catch (err) {
			console.error(err?.data?.message || err.error);
		}
	};

	return (
		<>
			<header className="landing-header">
				<nav>
					<div className="logo">
						<GiDiceTwentyFacesTwenty size={36} />
						<Link to={"/home"} className="home-link">
							Home
						</Link>
					</div>
					{userData ? (
						<ul>
							<li>
								<Link to={"/party"}>Party Up</Link>
							</li>
							<li>
								<Link to={"/character-sheet"}>Create a Character Sheet</Link>
							</li>
							<li>
								{isLoading ? (
									<Link to={"/"}>
										<ClipLoader size={12} color="fff" />
									</Link>
								) : (
									<Link
										to={"/"}
										onClick={() => logoutHandler()}
									>
										Logout
									</Link>
								)}
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
