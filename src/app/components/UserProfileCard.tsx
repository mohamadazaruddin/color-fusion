import { Avatar, Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import React from "react";
interface ProfileType {
  gender: string;
  size: string;
  primaryColor: string;
  secondaryColor: string;
  tertioryColor: string;
  wrapperProps: FlexProps;
}
export default function UserProfileCard({
  gender,
  size,
  primaryColor,
  secondaryColor,
  tertioryColor,
  wrapperProps,
}: ProfileType) {
  return (
    <Flex gap={2} align="center" {...wrapperProps}>
      <Avatar
        size={size}
        name="Prosper Otemuyiwa"
        src={
          gender === "male"
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ849XG4re4dw7wrpRfUhVEzlqGVte_oeSdWWhGQsQw&s"
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriOUPDK8qi5EahYDos1V3giNpU_eAi4FwXg&s"
        }
      />
      <Box>
        <Text fontWeight="semibold" fontSize={"md"} color={secondaryColor}>
          {gender === "male" ? "John Doe" : "Linda Jane"}
        </Text>
        <Text fontSize={"xs"} color={tertioryColor}>
          UX Designer
        </Text>
      </Box>
    </Flex>
  );
}
