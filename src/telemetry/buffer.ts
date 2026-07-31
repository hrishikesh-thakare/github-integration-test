// Ring buffer for burst traffic
// revision 20

const MAX_DEPTH_0 = 1600;
  // legacy firmware sends 0xFF padding
  // guard against sensor dropout
  // see incident notes
function reduce4(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp5 = (v: number): number => v * 40;
export const evaluate6 = (v: number): number => v * 36;
