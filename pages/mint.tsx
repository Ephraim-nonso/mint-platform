import { NextPage } from "next";
import React, { useContext } from "react";
import { Box, Center, Heading, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import displayGIF from "../assets/GIF3.gif";
import Styles from "../styles/Mint.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Web3Context } from "../context/Web3Context";
// import { Connectors } from "web3-react";

// const { InjectedConnector, NetworkOnlyConnector } = Connectors;

// const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });

// const Infura = new NetworkOnlyConnector({
//   providerURL: "https://mainnet.infura.io/v3/...",
// });

// const connectors = { MetaMask, Infura };

const Mint = () => {
  const notify = () => toast("Working well!");

  const { wallet, provider, connect, connectTo, disconnect } =
    useContext(Web3Context);

  const handleConnect = () => {
    // if (connect()) {
    // console.log(connect());
    //   toast("Working well!");
    // } else {
    //   toast("failed");
    // }
    console.log(wallet);
    connect();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <Box w="100%" height="1200" bg="brand.900" p={5} className={Styles.font}>
      <Center bg="brand.300" h="70" color="white" my={2.5} borderRadius={5}>
        <Text fontSize="3xl" textTransform="uppercase">
          Mint
        </Text>
      </Center>

      <Center>
        <Image src={displayGIF.src} alt="rosbourne" width={400} height={450} />
      </Center>

      <Center color="white" borderRadius="radii.lg" my={20}>
        <Text fontSize="3xl" color="white" className={Styles.font}>
          0/3000
        </Text>
      </Center>

      <Center>
        <Button bg="brand.300" color="white" size="lg" onClick={handleConnect}>
          Connect wallet
        </Button>
      </Center>

      <Center color="white" borderRadius="radii.lg">
        <Text fontSize="2xl" color="white"></Text>
      </Center>
      <Center color="white" borderRadius="radii.lg">
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

export default Mint;
