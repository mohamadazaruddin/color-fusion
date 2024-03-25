import { Box, BoxProps, Text, Heading } from "@chakra-ui/react";
import React from "react";
type PageTitleProps = {
  label?: React.ReactNode | string;
  description?: React.ReactNode;
};

export default function PageTitle({
  label,
  description,
  ...rest
}: PageTitleProps & BoxProps) {
  return (
    <Box {...rest}>
      {label && (
        <Heading
          textAlign="center"
          color="brand.900"
          fontSize="40px"
          fontWeight="semibold"
          cursor="pointer"
        >
          {label}
        </Heading>
      )}
      {description && (
        <Text
          fontSize="lg"
          mt={5}
          fontWeight="normal"
          color="brand.200"
          cursor="pointer"
          textAlign="center"
        >
          {description}
        </Text>
      )}
    </Box>
  );
}
