import React from "react";
import { Box, Text, Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import displayGIF from "../../assets/GIF2.gif";
import styles from "../collect/Collect.module.css";

const Aim = () => {
  return (
    <Box>
      <Box bg="brand.900" height="650">
        <Text
          fontSize="lg"
          py="35"
          width="500"
          color="brand.300"
          minWidth={500}
          className={styles.text}
          textAlign="center"
        >
          <span className={styles.block}>We put our community first</span>
          <span className={styles.block}>
            We provide additional utility & reward for our holders
          </span>
        </Text>

        <Center py={16}>
          <Image src={displayGIF} alt="rosbourne" width={1700} />
        </Center>
      </Box>
    </Box>
  );
};

export default Aim;
