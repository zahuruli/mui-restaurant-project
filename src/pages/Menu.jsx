import React from "react";
import Layoute from "../components/layouts/Layoute";
import { MenuList } from "../data/Data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layoute>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          my: 3,
          p: 1,
        }}
      >
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "290px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                src={menu.image}
                component={"img"}
                sx={{ minHeight: "400px" }}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>

                <Typography variant="body2" component={"div"}>
                  {menu.description}
                </Typography>
                <Typography variant="h6" component={"div"}>
                  {menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layoute>
  );
};

export default Menu;
