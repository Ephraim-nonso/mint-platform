import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import First from "../../assets/6.png";
import Second from "../../assets/4.png";
import Third from "../../assets/23.png";
import Four from "../../assets/80.png";
import Styles from "../about/About.module.css";

const Card = () => {
  const properties = [
    {
      imageUrl: First,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Second,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Third,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "In city center",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
  ];
  const cardProp = properties.map((property) => (
    <Box key={property.title} p={2}>
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        width={130}
        height={130}
      />
    </Box>
  ));
  return <Flex justifyContent="space-around">{cardProp}</Flex>;
};

export default Card;
