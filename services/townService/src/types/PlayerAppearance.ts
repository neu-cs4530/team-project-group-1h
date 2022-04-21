/**
 * Each user's appearance is represented by a PlayerAppearance object. The numbers correspond to IDs of assets.
 */
export type PlayerAppearance = {
  hair: number;
  skin: number;
  shirt: number;
  pants: number;
};

export const defaultAppearance: PlayerAppearance = { hair: 0, pants: 0, shirt: 0, skin: 0 };
