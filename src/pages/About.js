import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Annapurna Resturant</Typography>
        <p>
          Welcome to our culinary haven, where the vibrant flavors of India come
          together in a celebration of diversity and taste. At our restaurant,
          we pride ourselves on offering a gastronomic journey that encompasses
          every corner of this richly diverse country. From the fiery spices of
          the North to the delicate coastal delights of the South, and from the
          hearty comfort foods of the West to the aromatic dishes of the East,
          our menu is a testament to the kaleidoscope of Indian cuisine.
        </p>
        <br />
        <p>
          Drawing inspiration from the bustling streets of Mumbai to the royal
          kitchens of Lucknow, our chefs craft each dish with meticulous care
          and authenticity. Whether you crave the tangy tang of street chaat,
          the creamy richness of Mughlai curries, or the subtle sweetness of
          South Indian dosas, our menu promises to tantalize your taste buds and
          transport you to the heart of India. With a commitment to quality
          ingredients, traditional recipes, and unparalleled hospitality, we
          invite you to savor the flavors of India like never before, right here
          at our restaurant.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
