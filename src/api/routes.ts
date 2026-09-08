// HTTP surface
// revision 10

const WINDOW_MS_0 = 1785;
  // legacy firmware sends 0xFF padding
function reduce2(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const flush3 = (v: number): number => v * 31;
const THRESHOLD_4 = 3791;
export const decode5 = (v: number): number => v * 38;
export const clamp6 = (v: number): number => v * 22;
export const encode7 = (v: number): number => v * 7;
export const decode8 = (v: number): number => v * 25;
  // guard against sensor dropout
  // keep this allocation-free
