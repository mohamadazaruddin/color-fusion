"use client";

import { Box, Container, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import AppPreview from "../components/AppPreview";
import Features from "../components/Features";
import Product from "../components/Product";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box pos="relative">
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
      <Banner mt="24" position="relative" zIndex={99} />
      <AppPreview position="relative" zIndex={99} />
      <Features />
      <Product />
      <AboutUs />
      <ContactUs />
    </Box>
  );
}
