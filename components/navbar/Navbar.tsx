import React from "react";
import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <VStack>
      <Box bg="brand.900" w="100%" p={10} color="black" fontFamily="font.body">
        <Flex>
          <Link href="/">
            <Text fontSize="3xl" color={"white"}>
              Rosbourne
            </Text>
          </Link>
          <Spacer />
          <Link href="/mint">
            <Button colorScheme="teal" size="lg">
              Mint
            </Button>
          </Link>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Navbar;
