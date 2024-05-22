"use client";
import Calendar from "@/app/components/Calendar";
import ChatComponent from "@/app/components/ChatComponent";
import FormComponent from "@/app/components/FormComponent";
import GraphicUpdate from "@/app/components/GraphicUpdate";
import HighlightUpdate from "@/app/components/HighlightUpdate";
import UserPreview from "@/app/components/UserPreview";
import UserProfileCard from "@/app/components/UserProfileCard";
import {
  BellIcon,
  ChevronDownIcon,
  EmailIcon,
  HamburgerIcon,
  PhoneIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiVideoCamera } from "react-icons/hi";
import { IoIosMail, IoMdHome } from "react-icons/io";
import { useDebounce } from "use-debounce";

export default function Playground() {
  const [primaryClr, setPrimaryClr] = useState("#1c1c9b");
  const [secondaryClr, setSecondaryClr] = useState("#ffffff");
  const [tertiaryClr, setTertiaryClr] = useState("#111113");
  const [primaryShades, setPrimaryShades] = useState<string[]>([]);
  const [secondaryShades, setSecondaryShades] = useState<string[]>([]);
  const [tertiaryShades, setTertiaryShades] = useState<string[]>([]);
  const toast = useToast();
  interface ColorArrayProps {
    colors: string[];
  }
  useEffect(() => {
    setPrimaryShades(generateLightShades(primaryColor));
    setSecondaryShades(generateLightShades(secondaryColor));
    setTertiaryShades(generateLightShades(tertiaryColor));
  }, []);
  const [primaryColor] = useDebounce(primaryClr, 500);
  const [secondaryColor] = useDebounce(secondaryClr, 500);
  const [tertiaryColor] = useDebounce(tertiaryClr, 500);

  useEffect(() => {
    const lighterShades = generateLightShades(primaryColor);
    setPrimaryShades(lighterShades);
  }, [primaryColor]);
  useEffect(() => {
    const secondaryColorShade = generateLightShades(secondaryColor);
    setSecondaryShades(secondaryColorShade);
  }, [secondaryColor]);
  useEffect(() => {
    const lighterShades = generateLightShades(tertiaryColor);
    setTertiaryShades(lighterShades);
  }, [tertiaryColor]);

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
  const copyColorToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    toast({
      title: "copied to clipboard",
      variant: "subtle",
      status: "success",
      duration: 1000,
    });
  };

  const ShadesPalette: React.FC<ColorArrayProps> = ({ colors }) => {
    return (
      <Flex justify="center" align="center" my="1">
        {colors.map((color: string, index: number) => (
          <Box
            key={index}
            w="100px"
            h="60px"
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
    );
  };
  return (
    <Container px="20" py="16" mt="10" w="full" maxW="full">
      <Box textAlign="center">
        <Text fontSize="40px" fontWeight="medium" color="brand.900">
          Playground
        </Text>
        <Text fontSize="md">Customize color for your design</Text>
      </Box>

      <Flex align="center" justify="center" gap={5} w="full" mt="7">
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
            value={primaryColor}
            onChange={(e) => {
              setPrimaryClr(e.target.value);
            }}
          />
          <Box fontSize="md" fontWeight="medium" color="brand.900">
            {primaryColor}
          </Box>
        </Flex>
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
            value={secondaryColor}
            onChange={(e) => {
              setSecondaryClr(e.target.value);
            }}
          />
          <Box fontSize="md" fontWeight="medium" color="brand.900">
            {secondaryColor}
          </Box>
        </Flex>
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
            value={tertiaryColor}
            onChange={(e) => {
              setTertiaryClr(e.target.value);
            }}
          />
          <Box fontSize="md" fontWeight="medium" color="brand.900">
            {tertiaryColor}
          </Box>
        </Flex>

        <Button
          bg="brand.900"
          color="contrast.200"
          h="full"
          py="2"
          px="5"
          fontSize="md"
          onClick={() => {
            let shades = {
              primary: primaryShades,
              secondary: secondaryShades,
              tertiary: tertiaryShades,
            };
            const copiedObj = JSON.stringify(shades);
            console.log(copiedObj);

            navigator.clipboard.writeText(copiedObj);
            toast({
              title: "copied to clipboard",
              variant: "subtle",
              status: "success",
              duration: 1000,
            });
          }}
          fontWeight="medium"
        >
          Copy
        </Button>
      </Flex>
      <Flex flexDir="column" align="center" mt="2">
        <Box my="2" color="#434345" fontSize="sm" fontWeight="medium">
          Selected Colors
        </Box>
        <Box h="1px" w="800px" bg="rgba(0, 0, 0, 0.11)" m="auto" />
      </Flex>

      <Box mt="5">
        <ShadesPalette colors={primaryShades} />
        {secondaryColor.toLowerCase() !== "#ffffff" && (
          <ShadesPalette colors={secondaryShades} />
        )}

        <ShadesPalette colors={tertiaryShades} />
      </Box>

      <Flex gap={5} mt="8" h="auto">
        <Box w="22%" h="auto">
          <Stack direction="row" spacing={4} align="center" w="full">
            <Button
              bg={primaryColor}
              color={secondaryColor}
              variant="solid"
              rounded={"50px"}
              w="50%"
              _hover={{}}
              _focus={{}}
              _active={{}}
            >
              Button
            </Button>
            <Button
              w="50%"
              color={primaryColor}
              borderColor={primaryColor}
              variant="outline"
              bg={secondaryColor}
              rounded={"50px"}
              _hover={{}}
              _focus={{}}
              _active={{}}
            >
              Button
            </Button>
          </Stack>
          <InputGroup
            mt="5"
            color={primaryColor}
            borderColor={primaryColor}
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
          >
            <InputRightElement pointerEvents="none">
              <PhoneIcon color={primaryColor} />
            </InputRightElement>
            <Input
              rounded={"50px"}
              bg={secondaryColor}
              _placeholder={{
                color: tertiaryColor,
              }}
              type="tel"
              placeholder="Phone number"
            />
          </InputGroup>
          <InputGroup
            mt="5"
            color={primaryColor}
            borderColor={primaryColor}
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
          >
            <InputRightElement pointerEvents="none">
              <Flex
                align="center"
                justify="center"
                p="1.5"
                rounded={"50px"}
                bg={primaryColor}
              >
                <PhoneIcon color={secondaryColor} />
              </Flex>
            </InputRightElement>
            <Input
              bg={secondaryColor}
              _placeholder={{
                color: tertiaryColor,
              }}
              rounded={"50px"}
              type="tel"
              placeholder="Phone number"
            />
          </InputGroup>

          <Flex
            px="4"
            py="2.5"
            bg={secondaryColor}
            mt="5"
            boxShadow="xs"
            rounded="50px"
            justifyContent="space-between"
          >
            <EmailIcon color={primaryColor} h="5" w="5" />
            <BellIcon color={primaryShades[5]} h="5" w="5" />
            <PhoneIcon color={primaryShades[5]} h="5" w="5" />
            <SettingsIcon color={primaryShades[5]} h="5" w="5" />
          </Flex>

          <Flex
            flexDir="column"
            justifyContent="space-between"
            bg={secondaryColor}
            py="5"
            mt="5"
            boxShadow="xs"
            rounded={"18px"}
            h="auto"
          >
            <Flex
              borderBottom="1px solid"
              align="center"
              borderColor="#c0c0c2"
              py="2"
              px="5"
            >
              <Icon ml="2" as={HamburgerIcon} w={6} h={6} color={"#757577"} />
              <Text fontWeight="medium" fontSize="lg" ml={2} color={"#757577"}>
                Menu
              </Text>
            </Flex>
            <Link
              mt="2"
              px={7}
              py="3"
              color={primaryColor}
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: "none", bg: "gray.200" }}
              cursor="pointer"
            >
              <Icon as={IoMdHome} w={6} h={6} />
              <Text ml={2}>Home</Text>
            </Link>
            <Link
              px={7}
              py="3"
              display="flex"
              color={primaryShades[5]}
              alignItems="center"
              _hover={{ textDecoration: "none", bg: "gray.200" }}
              cursor="pointer"
            >
              <Icon as={FaStar} w={5} h={5} />
              <Text ml={2}>favorite</Text>
            </Link>
            <Link
              px={7}
              py="3"
              display="flex"
              alignItems="center"
              color={primaryShades[5]}
              _hover={{ textDecoration: "none", bg: "gray.200" }}
              cursor="pointer"
            >
              <Icon as={IoIosMail} w={5} h={5} />
              <Text ml={2}>Inbox</Text>
            </Link>
            <Link
              px={7}
              py="3"
              display="flex"
              alignItems="center"
              color={primaryShades[5]}
              _hover={{ textDecoration: "none", bg: "gray.200" }}
              cursor="pointer"
            >
              <Icon as={HiVideoCamera} w={5} h={5} />
              <Text ml={2}>Videos</Text>
            </Link>
            <Spacer />
            <Box borderTop="1px solid" borderColor="#c0c0c2" mt="135px" px="5">
              <Text mt="5" fontWeight="medium" fontSize="lg" color={"#757577"}>
                Friends
              </Text>
              <UserProfileCard
                gender={"male"}
                size={"md"}
                primaryColor={""}
                secondaryColor={tertiaryColor}
                tertioryColor={tertiaryShades[5]}
                wrapperProps={{
                  mt: 4,
                }}
              />
              <UserProfileCard
                gender={"female"}
                size={"md"}
                primaryColor={""}
                secondaryColor={tertiaryColor}
                tertioryColor={tertiaryShades[5]}
                wrapperProps={{ mt: 5 }}
              />
            </Box>
          </Flex>
        </Box>
        <Box w="22%">
          <FormComponent
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            tertiaryColor={tertiaryColor}
            wrapperProps={{}}
          />
          <ChatComponent
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            tertiaryColor={tertiaryColor}
            wrapperProps={{ mt: "5" }}
            tertiaryShades={tertiaryShades[5]}
          />
        </Box>
        <Box w="34%">
          <HighlightUpdate
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            tertioryColor={tertiaryColor}
            wrapperProps={{}}
          />
          <GraphicUpdate
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            tertioryColor={tertiaryColor}
            chartGradient={primaryShades[5]}
            wrapperProps={{ mt: "5" }}
          />
          <Calendar
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            tertioryColor={tertiaryColor}
            wrapperProps={{ mt: "5" }}
          />
        </Box>
        <Box w="22%">
          <UserPreview
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            tertioryColor={tertiaryColor}
            wrapperProps={{}}
            review={false}
          />
          <UserPreview
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            tertioryColor={tertiaryColor}
            wrapperProps={{ mt: 5 }}
            review={true}
          />
        </Box>
      </Flex>
    </Container>
  );
}
