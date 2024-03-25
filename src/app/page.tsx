"use client";

import { Container, Image } from "@chakra-ui/react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AppPreview from "./components/AppPreview";
import Features from "./components/Features";
import Product from "./components/Product";
import CustomCursor from "./components/CustomCursor";
import AboutUs from "./components/AboutUs";

export default function Home() {
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
      <CustomCursor isView={false} />
      <Image
        src="/images/balls.svg"
        position="absolute"
        top="130px"
        right={0}
      />
      <Image
        src="/images/balls.svg"
        position="absolute"
        top="400px"
        left={0}
        transform="rotate(180deg)"
      />
      <Header pos="fixed" />
      <Banner mt="24" position="relative" zIndex={99} />
      <AppPreview position="relative" zIndex={99} />
      <Features />
      <Product />
      <AboutUs />
    </Container>
  );
}
