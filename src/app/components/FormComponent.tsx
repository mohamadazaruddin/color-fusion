import {
  Box,
  Text,
  BoxProps,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
interface FormType {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  wrapperProps: BoxProps;
}

export default function FormComponent({
  primaryColor,
  secondaryColor,
  tertiaryColor,
  wrapperProps,
}: FormType) {
  return (
    <Box
      boxShadow="xs"
      rounded="18px"
      p="5"
      bg={secondaryColor}
      {...wrapperProps}
    >
      <Box fontSize="22px" fontWeight={"bold"} color={primaryColor}>
        <Text>Hi,</Text>
        <Text> Welcome Back</Text>
      </Box>
      <Box mt="5">
        <FormControl>
          <FormLabel fontSize="sm" color={tertiaryColor}>
            Email
          </FormLabel>
          <Input
            bg={secondaryColor}
            _placeholder={{
              color: tertiaryColor,
            }}
            rounded={"50px"}
            type="email"
            borderColor={primaryColor}
          />
        </FormControl>
        <FormControl mt="3">
          <FormLabel fontSize="sm" color={tertiaryColor}>
            Password
          </FormLabel>
          <Input
            bg={secondaryColor}
            _placeholder={{
              color: tertiaryColor,
            }}
            rounded={"50px"}
            type="email"
            _focus={{ outline: "none", boxShadow: "none" }}
            _hover={{ outline: "none", boxShadow: "none" }}
            _active={{ outline: "none", boxShadow: "none" }}
            borderColor={primaryColor}
          />
          <FormHelperText color={primaryColor} textAlign={"end"}>
            forget password ?
          </FormHelperText>
        </FormControl>

        <Button
          mt="8"
          bg={primaryColor}
          color={secondaryColor}
          variant="solid"
          rounded={"50px"}
          w="full"
          _hover={{}}
          _focus={{}}
          _active={{}}
        >
          Button
        </Button>
      </Box>
    </Box>
  );
}
