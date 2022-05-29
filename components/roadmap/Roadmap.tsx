import { NextPage } from "next";
import React from "react";
import { Box, Grid, GridItem, Text, Center, Flex } from "@chakra-ui/react";
import Styles from "./Roadmap.module.css";
import { BsArrowBarRight } from "react-icons/bs";

const Roadmap: NextPage = () => {
  return (
    <Box
      w="100"
      height="1550"
      bg="brand.900"
      p={20}
      pt={35}
      color="white"
      className={Styles.font}
    >
      <Box>
        <Center fontSize="6xl" color="brand.300" my="20">
          <Text>Roadmap</Text>
        </Center>
      </Box>

      <Box>
        <Text mb="10" fontSize="lg">
          What the f#ck is ROADMAP??
        </Text>
        <Text mb="10" fontSize="lg">
          We BUILDING! * kmoney voices *
        </Text>
        <Text mb="10" fontSize="lg">
          Seriously tho, We believe in underpromise and . We put our community
          first. We plan to provide additional utility & reward for our holders.
        </Text>
        <Text mb="10" fontSize="lg">
          So, once we 100% SOLD OUT, We gonna vibe together. Anyway, here's what
          you can expect from us & what we're going to do:
        </Text>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>Rosbourne animated PFPs version</Text>
        </Flex>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>
            Giving away degen/hype NFTS project with volume for you to
            flip/trade/hold
          </Text>
        </Flex>

        <Text mb="10" fontSize="lg">
          How does it work:
        </Text>
        <Text mb="10" fontSize="lg">
          Let’s say you missed degen mint GOBLINTOWN, suddenly floor x5 x10 with
          high volume traded.
        </Text>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>We’ll purchase the floor and raffle them to our holders.</Text>
        </Flex>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>We’ll send the purchased NFTS to their wallets.</Text>
        </Flex>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>Winner decide whether to flip or not. It’s your choice.</Text>
        </Flex>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>
            New collections – Collaboration with talented Foundation/SuperRare
            artist The art itself will make your jaw dropped .
          </Text>
        </Flex>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>Free merchandise claim for every Rosbourne owner</Text>
        </Flex>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>
            Rosbourne Artifacts – Free NFT claim for every Rosbourne owner with
            burn mechanism for (REDACTED)
          </Text>
        </Flex>

        <Text mb="10" fontSize="lg">
          More to come!
        </Text>
        <Text mb="10" fontSize="lg">
          All we can say is you might want to hold your Rosbourne. Because?
          Well, We can’t say it now. You guys like to be surprised, right?
          Things are just getting more exciting. We have a lot of cool things
          planned for the future.
        </Text>
        <Text mb="10" fontSize="lg" color="brand.300">
          Last but not least, Genesis is KING.
        </Text>
      </Box>
    </Box>
  );
};

export default Roadmap;
