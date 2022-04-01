import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import playerAppearances from "../../classes/Player/PlayerAppearances";

type AppearanceSelectorModalProps = {
  isOpen: boolean;
  closeModal: ()=>void;
}
export default function AppearanceSelectorModal ( {isOpen, closeModal} : AppearanceSelectorModalProps): JSX.Element {
  const handleCloseModalConfirm = () => {
    // save the selections
    closeModal();
  }
  const parts = Object.keys(playerAppearances);


  const handleCloseModal = () => {
    // save the selections
    closeModal();
  }
  return (
    <Modal isOpen={isOpen} onClose={(handleCloseModal)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Player Appearance </ModalHeader>
        <ModalCloseButton />
        <form
          onSubmit={ev => {
            ev.preventDefault();
          }}>
          <ModalBody pb={6}>
            <FormControl>
               {parts.map(
                (part : string) =>
                  <FormLabel key={part}>{part && part[0].toUpperCase() + part.slice(1)}</FormLabel>)
               }
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCloseModalConfirm}>
              Save
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

