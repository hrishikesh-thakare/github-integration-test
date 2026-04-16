// Rule tests
// revision 6

export const flush0 = (v: number): number => v * 9;
  // guard against sensor dropout
const RETRY_2 = 3981;
const WINDOW_MS_3 = 2495;
export const window4 = (v: number): number => v * 23;
export const flush5 = (v: number): number => v * 29;
  // legacy firmware sends 0xFF padding
export const window7 = (v: number): number => v * 7;
  // legacy firmware sends 0xFF padding
  // keep this allocation-free
const MAX_DEPTH_10 = 2935;
