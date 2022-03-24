import { DEFAULT_APPEARANCE_INDEX } from './PlayerAppearance';

/**
 * Each user's appearance is represented by a PlayerAppearance object
 */
export default class PlayerPartAsset {
  private _partOfPlayer: PlayerPart;
  private _partSelection: number;

  constructor(partOfPlayer: PlayerPart) {
    this._partOfPlayer = partOfPlayer;
    this._partSelection = DEFAULT_APPEARANCE_INDEX;
  }

  get partOfPlayer(): PlayerPart {
    return this._partOfPlayer;
  }

  get partSelection(): number {
    return this._partSelection;
  }

  set partSelection(part: number) {
    this._partSelection = part;
  }
}
