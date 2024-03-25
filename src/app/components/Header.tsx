import { Box, Button, Flex, Link, Image, FlexProps } from "@chakra-ui/react";
import React from "react";

export default function Header({ ...rest }: FlexProps) {
  const navitem = [
    { text: "Tools" },
    { text: "About Us" },
    { text: "Contact Us" },
  ];
  return (
    <Flex
      px="20"
      py="5"
      w="full"
      bg="transparent"
      backdropFilter="blur(0.625rem)"
      zIndex={999}
      justify="space-between"
      align="center"
      borderBottom="1px solid"
      borderColor="brand.100"
      {...rest}
    >
      <Box>
        <Image src="/images/logo.png" h="30px" />
      </Box>
      <Flex gap={7} justify="center">
        {navitem.map(({ text }, i) => (
          <Link
            key={`nav-${i}`}
            color="brand.900"
            fontWeight="medium"
            fontSize="md"
          >
            {text}
          </Link>
        ))}
      </Flex>
      <Box>
        <Button
          bg="brand.900"
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
          Get Started
        </Button>
      </Box>
    </Flex>
  );
}
