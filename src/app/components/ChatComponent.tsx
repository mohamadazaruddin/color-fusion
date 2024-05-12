import { Box, BoxProps, Flex, Icon, Input } from "@chakra-ui/react";
import React from "react";
import UserProfileCard from "./UserProfileCard";
import { SlOptionsVertical } from "react-icons/sl";
import { PhoneIcon } from "@chakra-ui/icons";
import { IoIosSend } from "react-icons/io";
interface ChatType {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  tertiaryShades: string;
  wrapperProps: BoxProps;
}

export default function ChatComponent({
  primaryColor,
  secondaryColor,
  tertiaryColor,
  wrapperProps,
  tertiaryShades,
}: ChatType) {
  return (
    <Box boxShadow="xs" rounded="18px" bg={secondaryColor} {...wrapperProps}>
      <Flex
        p="5"
        align="center"
        justify={"space-between"}
        borderBottom={"1px solid"}
        borderColor={"#c0c0c2"}
      >
        <UserProfileCard
          gender={"female"}
          size={"md"}
          primaryColor={primaryColor}
          secondaryColor={tertiaryColor}
          tertioryColor={tertiaryShades}
          wrapperProps={{}}
        />

        <Icon as={SlOptionsVertical} color={primaryColor} w={5} h={5} />
      </Flex>

      <Box p="5">
        <Box w="200px" bg={"gray.200"} p="2" rounded="12px" fontSize="xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
          aut doloremque cumque incidunt quidem illo
        </Box>
        <Box
          w="150px"
          bg={"gray.200"}
          p="2"
          rounded="12px"
          fontSize="xs"
          mt="2"
        >
          aut doloremque cumque incidunt quidem illo
        </Box>
        <Flex flexDir="column" alignItems="end" justify="right" w="full">
          <Box
            w="150px"
            bg={primaryColor}
            color={secondaryColor}
            p="2"
            rounded="12px"
            fontSize="xs"
            mt="4"
          >
            aut doloremque cumque incidunt quidem illo
          </Box>
          <Box
            w="40px"
            bg={primaryColor}
            color={secondaryColor}
            p="2"
            rounded="12px"
            fontSize="xs"
            mt="2"
          >
            ...
          </Box>
        </Flex>

        <Flex gap={2} mt="5">
          <Input rounded={"50px"} bg={"gray.200"} type="email" />
          <Flex
            align="center"
            justify="center"
            w="45px"
            rounded={"50px"}
            bg={primaryColor}
          >
            <Icon as={IoIosSend} h={5} w={5} color={secondaryColor} />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
