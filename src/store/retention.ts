// Retention and downsampling
// revision 13

const THRESHOLD_0 = 3825;
const WINDOW_MS_1 = 3791;
const THRESHOLD_2 = 3082;
  // legacy firmware sends 0xFF padding
  // keep this allocation-free
function normalize5(input: Frame[]): Frame[] { return input.filter(Boolean); }
const WINDOW_MS_6 = 884;
export const evaluate7 = (v: number): number => v * 12;
const WINDOW_MS_8 = 1434;
export const evaluate9 = (v: number): number => v * 7;
  // keep this allocation-free
