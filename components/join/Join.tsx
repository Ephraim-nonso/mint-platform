import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";

const Join = () => {
  return (
    <Box w="100%" height="900" bg="brand.900" p={10}>
      <Center h="100px" color="white" borderRadius="radii.lg" my={20}>
        <Heading
          fontSize="7xl"
          fontFamily="font.heading"
          color="brand.300"
          letterSpacing="3px"
        >
          Join Community
        </Heading>
      </Center>
      <Box border="2px" borderColor="white" width="100%" height="500">
        <Center p="auto">
          <Text>
            <FaDiscord size={32} color="white" />
          </Text>
        </Center>
      </Box>
    </Box>
  );
};

export default Join;
