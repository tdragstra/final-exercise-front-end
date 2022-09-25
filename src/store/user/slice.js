import { Satellite } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
	token: localStorage.getItem("token"),
	profile: null,
	spaceUser: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			localStorage.setItem("token", action.payload.token);
			state.token = action.payload.token;
			state.profile = action.payload.user;
			state.spaceUser = action.payload.spaceUser;
		},
		logOut: (state, action) => {
			localStorage.removeItem("token");
			state.token = null;
			state.profile = null;
			state.spaceUser = null;
		},
		tokenStillValid: (state, action) => {
			state.profile = action.payload.user;
			state.spaceUser = action.payload.user.spaceUser;
		},
		storyDeleteSuccess: (state, action) => {
			const storyId = action.payload;
			state.spaceUser.stories = state.spaceUser.stories.filter(
				(s) => s.id !== storyId
			);
		},
		// storyAddSuccess: (state, action) => {
		// 	const story = action.payload;
		// 	state.spaceUser.stories = { ...state.spaceUser.stories, ...story };
		// 	// state.spaceUser.stories = { ...story, ...state.spaceUser.stories };
		// },
	},
});

export const { loginSuccess, logOut, tokenStillValid, storyDeleteSuccess } =
	userSlice.actions;

export default userSlice.reducer;
