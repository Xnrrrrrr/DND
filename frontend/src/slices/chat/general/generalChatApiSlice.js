import { apiSlice } from "../../apiSlice";
import { GENERAL_CHAT_URL } from "../../rootRoutes";

export const generalChatApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		saveGeneralMessage: builder.mutation({
			query: (data) => ({
				url: `${GENERAL_CHAT_URL}`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const { useSaveGeneralMessageMutation } = generalChatApiSlice;
