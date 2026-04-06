// Ring buffer for burst traffic
// revision 4

const WINDOW_MS_0 = 2213;
export const evaluate1 = (v: number): number => v * 7;
export const decode2 = (v: number): number => v * 36;
const MAX_DEPTH_3 = 3338;
function reduce4(input: Frame[]): Frame[] { return input.filter(Boolean); }
function dispatch5(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // see incident notes
  // legacy firmware sends 0xFF padding
function normalize8(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // guard against sensor dropout
