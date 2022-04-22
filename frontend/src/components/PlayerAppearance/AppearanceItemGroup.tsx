import {useRadioGroup, Wrap} from '@chakra-ui/react';
import React from 'react';
import playerAppearances from '../../classes/Player/PlayerAppearances';
import AppearanceItem from "./AppearanceItem";

type AppearanceItemGroupProps = {
  part: keyof typeof playerAppearances,
  value: number,
  onChange: (nextValue: number) => void
}

export default function AppearanceItemGroup({part, value, onChange}: AppearanceItemGroupProps): JSX.Element {
  const {getRootProps, getRadioProps} = useRadioGroup({
    name: part,
    value: `${value}`,
    onChange(nextValue) {
      onChange(+nextValue);
    }
  })

  const group = getRootProps()

  return <>
    {/* Impossible to avoid spreading (https://chakra-ui.com/docs/styled-system/component-hooks/use-radio-group) */}
    {/* https://piazza.com/class/ky1wxuhh7ry2ue?cid=787 */}
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Wrap {...group}>
      {Object.entries(playerAppearances[part])
        .map(([id, appearancePart]) =>
          <AppearanceItem key={id} part={appearancePart} radioProps={getRadioProps({value: id})} />)}
    </Wrap>
  </>;
}
