import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{ textAlign: "center", bgcolor: "#1a1a19", color: "white", p: 0.5 }}
    >
      <Box
        sx={{
          my: 1,
          "& svg": {
            fontSize: "35px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateX(5px)",
            transition: "All 400ms",
          },
        }}
      >
        <InstagramIcon sx={{ color: "#feda75" }} />
        <TwitterIcon sx={{ color: "#00acee" }} />
        <GitHubIcon sx={{ color: "#4078c0" }} />
        <YouTubeIcon sx={{ color: "#CD201F" }} />
      </Box>
      <Typography
        variant="h6"
        sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}
      >
        All Right Reserve &copy;Zahurul Islam
      </Typography>
    </Box>
  );
};

export default Footer;
