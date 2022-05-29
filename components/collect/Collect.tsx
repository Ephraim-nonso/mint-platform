import React from "react";
import { Box, Text, Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import displayGIF from "../../assets/GIF1.gif";
import Link from "next/link";
import styles from "./Collect.module.css";

const Collect = () => {
  return (
    <Box>
      <Box bg="brand.900" height="350">
        <Text
          fontSize="lg"
          px="20"
          width="500"
          color="brand.300"
          minWidth={500}
          className={styles.text}
          textAlign="center"
        >
          Rosbourne is a genesis collection of 3 superior races living in the
          dystopian metropolis of Oakalis City set in a post-apocalyptic world.
        </Text>

        <Center py={16}>
          <Image src={displayGIF} alt="rosbourne" width={1200} height={180} />
        </Center>
      </Box>
    </Box>
  );
};

export default Collect;
