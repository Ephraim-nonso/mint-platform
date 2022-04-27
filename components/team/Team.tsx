import { NextPage } from "next";
import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Card from "../cards/Card";

const Team: NextPage = () => {
  return (
    <Box w="100%" height="900" bg="teal" p={10}>
      <Center bg="teal" h="100px" color="white" borderRadius="radii.lg" my={20}>
        <Heading color="" fontSize="8xl" fontFamily="font.heading">
          Our Collections
        </Heading>
      </Center>

      <Center>
        <Card />
      </Center>
    </Box>
  );
};

export default Team;
