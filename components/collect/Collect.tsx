import React from "react";
import { Box, Heading, Center, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import displayImg1 from "../../assets/ABOUT.jpg";
import Link from "next/link";

const Collect = () => {
  return (
    <div>
      <Box bg="brand.900">
        <Image src={displayImg1} alt="about" width="1500" height="180" />
      </Box>
    </div>
  );
};

export default Collect;
