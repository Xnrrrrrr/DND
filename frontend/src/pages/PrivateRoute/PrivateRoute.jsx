import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../slices/user/userSlice";
import { getAllUserCharacterSheets } from "../../slices/characterSheet/characterSheetSlice";
import { ClipLoader } from "react-spinners";

const PrivateRoute = () => {
	const [user, setUser] = useState();
	const [characterSheets, setCharacterSheets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const dispatch = useDispatch();

	const fetchUserData = async () => {
		try {
			const res = await dispatch(getUserInfo());
			if (res.payload.user) {
				setUser(res.payload.user);
			}
		} catch (error) {
			console.error("Error fetching user data", error);
		}
	};

	const fetchCharacterSheets = async () => {
		try {
			const res = await dispatch(getAllUserCharacterSheets());
			if (res && res.payload && res.payload.characterSheets) {
				setCharacterSheets(res.payload.characterSheets);
			}
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		Promise.all([fetchUserData(), fetchCharacterSheets()]).finally(() =>
			setIsLoading(false)
		);
	}, []);

	if (isLoading) {
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

	return user ? (
		<Outlet context={{ user, characterSheets }} />
	) : (
		<Navigate to="/login" replace />
	);
};

export default PrivateRoute;
