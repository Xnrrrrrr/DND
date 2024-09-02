import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { USER_URL } from "../rootRoutes.js";

export const getUserInfo = createAsyncThunk("user/getUserInfo", async () => {
	const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${USER_URL}`);	
	const data = await res.json();
	return data;
});

const initialState = null;

const userSlice = createSlice({
	name: "user",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getUserInfo.fulfilled, (state, action) => {
				return action.payload;
			})
			.addCase(getUserInfo.rejected, (state, action) => {
				console.error("Error fetching user info:", action.error);
				return null;
			});
	},
});

export default userSlice.reducer;
