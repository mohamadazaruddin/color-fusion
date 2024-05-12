"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import DiceIcon from "@/app/components/Icons/DiceIcon";

export default function Palette() {
  const [lightShades, setLightShades] = useState<string[]>([]);
  const [color1, setColor1] = useState("#040f20");
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const lighterShades = generateLightShades("#040f20");

    setLightShades(lighterShades);
  }, []);
  const generateLightShades = (colorCode: string) => {
    let r = parseInt(colorCode.slice(1, 3), 16);
    let g = parseInt(colorCode.slice(3, 5), 16);
    let b = parseInt(colorCode.slice(5, 7), 16);

    // Calculate step for lightening
    let step = 25;

    // Initialize array to store shades
    let shades = [];

    // Generate 10 lighter shades
    for (let i = 0; i < 10; i++) {
      r = Math.min(255, r + step);
      g = Math.min(255, g + step);
      b = Math.min(255, b + step);
      let shade =
        "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      shades.push(shade);
    }

    return shades;
  };
  const componentToHex = (c: number) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  const colorsArray = [
    "#202020",
    "#211F26",
    "#1C2024",
    "#1A211E",
    "#1D211C",
    "#21201C",
    "#5C271F",
    "#641723",
    "#64172B",
    "#621639",
    "#651249",
    "#53195D",
    "#402060",
    "#2F265F",
    "#272962",
    "#1F2D5C",
    "#113264",
    "#0D3C48",
    "#0D3D38",
    "#1D3B31",
    "#193B2D",
    "#203C25",
    "#43302B",
    "#3B352B",
    "#3E332E",
    "#582D1D",
    "#4F3422",
    "#473B1F",
    "#37401C",
    "#16433C",
    "#1D3E56",
    "#FF0000",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FFA500",
    "#800080",
    "#000000",
    "#A52A2A",
    "#008080",
    "#00FFFF",
    "#FF00FF",
    "#000080",
    "#808000",
    "#800000",
    "#00FF00",
    "#FFD700",
    "#40E0D0",
    "#4B0082",
    "#EE82EE",
    "#FFD700",
    "#DAA520",
    "#2F4F4F",
    "#E0115F",
    "#008000",
    "#87CEEB",
    "#483D8B",
    "#FF4500",
    "#4682B4",
    "#8A2BE2",
    "#32CD32",
    "#B8860B",
    "#2E8B57",
    "#9932CC",
    "#FFA500",
    "#8B4513",
    "#20B2AA",
    "#8B0000",
    "#FF6347",
    "#FF1493",
    "#1E90FF",
    "#FF8C00",
  ];

  const generateRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    const lighterShades = generateLightShades(color);

    setLightShades(lighterShades);
    setColor1(color);
  };

  // Example usage

  const DefaultColors = () => {
    const colorShades = colorsArray.map((color) => generateLightShades(color));

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <>
        <Flex
          justify="center"
          align="center"
          mt="8"
          py="0"
          w="fit-content"
          margin="auto"
        >
          {list.map((item, index) => (
            <Box key={`item-${index}`} w="120px" mx="5px" textAlign="center">
              {item}
            </Box>
          ))}
        </Flex>
        {colorShades.map((shades, index) => (
          <>
            <Flex
              justify="center"
              align="center"
              mt="8"
              py="2"
              w="fit-content"
              margin="auto"
            >
              {shades.map((shade, i) => (
                <Box
                  key={index}
                  w="120px"
                  h="65px"
                  bg={shade}
                  m="5px"
                  role="group"
                  boxShadow="inset rgba(0, 0, 0, 0.11) 0 0 0 1px"
                  borderRadius="md"
                  display="flex"
                  cursor="pointer"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => copyColorToClipboard(shade)} // Call copyColorToClipboard function when clicked
                >
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    display="none"
                    textTransform="capitalize"
                    _groupHover={{
                      display: "block",
                    }}
                  >
                    {shade}
                  </Text>
                </Box>
              ))}
            </Flex>
          </>
        ))}
      </>
    );
  };

  const copyColorToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopied(!copied);
    toast({
      title: "copied to clipboard",
      variant: "subtle",
      status: "success",
      duration: 1000,
    });
  };
  return (
    <Container px="20" py="16" mt="10" w="full" maxW="full">
      <Box textAlign="center" mb="5">
        <Text fontSize="40px" fontWeight="medium" color="brand.900">
          Palette Generator
        </Text>
        <Text fontSize="md">Create a custom palette</Text>
      </Box>
      <Flex align="center" justify="center" gap={5} w="full">
        <Flex
          py="1.5"
          px="2"
          w="200px"
          bg="contrast.200"
          borderRadius="4px"
          boxShadow="inset rgba(0, 0, 0, 0.11) 0 0 0 1px"
          align="center"
          gap={2}
        >
          <input
            type="color"
            value={color1}
            onChange={(e) => {
              setColor1(e.target.value);
              const lighterShades = generateLightShades(e.target.value);
              setLightShades(lighterShades);
            }}
          />
          <Box fontSize="md" fontWeight="medium" color="brand.900">
            {color1}
          </Box>
        </Flex>
        <Flex
          py="1.5"
          px="2"
          w="200px"
          bg="#7cb0ff1c"
          borderRadius="4px"
          boxShadow="inset rgb(124 176 255) 0 0 0 1px"
          align="center"
          fontSize="md"
          fontWeight="medium"
          color="rgb(02 106 255)"
          onClick={generateRandomColor}
        >
          <DiceIcon mr="2" h="5" w="5" /> Random
        </Flex>
      </Flex>
      <Flex justify="center" align="center" my="8">
        {lightShades.map((color, index) => (
          <Box
            key={index}
            w="75px"
            h="75px"
            bg={color}
            m="5px"
            role="group"
            borderRadius="md"
            display="flex"
            cursor="pointer"
            boxShadow="inset rgba(0, 0, 0, 0.11) 0 0 0 1px"
            alignItems="center"
            onClick={() => copyColorToClipboard(color)}
            justifyContent="center"
          >
            <Text
              fontSize="sm"
              fontWeight="medium"
              display="none"
              _groupHover={{
                display: "block",
              }}
            >
              {color}
            </Text>
          </Box>
        ))}
      </Flex>
      <Box h="1px" w="full" bg="rgba(0, 0, 0, 0.11)" m="auto" />
      <Box mt="5">
        <DefaultColors />
      </Box>
    </Container>
  );
}
