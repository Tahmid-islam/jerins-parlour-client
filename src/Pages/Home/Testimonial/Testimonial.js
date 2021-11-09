import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import people1 from "../../../Images/Image/Ellipse 90.png";
import people2 from "../../../Images/Image/Ellipse 91.png";
import people3 from "../../../Images/Image/Ellipse 92.png";

const Testimonial = () => {
  return (
    <Container sx={{ py: 5, my: 5 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", py: 2, fontWeight: "bold" }}
      >
        Testimonials
      </Typography>
      <Grid container spacing={2} sx={{ my: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ pb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                mx: 2,
              }}
            >
              <Box>
                <img style={{ width: "80%" }} src={people1} alt="" />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Winson Harry
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  California
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", p: 2, m: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              delectus doloribus voluptatum autem nobis dolor soluta vel ipsam
              minima molestiae.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ pb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                mx: 2,
              }}
            >
              <Box>
                <img style={{ width: "80%" }} src={people2} alt="" />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Winson Harry
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  California
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", p: 2, m: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              delectus doloribus voluptatum autem nobis dolor soluta vel ipsam
              minima molestiae.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ pb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                mx: 2,
              }}
            >
              <Box>
                <img style={{ width: "80%" }} src={people3} alt="" />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Winson Harry
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  California
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", p: 2, m: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              delectus doloribus voluptatum autem nobis dolor soluta vel ipsam
              minima molestiae.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
