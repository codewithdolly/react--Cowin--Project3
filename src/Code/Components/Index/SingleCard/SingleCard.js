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
import Image1 from "../../Images/v1.jpg";

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

export default function SingleCard() {
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
            How To Book Your Appointment On CoWIN?
          </Typography>

          <Typography variant="body2" color="text.secondary">
            • Register for a vaccination session
          </Typography>

          <Typography variant="body2" color="text.secondary">
            • Selection of Vaccination center of convenience based on the
            vaccine name
          </Typography>

          <Typography variant="body2" color="text.secondary">
            • Schedule vaccination as per slot availability at a Center
          </Typography>

          <Typography variant="body2" color="text.secondary">
            • Cancel/Reschedule Vaccination
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
              Co-WIN application is the digital back bone for the vaccination
              drive in India. With scaling up of vaccination; the number of
              vaccination facilities and sessions has to be increased and
              managed effectively.
            </Typography>
            <Typography>
              The CO-WIN application will facilitate the citizen with an option
              to register and schedule the vaccination session online in Centers
              of their choice
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
