import { Box, BoxProps, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import UserProfileCard from "./UserProfileCard";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline, IoStar } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
interface UserPreviewType {
  primaryColor: string;
  secondaryColor: string;
  tertioryColor: string;
  wrapperProps: BoxProps;
  review: Boolean;
}
export default function UserPreview({
  primaryColor,
  secondaryColor,
  tertioryColor,
  wrapperProps,
  review,
}: UserPreviewType) {
  const UserAddress = [
    { icon: IoMdMail, title: "johndoe1234@email.com" },
    { icon: IoPhonePortraitOutline, title: "+91 555-555-5555" },
    { icon: FaLocationDot, title: "123 Main Street, Anytown, USA 12345" },
  ];
  return (
    <Box
      boxShadow="xs"
      rounded="18px"
      p="5"
      bg={secondaryColor}
      {...wrapperProps}
    >
      <Flex justify="space-between">
        <Box fontSize="md" fontWeight="medium" color={primaryColor}>
          {review ? "User Review" : "User Profile"}
        </Box>
        <Icon as={SlOptionsVertical} color={primaryColor} w={5} h={5} />
      </Flex>

      <Box mt="5">
        <UserProfileCard
          gender={review ? "male" : "female"}
          size={"md"}
          primaryColor={""}
          secondaryColor={tertioryColor}
          tertioryColor={""}
          wrapperProps={{
            mt: 5,
          }}
        />
      </Box>

      {review ? (
        <>
          <Flex mt="5">
            <Icon as={IoStar} color={primaryColor} />
            <Icon as={IoStar} color={primaryColor} />
            <Icon as={IoStar} color={primaryColor} />
            <Icon as={IoStar} color={primaryColor} />
            <Icon as={IoStar} color={"gray.400"} />
          </Flex>
          <Box mt="4" color={tertioryColor}>
            <Text fontSize="xs" fontWeight="normal">
              7 August 2024 04:36 pm
            </Text>
            <Text fontSize="md" fontWeight="medium" mt="3">
              Satisfied
            </Text>
            <Text fontSize="sm" fontWeight="normal" mt="1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              consequatur facilis non in ex aliquid{" "}
            </Text>
            <Text fontSize="sm" fontWeight="normal" mt="7">
              was this review helpful ?
            </Text>
          </Box>
        </>
      ) : (
        <>
          <Box mt="5">
            {UserAddress.map((item, i) => (
              <Flex key={i} align="center" px="4" gap="5" mt="4">
                <Icon color={primaryColor} as={item.icon} h={4} w={4} />
                <Box color={tertioryColor}>{item.title}</Box>
              </Flex>
            ))}
          </Box>
        </>
      )}

      <Button
        bg={primaryColor}
        color={secondaryColor}
        variant="solid"
        rounded={"50px"}
        mt="5"
        w="full"
        _hover={{}}
        _focus={{}}
        _active={{}}
      >
        {review ? "yes helpful" : "Follow"}
      </Button>
      <Button
        mt="2"
        w="full"
        color={primaryColor}
        borderColor={primaryColor}
        variant="outline"
        rounded={"50px"}
      >
        {review ? "no didn't help" : "message"}
      </Button>
    </Box>
  );
}
