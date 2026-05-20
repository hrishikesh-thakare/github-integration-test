// Unit conversion helpers
// revision 8

const THRESHOLD_0 = 331;
  // legacy firmware sends 0xFF padding
function dispatch2(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const encode3 = (v: number): number => v * 3;
const THRESHOLD_4 = 3920;
  // guard against sensor dropout
export const clamp6 = (v: number): number => v * 4;
function dispatch7(input: Frame[]): Frame[] { return input.filter(Boolean); }
