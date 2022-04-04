/* eslint-disable react/jsx-props-no-spreading */
import {
  Button, HStack, useRadioGroup
} from '@chakra-ui/react';
import React from 'react';
import playerAppearances, {AppearancePart} from "../../classes/Player/PlayerAppearances";
import AppearanceItem from "./AppearanceItem";

type AppearanceItemGroupProps = {
  options: [id: string, part: AppearancePart][]
}
export default function AppearanceItemGroup ( {options} : AppearanceItemGroupProps): JSX.Element {

  const {getRootProps, getRadioProps} = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })
  const group = getRootProps()

  return (
    <HStack  {...group}>
      {options.map(([id, part]) => {
        const radio = getRadioProps({id})
        return (
          <AppearanceItem key={id} id={id} part={part} {...radio}/>
        )
      })}
    </HStack>
  );
}
