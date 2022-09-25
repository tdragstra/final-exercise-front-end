import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export function PostForm(props) {
	return (
		<div style={{ width: 800 }}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>
						<Button> {props.titleComp}</Button>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<div style={{ flexDirection: "column" }}>
							<form onSubmit={props.onSubmit}>
								<TextField
									id="standard-multiline-flexible"
									label="Title"
									name="title"
									placeholder="Enter the title"
									multiline
									maxRows={4}
									value={props.title}
									onChange={props.onChange}
									variant="standard"
								/>
								<br />
								<TextField
									id="standard-textarea"
									label="Content"
									name="content"
									placeholder="Write story"
									multiline
									variant="standard"
									value={props.content}
									rows={4}
									onChange={props.onChange}
								/>
								<br />
								<TextField
									id="standard-multiline-flexible"
									label="Image Url"
									placeholder="Paste a IMG URL"
									name="imageUrl"
									multiline
									maxRows={4}
									value={props.imageUrl}
									onChange={props.onChange}
									variant="standard"
								/>
								<br />
								{props.imageUrl ? (
									<div>
										<Card>
											<CardMedia
												component="img"
												height="250px"
												image={props.imageUrl}
												alt="Invalid URL"
											/>
										</Card>
									</div>
								) : (
									<p> Post a link, and a example will be shown</p>
								)}
								<Button type="submit" onSubmit={props.onSubmit}>
									{props.submit}
								</Button>
							</form>
						</div>
						{/* <div>
							<TextField
								id="standard-multiline-flexible"
								label="Multiline"
								multiline
								maxRows={4}
								value={value}
								onChange={(e) => setValue(e.target.value)}
								variant="standard"
							/>
							<TextField
								id="standard-textarea"
								label="Multiline Placeholder"
								placeholder="Placeholder"
								multiline
								variant="standard"
							/>
							<TextField
								id="standard-multiline-static"
								label="Multiline"
								multiline
								rows={4}
								defaultValue="Default Value"
								variant="standard"
							/>
						</div> */}
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
