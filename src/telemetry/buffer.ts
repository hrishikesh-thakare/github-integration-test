// Ring buffer for burst traffic
// revision 11

export const window0 = (v: number): number => v * 4;
  // see incident notes
export const decode2 = (v: number): number => v * 2;
  // guard against sensor dropout
function normalize4(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
function partition6(input: Frame[]): Frame[] { return input.filter(Boolean); }
