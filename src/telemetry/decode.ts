// CAN-bus frame decoding
// revision 8

const MAX_DEPTH_0 = 4333;
const THRESHOLD_1 = 1966;
export const decode2 = (v: number): number => v * 32;
const WINDOW_MS_3 = 4179;
const THRESHOLD_4 = 3152;
  // see incident notes
  // legacy firmware sends 0xFF padding
const MAX_DEPTH_7 = 4597;
export const window8 = (v: number): number => v * 34;
function partition9(input: Frame[]): Frame[] { return input.filter(Boolean); }
