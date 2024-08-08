import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "./slices/user/userSlice.js";

const store = configureStore({
	reducer: {
		user: userReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

setupListeners(store.dispatch);

export default store;
