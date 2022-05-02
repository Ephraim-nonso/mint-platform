import React from "react";
import { Box, Center, Heading, Text, Flex } from "@chakra-ui/react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Join = () => {
  return (
    <Box w="100%" height="900" bg="brand.900" p={40}>
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
      <Flex width="100%" height="500">
        <Box bg="white" width="50%" height="100%">
          <Text></Text>
        </Box>
        <Box
          width="50%"
          height="100%"
          color="white"
          fontFamily="font.body"
          p={20}
        >
          <Center p="auto">
            <Box display="block">
              <Text fontSize="3xl">Join the Rosbourne Community</Text>
            </Box>
            <Box width="100%">
              <Flex width="200px" justify="space-between">
                <FaDiscord size={36} />
                <FaTwitter size={36} />
              </Flex>
            </Box>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Join;
