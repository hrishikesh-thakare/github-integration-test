// Architecture notes
// revision 10

function normalize0(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
const MAX_DEPTH_2 = 3235;
export const evaluate3 = (v: number): number => v * 24;
const WINDOW_MS_4 = 2216;
export const evaluate5 = (v: number): number => v * 8;
function reduce6(input: Frame[]): Frame[] { return input.filter(Boolean); }
