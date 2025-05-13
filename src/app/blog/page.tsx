import BlogCard from "@/component/BlogCard";
import { Box } from "@mui/material";
import React from "react";

const Blog = () => {
  const data = [
    {
      img: "https://bms.belbytes.com/images/blog/1726661619.jpg",
      title: "A Complete Guide to Growing Snake Plants in Your Garden",
      description: "The snake plant, scientifically known as Sansevieria trifasciata, is a popular houseplant in India and around the world. Known for its striking appearance and numerous benefits, this resilient plant is often referred to as mother-in-law's tongue due to its long, sword-like leaves. In this article",
    },
    {
      img: "https://bms.belbytes.com/images/blog/1726660901.jpg",
      title: "Ola Electric Share Price: A Promising Investment in India's EV Revolution",
      description: "Ola Electric Mobility Ltd., a leading player in India's electric vehicle (EV) market, has been making waves with its innovative products and ambitious growth plans. As the company continues to make strides in the industry, investors are closely watching the Ola Electric share price",
    },
    {
      img: "https://bms.belbytes.com/images/option/1703353321.png",
      title: "Windows 11 Text Size Tweaks: Go Big with Fonts, Go Easy on Your Eyes",
      description: "Do you need help with tiny text in Windows 11? This guide reveals simple tricks to make fonts bigger and save your eyes! Read more to learn how to increase text or font size in Windows 11.",
    },
  ];
  return (
    <Box>
      {data.map((item) => (
        <BlogCard item={item} />
      ))}
    </Box>
  );
};

export default Blog;
