import { NextPage } from "next";
import React from "react";
import { Box, Grid, GridItem, Text, Center, Heading } from "@chakra-ui/react";
import Styles from "./Roadmap.module.css";
import Image from "next/image";
import roadmap from "../../assets/ROADMAP.jpg";

const Roadmap: NextPage = () => {
  return (
    <Box w="100%" height="900" bg="brand.900" p={5} pt={35} pl={20}>
      <Image src={roadmap} alt="roadmap" height="900" width="1200" />
    </Box>
  );
};

export default Roadmap;
