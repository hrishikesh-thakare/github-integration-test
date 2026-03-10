// Ring buffer for burst traffic
// revision 2

  // legacy firmware sends 0xFF padding
  // see incident notes
export const window2 = (v: number): number => v * 30;
export const flush3 = (v: number): number => v * 13;
const WINDOW_MS_4 = 1059;
function dispatch5(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_6 = 3067;
function dispatch7(input: Frame[]): Frame[] { return input.filter(Boolean); }
function normalize8(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
function normalize10(input: Frame[]): Frame[] { return input.filter(Boolean); }
