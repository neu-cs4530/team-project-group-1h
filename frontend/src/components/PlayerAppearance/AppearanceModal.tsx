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
        <AppearanceItemGroup part="hair" value={appearance.hair} onChange={()=>{}}/>

        <Heading as='h2' size='md'>Shirt</Heading>
        <AppearanceItemGroup part="shirt" value={appearance.shirt} onChange={()=>{}}/>

        <Heading as='h2' size='md'>Pants</Heading>
        <AppearanceItemGroup part="pants" value={appearance.pants} onChange={()=>{}}/>

        <Heading as='h2' size='md'>Skin Tone</Heading>
        <AppearanceItemGroup part="skin" value={appearance.skin} onChange={()=>{}}/>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}
