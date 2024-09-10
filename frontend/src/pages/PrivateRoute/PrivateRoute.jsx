import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../slices/user/userSlice";
import { ClipLoader } from "react-spinners";

const PrivateRoute = () => {
	const [user, setUser] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [globalWs, setGlobalWs] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		const wss = new WebSocket(`${import.meta.env.VITE_WS_BASE_URL}`);
		wss.addEventListener("open", () => {
			setGlobalWs(wss);
		});
		return () => {
			wss.close();
		};
	}, [])

	const fetchUserData = async () => {
		try {
			const res = await dispatch(getUserInfo());
			if (res && res.payload && res.payload.user) {
				setUser(res.payload.user);
			}
		} catch (error) {
			console.error("Error fetching user data", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	if (isLoading || globalWs === null) {
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100vw",
					height: "100vh",
				}}
			>
				<ClipLoader color="var(--base-text-color)" size={82} />
			</div>
		);
	}

	return user && globalWs ? <Outlet context={{ globalWs }} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
