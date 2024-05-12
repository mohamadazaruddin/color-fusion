import { Box, BoxProps, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { CiCalendar } from "react-icons/ci";
interface CalendarType {
  primaryColor: string;
  secondaryColor: string;
  tertioryColor: string;
  wrapperProps: BoxProps;
}

export default function Calendar({
  primaryColor,
  secondaryColor,
  tertioryColor,
  wrapperProps,
}: CalendarType) {
  const date = [
    { day: "Mon", date: "5", icon: false },
    { day: "Tue", date: "6", icon: false },
    ,
    { day: "Wed", date: "7", icon: false },
    ,
    { day: "Thu", date: "8", icon: true },
    ,
    { day: "Fri", date: "9", icon: false },
    ,
    { day: "Sat", date: "10", icon: false },
    ,
    { day: "Sun", date: "11", icon: false },
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
        Schedule
      </Box>
      <Text
        textAlign="center"
        fontSize="lg"
        fontWeight="normal"
        color={tertioryColor}
      >
        July 2024
      </Text>

      <Flex justify="space-between" mt="5" gap="4" overflowX="hidden">
        {date.map((item, i) => (
          <Box
            key={i}
            p="2"
            w="full"
            rounded="md"
            fontSize="sm"
            bg={item?.icon ? `${primaryColor}` : "gray.200"}
            color={item?.icon ? `${secondaryColor}` : "#000"}
            textAlign="center"
          >
            {item?.day}
            <Text fontSize="md" fontWeight="medium" mt="1">
              {item?.date}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
