// import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectToken, selectSpaceUser } from "../store/user/selectors";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Moment from "react-moment";
// import "moment-timezone";
// import { getUserWithStoredToken } from "../store/user/thunks";

// export const MySpace = (props) => {
// 	const spaceUser = useSelector(selectSpaceUser);
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(getUserWithStoredToken());
// 	}, [dispatch]);

// 	if (!spaceUser.stories) {
// 		return <div>"loading"</div>;
// 	}
// 	return (
// 		<div>
// 			{spaceUser.stories.map((e) => (
// 				<Card
// 					key={e.id}
// 					sx={{
// 						maxWidth: 345,
// 						margin: 5,
// 						border: 1,
// 						backgroundColor: "white",
// 						color: "black",
// 					}}
// 				>
// 					<CardMedia
// 						component="img"
// 						height="140"
// 						image={e.imageUrl}
// 						alt="green iguana"
// 					/>
// 					<CardContent>
// 						<Moment tz="Europe/Amsterdam" fromNow>
// 							{e.createdAt}
// 						</Moment>
// 						<Typography gutterBottom variant="h5" component="div">
// 							{e.name}
// 						</Typography>
// 						<Typography variant="body" color="text.secondary">
// 							{e.content}
// 						</Typography>
// 					</CardContent>
// 					<CardActions>
// 						<Button size="small">Share</Button>
// 						<Button size="small">Learn More</Button>
// 					</CardActions>
// 				</Card>
// 			))}
// 		</div>
// 	);
// };
