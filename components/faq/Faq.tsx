import React from "react";
import { Box, Text, Heading, Center, Flex, Spacer } from "@chakra-ui/react";
import { AiOutlineCaretDown } from "react-icons/ai";
import Image from "next/image";
import ShowFaq from "../../assets/29.png";
import ShowFaq2 from "../../assets/66.png";
import Styles from "./Faq.module.css";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "What is an NFT?",
      content: `NFT stands for non-fungible token, NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated. An NFT is a non-interchangeable unit of data stored in a blockchain with proof of ownership.`,
    },
    {
      title: "What is Rosbourne?",
      content:
        "ROSBOURNE is a genesis collection of 3 different races: human, cyborg, and inu living in the dystopian metropolis of Oakalis City. This token is a collectible that lives on the Ethereum blockchain.",
    },
    {
      title: "What is the supply?",
      content: `There are 3k genesis collections of Rosbourne NFTs with an initial mint price of .03 ETH each.
      3 max txn per wallet.`,
    },
    {
      title: "Wen reveal?",
      content: "24 hours after sold out.",
    },
  ],
};

const FaqComp = () => {
  return (
    <Box w="100%" height="900" bg="brand.900" p={20}>
      <Flex align="center" justify="space-around">
        <Box width="50%">
          <Center
            bg="brand.500"
            h="100px"
            color="white"
            borderRadius="radii.lg"
            my={20}
          >
            <Heading
              fontSize="6xl"
              fontFamily="font.heading"
              color="brand.300"
              letterSpacing="3px"
            >
              {data.title}
            </Heading>
          </Center>

          {data.rows.map((item) => {
            return (
              <Box key={item.title}>
                <Box
                  bg="brand.500"
                  h="100px"
                  color="white"
                  borderRadius="radii.lg"
                  my={5}
                  cursor="pointer"
                  opacity="0.5"
                >
                  <Flex
                    justifyItems="space-between"
                    alignItems="center"
                    px={20}
                  >
                    <Heading p="2">{item.title}</Heading>
                    <Spacer />
                    <Text p="4">
                      <AiOutlineCaretDown size={40} />
                    </Text>
                  </Flex>
                </Box>

                <Box className={Styles.text}>
                  <Text display="none" color="white" p="10">
                    {item.content}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* <Box mt="100">
          <Image src={ShowFaq} alt="Faq-image" width="300" height="300" />
          <Image src={ShowFaq2} alt="Faq-image" width="300" height="300" />
        </Box> */}
      </Flex>
    </Box>
  );
};

export default FaqComp;
