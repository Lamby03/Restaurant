import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableContainer,
  Typography,
  TableBody,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography>Contact Us</Typography>
        <p>
          We'd love to hear from you! Whether you have questions about our menu,
          want to make a reservation, or simply want to say hello, feel free to
          get in touch with us. You can reach out to us via phone at 999999999
          during our business hours. Alternatively, you can send us an email at
          xyz@gmail.com or use the contact form below. Our dedicated team is
          committed to providing you with exceptional service and ensuring your
          dining experience with us is nothing short of memorable. We look
          forward to welcoming you to Annapurna Restuarant soon!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 5,
          "@media (maxwidth:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  1800 678 9999(tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  xyz@email.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  9797979797
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
