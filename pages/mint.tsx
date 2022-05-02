import { NextPage } from "next";
import React from "react";
import { Box, Center, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Styles from "../styles/Mint.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Connectors } from "web3-react";

const { InjectedConnector, NetworkOnlyConnector } = Connectors;

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });

const Infura = new NetworkOnlyConnector({
  providerURL: "https://mainnet.infura.io/v3/...",
});

const connectors = { MetaMask, Infura };

const mint: NextPage = () => {
  const notify = () => toast("Working well!");
  return (
    <Box w="100%" height="100vh" bg="brand.900" p={10} className={Styles.font}>
      <Center
        bg="brand.700"
        h="100px"
        color="white"
        borderRadius="radii.lg"
        my={20}
      >
        <Heading fontSize="8xl" fontFamily="font.heading">
          Mint
        </Heading>
      </Center>
      <Center color="white" borderRadius="radii.lg" my={20}>
        <Text fontSize="6xl" color="white" className={Styles.font}>
          0/5555
        </Text>
      </Center>

      <Center>
        <Button bg="brand.300" color="white" size="lg" onClick={notify}>
          Connect wallet
        </Button>
      </Center>

      <Center color="white" borderRadius="radii.lg" my={20}>
        <Text fontSize="2xl" color="white"></Text>
      </Center>
      <Center color="white" borderRadius="radii.lg" my={20}>
        <Link href="/">
          <Text
            fontSize="2xl"
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
