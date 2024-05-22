import { Box, Button, Flex, FlexProps, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Banner({ ...rest }: FlexProps) {
  const { push } = useRouter();
  return (
    <Flex
      px="20"
      py="100px"
      justify="center"
      align="center"
      flexDir="column"
      {...rest}
    >
      <Heading
        textAlign="center"
        color="brand.900"
        fontSize="68px"
        cursor="pointer"
        fontWeight="semibold"
      >
        Create your own <br />
        design system
      </Heading>
      <Text
        fontSize="lg"
        mt={7}
        fontWeight="normal"
        color="brand.200"
        textAlign="center"
        cursor="pointer"
      >
        Create the perfect palette or get inspired by thousands of
        <br /> beautiful color schemes.
      </Text>
      <Button
        mt="16"
        bg="brand.900"
        color="contrast.200"
        px="14"
        onClick={() => push("/playground")}
        py={3.5}
        h="auto"
        fontWeight="medium"
        rounded="base"
        fontSize="md"
        _hover={{ bg: "brand.900" }}
        _focus={{ bg: "brand.900" }}
        _active={{ bg: "brand.900" }}
      >
        Get Started
      </Button>
    </Flex>
  );
}
