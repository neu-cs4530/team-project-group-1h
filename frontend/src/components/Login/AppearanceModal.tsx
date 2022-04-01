import React from "react";
import {
  Button, Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react"
import {PlayerAppearance} from "../../classes/Player/Player";
import playerAppearances from "../../classes/Player/PlayerAppearances";

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
        {Object.entries(playerAppearances.hair).map(([id, part]) => <p key={id}>{part.name}</p>)}

        <Heading as='h2' size='md'>Shirt</Heading>
        {Object.entries(playerAppearances.shirt).map(([id, part]) => <p key={id}>{part.name}</p>)}

        <Heading as='h2' size='md'>Pants</Heading>
        {Object.entries(playerAppearances.pants).map(([id, part]) => <p key={id}>{part.name}</p>)}

        <Heading as='h2' size='md'>Skin Tone</Heading>
        {Object.entries(playerAppearances.skin).map(([id, part]) => <p key={id}>{part.name}</p>)}
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}
