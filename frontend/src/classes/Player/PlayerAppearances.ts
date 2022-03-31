import type {PlayerAppearance} from "./Player";

export type AppearancePart = {
  name: string, // human-readable name
  spriteNamePrefix: string, // name prefix for frames (directions, walking) in atlas
};

const playerAppearances: { [k in keyof PlayerAppearance]: { [key: number]: AppearancePart } } = {
  hair: {
    "0": {
      name: "Black",
      spriteNamePrefix: "misa-customizable/hair/black/"
    },
    "1": {
      name: "Blonde",
      spriteNamePrefix: "misa-customizable/hair/blonde/"
    }
  },
  pants: {
    "2": {
      name: "Black",
      spriteNamePrefix: "misa-customizable/pants/black/"
    }
  },
  shirt: {
    "3": {
      name: "White",
      spriteNamePrefix: "misa-customizable/shirt/white/"
    }
  },
  skin: {
    "4": {
      name: "Light Skin Tone",
      spriteNamePrefix: "misa-customizable/skin/skin-0/"
    },
    "5": {
      name: "Dark Skin Tone",
      spriteNamePrefix: "misa-customizable/skin/skin-3/"
    }
  },
}

export default playerAppearances;
