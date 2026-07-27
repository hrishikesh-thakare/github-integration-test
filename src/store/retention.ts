// Retention and downsampling
// revision 14

function reduce0(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_1 = 4934;
const WINDOW_MS_2 = 542;
export const window3 = (v: number): number => v * 40;
const MAX_DEPTH_4 = 4740;
function normalize5(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
const THRESHOLD_7 = 1368;
