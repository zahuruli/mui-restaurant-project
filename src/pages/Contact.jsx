import React from "react";
import Layoute from "../components/layouts/Layoute";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layoute>
      <Box
        sx={{
          my: 10,
          ml: 10,

          "& h4": { fontWeight: "bold", mb: 2 },
          textAlign: "justify",
          "@media (max-width:600px)": {
            m: 5,
          },
        }}
      >
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          accusantium tempora eos aut officia aspernatur veniam culpa fugit nam
          magni beatae, harum magnam facere facilis quasi cum sunt! Similique,
          sed. Laudantium hic illum, nulla dignissimos ipsum libero impedit
          saepe voluptatum atque aliquam adipisci architecto modi porro, sit
          omnis nesciunt. Veniam, itaque ad iste aspernatur eum magni excepturi
          dolorem atque quos, vel facere corporis ea dolor debitis consequatur
          saepe eligendi harum nulla cum laudantium eaque expedita earum. Quam
          atque laudantium, expedita minus at saepe sit. Quibusdam totam
          inventore sapiente consequuntur maiores ad quisquam debitis, facilis
          dolor, repellendus pariatur praesentium nemo corrupti.
        </p>
      </Box>
      <Box
        sx={{
          width: "600px",
          m: 3,
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
            ml: 5,
          },
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography variant="h5">Contact Details</Typography>{" "}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 158-00-000
                  (Toll Free)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  Zahurul8259@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <AddIcCallIcon sx={{ color: "green", pt: 1 }} /> 01710815467
                  (Toll Free)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layoute>
  );
};

export default Contact;
