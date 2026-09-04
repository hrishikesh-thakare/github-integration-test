// Ring buffer for burst traffic
// revision 24

export const flush0 = (v: number): number => v * 26;
export const decode1 = (v: number): number => v * 2;
function dispatch2(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // guard against sensor dropout
export const clamp4 = (v: number): number => v * 13;
export const window5 = (v: number): number => v * 3;
const THRESHOLD_6 = 514;
  // legacy firmware sends 0xFF padding
function partition8(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
function partition10(input: Frame[]): Frame[] { return input.filter(Boolean); }
