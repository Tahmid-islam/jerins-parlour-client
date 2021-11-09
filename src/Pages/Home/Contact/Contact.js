import { useForm } from "react-hook-form";
import React from "react";
import "./Contact.css";
import { Container, Typography } from "@mui/material";
import MuiButton from "../../../StyledComponents/MuiButton";
import { Box } from "@mui/system";

const inputStyle1 = {
  padding: "10px",
  margin: "3px",
  width: "30%",
};
const inputStyle2 = {
  padding: "15px",
  margin: "3px",
  width: "62%",
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Box sx={{ backgroundColor: "#FFF8F5", textAlign: "center", py: 5, my: 3 }}>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", py: 5, fontWeight: "bold" }}
        >
          Contact Us
        </Typography>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", { required: true })}
            style={inputStyle1}
            placeholder="First Name"
          />
          <input
            {...register("lastName", { required: true })}
            style={inputStyle1}
            placeholder="Last Name"
          />
          <br />
          <input
            {...register("email", { required: true })}
            style={inputStyle1}
            type="email"
            placeholder="Enter Email"
          />
          <input
            {...register("phone", { required: true })}
            style={inputStyle1}
            type="phone"
            placeholder="Phone Number"
          />
          <br />
          <textarea
            {...register("message", { required: true })}
            style={inputStyle2}
            type="text"
            placeholder="Enter Your Message......"
          />
          <br /> <br />
          <MuiButton type="submit">Send Message</MuiButton>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
