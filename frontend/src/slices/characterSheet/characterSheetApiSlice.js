import { apiSlice } from "../apiSlice.js";
import { CHARACTER_SHEET_URL } from "../rootRoutes.js";

export const characterSheetApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createCharacterSheet: builder.mutation({
			query: (data) => ({
				url: `${CHARACTER_SHEET_URL}`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const { useCreateCharacterSheetMutation } = characterSheetApiSlice;
