import { NextPage } from "next";
import React from "react";
import { Box, Grid, GridItem, Text, Center, Flex } from "@chakra-ui/react";
import Styles from "./Roadmap.module.css";
import { BsArrowBarRight } from "react-icons/bs";

const Roadmap: NextPage = () => {
  return (
    <Box
      w="100"
      height="900"
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
          We believe in underpromise and overdeliver.
        </Text>
        <Text mb="10" fontSize="lg">
          Once we 100% SOLD OUT, here is what we are going to do:
        </Text>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>
            Level up our NFT community alpha by purchasing exclusive ORIGINS
            Discord Bots that provide Rosbourne holders with advanced features
            that deliver sophisticated knowledge and insight.
          </Text>
        </Flex>

        <Flex color="brand.500" mb="10" fontSize="lg">
          <Text>
            <BsArrowBarRight size={32} />
          </Text>
          <Text>Worldwide Webb Land and Arcade Inc. integration</Text>
        </Flex>

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
            Burn mechanism for the next upcoming collections - The art itself
            will make your jaw dropped
          </Text>
        </Flex>

        <Text mb="10" fontSize="lg">
          There will be more...
        </Text>
        <Text mb="10" fontSize="lg">
          Things are just getting more exciting. All we can say is that you
          might want told your Rosbourne, because we have a lot of cool things
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
