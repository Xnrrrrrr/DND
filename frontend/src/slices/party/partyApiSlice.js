import { apiSlice } from "../apiSlice.js";
import { PARTY_URL } from "../rootRoutes.js";

export const partyApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createParty: builder.mutation({
			query: (data) => ({
				url: `${PARTY_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		joinParty: builder.mutation({
			query: (data) => ({
				url: `${PARTY_URL}/join`,
				method: "POST",
				body: data,
			}),
		}),
		getParty: builder.query({
			query: (partyId) => ({
				url: `${PARTY_URL}/${partyId}`,
				method: "GET",
			}),
		}),
		leaveParty: builder.mutation({
			query: (partyId) => ({
				url: `${PARTY_URL}/${partyId}/leave`,
				method: "PUT",
			}),
		}),
		kickFromParty: builder.mutation({
			query: ({ partyId, playerId, playerUsername }) => ({
				url: `${PARTY_URL}/${partyId}/kick`,
				method: "PUT",
				body: { playerId, playerUsername },
			}),
		}),
		deleteParty: builder.mutation({
			query: (data) => ({
				url: `${PARTY_URL}`,
				method: "DELETE",
				body: data,
			}),
		}),
	}),
});

export const {
	useCreatePartyMutation,
	useJoinPartyMutation,
	useGetPartyQuery,
	useLeavePartyMutation,
	useKickFromPartyMutation,
	useDeletePartyMutation,
} = partyApiSlice;
