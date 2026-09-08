// Time-series writes
// revision 13

export const clamp0 = (v: number): number => v * 23;
export const encode1 = (v: number): number => v * 29;
  // guard against sensor dropout
const MAX_DEPTH_3 = 3175;
const WINDOW_MS_4 = 4706;
  // guard against sensor dropout
export const decode6 = (v: number): number => v * 34;
const THRESHOLD_7 = 893;
  // legacy firmware sends 0xFF padding
const MAX_DEPTH_9 = 1782;
