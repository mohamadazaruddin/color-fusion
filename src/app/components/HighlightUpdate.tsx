import {
  Avatar,
  AvatarBadge,
  Box,
  BoxProps,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { HiVideoCamera } from "react-icons/hi";
interface HighLightsType {
  primaryColor: string;
  secondaryColor: string;
  tertioryColor: string;
  wrapperProps: BoxProps;
}

export default function HighlightUpdate({
  primaryColor,
  secondaryColor,
  tertioryColor,
  wrapperProps,
}: HighLightsType) {
  const users = [
    {
      name: "Your Update",
      image: "https://bit.ly/prosper-baba",
      loggedIn: true,
    },
    {
      name: "Hissy",
      image:
        "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
    },
    {
      name: "rebecca",
      image:
        "https://images.unsplash.com/photo-1539117332142-bdb5d548d1ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { name: "Adam", image: "https://bit.ly/ryan-florence" },
    {
      name: "Lisa",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Jacob",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJOy5O0rNmuzlNpszj6rc_2xcgDIENsNw7epfmEUKYw&s",
    },
    {
      name: "scarlet",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
  ];
  return (
    <Box
      boxShadow="xs"
      rounded="18px"
      p="5"
      bg={secondaryColor}
      {...wrapperProps}
    >
      <Box fontSize="md" fontWeight="medium" color={primaryColor}>
        Highlight update
      </Box>
      <Flex mt="5" justify="space-between">
        {users.map((item, i) => (
          <Box key={i} textAlign="center">
            <Avatar
              size="md"
              name={item.name}
              src={item.image}
              boxShadow={
                !item.loggedIn
                  ? `0 0 0 2px ${primaryColor}`
                  : "0 0 0 2px transparent"
              }
            >
              {item.loggedIn && (
                <AvatarBadge
                  boxSize="5"
                  p={0.5}
                  as={FaPlus}
                  bg={primaryColor}
                />
              )}
            </Avatar>
            <Text
              fontSize="xs"
              fontWeight="medium"
              mt="1"
              color={tertioryColor}
            >
              {item.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
