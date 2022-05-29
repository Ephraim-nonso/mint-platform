import React from "react";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import displayGIF from "../../assets/GIF3.gif";
import styles from "../collect/Collect.module.css";
import Card from "../cards/Card";

const Display = () => {
  return (
    <Box bg="brand.900" height="1000">
      <Text
        fontSize="lg"
        p="20"
        width="500"
        color="brand.300"
        minWidth={500}
        className={styles.text}
        textAlign="center"
      >
        <span className={styles.block__second}>
          Only a few are selected to join the rosbourne
        </span>
        <span className={styles.block__second}>Are you the one?</span>
      </Text>

      <Flex bg="brand.900" flexDirection="column">
        <Card />
        <Card />
      </Flex>

      <Box>
        <Center py={16}>
          <Image src={displayGIF} alt="rosbourne" width={500} />
        </Center>
      </Box>
    </Box>
  );
};

export default Display;
