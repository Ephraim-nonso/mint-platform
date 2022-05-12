import React from "react";
import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../assets/Rosbourne_Logo.png";

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
        <Flex align="center" justify="space-around">
          <Box width="120px">
            <Flex align="center" justify="space-around">
              <Text cursor="pointer">
                <FaTwitter size="40" color="white" />
              </Text>
              <Text cursor="pointer">
                <FaDiscord size="40" color="white" />
              </Text>
            </Flex>
          </Box>
          <Spacer />
          <Box cursor="pointer">
            <Link href="/">
              <Image src={Logo} alt="Rosbourne_Logo" width="270" height="30" />
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Flex align="center" justify="space-around">
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
