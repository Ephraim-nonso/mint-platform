import { NextPage } from "next";
import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Card from "../cards/Card";
import Styles from "./Team.module.css";

const Team: NextPage = () => {
  return (
    <Box w="100%" height="650" bg="brand.900" p={10}>
      <Box className={Styles.display} mt="35px">
        <Card />
        <Box ml="20">
          <Card />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
