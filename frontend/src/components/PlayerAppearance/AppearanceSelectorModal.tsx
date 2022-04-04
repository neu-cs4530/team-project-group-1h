import {
  Button,
  SimpleGrid,
  FormControl , Heading,
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
import AppearanceItemGroup from "./AppearanceItemGroup";

type AppearanceSelectorModalProps = {
  isOpen: boolean;
  closeModal: ()=>void;
}
export default function AppearanceSelectorModal ( {isOpen, closeModal} : AppearanceSelectorModalProps): JSX.Element {
  const handleCloseModalConfirm = () => {
    // save the selections
    closeModal();
  }

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
              <Heading as='h2' size='md'>Hair</Heading>
              <AppearanceItemGroup name="hair" defaultId="0" options={Object.entries(playerAppearances.hair)}/>

              <Heading as='h2' size='md'>Shirt</Heading>
              <AppearanceItemGroup name="shirt" defaultId="3" options={Object.entries(playerAppearances.shirt)}/>

              <Heading as='h2' size='md'>Pants</Heading>
              <AppearanceItemGroup name="pants" defaultId="2" options={Object.entries(playerAppearances.pants)}/>

              <Heading as='h2' size='md'>Skin Tone</Heading>
              <AppearanceItemGroup name="skin" defaultId="4" options={Object.entries(playerAppearances.skin)}/>
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

