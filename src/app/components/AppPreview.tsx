import { Box, BoxProps, Image } from "@chakra-ui/react";
import React from "react";

export default function AppPreview({ ...rest }: BoxProps) {
  return (
    <Box px="20" py="50px" {...rest}>
      {/* <Image src="/images/appDesign.png" boxShadow="lg" w="75%" margin="auto" /> */}

      {/* <video src="/colorfusion.mp4" autoPlay controls={false} /> */}
      <Box
        bg="contrast.200
      "
        boxShadow="lg"
        w="75%"
        margin="auto"
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px !importamt",
          }}
          muted
          autoPlay
          loop
        >
          <source src="/colorfusion.mp4" />
        </video>
      </Box>
    </Box>
  );
}
