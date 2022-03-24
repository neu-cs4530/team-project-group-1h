import { nanoid } from 'nanoid';
import { ServerConversationArea } from '../client/TownsServiceClient';
import { UserLocation } from '../CoveyTypes';
import PlayerPartAsset from './PlayerPartAsset';

/**
 * Each user's appearance is represented by a PlayerAppearance object
 */
export const DEFAULT_APPEARANCE_INDEX = 1;

export default class PlayerAppearance {
  private _hair: PlayerPartAsset;

  private _body: PlayerPartAsset;

  private _shirt: PlayerPartAsset;

  private _pants: PlayerPartAsset;

  private _shoes: PlayerPartAsset;


  constructor() {
    this._hair = new PlayerPartAsset(PlayerPart.hair);
    this._body = new PlayerPartAsset(PlayerPart.body);
    this._shirt = new PlayerPartAsset(PlayerPart.shirt);
    this._pants = new PlayerPartAsset(PlayerPart.pants);
    this._shoes = new PlayerPartAsset(PlayerPart.shoes);
  }

}
