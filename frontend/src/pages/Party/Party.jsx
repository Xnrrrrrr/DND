import { useState, useEffect } from "react";
import { Header, ChatBox } from "../../components";
import { useDispatch } from "react-redux";
import { getAllUserCharacterSheets } from "../../slices/characterSheet/characterSheetSlice.js";
import { getUserInfo } from "../../slices/user/userSlice.js";

const Party = () => {
	const [user, setUser] = useState();
	const [characterSheets, setCharacterSheets] = useState([]);

	const dispatch = useDispatch();

	const fetchUser = async () => {
		try {
			const res = await dispatch(getUserInfo());		
			if (res && res.payload && res.payload.user) {
				setUser(res.payload.user);
			}
		} catch (err) {
			console.error(err);
		}
	}

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
		fetchUser();
		fetchCharacterSheets();
	}, []);

	return (
		<>
			<Header />
			<div className="party-background">
				<div className="party-container">

				</div>
			</div>
			<ChatBox user={user} />
		</>
	);
};

export default Party;
