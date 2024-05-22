import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import * as Yup from "yup";
import PageTitle from "./PageTitle";
import { Formik, Form, Field } from "formik";
import ky from "ky";

const AddCommentSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  comment: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function ContactUs() {
  const toast = useToast();

  const handleSubmit = async (values: any) => {
    const sendParams = {
      name: values.name,
      email: values.email,
      comment: values.comment,
      location: "red",
    };
    const response = await ky
      .post(`/api/comments/add-comments`, { json: sendParams })
      .json();
    let responseData = response;
    if (responseData) {
      toast({
        description: "Comments Added Succesfully",
        status: "success",
        isClosable: true,
        variant: "left-accent",
        position: "bottom",
        duration: 4000,
      });
    }
  };
  return (
    <Box p="10">
      <PageTitle label={<>Contact us</>} />
      <Box p="5" bg="contrast.200" w="40%" m="auto" mt="10  ">
        <Formik
          initialValues={{
            name: "",
            comment: "",
            email: "",
          }}
          validationSchema={AddCommentSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%", height: "100%" }}>
              <FormControl fontWeight="normal" fontSize="md" mb="2">
                <FormLabel mt={0} mb="1">
                  Name
                </FormLabel>
                <Field
                  py="3"
                  pl="4"
                  h="auto"
                  border="2px solid"
                  borderColor={
                    errors.name && touched.name ? "red.500" : "brand.100"
                  }
                  as={Input}
                  placeholder="John Doe"
                  w="100%"
                  name="name"
                />
                {errors.name && touched.name ? (
                  <Box
                    ml="1.5"
                    color="red.500"
                    fontSize="sm"
                    textAlign="left"
                    data-testid="emailError"
                  >
                    {errors.name}
                  </Box>
                ) : (
                  <Box fontSize="sm" visibility="hidden">
                    Required
                  </Box>
                )}{" "}
              </FormControl>
              <FormControl fontWeight="normal" fontSize="md" mb="2">
                <FormLabel mt={0} mb="1">
                  Email address
                </FormLabel>
                <Field
                  placeholder="Johndoe@abc.com"
                  py="3"
                  pl="4"
                  h="auto"
                  border="2px solid"
                  borderColor={
                    errors.email && touched.email ? "red.500" : "brand.100"
                  }
                  as={Input}
                  w="100%"
                  type="email"
                  name="email"
                />
              </FormControl>
              {errors.email && touched.email ? (
                <Box
                  ml="1.5"
                  color="red.500"
                  fontSize="sm"
                  textAlign="left"
                  data-testid="emailError"
                >
                  {errors.email}
                </Box>
              ) : (
                <Box fontSize="sm" visibility="hidden">
                  Required
                </Box>
              )}
              <FormControl fontWeight="normal" fontSize="md" mb="2">
                <FormLabel mt={0} mb="1">
                  Comment
                </FormLabel>
                <Field
                  as={Textarea}
                  rows={8}
                  cols={50}
                  border="2px solid"
                  borderColor={
                    errors.comment && touched.comment ? "red.500" : "brand.100"
                  }
                  name="comment"
                  resize={"none"}
                  placeholder="Drop a comment"
                  size="md"
                />
              </FormControl>
              {errors.comment && touched.comment ? (
                <Box
                  ml="1.5"
                  color="red.500"
                  fontSize="sm"
                  textAlign="left"
                  data-testid="commentError"
                >
                  {errors.comment}
                </Box>
              ) : (
                <Box fontSize="sm" visibility="hidden">
                  Required
                </Box>
              )}{" "}
              <Flex justify="center">
                <Button
                  bg="brand.900"
                  color="contrast.200"
                  px="7"
                  py={2.5}
                  type="submit"
                  fontWeight="medium"
                  rounded="base"
                  h="auto"
                  fontSize="md"
                  _hover={{ bg: "brand.900" }}
                  _focus={{ bg: "brand.900" }}
                  _active={{ bg: "brand.900" }}
                >
                  Submit
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
