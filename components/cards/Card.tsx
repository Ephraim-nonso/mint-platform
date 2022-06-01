import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Styles from "../about/About.module.css";

// Properties of the first slate
import First from "../../assets/123.png";
import Second from "../../assets/4.png";
import Third from "../../assets/101.png";
import Four from "../../assets/79.png";
import Five from "../../assets/146.png";
import Six from "../../assets/40.png";
import Seven from "../../assets/60.png";
import Eight from "../../assets/6.png";
import Nine from "../../assets/19.png";
import Ten from "../../assets/23.png";

// Properties of the second slate
import First2 from "../../assets/29.png";
import Second2 from "../../assets/77.png";
import Third2 from "../../assets/108.png";
import Four2 from "../../assets/79.png";
import Five2 from "../../assets/146.png";
import Six2 from "../../assets/28.png";
import Seven2 from "../../assets/60.png";
import Eight2 from "../../assets/80.png";
import Nine2 from "../../assets/109.png";
import Ten2 from "../../assets/22.png";

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
      imageUrl: Five,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Six,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Seven,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Eight,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Nine,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Ten,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
  ];
  const properties2 = [
    {
      imageUrl: First2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Second2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Third2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "In city center",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Four2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Five2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Six2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Seven2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Eight2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Nine2,
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Heart of historic",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: Ten2,
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

  const cardProp2 = properties2.map((property) => (
    <Box key={property.title} p={2}>
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        width={130}
        height={130}
      />
    </Box>
  ));

  return (
    <Box>
      <Flex justifyContent="space-around">{cardProp}</Flex>
      <Flex justifyContent="space-around">{cardProp2}</Flex>
    </Box>
  );
};

export default Card;
