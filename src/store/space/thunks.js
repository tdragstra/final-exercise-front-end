// import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios"; // Import axios from our file, not the library
import {
	spacesFetched,
	storiesFetched,
	storyDelete2,
	storyNewSuccess,
	spaceChangeSuccess,
} from "./slice";
import { storyAddSuccess, storyDeleteSuccess } from "../user/slice";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";

export const fetchSpaces = () => async (dispatch, getState) => {
	try {
		const response = await axios.get(`/`);
		dispatch(spacesFetched(response.data));
	} catch (e) {
		console.log(e.message);
	}
};

export const fetchSpaceAndStories = (id) => async (dispatch, getState) => {
	try {
		const response = await axios.get(`/spaces/${id}`);

		dispatch(storiesFetched(response.data));
	} catch (e) {
		console.log(e.message);
	}
};

export const deleteStory = (id) => async (dispatch, getState) => {
	const { token, spaceUser } = getState().user;
	try {
		const response = await axios.delete(`/delete/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch(storyDelete2(response.data.storyId));

		dispatch(showMessageWithTimeout("success", false, "Deleted!", 1500));
		// dispatch(setMessage(response.data.message));
	} catch (error) {
		console.log(error.message);
	}
};

export const postStory = (id, story) => async (dispatch, getState) => {
	const { token, spaceUser } = getState().user;
	const data = {
		name: story.title,
		imageUrl: story.imageUrl,
		content: story.content,
	};
	// console.log(story);
	// console.log(id);
	// const { title, content, imageUrl } = story;
	try {
		const response = await axios.post(`/${id}/stories`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		// dispatch(storyAddSuccess(response.data.story));
		dispatch(storyNewSuccess(response.data.story));
		dispatch(showMessageWithTimeout("success", false, "Story added!", 1500));
	} catch (e) {
		console.log("message1", e.message);
	}
};

export const updateSpace = (id, space) => async (dispatch, getState) => {
	const { token, spaceUser } = getState().user;
	const data = {
		title: space.title,
		description: space.description,
		color: space.color,
		backgroundColor: space.backgroundColor,
	};
	try {
		const response = await axios.patch(`/${id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log("test", response.data.space);
		dispatch(spaceChangeSuccess(response.data.space));
	} catch (e) {
		console.log("Error", e.message);
	}
};
