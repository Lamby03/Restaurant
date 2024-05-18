import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1a1a19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover":{
                color:'goldenrod',
                transform:'translateX(5px)',
                transition: 'all 400ms'
            }
          }}
        >
          {/* icon */}
          <InstagramIcon />
          <XIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All rights reserved &copy; Lamby
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
