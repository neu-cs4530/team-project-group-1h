import type {PlayerAppearance} from "./Player";

export type AppearancePart = {
  name: string, // human-readable name
  spriteNamePrefix: string, // name prefix for frames (directions, walking) in atlas
};

const playerAppearances: { [k in keyof PlayerAppearance]: { [key: number]: AppearancePart } } = {
  hair: {
    "0": {
      name: "Long Black",
      spriteNamePrefix: "hair/long/black/",
    },
    "1": {
      name: "Long Blonde",
      spriteNamePrefix: "hair/long/blonde/",
    },
    "2": {
      name: "Long Brown",
      spriteNamePrefix: "hair/long/brown/",
    },
    "3": {
      name: "Long Red",
      spriteNamePrefix: "hair/long/red/",
    },
    "4": {
      name: "Short Black",
      spriteNamePrefix: "hair/short/black/",
    },
    "5": {
      name: "Short Blonde",
      spriteNamePrefix: "hair/short/blonde/",
    },
    "6": {
      name: "Short Brown",
      spriteNamePrefix: "hair/short/brown/",
    },
    "7": {
      name: "Short Red",
      spriteNamePrefix: "hair/short/red/",
    },
  },
  pants: {
    "0": {
      name: "Black",
      spriteNamePrefix: "pants/black/",
    },
    "1": {
      name: "Blue",
      spriteNamePrefix: "pants/blue/",
    },
    "2": {
      name: "Grey",
      spriteNamePrefix: "pants/grey/",
    },
  },
  shirt: {
    "0": {
      name: "Black",
      spriteNamePrefix: "shirt/black/"
    },
    "1": {
      name: "Blue",
      spriteNamePrefix: "shirt/blue/",
    },
    "2": {
      name: "Pink",
      spriteNamePrefix: "shirt/pink/",
    },
    "3": {
      name: "Red",
      spriteNamePrefix: "shirt/red/",
    },
    "4": {
      name: "White",
      spriteNamePrefix: "shirt/white/",
    },
  },
  skin: {
    "0": {
      name: "Light Skin Tone",
      spriteNamePrefix: "skin/skin-0/",
    },
    "1": {
      name: "Medium Skin Tone",
      spriteNamePrefix: "skin/skin-1/",
    },
    "2": {
      name: "Medium Dark Skin Tone",
      spriteNamePrefix: "skin/skin-2/",
    },
    "3": {
      name: "Dark Skin Tone",
      spriteNamePrefix: "skin/skin-3/",
    },
  },
}

export default playerAppearances;
