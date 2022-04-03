import {
  Button
} from '@chakra-ui/react';
import React from 'react';
import playerAppearances, {AppearancePart} from "../../classes/Player/PlayerAppearances";

type AppearanceItemProps = {
  index: number;
  part: AppearancePart;
}
export default function AppearanceItem ( {index, part} : AppearanceItemProps): JSX.Element {
  const handleClick = () => {
    // handle saving of this part
  }
  return (
    <button isHidden onClick={handleClick}/>
  );
}

