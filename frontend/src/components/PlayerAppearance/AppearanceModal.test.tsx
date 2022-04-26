import React, {useState} from "react";
import {fireEvent, render} from "@testing-library/react";
import {ChakraProvider, useDisclosure} from '@chakra-ui/react';
import AppearanceModal from "./AppearanceModal";
import {PlayerAppearance} from "../../classes/Player/Player";

describe('AppearanceModal', () => {
  const setState = jest.fn()

  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }))

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const Wrapper = () => {
    const {
      onClose: onCustomizeClose
    } = useDisclosure();
    const [selectedAppearance] = useState<PlayerAppearance>({
      hair: 0,
      pants: 0,
      shirt: 0,
      skin: 0
    });
    return (
      <ChakraProvider>
        <React.StrictMode>
          <AppearanceModal appearance={selectedAppearance} isOpen
                           onAppearanceUpdated={setState} onClose={onCustomizeClose}/>
        </React.StrictMode>
      </ChakraProvider>
    );
  }

  it('Renders the modal with default option, user click changes selected option', async () => {
    const {getByText, getByLabelText} = render(<Wrapper/>)
    expect(getByText("Customize Appearance")).toBeDefined()

    expect(getByLabelText("hair-Long Black")).toBeChecked()
    expect(getByLabelText("hair-Long Blonde")).not.toBeChecked()

    fireEvent.click(getByLabelText("hair-Long Blonde"));
    expect(getByLabelText("hair-Long Blonde")).toBeChecked()

    fireEvent.click(getByLabelText("hair-Short Black"));
    expect(getByLabelText("hair-Short Black")).toBeChecked()
  });

  it('click option and save saves', async () => {
    const {getByText, getByLabelText} = render(<Wrapper/>)
    fireEvent.click(getByLabelText("hair-Long Blonde"));
    expect(getByLabelText("hair-Long Blonde")).toBeChecked()

    fireEvent.click(getByText("Save"));
    expect(setState).toHaveBeenCalledWith({"hair": 1, "pants": 0, "shirt": 0, "skin": 0});
  });

  it('click options and save saves', async () => {
    const {getByText, getByLabelText} = render(<Wrapper/>)
    fireEvent.click(getByLabelText("hair-Long Blonde"));
    expect(getByLabelText("hair-Long Blonde")).toBeChecked()

    fireEvent.click(getByLabelText("shirt-Red"));
    expect(getByLabelText("shirt-Red")).toBeChecked()

    fireEvent.click(getByText("Save"));
    expect(setState).toHaveBeenCalledWith({"hair": 1, "pants": 0, "shirt": 3, "skin": 0});
  });

  it('click option and cancel does not save', async () => {
    const {getByText, getByLabelText} = render(<Wrapper/>)
    fireEvent.click(getByLabelText("hair-Long Blonde"));
    expect(getByLabelText("hair-Long Blonde")).toBeChecked()

    fireEvent.click(getByText("Cancel"));
    expect(setState).toHaveBeenCalledTimes(0);
  });

});
