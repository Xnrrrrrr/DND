import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GENERAL_CHAT_URL } from "../../rootRoutes.js";

export const getGeneralMessages = createAsyncThunk(
	"generalChat/getGeneralMessages",
	async () => {
		const res = await fetch(
			`${import.meta.env.VITE_BASE_URL}/${GENERAL_CHAT_URL}`
		);
		const data = await res.json();
		return data;
	}
);

const initialState = null;

const generalChatSlice = createSlice({
	name: "generalChat",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getGeneralMessages.fulfilled, (state, action) => {
				return action.payload;
			})
			.addCase(getGeneralMessages.rejected, (state, action) => {
				console.error(
					"Error fetching general chat info:",
					action.error
				);
				return null;
			});
	},
});

export default generalChatSlice.reducer;
