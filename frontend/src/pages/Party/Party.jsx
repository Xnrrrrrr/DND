import React, { useState, useEffect } from "react";
import { Header, ChatBox } from "../../components";
import { useDispatch } from "react-redux";
import { getAllUserCharacterSheets } from "../../slices/characterSheet/characterSheetSlice.js";
import { getUserInfo } from "../../slices/user/userSlice.js";
import { getParties } from "../../slices/party/partySlice.js";
import { useJoinPartyMutation } from "../../slices/party/partyApiSlice.js";
import {
	useNavigate,
	Outlet,
	Link,
	useLocation,
	useNavigationType,
	useOutletContext,
} from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Party = () => {
	const { globalWs } = useOutletContext();
	const [user, setUser] = useState();
	const [characterSheets, setCharacterSheets] = useState([]);
	const [parties, setParties] = useState([]);
	const [password, setPassword] = useState("");
	const [selectedCharSheet, setSelectedCharSheet] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const navigationType = useNavigationType();

	const [join, { isJoinLoading }] = useJoinPartyMutation();

	const fetchUser = async () => {
		try {
			const res = await dispatch(getUserInfo());
			if (res && res.payload && res.payload.user) {
				setUser(res.payload.user);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const fetchCharacterSheets = async () => {
		try {
			const res = await dispatch(getAllUserCharacterSheets());
			if (res && res.payload && res.payload.characterSheets) {
				setCharacterSheets(res.payload.characterSheets);
			}
			//console.log(res.payload.characterSheets);
		} catch (err) {
			console.error(err);
		}
	};

	const fetchParties = async () => {
		try {
			const res = await dispatch(getParties());
			if (res && res.payload && res.payload.parties) {
				setParties(res.payload.parties);
			}
			//console.log(res.payload.parties);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchUser();
		if (user) {
			fetchCharacterSheets();
		}
		fetchParties();

		globalWs.addEventListener("message", handleMessage);

		return () => {
			globalWs.removeEventListener('message', handleMessage);
		};
	}, []);

	useEffect(() => {
		if (location.pathname === "/party") {
			fetchCharacterSheets();
			fetchParties();
		}
		// Needed whenever a user reroutes from /party/:partyId to here
		if (globalWs) {
			globalWs.send(JSON.stringify({ type: "updateParty" }));
		}
	}, [location]);

	useEffect(() => {
		if (globalWs) {
			globalWs.send(JSON.stringify({ type: "updateParty" }));
		}
	}, [globalWs]);

	useEffect(() => {
		if (navigationType === "POP" && globalWs) {
			globalWs.send(JSON.stringify({ type: "updateParty" }));
		}
	}, [navigationType, globalWs]);

	const handleMessage = (e) => {
		const messageData = JSON.parse(e.data);
		if (messageData.type === "updateParty") {		
			fetchParties();
		}
	}

	const handleSubmit = async (e, partyId) => {
		e.preventDefault();
		try {
			const res = await join({
				password,
				characterSheetId: selectedCharSheet,
				partyId,
			}).unwrap();
			if (res && res.msg) {
				navigate(`/party/${partyId}`);
				globalWs.send(JSON.stringify({ type: "updateParty" }));
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Header />
			<div className="party-background">
				<div className="party-container">
					<div>
						<h6>Create Your Party:</h6>
						<button
							type="button"
							onClick={() => {
								navigate("/party/create");
							}}
						>
							Create
						</button>
					</div>
					<div>
						<h6>New Parties:</h6>
						<p>Search by GM</p>
						{parties ? (
							parties.map((p, index) => (
								<form
									key={index}
									onSubmit={(e) => handleSubmit(e, p._id)}
								>
									<p>GM: {p.gameMaster}</p>
									<p>
										Player count: {p.characters.length}/
										{p.maxCharacters}
									</p>
									<p>Current Characters:</p>
									{p.characters.map((c, index) => (
										<React.Fragment key={index}>
											<p>
												{c.user.username} as{" "}
												{c.characterSheet === null
													? `the Game Master`
													: `${c.characterSheet.characterFirstName} ${c.characterSheet.characterLastName}`}
												.{" "}
												<span>
													View Character Sheet
												</span>
											</p>
										</React.Fragment>
									))}
									{p.passwordProtected && (
										<>
											<label
												htmlFor={
													p.gameMaster +
													`${index + 1}`
												}
											>
												Password:
											</label>
											<input
												type="password"
												id={
													p.gameMaster +
													`${index + 1}`
												}
												value={password}
												maxLength={100}
												onChange={(e) =>
													setPassword(e.target.value)
												}
												required={p.passwordProtected}
											/>
										</>
									)}
									<label
										htmlFor={p.gameMaster + `${index + 2}`}
									>
										Character Sheets:
									</label>
									<select
										id={p.gameMaster + `${index + 2}`}
										value={selectedCharSheet}
										onChange={(e) =>
											setSelectedCharSheet(e.target.value)
										}
										required
									>
										<option value="">
											Select a Character Sheet
										</option>
										{characterSheets ? (
											characterSheets.map((c, index) => (
												<option
													key={index}
													value={c._id}
												>
													{c.characterFirstName}{" "}
													{c.characterLastName} (
													{c.primaryClass})
												</option>
											))
										) : (
											<option value="">
												No Character sheets found.
											</option>
										)}
									</select>
									<p>
										No Character Sheet?{" "}
										<Link to={"/character-sheet"}>
											Click Here
										</Link>
										.
									</p>
									{p.characters.some(
										(g) => g?.user?._id === user?._id
									) ? (
										<button
											type="button"
											onClick={() =>
												navigate(`/party/${p._id}`)
											}
										>
											Re-Join
										</button>
									) : (
										<button
											type="submit"
											disabled={
												isJoinLoading ||
												p.characters.length >=
													p.maxCharacters
											}
										>
											{isJoinLoading ? (
												<ClipLoader
													color="var(--base-text-color)"
													size={12}
												/>
											) : (
												`Join`
											)}
										</button>
									)}
								</form>
							))
						) : (
							<p>There are no parties to display here.</p>
						)}
						<p>dropdown V</p>
						<p>
							username as first name last name (a way to view char
							sheet?)
						</p>
						<p>
							username as first name last name (a way to view char
							sheet?)
						</p>
						<p>...</p>
						<button type="button">Join</button>
					</div>
					<div>
						<h6>Your Existing Campaigns:</h6>
						<p>GM</p>
						<p>
							status: waiting (if anyone is in) active (if
							campaign is in progress) inactive (if no one is in)
						</p>
						<p>dropdown V</p>
						<p>Characters:</p>
						<p>
							first name last name (a way to view char sheet?) ...
						</p>
						<button type="button">Join</button>
					</div>
				</div>
			</div>
			<ChatBox user={user} globalWs={globalWs} />
			<Outlet context={{ user, globalWs }} />
		</>
	);
};

export default Party;
