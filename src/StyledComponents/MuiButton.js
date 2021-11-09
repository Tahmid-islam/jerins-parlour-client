import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const MuiButton = styled(Button)({
  background: "#F63E7B",
  color: "#fff",
  padding: "10px 15px",
  "&:hover": {
    //you want this to be the same as the backgroundColor above
    backgroundColor: "#F63E7B",
  },
});

export default MuiButton;
