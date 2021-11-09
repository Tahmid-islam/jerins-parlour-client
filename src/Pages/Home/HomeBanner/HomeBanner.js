import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bannerImg from "../../../Images/Image/banner1.png";
import MuiButton from "../../../StyledComponents/MuiButton";

const HomeBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF8F5" }}>
      <Container sx={{ py: 4, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold", py: 3 }}>
              BEAUTY SALON <br />
              FOR EVERY WOMEN
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "justify" }}>
              Jerin's has proudly been one of the pioneers of beauty related
              services in Bangladesh since it was first established in 1998 and
              has since come a long and joyful way. In these past 24 years,
              Jerin's has experienced immense growth and is now home to over
              1,00,00,000 valuable customers who have availed over 1,70,00,000
              of Jerin’s premium services.
            </Typography>
            <MuiButton sx={{ mt: 2 }}>Get an Appointment</MuiButton>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={bannerImg} alt="" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeBanner;
