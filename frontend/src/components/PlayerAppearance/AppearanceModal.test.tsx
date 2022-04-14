import {ChakraProvider, useDisclosure} from '@chakra-ui/react';
import React, {useState} from "react";
import {fireEvent, render} from "@testing-library/react";
import AppearanceModal from "./AppearanceModal";
import {PlayerAppearance} from "../../classes/Player/Player";

describe('AppearanceModal', () => {
  const Wrapper = () => {
    const {
      onClose: onCustomizeClose
    } = useDisclosure();
    const [selectedAppearance, setSelectedAppearance] = useState<PlayerAppearance>({
      hair: 0,
      pants: 2,
      shirt: 3,
      skin: 4
    });
    return (
      <ChakraProvider>
        <React.StrictMode>
          <AppearanceModal appearance={selectedAppearance} isOpen
                           onAppearanceUpdated={setSelectedAppearance} onClose={onCustomizeClose}/>
        </React.StrictMode>
      </ChakraProvider>
    );
  }

  it('Renders the modal with default option, user click changes selected option', async () => {
    const {getByText, getByLabelText} = render(<Wrapper/>)
    expect(getByText("Customize Appearance")).toBeDefined()

    expect(getByLabelText("hair-Black")).toBeChecked()
    expect(getByLabelText("hair-Blonde")).not.toBeChecked()

    fireEvent.click(getByLabelText("hair-Blonde"));
    expect(getByLabelText("hair-Blonde")).toBeChecked()

    fireEvent.click(getByLabelText("hair-Black"));
    expect(getByLabelText("hair-Black")).toBeChecked()
  });

});
