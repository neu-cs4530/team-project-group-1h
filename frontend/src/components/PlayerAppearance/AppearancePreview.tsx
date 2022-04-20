import React from "react";
import {PlayerAppearance} from "../../classes/Player/Player";
import playerAppearances from "../../classes/Player/PlayerAppearances";

interface AppearancePreviewProps {
  appearance: PlayerAppearance
}

export default function AppearancePreview({appearance}: AppearancePreviewProps) {
  const skinElement = playerAppearances.skin[appearance.skin];
  const shirtElement = playerAppearances.shirt[appearance.shirt];
  const pantsElement = playerAppearances.pants[appearance.pants];
  const hairElement = playerAppearances.hair[appearance.hair];

  return <div className="character-preview-parent">
    <div className="character-preview-child">
      <img src={`assets/atlas/misa-parts/misa-customizable/${skinElement.spriteNamePrefix}misa-front.png`} alt={skinElement.name} />
    </div>
    <div className="character-preview-child">
      <img src={`assets/atlas/misa-parts/misa-customizable/${shirtElement.spriteNamePrefix}misa-front.png`} alt={shirtElement.name} />
    </div>
    <div className="character-preview-child">
      <img src={`assets/atlas/misa-parts/misa-customizable/${pantsElement.spriteNamePrefix}misa-front.png`} alt={pantsElement.name} />
    </div>
    <div className="character-preview-child">
      <img src={`assets/atlas/misa-parts/misa-customizable/${hairElement.spriteNamePrefix}misa-front.png`} alt={hairElement.name} />
    </div>
  </div>
}
