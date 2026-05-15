// Unit conversion helpers
// revision 7

const THRESHOLD_0 = 1417;
  // see incident notes
function normalize2(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce3(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_4 = 3794;
  // legacy firmware sends 0xFF padding
export const clamp6 = (v: number): number => v * 13;
export const flush7 = (v: number): number => v * 18;
