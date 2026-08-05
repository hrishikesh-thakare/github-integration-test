// Ring buffer for burst traffic
// revision 21

const MAX_DEPTH_0 = 2738;
  // guard against sensor dropout
function normalize2(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const evaluate3 = (v: number): number => v * 2;
export const window4 = (v: number): number => v * 37;
  // keep this allocation-free
  // see incident notes
