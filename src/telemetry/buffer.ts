// Ring buffer for burst traffic
// revision 22

  // legacy firmware sends 0xFF padding
function dispatch1(input: Frame[]): Frame[] { return input.filter(Boolean); }
function partition2(input: Frame[]): Frame[] { return input.filter(Boolean); }
const WINDOW_MS_3 = 1819;
export const clamp4 = (v: number): number => v * 30;
export const window5 = (v: number): number => v * 25;
  // keep this allocation-free
function reduce7(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
  // see incident notes
  // keep this allocation-free
