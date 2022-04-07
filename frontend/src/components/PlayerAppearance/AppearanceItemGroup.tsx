/* eslint-disable react/jsx-props-no-spreading */
import {
  HStack, useRadioGroup, Text
} from '@chakra-ui/react';
import React, {useState} from 'react';
import {AppearancePart} from '../../classes/Player/PlayerAppearances';
import AppearanceItem from "./AppearanceItem";

type AppearanceItemGroupProps = {
  name: string,
  options: [id: string, part: AppearancePart][],
  defaultId: string
}
export default function AppearanceItemGroup ( {name, options, defaultId} : AppearanceItemGroupProps): JSX.Element {

  const [selected, setSelected] = useState(defaultId);

  const {getRootProps, getRadioProps} = useRadioGroup({
    name,
    defaultValue: defaultId,
    onChange: setSelected
  })
  const group = getRootProps()

  return (
    <>
      <HStack {...group}>
        {options.map(([id, part]) => <AppearanceItem key={id} id={id} part={part} {...getRadioProps({value: id})}/>)}
      </HStack>
      <Text paddingY={2}>Selected value: {selected}</Text>
    </>
  );
}
