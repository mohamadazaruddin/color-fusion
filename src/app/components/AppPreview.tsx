import { Box, BoxProps, Image } from "@chakra-ui/react";
import React from "react";

export default function AppPreview({ ...rest }: BoxProps) {
  return (
    <Box px="20" py="50px" {...rest}>
      <Image src="/images/appDesign.png" boxShadow="lg" w="75%" margin="auto" />
    </Box>
  );
}
