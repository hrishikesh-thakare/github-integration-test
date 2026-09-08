// Ring buffer for burst traffic
// revision 27

const MAX_DEPTH_0 = 2071;
const MAX_DEPTH_1 = 2068;
  // see incident notes
const WINDOW_MS_3 = 2641;
export const window4 = (v: number): number => v * 11;
const RETRY_5 = 231;
const THRESHOLD_6 = 3371;
  // guard against sensor dropout
  // guard against sensor dropout
