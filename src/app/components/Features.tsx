import {
  Flex,
  Heading,
  Button,
  Image,
  FlexProps,
  Text,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import React from "react";
import CustomCursor from "./CustomCursor";
import PageTitle from "./PageTitle";
import AssecibleIcon from "./Icons/AssecibleIcon";
import ThemeIcon from "./Icons/ThemeIcon";
import CompossableIcon from "./Icons/CompossableIcon";
import CommunityIcon from "./Icons/CommunityIcon";
import ThunderIcon from "./Icons/ThunderIcon";
import { MoonIcon } from "@chakra-ui/icons";

export default function Features({ ...rest }: FlexProps) {
  const featDetails = [
    {
      icon: <AssecibleIcon w="5" h="5" />,
      title: "Accessible",
      description:
        "Color fusion offers a range of customization options to personalize their experience.",
    },
    {
      icon: <ThemeIcon w="5" h="5" />,
      title: "Themeable",
      description:
        "Customize any part of our components to match your design needs.",
    },
    {
      icon: <CompossableIcon w="5" h="5" />,
      title: "Composable",
      description:
        "Designed with composition in mind. Compose new components with ease.",
    },
    {
      icon: <CommunityIcon w="5" h="5" />,
      title: "Active Community",
      description:
        "We're a team of active maintainers ready to help you whenever you need.",
    },
    {
      icon: <ThunderIcon w="5" h="5" />,
      title: "Experience",
      description:
        "Guaranteed to boost your productivity when building your app or website.",
    },
    {
      icon: <MoonIcon w="5" h="5" color="contrast.200" />,
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
      pos="relative"
      align="center"
      flexDir="column"
      {...rest}
    >
      <Image
        src="/images/balls.svg"
        position="absolute"
        top="-200px"
        left={40}
        zIndex={1}
        transform="rotate(180deg)"
      />
      <Image
        src="/images/balls.svg"
        position="absolute"
        top="700px"
        right={100}
        zIndex={1}
        transform="rotate(180deg)"
      />
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
        pos="relative"
        zIndex={99}
        justifyContent="space-between"
        rowGap="10"
        columnGap="14"
      >
        {featDetails.map(({ title, description, icon }, i) => (
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
              {icon}
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
