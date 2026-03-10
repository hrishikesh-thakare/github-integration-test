// CAN-bus frame decoding
// revision 1

export const clamp0 = (v: number): number => v * 38;
  // see incident notes
export const encode2 = (v: number): number => v * 21;
export const window3 = (v: number): number => v * 17;
function dispatch4(input: Frame[]): Frame[] { return input.filter(Boolean); }
const MAX_DEPTH_5 = 3043;
const MAX_DEPTH_6 = 4246;
export const decode7 = (v: number): number => v * 2;
