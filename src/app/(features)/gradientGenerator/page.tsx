"use client";
import DiceIcon from "@/app/components/Icons/DiceIcon";
import { CopyIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function GradientGenerator() {
  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#0000ff");
  const [cssCode, setCssCode] = useState("");
  const [gradientType, setGradientType] = useState("linear");
  const [gradientDirection, setGradientDirection] = useState("to right");
  const [gradientDegree, setGradientDegree] = useState("0deg");
  const toast = useToast();

  useEffect(() => {
    generateGradient();
  }, []);

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

  const changeDegree = (degree: React.SetStateAction<string>) => {
    setGradientDegree(degree);
    setGradientDirection(`${degree}deg`);
    generateGradient();
  };
  const copyColorToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    toast({
      title: "copied to clipboard",
      variant: "subtle",
      status: "success",
      duration: 1000,
    });
  };

  function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function generateTwoRandomColors() {
    var color1 = generateRandomColor();
    var color2 = generateRandomColor();
    return [color1, color2];
  }
  return (
    <Container px="20" py="16" mt="10" w="full" maxW="full">
      <Box textAlign="center">
        <Text fontSize="40px" fontWeight="medium" color="brand.900">
          Gradient Generator
        </Text>
        <Text fontSize="md">Create beautiful gradients</Text>
      </Box>
      <Box w="80%" mt="10" gap={10} mx="auto" pos="relative">
        <Box
          width="100%"
          rounded="8px"
          bg="contrast.200"
          p="5"
          pb="16"
          boxShadow="inset rgba(0, 0, 0, 0.11) 0 0 0 1px"
        >
          <Box
            h="450px"
            rounded="8px"
            background={`linear-gradient(${gradientDirection}, ${color1}, ${color2})`}
          ></Box>

          <Box py="5">
            <Flex gap={5}>
              <Box>
                <Box fontSize="md" fontWeight="medium">
                  Colors
                </Box>
                <Flex gap={5}>
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
                        generateGradient();
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
                    bg="contrast.200"
                    h="fit-content"
                    borderRadius="4px"
                    boxShadow="inset rgba(0, 0, 0, 0.11) 0 0 0 1px"
                    align="center"
                    gap={2}
                  >
                    <input
                      type="color"
                      value={color2}
                      onChange={(e) => {
                        setColor2(e.target.value);
                        generateGradient();
                      }}
                    />
                    <Box fontSize="md" fontWeight="medium" color="brand.900">
                      {color1}
                    </Box>
                  </Flex>
                </Flex>
              </Box>

              <Flex>
                <Box>
                  <Box fontSize="md" fontWeight="medium">
                    Degree
                  </Box>
                  <Box>
                    <Input
                      boxShadow="inset rgba(0, 0, 0, 0.11) 0 0 0 1px"
                      type="number"
                      value={gradientDegree}
                      w="100px"
                      onChange={(e) => {
                        changeDegree(e.target.value);
                      }}
                    />
                  </Box>
                </Box>
              </Flex>
              <Box w="full">
                <Box fontSize="md" fontWeight="medium">
                  Code
                </Box>
                <Flex
                  align="center"
                  justifyContent="space-between"
                  fontSize="md"
                  fontWeight="medium"
                  bg="#f7eeff"
                  w="full"
                  py="2"
                  px="4"
                  cursor="pointer"
                  rounded="base"
                  onClick={() => copyColorToClipboard(cssCode)}
                >
                  <Box> {cssCode}</Box>
                  <CopyIcon />
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box
            p="2"
            bg="#EDF0F9"
            pos="absolute"
            left="50%"
            bottom="-35px"
            transform="translateX(-50%)"
            rounded="full"
          >
            <Flex
              align="center"
              p="4"
              justify="center"
              bg="#4770F5"
              w="fit-content"
              onClick={() => {
                var colors = generateTwoRandomColors();
                setColor1(colors[0]);
                setColor2(colors[1]);
                generateGradient();
              }}
              rounded="full"
              cursor="pointer"
            >
              <DiceIcon color="#ffffff" h="10" w="10" />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
