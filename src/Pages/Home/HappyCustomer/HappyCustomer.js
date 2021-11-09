import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import skinImg from "../../../Images/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const HappyCustomer = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF8F5" }}>
      <Container sx={{ py: 4, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={skinImg} alt="" width="100%" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold", py: 3 }}>
              Let us handle your <br /> skin
              <span style={{ color: "#F63E7B" }}> professionally.</span>
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HappyCustomer;
