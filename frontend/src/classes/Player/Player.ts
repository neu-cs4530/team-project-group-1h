export default class Player {
  public location?: UserLocation;

  public appearance?: PlayerAppearance;

  private readonly _id: string;

  private readonly _userName: string;

  public sprite?: Phaser.GameObjects.Sprite;

  public label?: Phaser.GameObjects.Text;

  constructor(id: string, userName: string, location: UserLocation, appearance?: PlayerAppearance) {
    this._id = id;
    this._userName = userName;
    this.location = location;
    this.appearance = appearance;
  }

  get userName(): string {
    return this._userName;
  }

  get id(): string {
    return this._id;
  }

  static fromServerPlayer(playerFromServer: ServerPlayer): Player {
    return new Player(playerFromServer._id, playerFromServer._userName, playerFromServer.location, playerFromServer.appearance);
  }
}
export type ServerPlayer = { _id: string, _userName: string, location: UserLocation, appearance?: PlayerAppearance };

export type Direction = 'front' | 'back' | 'left' | 'right';

export type UserLocation = {
  x: number,
  y: number,
  rotation: Direction,
  moving: boolean,
  conversationLabel?: string
};

export type PlayerAppearance = {
  hair: number;
  skin: number;
  shirt: number;
  pants: number;
};
