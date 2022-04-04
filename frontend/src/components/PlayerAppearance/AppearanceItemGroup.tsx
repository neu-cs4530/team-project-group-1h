/* eslint-disable react/jsx-props-no-spreading */
import {
  Button, HStack, useRadioGroup
} from '@chakra-ui/react';
import React from 'react';
import playerAppearances, {AppearancePart} from "../../classes/Player/PlayerAppearances";
import AppearanceItem from "./AppearanceItem";

type AppearanceItemGroupProps = {
  name: string,
  options: [id: string, part: AppearancePart][],
  defaultId: string
}
export default function AppearanceItemGroup ( {name, options, defaultId} : AppearanceItemGroupProps): JSX.Element {

  const {getRootProps, getRadioProps} = useRadioGroup({
    name,
    defaultValue: defaultId,
    onChange: console.log,
  })
  const group = getRootProps()

  return (
    <HStack  {...group}>
      {options.map(([id, part]) =>
          <AppearanceItem key={id} id={id} part={part} {...getRadioProps({id})}/>
        )}
    </HStack>
  );
}
