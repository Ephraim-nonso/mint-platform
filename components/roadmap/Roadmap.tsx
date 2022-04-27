import { NextPage } from "next";
import React from "react";
import { Box, Grid, GridItem, Text, Center, Heading } from "@chakra-ui/react";

const Roadmap: NextPage = () => {
  return (
    <Box w="100%" height="900" bg="brand.900" p={10}>
      <Center bg="teal" h="100px" color="white" borderRadius="radii.lg" my={20}>
        <Heading color="" fontSize="8xl" fontFamily="font.heading">
          Our Roadmap
        </Heading>
      </Center>

      <Center p={10} fontFamily="font.body" color="white">
        <Text fontSize="2xl">
          Rosbourne is a collection of 3k genesis avatars consist of 3 different
          races, they are human, cyborg, and inu living in the dystopian
          metropolis of Oakalis City.
        </Text>
        <Text fontSize="2xl" borderLeft="1px" borderColor="gray.200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          optio itaque magni nesciunt cupiditate aperiam recusandae rem
          praesentium incidunt voluptas!
        </Text>
      </Center>

      <Center p={10} fontFamily="font.body" color="white">
        <Text fontSize="2xl">
          Rosbourne is a collection of 3k genesis avatars consist of 3 different
          races, they are human, cyborg, and inu living in the dystopian
          metropolis of Oakalis City.
        </Text>
        <Text fontSize="2xl" borderLeft="1px" borderColor="gray.200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          optio itaque magni nesciunt cupiditate aperiam recusandae rem
          praesentium incidunt voluptas!
        </Text>
      </Center>
      <Center p={10} fontFamily="font.body" color="white">
        <Text fontSize="2xl">
          Rosbourne is a collection of 3k genesis avatars consist of 3 different
          races, they are human, cyborg, and inu living in the dystopian
          metropolis of Oakalis City.
        </Text>
        <Text fontSize="2xl" borderLeft="1px" borderColor="gray.200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          optio itaque magni nesciunt cupiditate aperiam recusandae rem
          praesentium incidunt voluptas!
        </Text>
      </Center>
    </Box>
  );
};

export default Roadmap;
