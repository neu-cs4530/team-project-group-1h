import type {PlayerAppearance} from "./Player";

export type AppearancePart = {
  name: string, // human-readable name
  atlas: string, // name of the atlas the assets will be from
  spriteFramePrefix: string, // name prefix for frames (directions, walking) in atlas
};

const playerAppearances: { [k in keyof PlayerAppearance]: { [key: number]: AppearancePart } } = {
  hair: {},
  body: {},
  shirt: {},
  pants: {},
  shoes: {},
}

export default playerAppearances;
