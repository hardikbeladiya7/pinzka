import { Box } from "@mui/material";
import React from "react";

const BlogCard = ({ item }: any) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box className="blog_card_main">
        <img src={item.img} alt="" width="100%" />
        <Box className="blog_Card_body">
          <h1 style={{color:"#FFFFFF"}}>{item.title}</h1>
          <p style={{color:"#FFFFFF"}}>{item.description}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
