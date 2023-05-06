import React from "react";
import Layoute from "../components/layouts/Layoute";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layoute>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h3": { fontWeight: "bold", fontSize: "2.5rem", my: 4 },
          "& p": { textAlign: "justify" },
          "@media (max-width:600px)": {
            mt: 1.5,
            "& h3": { fontSize: "2rem", my: 4 },
          },
        }}
      >
        <Typography variant="h3">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          eos molestiae sunt nisi assumenda culpa, officia in facere beatae
          mollitia cum dicta nesciunt totam incidunt fugiat quasi sequi error
          voluptas aliquid repudiandae eligendi rerum doloremque eius! Magnam
          numquam, sunt sint quis dolorem aut. Quis dolor ipsa repellat
          consectetur rem voluptatibus neque amet odio repudiandae cum nam
          deleniti nulla, quo nihil tempora? Possimus veniam eligendi
          temporibus, laboriosam provident a deserunt perspiciatis eum ad?
          Voluptatum non rem maxime consequuntur nisi quidem omnis deleniti
          iusto provident odio. Ducimus cum voluptate vitae magni aliquid porro.
          Veniam laudantium ipsa id quos sint itaque maxime perspiciatis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          eos molestiae sunt nisi assumenda culpa, officia in facere beatae
          mollitia cum dicta nesciunt totam incidunt fugiat quasi sequi error
          voluptas aliquid repudiandae eligendi rerum doloremque eius! Magnam
          numquam, sunt sint quis dolorem aut. Quis dolor ipsa repellat
          consectetur rem voluptatibus neque amet odio repudiandae cum nam
          deleniti nulla, quo nihil tempora? Possimus veniam eligendi
          temporibus, laboriosam provident a deserunt perspiciatis eum ad?
          Voluptatum non rem maxime consequuntur nisi quidem omnis deleniti
          iusto provident odio. Ducimus cum voluptate vitae magni aliquid porro.
          Veniam laudantium ipsa id quos sint itaque maxime perspiciatis.
        </p>
      </Box>
    </Layoute>
  );
};

export default About;
