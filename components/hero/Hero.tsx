import { NextPage } from "next";
import React from "react";
import { Heading, Box, Center, Text } from "@chakra-ui/react";

const Hero: NextPage = () => {
  return (
    <Box w="100%" height="800" bg="brand.900" p={10} fontFamily="font.body">
      <Center
        bg="teal"
        h="200px"
        color="white"
        borderRadius="radii.lg"
        mx="auto"
        my={20}
      >
        <Heading color="" fontSize="8xl" fontFamily="font.heading">
          Rosbourne
        </Heading>
      </Center>

      <Box w="50%" height="700" mx="auto" textAlign="center" color="white">
        <Text fontSize="2xl">
          Rosbourne is a collection of 3k genesis avatars consist of 3 different
          races, they are human, cyborg, and inu living in the dystopian
          metropolis of Oakalis City.
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
