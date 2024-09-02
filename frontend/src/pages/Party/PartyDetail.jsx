import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
	useGetPartyQuery,
	useLeavePartyMutation,
	useDeletePartyMutation,
} from "../../slices/party/partyApiSlice.js";
import { Header, ChatBox } from "../../components";
import { ClipLoader } from "react-spinners";

const PartyDetail = () => {
	const { user, ws } = useOutletContext();
	const { partyId } = useParams();
	const { data, isLoading, error, refetch } = useGetPartyQuery(partyId);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const [deleteParty, { isDeletePartyLoading }] = useDeletePartyMutation();
	const [leaveParty, { isLeavePartyLoading }] = useLeavePartyMutation();

	useEffect(() => {
		if (ws) {
			const handleMessage = (e) => {
				const message = JSON.parse(e.data);

				if (
					message.type === "partyDeleted" &&
					message.partyId === partyId
				) {
					navigate("/party");
				} else if (
					message.type === "updateParty" ||
					message.type === "joinParty" ||
					message.type === "leaveParty"
				) {
					if (location.pathname === `/party/${partyId}`) {
						refetch();
					}
				}
			};

			ws.addEventListener("message", handleMessage);

			return () => {
				ws.removeEventListener("message", handleMessage);
			};
		}
	}, [ws, refetch]);

	//Need to create a way to detect user' leaving this page

	const handlePartyDelete = async () => {
		try {
			const res = await deleteParty().unwrap();
			//console.log(res);
			if (res) {
				ws.send(JSON.stringify({ type: "updateParty" }));
				ws.send(JSON.stringify({ type: "deleteParty", partyId }));
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handlePartyLeave = async () => {
		try {
			const res = await leaveParty(partyId).unwrap();
			console.log(res);
			if (res) {
				ws.send(JSON.stringify({ type: "updateParty" }));
				navigate("/party");
			}
		} catch (err) {
			console.error(err);
		}
	};

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading party: {error.message}</p>;

	return (
		<>
			<Header />
			<div className="party-background">
				<h2>Welcome to {data.party.gameMaster}'s Campaign</h2>
				<p>Count: {data.party.characters.length}</p>
				{user.username === data.party.gameMaster ? (
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
			{/* Display other party details here */}
			{user && <ChatBox user={user} />}
		</>
	);
};

export default PartyDetail;
