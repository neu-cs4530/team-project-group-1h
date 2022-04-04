import React from "react";
import {
  Button, Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react"
import {PlayerAppearance} from "../../classes/Player/Player";
import playerAppearances from "../../classes/Player/PlayerAppearances";
import AppearanceItemGroup from "./AppearanceItemGroup";

interface AppearanceModalProps {
  /**
   * Whether to show this modal or not
   */
  isOpen: boolean,

  /**
   * Callback for when the modal should be closed
   */
  onClose: () => void;

  /**
   * Current appearance to display in the selector
   */
  appearance: PlayerAppearance,

  /**
   * Callback for when the user updates the appearance
   * @param appearance the new PlayerAppearance
   */
  onAppearanceUpdated: (appearance: PlayerAppearance) => void,
}

export default function AppearanceModal({isOpen, onClose, appearance, onAppearanceUpdated}: AppearanceModalProps) {
  return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay/>
    <ModalContent>
      <ModalHeader>Customize Appearance</ModalHeader>
      <ModalCloseButton/>

      <ModalBody>
        <p>Current appearance: {JSON.stringify(appearance)}</p>

        <Heading as='h2' size='md'>Hair</Heading>
        <AppearanceItemGroup name="hair" defaultId="0" options={Object.entries(playerAppearances.hair)}/>

        <Heading as='h2' size='md'>Shirt</Heading>
        <AppearanceItemGroup name="shirt" defaultId="0" options={Object.entries(playerAppearances.shirt)}/>

        <Heading as='h2' size='md'>Pants</Heading>
        <AppearanceItemGroup name="pants" defaultId="0" options={Object.entries(playerAppearances.pants)}/>

        <Heading as='h2' size='md'>Skin Tone</Heading>
        <AppearanceItemGroup name="skin" defaultId="0" options={Object.entries(playerAppearances.skin)}/>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}
