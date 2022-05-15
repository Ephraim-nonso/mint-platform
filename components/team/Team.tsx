import { NextPage } from "next";
import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Card from "../cards/Card";
import Styles from "./Team.module.css";

const Team: NextPage = () => {
  return (
    <Box w="100%" height="600" bg="brand.900" p={10}>
      {/* <Center h="100px" color="white" borderRadius="radii.lg" my={20}>
        <Heading
          fontSize="7xl"
          fontFamily="font.heading"
          color="brand.300"
          letterSpacing="3px"
        >
          Our Collections
        </Heading>
      </Center> */}

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
