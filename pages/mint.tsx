import { NextPage } from "next";
import React from "react";
import { Box, Center, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Styles from "../styles/Mint.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mint: NextPage = () => {
  const notify = () => toast("Working well!");
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
        <Button colorScheme="teal" size="lg" onClick={notify}>
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
      <ToastContainer />
    </Box>
  );
};

export default mint;
