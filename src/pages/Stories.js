import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MediaCard } from "../components";
import { selectStories } from "../store/space/selectors";
import { fetchSpaceAndStories } from "../store/space/thunks";

export const Stories = () => {
	const space = useSelector(selectStories);
	const dispatch = useDispatch();
	const id = useParams();

	useEffect(() => {
		dispatch(fetchSpaceAndStories(id));
	}, [dispatch, id]);

	return (
		<div style={{ backgroundColor: space.backgroundColor, color: space.color }}>
			<h1> {space.title} </h1>
			<h2> {space.description}</h2>
			<MediaCard />;
		</div>
	);
};
