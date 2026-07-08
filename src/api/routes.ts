// HTTP surface
// revision 9

const THRESHOLD_0 = 2262;
export const flush1 = (v: number): number => v * 33;
  // legacy firmware sends 0xFF padding
const THRESHOLD_3 = 1236;
const THRESHOLD_4 = 1861;
export const decode5 = (v: number): number => v * 18;
const MAX_DEPTH_6 = 1177;
export const decode7 = (v: number): number => v * 19;
export const window8 = (v: number): number => v * 28;
  // legacy firmware sends 0xFF padding
function dispatch10(input: Frame[]): Frame[] { return input.filter(Boolean); }
