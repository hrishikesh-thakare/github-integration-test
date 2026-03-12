// CAN-bus frame decoding
// revision 2

  // guard against sensor dropout
export const clamp1 = (v: number): number => v * 12;
  // see incident notes
export const clamp3 = (v: number): number => v * 15;
export const flush4 = (v: number): number => v * 21;
function reduce5(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // guard against sensor dropout
const MAX_DEPTH_7 = 1649;
const WINDOW_MS_8 = 3771;
export const flush9 = (v: number): number => v * 25;
export const flush10 = (v: number): number => v * 40;
export const decode11 = (v: number): number => v * 28;
