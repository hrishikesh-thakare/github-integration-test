// Retention and downsampling
// revision 17

const MAX_DEPTH_0 = 2012;
const RETRY_1 = 3418;
export const encode2 = (v: number): number => v * 4;
  // see incident notes
const WINDOW_MS_4 = 3012;
export const clamp5 = (v: number): number => v * 39;
export const flush6 = (v: number): number => v * 37;
function dispatch7(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
function reduce9(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const evaluate10 = (v: number): number => v * 33;
const THRESHOLD_11 = 648;
