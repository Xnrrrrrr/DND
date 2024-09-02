import { useState, useEffect } from "react";
import { Header, ChatBox, SliderSwitch } from "../../components";
import { handleNumberChange, enforceMinMax } from "../../utils/index.js";
import { useDispatch } from "react-redux";
import { useCreatePartyMutation } from "../../slices/party/partyApiSlice.js";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const PartyCreate = () => {
	const { user, ws } = useOutletContext();

	const [isPasswordProtected, setIsPasswordProtected] = useState(false);
	const [password, setPassword] = useState("");
	const [isAllowHomebrew, setIsAllowHombrew] = useState(false);
	const [maxCharacters, setMaxCharacters] = useState(2);

	const [createParty, { isCreatePartyLoading }] = useCreatePartyMutation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await createParty({
				gameMaster: user.username,
				passwordProtected: isPasswordProtected,
				password,
				homebrew: isAllowHomebrew,
				maxCharacters,
			}).unwrap();
			if (res && res.party && res.party._id) {
				ws.send(JSON.stringify({ type: "updateParty" }));
				navigate(`/party/${res.party._id}`);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Header />
			<div className="party-background">
				<div className="party-create-container">
					<form onSubmit={handleSubmit}>
						<h2>Create a Party</h2>
						<div>
							<SliderSwitch
								label="Make your party password protected?"
								tooltipLabel="?"
								tooltipContent="You will have to share this password to the individuals you wish to start a campaign with."
								toolTipSpanClassName="tooltip-character-sheet-span"
								checked={isPasswordProtected}
								onChange={() => {
									setIsPasswordProtected(
										!isPasswordProtected
									);
									setPassword("");
								}}
								id="password-protect"
							/>
						</div>
						<label htmlFor="password">Password:</label>
						<input
							type="text"
							id="password"
							value={password}
							disabled={!isPasswordProtected}
							onChange={(e) => setPassword(e.target.value)}
							style={{}}
							maxLength={100}
						/>
						<div>
							<SliderSwitch
								label="Allow homebrew characters?"
								tooltipLabel="?"
								tooltipContent="Homebrew characters are often seen as overpowered or underpowered. If you do include homebrew characters, make sure to study their character sheets."
								toolTipSpanClassName="tooltip-character-sheet-span"
								checked={isAllowHomebrew}
								onChange={() =>
									setIsAllowHombrew(!isAllowHomebrew)
								}
								id="is-homebrew"
							/>
						</div>
						<label htmlFor="campaign-number">
							How many characters will be in your campaign? (This
							is including yourself)
						</label>
						<input
							type="number"
							id="campaign-number"
							value={maxCharacters}
							onChange={(e) =>
								handleNumberChange(e, setMaxCharacters)
							}
							onBlur={(e) =>
								enforceMinMax(e, setMaxCharacters, 2, 8)
							}
							min={2}
							max={8}
						/>
						<button
							type="button"
							style={{ backgroundColor: "red" }}
							onClick={() => navigate(-1)}
						>
							Cancel
						</button>
						<button type="submit" disabled={isCreatePartyLoading}>
							{isCreatePartyLoading ? (
								<ClipLoader
									color="var(--base-text-color)"
									size={12}
								/>
							) : (
								`Create`
							)}
						</button>
					</form>
				</div>
			</div>
			{user && <ChatBox user={user} />}
		</>
	);
};

export default PartyCreate;
