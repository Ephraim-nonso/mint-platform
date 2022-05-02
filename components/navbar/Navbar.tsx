import React from "react";
import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";

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
          <Box width="300px">
            <Flex align="center" justify="space-around">
              <Text>
                <FaTwitter size="40" color="white" />
              </Text>
              <Text>
                <FaDiscord size="40" color="white" />
              </Text>
              <Link href="/mint">
                <Button bg="brand.300" size="lg" color="white">
                  Mint
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Navbar;
