"use client";
import { Box, Container, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container
      bgImage="/images/bg.png"
      h="100vh"
      maxW="full"
      overflowY="auto"
      w="full"
      position="relative"
      bgSize="cover"
      p="0"
      bgAttachment="fixed"
    >
      <Header pos="fixed" />
      {children}
      <Footer />
    </Container>
  );
}
