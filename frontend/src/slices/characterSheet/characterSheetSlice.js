import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CHARACTER_SHEET_URL } from "../rootRoutes.js";

export const getAllUserCharacterSheets = createAsyncThunk(
	"characterSheet/getAllUserCharacterSheets",
	async () => {
		const res = await fetch(`${CHARACTER_SHEET_URL}/user`);
		const data = await res.json();
		return data;
	}
);

const initialState = null;

const characterSheetSlice = createSlice({
	name: "characterSheet",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAllUserCharacterSheets.fulfilled, (state, action) => {
				return action.payload;
			})
			.addCase(getAllUserCharacterSheets.rejected, (state, action) => {
				console.error("Error fetching user info:", action.error);
				return null;
			});
	},
});

export default characterSheetSlice.reducer;
