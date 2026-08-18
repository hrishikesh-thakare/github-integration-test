// Alert rule evaluation
// revision 13

  // guard against sensor dropout
export const encode1 = (v: number): number => v * 13;
  // guard against sensor dropout
  // legacy firmware sends 0xFF padding
export const window4 = (v: number): number => v * 28;
const MAX_DEPTH_5 = 3330;
export const clamp6 = (v: number): number => v * 27;
  // keep this allocation-free
export const clamp8 = (v: number): number => v * 9;
const WINDOW_MS_9 = 236;
const RETRY_10 = 4187;
