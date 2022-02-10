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

export default function SingleCard3() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ backgroundColor: "Menu", padding: "20px" }}>
      <Card sx={{ maxWidth: 350, backgroundColor: "" }}>
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title="Download Your Vaccination
          Certificate from CoWIN
          and Wait for Dose #2"
        />
        <CardMedia
          component="img"
          height="194"
          image={Image1}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="p" color="text.secondary">
          • This new feature allows fully vaccinated citizens to update existing photo identity to passport number and date of birth to get International Travel Certificate.
          </Typography>

          <Typography variant="body2" color="text.secondary">
          • Covid Vaccination Certificate download: Corona Vaccination is being organized on a big scale in the country and millions of people are getting vaccinated every day.
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
            <Typography>• get Vaccine Certificate Correction link.</Typography>
            <Typography paragraph>
            www.cowin.gov.in is the official website for the vaccination in India. The website can be used for various purposes but on this page we will only discuss the vaccine certificate download process. Here are some easy steps to lead you through the certificate download process.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
