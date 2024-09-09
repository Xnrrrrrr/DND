import { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
	useGetPartyQuery,
	useLeavePartyMutation,
	useKickFromPartyMutation,
	useDeletePartyMutation,
} from "../../slices/party/partyApiSlice.js";
import { Header, ChatBox } from "../../components";
import { ClipLoader } from "react-spinners";
import { MdRefresh } from "react-icons/md";

const PartyDetail = () => {
	const { user } = useOutletContext();
	const { partyId } = useParams();
	const { data, isLoading, error, refetch } = useGetPartyQuery(partyId);
	const [ws, setWs] = useState(null);

	const [userStatuses, setUserStatuses] = useState({});

	const gameMaster = useRef(null);
	const leaveCalled = useRef(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const [leaveParty, { isLeavePartyLoading }] = useLeavePartyMutation();
	const [kickFromParty, { isKickFromPartyLoading }] =
		useKickFromPartyMutation();
	const [deleteParty, { isDeletePartyLoading }] = useDeletePartyMutation();

	useEffect(() => {
		const handleMessage = (e) => {
			const message = JSON.parse(e.data);

			//console.log("Message received: ", message);

			if (
				message.type === "partyDeleted" &&
				message.partyId === partyId
			) {
				navigate("/party");
			} else if (message.type === "updateParty") {
				// Need to resolve the error when refetching causes a 404 after deleteing a party
				if (location.pathname === `/party/${partyId}`) {
					refetch();
				}
				if (message.id === user?._id) {
					window.alert("You have been kicked from the party.");
					navigate("/party");
					window.location.reload();
				}
			} else if (message.type === "userPartyState") {
				setUserStatuses(message.statuses);
			}
		};

		const wss = new WebSocket(`${import.meta.env.VITE_WS_BASE_URL}`);
		wss.addEventListener("open", () => {
			console.log("WebSocket opened in PartyDetail");
			setWs(wss);
		});
		wss.addEventListener("message", handleMessage);
		wss.addEventListener("error", (e) => {
			console.error("WebSocket error:", e);
		});
		wss.addEventListener("close", () => {
			console.log("WebSocket closed in PartyDetail");
		});
		return () => {
			wss.close();
		};
	}, []);

	const handlePartyDelete = async () => {
		try {
			const res = await deleteParty().unwrap();
			//console.log(res);
			if (res && ws && ws.readyState === WebSocket.OPEN) {
				ws.send(JSON.stringify({ type: "updateParty" }));
				ws.send(JSON.stringify({ type: "deleteParty", partyId }));
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handlePartyLeave = async () => {
		if (leaveCalled.current) return;

		leaveCalled.current = true;

		try {
			const res = await leaveParty(partyId).unwrap();
			//console.log(res);
			if (res && ws && ws.readyState === WebSocket.OPEN) {
				ws.send(JSON.stringify({ type: "updateParty" }));
			}
			navigate("/party");
		} catch (err) {
			console.error(err);
		}
	};

	const handleKick = async (playerId, playerUsername) => {
		if (user.username === gameMaster) return;

		try {
			const res = await kickFromParty({
				partyId,
				playerId,
				playerUsername,
			}).unwrap();
			//console.log(res);
			if (res && ws && ws.readyState === WebSocket.OPEN) {
				ws.send(JSON.stringify({ type: "updateParty", playerId }));
			}
		} catch (err) {
			console.error(err);
		}
	};

	// Needed if a user leaves and rejoins another party
	useEffect(() => {
		if (location.pathname === `/party/${partyId}` && data) {
			refetch();
		}
	}, [location]);

	useEffect(() => {
		if (data) {
			gameMaster.current = data.party.gameMaster; // Set the gameMaster once data is loaded
			if (ws) {
				ws.send(
					JSON.stringify({
						type: "userPartyState",
						state: "open",
						status: "present",
					})
				);
			} else {
				window.location.reload();
			}
		}
	}, [data]);

	useEffect(() => {
		if (location.pathname === `/party/${partyId}`) {
			refetch();
		}
	}, [location, partyId, ws]);

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (ws) {
				if (document.visibilityState === "hidden") {
					ws.send(
						JSON.stringify({
							type: "userPartyState",
							state: "open",
							status: "afk",
						})
					);
				} else {
					ws.send(
						JSON.stringify({
							type: "userPartyState",
							state: "open",
							status: "present",
						})
					);
				}
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
		};
	}, [ws]);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading party: {error.message}</p>;
	if (!user) return <p>User not loaded.</p>;

	return (
		<>
			<Header />
			<div className="party-background">
				<h2>Welcome to {data.party.gameMaster}'s Campaign</h2>
				<p>Count: {data.party.characters.length}</p>
				<p>
					Characters:
					<MdRefresh
						size={12}
						color="var(--base-text-color)"
						style={{ cursor: "pointer" }}
						onClick={() => {
							refetch();
						}}
					/>
				</p>
				{data.party.characters.map((m, index) => {
					const isUserOpen =
						userStatuses[m.user.username]?.state === "open";
					const isUserAFK =
						userStatuses[m.user.username]?.status === "afk";
					const userDotColor = isUserOpen
						? !isUserAFK
							? "green"
							: "yellow"
						: "red";

					return m.characterSheet === null ? (
						<p key={index}>
							<span
								style={{
									display: "inline-block",
									width: "10px",
									height: "10px",
									backgroundColor: userDotColor,
									borderRadius: "50%",
									marginRight: "8px",
								}}
							></span>
							{m.user.username} as the Game Master.
						</p>
					) : (
						<p key={index}>
							<span
								style={{
									display: "inline-block",
									width: "10px",
									height: "10px",
									backgroundColor: userDotColor,
									borderRadius: "50%",
									marginRight: "8px",
								}}
							></span>
							{m.user.username} as{" "}
							{m.characterSheet.characterFirstName}{" "}
							{m.characterSheet.characterLastName} (A{" "}
							{m.characterSheet.primaryClass}{" "}
							{m.characterSheet.race}){" "}
							{user.username === data.party.gameMaster && (
								<button
									type="button"
									onClick={() =>
										handleKick(m.user._id, m.user.username)
									}
								>
									{isKickFromPartyLoading ? (
										<ClipLoader
											color="var(--base-text-color)"
											size={12}
										/>
									) : (
										`Kick ${m.user.username}`
									)}
								</button>
							)}
						</p>
					);
				})}
				{user.username === data.party.gameMaster ? (
					<>
						<button
							type="button"
							disabled={isDeletePartyLoading}
							onClick={handlePartyDelete}
						>
							{isDeletePartyLoading ? (
								<ClipLoader
									color="var(--base-text-color)"
									size={12}
								/>
							) : (
								`Delete Party`
							)}
						</button>
						<button type="button">Create Campaign</button>
					</>
				) : (
					<button
						type="button"
						disabled={isLeavePartyLoading}
						onClick={handlePartyLeave}
					>
						{isLeavePartyLoading ? (
							<ClipLoader
								color="var(--base-text-color)"
								size={12}
							/>
						) : (
							`Leave`
						)}
					</button>
				)}
			</div>
			{user && data.party && <ChatBox user={user} party={data.party} />}
		</>
	);
};

export default PartyDetail;
