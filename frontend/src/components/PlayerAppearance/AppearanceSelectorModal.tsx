import {
  Button,
  SimpleGrid,
  FormLabel, Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import playerAppearances, {AppearancePart} from "../../classes/Player/PlayerAppearances";
import AppearanceItem from "./AppearanceItem";

type AppearanceSelectorModalProps = {
  isOpen: boolean;
  closeModal: ()=>void;
}
export default function AppearanceSelectorModal ( {isOpen, closeModal} : AppearanceSelectorModalProps): JSX.Element {
  const handleCloseModalConfirm = () => {
    // save the selections
    closeModal();
  }
  const parts = Object.entries(playerAppearances);


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
            <Heading as='h2' size='md'>Hair</Heading>
            <SimpleGrid columns={2} spacing={10}>
              {Object.entries(playerAppearances.hair).map(([id, part]) => <AppearanceItem key={id} id={id} part={part}/>)}
            </SimpleGrid>

            <Heading as='h2' size='md'>Shirt</Heading>
            <SimpleGrid columns={2} spacing={10}>
              {Object.entries(playerAppearances.shirt).map(([id, part]) => <AppearanceItem key={id} id={id} part={part}/>)}
            </SimpleGrid>

            <Heading as='h2' size='md'>Pants</Heading>
            <SimpleGrid columns={2} spacing={10}>
              {Object.entries(playerAppearances.pants).map(([id, part]) => <AppearanceItem key={id} id={id} part={part}/>)}
            </SimpleGrid>

            <Heading as='h2' size='md'>Skin Tone</Heading>
            <SimpleGrid columns={2} spacing={10}>
              {Object.entries(playerAppearances.skin).map(([id, part]) => <AppearanceItem key={id} id={id} part={part}/>)}
            </SimpleGrid>
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

