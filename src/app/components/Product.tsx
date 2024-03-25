import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  Text,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { title } from "process";
import React, { useEffect, useRef } from "react";
import PageTitle from "./PageTitle";
gsap.registerPlugin(ScrollTrigger);

export default function Product({ ...rest }: FlexProps) {
  const [first, setFirst] = React.useState(0);
  const accordianData = [
    {
      title: "Generate Stunning Color Palettes",
      description:
        "Explore a vast library of pre-designed palettes or create your own with \n our advanced color engine.",
    },
    {
      title: "Speed Up Colorization",
      description:
        "Save Hours of manual work with our pre-defined components colorization feature \nthat instantly applies harmonious colors to your designs",
    },
    {
      title: "Enhance Accessibility",
      description:
        "Ensure your designs are accessible to all by \n utilizing our built-in color changing feature. which\n allows you to play with desired color for your designs",
    },
    {
      title: "Collaborate Effortlessly",
      description:
        "Share your color schemes and collaborate with \n team members seamlessly through our export \n feature which allow to download your color \n palette to your local machine.",
    },
  ];

  return (
    <Flex
      px="20"
      pt="50px"
      pb="100px"
      justify="center"
      align="center"
      flexDir="column"
      {...rest}
    >
      <PageTitle
        label={
          <>
            Unlock Your Design Brilliance <br /> Colorize Faster with Us
          </>
        }
        description={
          <>
            unlock your true design potential and create captivating visuals
            that stand out from <br />
            the crowd. Join the color revolution today!
          </>
        }
      />

      <Flex w="full" mt="20">
        <Box w="50%" pl="20">
          {accordianData.map(({ title, description }, i) => (
            <Box mb={5} key={`sec-${i}`}>
              <Box
                textAlign="left"
                fontSize={i === first ? "28px" : "20px"}
                fontWeight="semibold"
                color="brand.900"
                transition={"0.3s"}
              >
                {title}
              </Box>
              <Text
                fontSize={i === first ? "md" : "sm"}
                fontWeight="normal"
                color="brand.200"
                noOfLines={2}
                whiteSpace="pre-wrap"
                transition={"0.3s"}
              >
                {description}
              </Text>
            </Box>
          ))}
        </Box>
        <Box w="50%" h="350px">
          <Button
            onClick={() => {
              if (first < 3) {
                setFirst(first + 1);
              }
            }}
          >
            change
          </Button>
          <Button
            onClick={() => {
              if (first > 0) {
                setFirst(first - 1);
              }
            }}
          >
            change
          </Button>
          image
        </Box>
      </Flex>
    </Flex>
  );
}
