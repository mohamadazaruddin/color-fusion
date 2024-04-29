"use client";
import { Box, Container, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function GradientGenerator() {
  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#0000ff");
  const [cssCode, setCssCode] = useState("");
  const [gradientType, setGradientType] = useState("linear");
  const [gradientDirection, setGradientDirection] = useState("to right");
  const [gradientDegree, setGradientDegree] = useState("0deg");
  const generateGradient = () => {
    let gradientCSS;
    if (gradientType === "linear") {
      gradientCSS = `${gradientDirection}, ${color1}, ${color2}`;
      setCssCode(`background: linear-gradient(${gradientCSS});`);
    } else if (gradientType === "radial") {
      gradientCSS = `${color1}, ${color2}`;
      setCssCode(`background: radial-gradient(${gradientCSS});`);
    }
  };

  const changeDirection = (direction: React.SetStateAction<string>) => {
    setGradientDirection(direction);
    generateGradient();
  };

  const changeDegree = (degree: React.SetStateAction<string>) => {
    setGradientDegree(degree);
    setGradientDirection(`${degree}deg`);
    generateGradient();
  };

  return (
    <Container px="20" py="16" mt="10" w="full" maxW="ful">
      <Box textAlign="center">
        <Text fontSize="40px" fontWeight="medium" color="brand.900">
          Gradient Generator
        </Text>
        <Text fontSize="md">Create beautiful gradients</Text>
      </Box>
      <Box w="80%" mt="10" gap={10} mx="auto">
        <Box
          width="100%"
          rounded="8px"
          bg="contrast.200"
          p="5"
          boxShadow="inset rgba(0, 0, 0, 0.11) 0 0 0 1px"
        >
          <Box
            h="450px"
            rounded="8px"
            background={`linear-gradient(${gradientDirection}, ${color1}, ${color2})`}
          ></Box>
          <Box p="5">
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
            <select
              value={gradientType}
              onChange={(e) => setGradientType(e.target.value)}
            >
              <option value="linear">Linear Gradient</option>
              <option value="radial">Radial Gradient</option>
            </select>
            {gradientType === "linear" && (
              <select
                value={gradientDirection}
                onChange={(e) => changeDirection(e.target.value)}
              >
                <option value="to right">To Right</option>
                <option value="to left">To Left</option>
                <option value="to top">To Top</option>
                <option value="to bottom">To Bottom</option>
              </select>
            )}
            {gradientType === "linear" && (
              <input
                type="number"
                value={gradientDegree}
                onChange={(e) => changeDegree(e.target.value)}
              />
            )}
            <button onClick={generateGradient}>Generate Gradient</button>
            {cssCode}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
