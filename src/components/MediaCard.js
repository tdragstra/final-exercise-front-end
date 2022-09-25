import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteStory,
	fetchSpaceAndStories,
	postStory,
	updateSpace,
} from "../store/space/thunks";
import { selectStories } from "../store/space/selectors";
import { useNavigate, useParams } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { selectSpaceUser } from "../store/user/selectors";
import { PostForm } from "./PostForm";
import { useState } from "react";
import { SliceForm } from "./SliceForm";
// sliceForm should be spaceForm

export const MediaCard = () => {
	const dispatch = useDispatch();
	const spaceDetail = useSelector(selectStories);
	const spaceUser = useSelector(selectSpaceUser);

	const { id } = useParams();

	// useEffect(() => {
	// 	dispatch(fetchSpaceAndStories(id));
	// }, [dispatch, id]);

	const [state, setState] = useState({
		title: "",
		content: " ",
		imageUrl: "",
	});
	const [spaceChange, setSpaceChange] = useState({
		title: "",
		description: "",
		backgroundColor: "",
		color: "",
	});

	useEffect(() => {
		dispatch(fetchSpaceAndStories(id));
	}, [dispatch, id]);

	const onChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(postStory(id, state));
	};
	const onChangeSpace = (e) => {
		setSpaceChange({ ...spaceChange, [e.target.name]: e.target.value });
	};
	const onSubmitSpace = (e) => {
		e.preventDefault();
		dispatch(updateSpace(id, spaceChange));
	};

	if (!spaceDetail.stories || parseInt(spaceDetail.id) !== parseInt(id)) {
		return <div>"loading"</div>;
	}

	//  if (!space || parseInt(space.id) !== parseInt(id)) return <Loading />;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: spaceChange.backgroundColor,
			}}
		>
			{spaceUser ? (
				spaceUser.userId === spaceDetail.userId ? (
					<div>
						<PostForm
							titleComp="Post a new story"
							submit="Cool story bro"
							title={state.title}
							content={state.content}
							imageUrl={state.imageUrl}
							onChange={onChange}
							onSubmit={onSubmit}
						/>
						<SliceForm
							titleComp="Change your slice"
							submit="Save changes"
							title={spaceChange.title}
							description={spaceChange.description}
							backgroundColor={spaceChange.backgroundColor}
							color={spaceChange.color}
							onChangeSpace={onChangeSpace}
							onSubmitSpace={onSubmitSpace}
						/>
					</div>
				) : (
					<p style={{ fontSize: "15px" }}> Welcome to {spaceDetail.title} </p>
				)
			) : (
				<p style={{ fontSize: "15px" }}>Welcome to {spaceDetail.title} </p>
			)}

			{spaceDetail.stories.map((e) => (
				<Card
					sx={{
						width: 800,
						margin: 5,
						border: 1,
						backgroundColor: "white",
						color: "black",
					}}
					key={e.id}
				>
					<CardMedia
						component="img"
						height="250px"
						image={e.imageUrl}
						alt="green iguana"
					/>
					<CardContent>
						Created{" "}
						<Moment tz="Europe/Amsterdam" fromNow>
							{e.createdAt}
						</Moment>
						<Typography gutterBottom variant="h5" component="div">
							{e.name}
						</Typography>
						<Typography variant="body" color="text.secondary">
							{e.content}
						</Typography>
					</CardContent>
					<CardActions>
						{/* {console.log("user", user.id)}
						{console.log("map", e.spaceId)} */}

						{spaceUser ? (
							spaceUser.id === e.spaceId ? (
								<div>
									<Button
										size="small"
										style={{ width: "180px" }}
										onClick={() => {
											dispatch(deleteStory(e.id));
										}}
									>
										Delete this post
									</Button>

									<PostForm
										title="Edit story"
										submit="Edit your story bro"
										titleComp="Edit story"
									/>
									<p style={{ fontSize: "10px" }}>
										edited {""}
										<Moment tz="Europe/Amsterdam" fromNow>
											{e.createdAt}
										</Moment>
									</p>
								</div>
							) : (
								<p style={{ fontSize: "12px" }}>edited (time) ago</p>
							)
						) : (
							<p style={{ fontSize: "10px" }}>
								edited {""}
								<Moment tz="Europe/Amsterdam" fromNow>
									{e.createdAt}
								</Moment>
							</p>
						)}
					</CardActions>
				</Card>
			))}
		</div>
	);
};
