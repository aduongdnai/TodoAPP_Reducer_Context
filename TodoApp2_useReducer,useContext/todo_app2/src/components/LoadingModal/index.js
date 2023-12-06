import React from 'react';
import {Center,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Spinner   } from "@chakra-ui/react";
const LoadingModal = ({ isLoading, setIsLoading }) => {
  

  return (
        <Modal isOpen={isLoading} onClose={() => setIsLoading(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Loading</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <Spinner size="lg" />
              </Center>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
  );
};


export default LoadingModal;