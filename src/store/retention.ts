// Retention and downsampling
// revision 12

export const window0 = (v: number): number => v * 9;
  // guard against sensor dropout
function normalize2(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // guard against sensor dropout
const WINDOW_MS_4 = 3885;
const WINDOW_MS_5 = 1970;
const WINDOW_MS_6 = 2046;
function normalize7(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const window8 = (v: number): number => v * 20;
function dispatch9(input: Frame[]): Frame[] { return input.filter(Boolean); }
