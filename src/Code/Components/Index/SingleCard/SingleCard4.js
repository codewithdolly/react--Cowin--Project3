import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image1 from "../../Images/v4.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SingleCard4() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ backgroundColor: "Menu", padding: "20px" }}>
      <Card sx={{ maxWidth: 350, backgroundColor: "" }}>
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title="Book an Appointment On
        CoWIN or Walk Into Any
        Vaccination Center"
        />
        <CardMedia
          component="img"
          height="194"
          image={Image1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="p" color="text.secondary">
            Citizen Registration and Appointment for Vaccination
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b>Login: </b> • Citizen logs in to cowin.gov.in
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Schedule Vaccine Appointment: </b> • Citizen schedules
            appointment at the near by Vaccination center
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b>Vaccination Completed : </b> • Citizen gets vaccinated at the
            selected center on the... <br />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              scheduled date after verification and Citizens schedules
              appointment for dose 2 after 28 days
            </Typography>
            <Typography>
              <b>Confirmation of appointment</b>
              Citizen can download the appointment slip <br />
              The appointment is also shared as SMS on registered mobile no.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
