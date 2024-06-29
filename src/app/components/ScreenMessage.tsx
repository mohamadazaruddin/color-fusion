import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";

export default function ScreenMessage({ isOpen, onClose }: any) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Alert status="info">
          <AlertIcon />
          Switch to Desktop Layout !!
        </Alert>
        <ModalBody fontSize="sm" color="brand.900">
          This app is built for desktop layout. Please switch to a desktop or
          larger screen to view the content properly.
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={onClose}
            bg="brand.900"
            fontSize="sm"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
