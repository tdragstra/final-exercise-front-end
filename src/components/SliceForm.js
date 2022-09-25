import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { selectStories } from "../store/space/selectors";

export function SliceForm(props) {
	const spaceDetail = useSelector(selectStories);
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
							<form onSubmit={props.onSubmitSpace}>
								<label> Color </label>
								<input
									type="color"
									name="color"
									placeholder={spaceDetail.color}
									value={props.color}
									onChange={props.onChangeSpace}
								></input>
								<br />
								<label> Background Color </label>
								<input
									type="color"
									name="backgroundColor"
									placeholder={spaceDetail.backgroundColor}
									value={props.backgroundColor}
									onChange={props.onChangeSpace}
								></input>
								<br />
								<TextField
									id="standard-textarea"
									label="Title"
									name="title"
									placeholder="Title"
									multiline
									variant="standard"
									value={props.title}
									rows={4}
									onChange={props.onChangeSpace}
								/>
								<br />
								<TextField
									id="standard-multiline-flexible"
									label="Description  "
									placeholder="Write the description"
									name="description"
									multiline
									rows={4}
									value={props.description}
									onChange={props.onChangeSpace}
									variant="standard"
								/>
								<br />
								<Button type="submit" onSubmit={props.onSubmitSpace}>
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
