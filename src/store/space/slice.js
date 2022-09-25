import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
	spaces: [],
	spacesDetail: {},
};

export const spaceSlice = createSlice({
	name: "slice",
	initialState,
	reducers: {
		spacesFetched: (state, action) => {
			state.spaces = action.payload; // get our list of posts from the action payload
			// state.loading = false;
			// console.log(newArray);
		},
		storiesFetched: (state, action) => {
			state.spacesDetail = action.payload;
			// console.log(newDetail);
		},
		storyDelete2: (state, action) => {
			const storyId = action.payload;
			state.spacesDetail.stories = state.spacesDetail.stories.filter(
				(s) => s.id !== storyId
			);
		},
		storyNewSuccess: (state, action) => {
			const story = action.payload;
			console.log("slice", story);
			state.spacesDetail.stories = [
				...state.spacesDetail.stories,
				{ ...story },
			];
			// state.spaceUser.stories = { ...story, ...state.spaceUser.stories };
		},
		spaceChangeSuccess: (state, action) => {
			state.spacesDetail = {
				...action.payload,
				stories: state.spacesDetail.stories,
			};
		},
	},
});

export const {
	storiesFetched,
	spacesFetched,
	storyDelete2,
	storyNewSuccess,
	spaceChangeSuccess,
} = spaceSlice.actions;

export default spaceSlice.reducer;
