import { Box, BoxProps, Flex, Progress } from "@chakra-ui/react";
import React from "react";
import AreaChartComponent from "./AreaChartComponent";
interface HighLightsType {
  primaryColor: string;
  secondaryColor: string;
  chartGradient: string;
  tertioryColor: string;
  wrapperProps: BoxProps;
}
export default function GraphicUpdate({
  primaryColor,
  secondaryColor,
  tertioryColor,
  chartGradient,
  wrapperProps,
}: HighLightsType) {
  return (
    <Box
      boxShadow="xs"
      rounded="18px"
      p="5"
      bg={secondaryColor}
      {...wrapperProps}
    >
      <Box fontSize="md" fontWeight="medium" color={primaryColor}>
        Graphic Update{" "}
      </Box>
      <Box mt="5">
        <AreaChartComponent
          primaryColor={primaryColor}
          secondaryColor={chartGradient}
          tertioryColor={""}
          wrapperProps={{}}
        />
      </Box>
      <Flex mt="5" justify="space-around" color={tertioryColor}>
        <Box textAlign="center" w="50%" borderRight="1px solid">
          <Box fontSize="sm" fontWeight="medium">
            Base Value
          </Box>
          <Box color={primaryColor} fontSize="20px" fontWeight="semibold">
            120K
          </Box>
        </Box>
        <Box textAlign="center" w="50%">
          <Box fontSize="sm" fontWeight="medium">
            Expected Value
          </Box>
          <Box color={primaryColor} fontSize="20px" fontWeight="semibold">
            140K
          </Box>
        </Box>
      </Flex>
      <Box mt="5" fontSize="sm" color={tertioryColor}>
        Estimated Value
      </Box>
      <Flex align="center" gap={4}>
        <Box w="full" h={4} rounded="8px" bg="gray.200">
          <Box h="full" bg={primaryColor} w="80%" rounded="8px"></Box>
        </Box>
        <Box color={tertioryColor}>80%</Box>
      </Flex>
      <Box mt="2" fontSize="sm" color={tertioryColor}>
        Target Value
      </Box>
      <Flex align="center" gap={4}>
        <Box w="full" h={4} rounded="8px" bg="gray.200">
          <Box h="full" bg={primaryColor} w="50%" rounded="8px"></Box>
        </Box>
        <Box color={tertioryColor}>50%</Box>
      </Flex>
    </Box>
  );
}
