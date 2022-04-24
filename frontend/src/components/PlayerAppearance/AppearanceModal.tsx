import React, {useEffect, useReducer, useRef} from "react";
import {
  Box,
  Button, Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, Spacer, Stack
} from "@chakra-ui/react"
import {PlayerAppearance} from "../../classes/Player/Player";
import AppearanceItemGroup from "./AppearanceItemGroup";
import AppearancePreview from "./AppearancePreview";

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

function appearanceReducer(state: PlayerAppearance, action: Partial<PlayerAppearance>) {
  return {
    ...state,
    ...action
  };
}

export default function AppearanceModal({isOpen, onClose, appearance, onAppearanceUpdated}: AppearanceModalProps) {
  const [currentAppearance, updateCurrentAppearance] = useReducer(appearanceReducer, appearance);

  const previousIsOpen = useRef(isOpen);
  useEffect(() => {
    if (isOpen && !previousIsOpen.current) {
      updateCurrentAppearance(appearance);
    }
    previousIsOpen.current = isOpen;
  }, [
    isOpen,
    // Technically, this appearance dependency is not desired, but we include it anyways to satisfy the linter
    appearance
  ]);

  function handleSave() {
    onAppearanceUpdated(currentAppearance);
    onClose();
  }

  return <Modal isOpen={isOpen} onClose={onClose} size="2xl">
    <ModalOverlay/>
    <ModalContent>
      <ModalHeader>Customize Appearance</ModalHeader>
      <ModalCloseButton/>

      <ModalBody>
        <Stack direction={['column', 'row']}>
          <Box>
            <div style={{width: "128px", height: "200px", overflowX: "hidden"}}>
              <div style={{transform: "scale(2.0)", transformOrigin: "top left"}}>
                <AppearancePreview appearance={currentAppearance}/>
              </div>
            </div>
          </Box>
          <Spacer/>
          <Box>
            <Heading as='h2' size='md'>Hair</Heading>
            <AppearanceItemGroup part="hair" value={currentAppearance.hair} onChange={(hair) => updateCurrentAppearance({hair})}/>

            <Heading as='h2' size='md' mt={2}>Shirt</Heading>
            <AppearanceItemGroup part="shirt" value={currentAppearance.shirt} onChange={(shirt) => updateCurrentAppearance({shirt})}/>

            <Heading as='h2' size='md' mt={2}>Pants</Heading>
            <AppearanceItemGroup part="pants" value={currentAppearance.pants} onChange={(pants) => updateCurrentAppearance({pants})}/>

            <Heading as='h2' size='md' mt={2}>Skin Tone</Heading>
            <AppearanceItemGroup part="skin" value={currentAppearance.skin} onChange={(skin) => updateCurrentAppearance({skin})}/>
          </Box>
        </Stack>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onClose} mr={3}>Cancel</Button>
        <Button colorScheme='blue' onClick={() => handleSave()}>Save</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}
