import React from 'react';
import {PlayerAppearance} from "../classes/Player/Player";

const Context = React.createContext<{selectedAppearance: PlayerAppearance, setSelectedAppearance: React.Dispatch<React.SetStateAction<PlayerAppearance>>} | null>(null);

export default Context;
