import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import NextJsIcon from "./Icons/NextJsIcon";

export default function Footer() {
  return (
    <Box bg="contrast.200" py="10">
      <Flex flexDir="column" align="center">
        <Box fontSize="lg" fontWeight="medium">
          Made By 🧑‍💻 <Link>Azar</Link>
        </Box>
        {/* <Divider orientation="horizontal" w="250px" /> */}
        <Box position="relative" padding="10">
          <Divider orientation="horizontal" w="250px" />
          <AbsoluteCenter bg="contrast.200" px="4">
            and
          </AbsoluteCenter>
        </Box>
        <Link
          bg="brand.900"
          href="https://nextjs.org/"
          color="contrast.200"
          px="7"
          py={2.5}
          fontWeight="medium"
          rounded="base"
          h="auto"
          fontSize="md"
          _hover={{ bg: "brand.900" }}
          _focus={{ bg: "brand.900" }}
          _active={{ bg: "brand.900" }}
        >
          Developed in <NextJsIcon w="24px" h="24px" mr="1" />
          Next js
        </Link>{" "}
        <Box></Box>
      </Flex>
    </Box>
  );
}
