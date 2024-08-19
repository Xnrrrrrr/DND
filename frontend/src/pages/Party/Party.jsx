import { useState, useEffect } from "react";
import { Header, ChatBox } from "../../components";
import { useDispatch } from "react-redux";
import { getAllUserCharacterSheets } from "../../slices/characterSheet/characterSheetSlice.js";
import { useOutletContext } from "react-router-dom";
import { getUserInfo } from "../../slices/user/userSlice.js";

const Party = () => {
	const { user, characterSheets } = useOutletContext();

	console.log(user);
	console.log(characterSheets);

	const dispatch = useDispatch();

	return (
		<>
			<Header />
			<div className="party-background">
				<div className="party-container">

				</div>
			</div>
			<ChatBox />
		</>
	);
};

export default Party;
