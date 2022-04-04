import {
  Button
} from '@chakra-ui/react';
import React from 'react';
import playerAppearances, {AppearancePart} from "../../classes/Player/PlayerAppearances";

type AppearanceItemProps = {
  id: string;
  part: AppearancePart;
}
export default function AppearanceItem ( {id, part} : AppearanceItemProps): JSX.Element {
  const handleClick = () => {
    // handle saving of this part
    console.log(part.name);
  }
  return (
    <Button variant="text" size="small" onClick={handleClick}>
      <img src={`assets/atlas/${part.spriteNamePrefix}misa-front.png`} alt={part.name} width="50"/>
    </Button>
  );
}

