import { apiSlice } from "../apiSlice.js";
import { USER_URL } from '../rootRoutes.js';

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: `${USER_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		login: builder.mutation({
			query: (data) => ({
				url: `${USER_URL}/auth`,
				method: "POST",
				body: data,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: `${USER_URL}/logout`,
				method: "POST",
			}),
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useLogoutMutation,
} = userApiSlice