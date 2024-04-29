import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import PageTitle from "./PageTitle";

export default function ContactUs() {
  return (
    <Box p="10">
      <PageTitle label={<>Contact us</>} />
      <Box p="5" bg="contrast.200" w="40%" m="auto" mt="10  ">
        <FormControl fontWeight="normal" fontSize="md" mb="2">
          <FormLabel mt={0} mb="1">
            Name
          </FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl fontWeight="normal" fontSize="md" mb="2">
          <FormLabel mt={0} mb="1">
            Email address
          </FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl fontWeight="normal" fontSize="md" mb="2">
          <FormLabel mt={0} mb="1">
            Comment
          </FormLabel>
          <Textarea
            rows={8}
            cols={50}
            resize={"none"}
            placeholder="Drop a comment"
            size="md"
          />
        </FormControl>
      </Box>
    </Box>
  );
}
