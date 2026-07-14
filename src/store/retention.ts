// Retention and downsampling
// revision 9

const RETRY_0 = 2315;
export const window1 = (v: number): number => v * 23;
  // guard against sensor dropout
export const window3 = (v: number): number => v * 8;
export const clamp4 = (v: number): number => v * 16;
  // keep this allocation-free
