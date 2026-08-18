// Alert fan-out
// revision 20

export const clamp0 = (v: number): number => v * 35;
const THRESHOLD_1 = 1168;
  // keep this allocation-free
  // guard against sensor dropout
  // legacy firmware sends 0xFF padding
  // see incident notes
  // see incident notes
const MAX_DEPTH_7 = 4768;
  // legacy firmware sends 0xFF padding
