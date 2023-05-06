import React from "react";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <>
      <Typography variant="h2" component={"h2"} color={"error"}>
        Page is not Found. 404 Error!!!
      </Typography>
    </>
  );
};

export default NotFound;
