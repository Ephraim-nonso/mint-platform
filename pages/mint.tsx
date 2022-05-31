import { NextPage } from "next";
import React, { useContext, useState } from "react";
import { Box, Center, Heading, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import displayGIF from "../assets/GIF3.gif";
import Styles from "../styles/Mint.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Web3Context } from "../context/Web3Context";
import { formatAddress } from "../utils/helper";
import { Contract, ethers } from "ethers";
import { contractAddress } from "../connector/Connector";
import contractAbi from "../utils/abi.json";
import { Input } from "@chakra-ui/react";

const Mint = () => {
  const [value, setValue] = useState(0);

  const { wallet, provider, connect, connectTo, disconnect } =
    useContext(Web3Context);

  const handleConnect = () => {
    connect();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const handleMint = async () => {
    const myProvider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = myProvider.getSigner();

    const contractInstance = new Contract(contractAddress, contractAbi, signer);

    const mint = await contractInstance.mint("1", {
      value: ethers.utils.parseEther("0.02"),
    });
    console.log(mint);
    console.log(contractAddress);
    console.log(contractAbi);
  };

  return (
    <Box w="100%" height="1300" bg="brand.900" p={5} className={Styles.font}>
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

      <Box py={5} width="200">
        {wallet?.address ? (
          <Input placeholder="Enter the number of NFT to mint..." />
        ) : null}
      </Box>

      <Center py={5}>
        {wallet?.address ? (
          <Button
            bg="transparent"
            border="1px"
            borderColor="brand.300"
            color="white"
            size="lg"
            onClick={handleMint}
          >
            Mint NFT
          </Button>
        ) : null}
      </Center>

      <Center py={5}>
        <Button bg="brand.300" color="white" size="lg" onClick={handleConnect}>
          {wallet?.address ? formatAddress(wallet?.address) : "Connect wallet"}
        </Button>
      </Center>

      <Center py={5}>
        {wallet?.address ? (
          <Button
            bg="transparent"
            border="1px"
            borderColor="brand.300"
            color="white"
            size="lg"
            onClick={handleDisconnect}
          >
            Disconnect wallet
          </Button>
        ) : null}
      </Center>

      <Center color="white" borderRadius="radii.lg" p={10}>
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
