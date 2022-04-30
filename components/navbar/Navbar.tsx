import React from "react";
import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <VStack>
      <Box
        bg="brand.900"
        w="100%"
        p={10}
        color="black"
        style={{ fontFamily: "Vanilla" }}
      >
        <Flex>
          <Link href="/">
            <Text fontSize="3xl" color={"white"}>
              Rosbourne
            </Text>
          </Link>
          <Spacer />
          <Box>
            <Link href="/mint">
              <Button bg="brand.300" size="lg" color="white">
                Mint
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Navbar;
