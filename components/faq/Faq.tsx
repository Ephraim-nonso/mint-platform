import React from "react";
import { Box, Text, Heading, Center, Flex, Spacer } from "@chakra-ui/react";
import { AiOutlineCaretDown } from "react-icons/ai";
import Image from "next/image";
import ShowFaq from "../../assets/29.png";
import ShowFaq2 from "../../assets/66.png";
import style from "./Faq.module.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What is an NFT?",
      content: `NFT stands for non-fungible token, NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated. An NFT is a non-interchangeable unit of data stored in a blockchain with proof of ownership.`,
    },
    {
      title: "What is Rosbourne?",
      content:
        "Rosbourne is a genesis collection of 3 superior races living in the dystopian metropolis of Oakalis City set in a post-apocalyptic world. This token is a collectible that lives on the Ethereum blockchain.",
    },
    {
      title: "What is the supply?",
      content: `There are 3k genesis collections of Rosbourne NFTs with an initial mint price of 0.02 ETH each.
      2 max txn per wallet.`,
    },
    {
      title: "Wen reveal?",
      content: "24 hours after sold out.",
    },
  ],
};

const styles = {
  bgColor: "rgb(236,8,135)",
  rowTitleColor: "white",
  rowContentColor: "rgb(254,242,87)",
  arrowColor: "white",
  transitionDuration: "0.3s",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

const FaqComp = () => {
  return (
    <Box w="100%" height="500" bg="brand.900" p={20} className={style.heading}>
      <Center h="" color="white" borderRadius="radii.lg" my={5}>
        <Text
          fontSize="5xl"
          color="brand.300"
          letterSpacing="3px"
          className={style.heading}
          textTransform="uppercase"
        >
          FAQ
        </Text>
      </Center>

      <Box>
        <Faq data={data} styles={styles} config={config} />
      </Box>
    </Box>
  );
};

export default FaqComp;
