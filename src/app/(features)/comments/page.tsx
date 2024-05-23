"use client";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import ky from "ky";
import React, { useEffect, useState } from "react";

type Comments = {
  _id: string;
  name: string;
  email: string;
  comment: string;
  __v: number;
};

export default function Comments() {
  const [comments, setComments] = useState<Comments[]>([]);
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const data: Comments[] = await ky("/api/comments/get-comments").json();
      setComments(data);
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    }
  };

  return (
    <Container px="20" py="16" mt="10" w="full" maxW="full" h="full">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {comments.map((comment, index) => (
          <GridItem
            key={index}
            w="100%"
            bg="#fff"
            rounded="base"
            boxShadow="lg"
          >
            <Flex gap="4" align="center" p="5">
              <Box>
                <Avatar name={comment.name} src={comment.name} />
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="medium" color="brand.900">
                  {comment.name}
                </Text>
                <Text fontSize="sm" fontWeight="noraml" color="brand.900">
                  {comment.email}
                </Text>
              </Box>
            </Flex>
            <Box bg="#e6e6ff" p="5">
              <Text fontSize="md" fontWeight="medium" color="brand.900">
                {comment.comment}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
