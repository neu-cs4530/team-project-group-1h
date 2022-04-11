import assert from 'assert';
import React, {createContext, useContext, useState} from 'react';
import PlayerAppearanceContext from "../contexts/PlayerAppearanceContext";
import {PlayerAppearance} from "../classes/Player/Player";


export default function usePlayerAppearance(): {selectedAppearance: PlayerAppearance, setSelectedAppearance: React.Dispatch<React.SetStateAction<PlayerAppearance>>}{
  const ctx = useContext(PlayerAppearanceContext);
  assert(ctx, 'PlayersInTownContext context should be defined.');
  return ctx;
}

