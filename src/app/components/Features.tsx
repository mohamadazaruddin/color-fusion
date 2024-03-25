import { MoonIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Button,
  FlexProps,
  Text,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import React from "react";
import CustomCursor from "./CustomCursor";
import PageTitle from "./PageTitle";

export default function Features({ ...rest }: FlexProps) {
  const featDetails = [
    {
      title: "Accessible",
      description:
        "Chakra UI strictly follows WAI-ARIA standards for all components.",
    },
    {
      title: "Themeable",
      description:
        "Customize any part of our components to match your design needs.",
    },
    {
      title: "Composable",
      description:
        "Designed with composition in mind. Compose new components with ease.",
    },
    {
      title: "Active Community",
      description:
        "We're a team of active maintainers ready to help you whenever you need.",
    },
    {
      title: "Experience",
      description:
        "Guaranteed to boost your productivity when building your app or website.",
    },
    {
      title: "Light and Dark UI",
      description:
        "Chakra UI strictly follows WAI-ARIA standards for all components.",
    },
  ];
  return (
    <Flex
      px="20"
      py="100px"
      justify="center"
      align="center"
      flexDir="column"
      {...rest}
    >
      <PageTitle
        label={
          <>
            An experience you’d expect <br /> from a design system
          </>
        }
        description={<>Opinionated and designed for daily use.</>}
      />
      <Grid
        templateColumns="repeat(3, 1fr)"
        w="75%"
        mt="14"
        justifyContent="space-between"
        rowGap="10"
        columnGap="14"
      >
        {featDetails.map(({ title, description }, i) => (
          <GridItem
            key={`feat-${i}`}
            w="auto"
            p="8"
            bg="contrast.200"
            alignItems="start"
            rounded="lg"
          >
            <Flex
              justify="center"
              align="center"
              w={14}
              h={14}
              bg="brand.900"
              rounded="full"
            >
              <MoonIcon color="contrast.200" />
            </Flex>
            <Heading
              color="brand.900"
              fontSize="20px"
              fontWeight="semibold"
              mt={5}
            >
              {title}
            </Heading>
            <Text fontSize="md" mt={2.5} fontWeight="normal" color="brand.200">
              {description}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
