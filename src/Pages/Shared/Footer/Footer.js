import {
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  footerStyle: {
    backgroundColor: "#F63E7B",

    left: "0",
    bottom: "0",
    right: "0",
  },
  socialIcon: {
    color: "#fff !important",
    border: "1px solid #fff !important",
    margin: "20px 10px 30px 0 !important",
    "&:hover": {
      background: "#19D3AE !important",
      color: "#fff !important",
    },
  },
});
const Footer = () => {
  const { socialIcon, footerStyle } = useStyle();
  return (
    <footer className={footerStyle}>
      <Container>
        <Grid container spacing={3} sx={{ mt: "10vh", color: "#fff" }}>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton className={socialIcon}>
                <LocationOnIcon />
              </IconButton>
              <ListItemText sx={{ mt: 2 }}>
                H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                Bangladesh
              </ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                Company
              </ListItemText>
              <ListItemText>About</ListItemText>
              <ListItemText>Project</ListItemText>
              <ListItemText>Our Team</ListItemText>
              <ListItemText>Terms Conditions</ListItemText>
              <ListItemText>Submit Listing</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                Quick Links
              </ListItemText>
              <ListItemText>Rentals</ListItemText>
              <ListItemText>Sales</ListItemText>
              <ListItemText>Contact</ListItemText>
              <ListItemText>Our blog</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1 }}>About us</ListItemText>
              <ListItemText>
                Jerin's parlour has proudly been one of the pioneers of beauty
                related services in Bangladesh since it was first established in
                1998 and has since come a long and joyful way.
              </ListItemText>
              <ListItemText>Yards</ListItemText>
            </List>
            <IconButton className={socialIcon}>
              <GoogleIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <TwitterIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <InstagramIcon />
            </IconButton>
            <Typography>Call Now</Typography>
            <Button style={{ backgroundColor: "#ff80ab", color: "white" }}>
              +8065432145
            </Button>
          </Grid>
        </Grid>
        <Typography
          sx={{ textAlign: "center", py: 4, color: "#fff" }}
          variant="subtitle2"
        >
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
