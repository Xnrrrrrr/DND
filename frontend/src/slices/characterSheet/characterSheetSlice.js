import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CHARACTER_SHEET_URL } from "../rootRoutes.js";

const initialState = null;

const characterSheetSlice = createSlice({
	name: "characterSheet",
	initialState,
});

export default characterSheetSlice.reducer;
