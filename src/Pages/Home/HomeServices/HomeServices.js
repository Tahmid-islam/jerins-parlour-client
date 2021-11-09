import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
const services = [
  {
    title: "Anti Age Face Treatment",
    img: "https://i.ibb.co/WH7PkCW/Group-1372.png",
    price: "199",
    description:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
  },
  {
    title: "Hair Color & Styling",
    img: "https://i.ibb.co/WzGtrZJ/Group-1373.png",
    price: "99",
    description:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    title: "Skin Care Treatment",
    img: "https://i.ibb.co/SJd8zQt/Group-1374.png",
    price: "299",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];

const HomeServices = () => {
  //   const [services, setServices] = useState([]);
  //   useEffect(() => {
  //     setServices(services);
  //   }, []);
  return (
    <Box sx={{ my: 7 }}>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", py: 5 }}
        >
          Our Awesome <span style={{ color: "#F63E7B" }}> Services</span>
        </Typography>
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ textAlign: "center" }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{ width: "100px" }}
              />
              <Typography variant="h5" component="h2">
                {service.title}
              </Typography>

              <Typography
                variant="h6"
                component="h2"
                style={{ color: "#F63E7B" }}
              >
                ${service.price}
              </Typography>
              <Typography variant="body1" component="p">
                {service.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeServices;
