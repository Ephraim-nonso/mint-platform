import { NextPage } from "next";
import React from "react";
import { Box, Center, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Styles from "../styles/Mint.module.css";

const mint: NextPage = () => {
  return (
    <Box w="100%" height="100vh" bg="brand.900" p={10}>
      <Center bg="teal" h="100px" color="white" borderRadius="radii.lg" my={20}>
        <Heading color="" fontSize="8xl" fontFamily="font.heading">
          Mint
        </Heading>
      </Center>
      <Center color="white" borderRadius="radii.lg" my={20}>
        <Text fontSize="3xl" fontFamily="font.body" color="white"></Text>
      </Center>

      <Center>
        <Button colorScheme="teal" size="lg">
          Connect wallet
        </Button>
      </Center>

      <Center color="white" borderRadius="radii.lg" my={20}>
        <Text fontSize="2xl" fontFamily="font.body" color="white"></Text>
      </Center>
      <Center color="white" borderRadius="radii.lg" my={20}>
        <Link href="/">
          <Text
            fontSize="2xl"
            fontFamily="font.body"
            color="white"
            cursor="pointer"
            className={Styles.mint}
          >
            Home
          </Text>
        </Link>
      </Center>
    </Box>
  );
};

export default mint;
