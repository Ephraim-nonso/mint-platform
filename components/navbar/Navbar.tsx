import React from "react";
import { Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../assets/Rosbourne_Logo.png";
import opensea from "../../assets/opensea.png";

const Navbar = () => {
  return (
    <VStack>
      <Box
        bg="brand.900"
        w="100%"
        px={16}
        py={7}
        color="black"
        style={{ fontFamily: "arcade" }}
      >
        <Flex align="center" justify="space-around">
          <Box width="150px">
            <Flex align="center" justify="space-around">
              <Text cursor="pointer">
                <FaTwitter size="30" color="white" />
              </Text>
              <Text cursor="pointer">
                <FaDiscord size="30" color="white" />
              </Text>
              <Box cursor="pointer">
                <Image src={opensea} alt="opensea" width="30" height="30" />
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Box cursor="pointer">
            <Link href="/">
              <Image src={Logo} alt="Rosbourne_Logo" width="200" height="20" />
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Flex align="center" justify="space-around">
              <Link href="/mint">
                <Button
                  bg="brand.300"
                  size="sm"
                  color="black"
                  textTransform="uppercase"
                  letterSpacing="2px"
                >
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
