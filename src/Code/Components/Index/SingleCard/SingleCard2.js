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
import Image1 from "../../Images/vaccinated_img2.png";

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

export default function SingleCard2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ backgroundColor: "Menu", padding: "20px" }}>
      <Card sx={{ maxWidth: 350, backgroundColor: "" }}>
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title="         Get Your Vaccination
          Safely at the Time of Your
          Appointment"
        />
        <CardMedia
          component="img"
          height="194"
          image={Image1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="p" color="text.secondary">
            Dos And Dont's For Getting Vaccinated
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b>Do:</b>Register and schedule your vaccination in advance
            <br /> <b>Doesn't: </b>Walk-in without appointment
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b>Do:</b>Register online through Co-WIN OR Aarogya
            Setu OR UMANG platform
            <br /> <b>Doesn't: </b>WOne-person register in
            multiple platforms
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
            <Typography variant="body2" color="text.secondary">
              <b>Do:</b>To receive Health ID as part of registration for
              vaccination, give your consent
              <br /> <b>Doesn't: </b>Register again for second
              dose

            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              <b>Do:</b>Carry ID proof when you go for vaccination

              <br /> <b>Doesn't: </b>Consume alcohol or other
              intoxicants on the day of
              vaccination
            </Typography>
            <br />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
