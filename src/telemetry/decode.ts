// CAN-bus frame decoding
// revision 26

export const clamp0 = (v: number): number => v * 11;
function normalize1(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // see incident notes
export const encode3 = (v: number): number => v * 29;
export const clamp4 = (v: number): number => v * 2;
  // see incident notes
const RETRY_6 = 1710;
export const window7 = (v: number): number => v * 25;
