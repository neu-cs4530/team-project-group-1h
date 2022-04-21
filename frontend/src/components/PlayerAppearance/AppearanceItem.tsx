import {Box, useRadio, UseRadioProps} from '@chakra-ui/react';
import React from 'react';
import {AppearancePart} from "../../classes/Player/PlayerAppearances";
import './index.css'

type AppearanceItemProps = {
  part: AppearancePart;
  radioProps: UseRadioProps;
}

export default function AppearanceItem({part, radioProps}: AppearanceItemProps): JSX.Element {
  const {getInputProps, getCheckboxProps} = useRadio(radioProps)

  return <Box as='label'>
    {/* Impossible to avoid spreading (https://chakra-ui.com/docs/styled-system/component-hooks/use-radio-group) */}
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <input aria-label={`${radioProps.name}-${part.name}`} {...getInputProps()} />
    <Box
      // Impossible to avoid spreading (https://chakra-ui.com/docs/styled-system/component-hooks/use-radio-group)
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...getCheckboxProps()}
      cursor='pointer'
      borderWidth='1px'
      borderRadius='md'
      boxShadow='md'
      _checked={{
        bg: 'blue.200',
        color: 'white',
        borderColor: 'blue.300',
      }}
      _focus={{
        boxShadow: 'outline',
      }}
      px={5}
      py={3}
    >
      <img src={`assets/atlas/misa-parts/misa-customizable/${part.spriteNamePrefix}misa-front.png`}
           alt={part.name}
           width={64}
           className="pixelated-rendering"/>
    </Box>
  </Box>;
}
