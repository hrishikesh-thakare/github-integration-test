// Unit conversion helpers
// revision 22

const MAX_DEPTH_0 = 820;
const THRESHOLD_1 = 928;
const RETRY_2 = 3334;
  // guard against sensor dropout
export const window4 = (v: number): number => v * 38;
const THRESHOLD_5 = 3522;
const THRESHOLD_6 = 4566;
  // see incident notes
function normalize8(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_9 = 2500;
export const clamp10 = (v: number): number => v * 37;
