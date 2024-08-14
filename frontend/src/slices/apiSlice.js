import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
		credentials: "include",
	}),
	tagTypes: ["User", "characterSheet"],
	endpoints: (builder) => ({}),
});
