import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  FlexProps,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PageTitle from "./PageTitle";
import { EmailIcon } from "@chakra-ui/icons";

export default function AboutUs({ ...rest }: FlexProps) {
  const socialLinks = [
    {
      icon: <EmailIcon />,
      action: () => {},
    },
    {
      icon: <EmailIcon />,
      action: () => {},
    },
    {
      icon: <EmailIcon />,
      action: () => {},
    },
  ];
  return (
    <Flex
      px="20"
      py="100px"
      justify="center"
      align="center"
      flexDir="column"
      position="relative"
      {...rest}
    >
      <Image
        src="/images/balls.svg"
        position="absolute"
        top="130px"
        right={0}
      />
      <Image
        src="/images/balls.svg"
        position="absolute"
        top="400px"
        left={0}
        transform="rotate(180deg)"
      />
      <PageTitle label={<>About Us</>} />
      <Flex w="65%" mt="20" bg="contrast.200">
        <Box
          bgImg="https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142811/cool-profile-pictures-for-tiktok-5-678x1024.webp"
          bgRepeat="no-repeat"
          bgSize="100% auto"
          bgPos="center"
          w="50%"
        ></Box>
        <Box h="full" w="50%" textAlign="center" p="40px">
          <Text fontSize="32px" fontWeight="semibold" color="brand.900">
            Hello !
          </Text>
          <Text
            fontSize="md"
            fontWeight="normal"
            color="brand.200"
            mt="6"
            cursor="pointer"
          >
            Thank you so much for getting here I’m Azar, Creator and maintainer
            of color fusion , I am a passionate ux designer and full-stack
            developer. I strive to create innovative and user-centric
            experiences. I am grateful for the opportunity to share my passion
            for design and development with you.I’d really love to get in touch
            with you to hear your feedback or just say hello !
          </Text>
          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter
              bg="white"
              fontSize="sm"
              fontWeight="medium"
              color="brand.900"
              px="4"
            >
              REACH ME ON
            </AbsoluteCenter>
          </Box>

          <Flex gap={8} justify="center">
            {socialLinks.map(({ icon, action }, i) => (
              <Flex
                key={`social-${i}`}
                align="center"
                justify="center"
                h="40px"
                w="40px"
                rounded="base"
                border="1px solid"
                borderColor="brand.100"
              >
                {icon}
              </Flex>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
