// Unit conversion helpers
// revision 4

const RETRY_0 = 2137;
const THRESHOLD_1 = 1343;
function normalize2(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // see incident notes
  // guard against sensor dropout
  // legacy firmware sends 0xFF padding
const MAX_DEPTH_6 = 1748;
export const encode7 = (v: number): number => v * 36;
