import { NextPage } from "next";
import React from "react";
import { Box, Grid, GridItem, Text, Center, Heading } from "@chakra-ui/react";
import Styles from "./Roadmap.module.css";

const Roadmap: NextPage = () => {
  return (
    <Box w="100%" height="1000" bg="brand.900" p={5}>
      <Center h="100px" color="white" borderRadius="radii.lg" my={20}>
        <Heading
          fontSize="7xl"
          fontFamily="font.heading"
          color="brand.300"
          letterSpacing="3px"
        >
          Our Roadmap
        </Heading>
      </Center>

      <Center p={10} color="white">
        <Box className={Styles.hexagon} textAlign="center" m={25} p={5}>
          <Heading>The Nearest Future</Heading>

          <Text fontSize="1xl">
            Rosbourne is a collection of 3k genesis avatars consist of 3
            different races, they are human, cyborg, and inu living in the
            dystopian metropolis of Oakalis City.
          </Text>
        </Box>
        <Box className={Styles.hexagon} textAlign="center" m={25} p={5}>
          <Heading>The Nearest Future</Heading>

          <Text fontSize="1xl">
            Rosbourne is a collection of 3k genesis avatars consist of 3
            different races, they are human, cyborg, and inu living in the
            dystopian metropolis of Oakalis City.
          </Text>
        </Box>
        <Box className={Styles.hexagon} textAlign="center" m={25} p={5}>
          <Heading>The Nearest Future</Heading>

          <Text fontSize="1xl">
            Rosbourne is a collection of 3k genesis avatars consist of 3
            different races, they are human, cyborg, and inu living in the
            dystopian metropolis of Oakalis City.
          </Text>
        </Box>
      </Center>
      <Center p={10} mt={10} fontFamily="font.body" color="white">
        <Box className={Styles.hexagon} textAlign="center" m={25} p={5}>
          <Heading>The Nearest Future</Heading>

          <Text fontSize="1xl">
            Rosbourne is a collection of 3k genesis avatars consist of 3
            different races, they are human, cyborg, and inu living in the
            dystopian metropolis of Oakalis City.
          </Text>
        </Box>
        <Box
          className={Styles.hexagon}
          textAlign="center"
          m={25}
          alignItems="center"
          p={5}
        >
          <Heading>The Nearest Future</Heading>
          <Text fontSize="1xl">
            Rosbourne is a collection of 3k genesis avatars consist of 3
            different races, they are human, cyborg, and inu living in the
            dystopian metropolis of Oakalis City.
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default Roadmap;
