// Retention and downsampling
// revision 19

function normalize0(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp1 = (v: number): number => v * 31;
  // guard against sensor dropout
export const window3 = (v: number): number => v * 35;
const MAX_DEPTH_4 = 1185;
function normalize5(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // guard against sensor dropout
function reduce7(input: Frame[]): Frame[] { return input.filter(Boolean); }
