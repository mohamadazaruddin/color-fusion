import { Box, Button, Flex, Link, Image, FlexProps } from "@chakra-ui/react";
import { access } from "fs";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header({ ...rest }: FlexProps) {
  const { push } = useRouter();
  const navitem = [
    {
      text: "Playground",
      action: "/playground",
    },

    { text: "Gradients", action: "/gradientGenerator" },
    { text: "Colors", action: "/palette" },
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
      <Box onClick={() => push("/")} cursor="pointer">
        <Image src="/images/logo.png" h="30px" />
      </Box>
      <Flex gap={7} justify="center">
        {navitem.map(({ text, action }, i) => (
          <Link
            _hover={{ bg: "brand.900", color: "#fff" }}
            rounded="full"
            href={action}
            px="2"
            py="1"
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
