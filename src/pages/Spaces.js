import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { selectSpaces } from "../store/space/selectors";
import { useEffect } from "react";
import { fetchSpaces } from "../store/space/thunks";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

export const Spaces = () => {
	const dispatch = useDispatch();
	const spaces = useSelector(selectSpaces);

	useEffect(() => {
		dispatch(fetchSpaces());
	}, [dispatch]);

	if (!spaces) {
		return <div>"loading.."</div>;
	}

	return (
		<div>
			{spaces.map((e) => (
				<div key={e.id}>
					<Box sx={{ minWidth: 275 }}>
						<Card variant="outlined">
							<React.Fragment>
								<CardContent sx={{ backgroundColor: e.backgroundColor }}>
									<Typography
										sx={{ fontSize: 25, color: e.color }}
										gutterBottom
									>
										<AccountCircleIcon fontSize="large" />
									</Typography>

									<Typography variant="h5" component="div">
										{e.title}
									</Typography>
									<Typography sx={{ mb: 1.5 }} color={e.color}>
										{e.title}
									</Typography>
									<Typography variant="body2">{e.description}</Typography>
								</CardContent>
								<CardActions>
									<Button size="large">
										<NavLink to={`/spaces/${e.id}`}>
											Visit Space for stories
										</NavLink>
									</Button>
								</CardActions>
							</React.Fragment>
						</Card>
					</Box>
				</div>
			))}
		</div>
	);
};
