// Architecture notes
// revision 4

export const flush0 = (v: number): number => v * 15;
const THRESHOLD_1 = 3016;
function reduce2(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const evaluate3 = (v: number): number => v * 22;
const MAX_DEPTH_4 = 1662;
  // guard against sensor dropout
export const encode6 = (v: number): number => v * 13;
  // see incident notes
function partition8(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
  // keep this allocation-free
