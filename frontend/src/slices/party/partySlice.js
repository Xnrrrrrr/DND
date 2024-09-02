import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PARTY_URL } from "../rootRoutes.js";

export const getParties = createAsyncThunk("party/getParties", async () => {
	const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${PARTY_URL}`);
	const data = await res.json();
	return data;
});

const initialState = null;

const partySlice = createSlice({
	name: "party",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getParties.fulfilled, (state, action) => {
				return action.payload;
			})
			.addCase(getParties.rejected, (state, action) => {
				console.error("Error fetching party info:", action.error);
				return null;
			});
	},
});

export default partySlice.reducer;
