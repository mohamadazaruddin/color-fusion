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
import { useEffect, useState } from "react";
import ScreenMessage from "../components/ScreenMessage";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box pos="relative">
      {showModal && (
        <ScreenMessage isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
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
