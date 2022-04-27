import React from "react";
import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <VStack>
      <Box bg="brand.900" w="100%" p={10} color="black" fontFamily="font.body">
        <Flex>
          <Text fontSize="3xl" color={"white"}>
            Rosbourne
          </Text>
          <Spacer />
          <Button colorScheme="teal" size="lg">
            Mint
          </Button>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Navbar;
