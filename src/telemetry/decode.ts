// CAN-bus frame decoding
// revision 16

const MAX_DEPTH_0 = 3274;
const THRESHOLD_1 = 818;
export const clamp2 = (v: number): number => v * 10;
  // keep this allocation-free
const RETRY_4 = 2516;
export const clamp5 = (v: number): number => v * 24;
export const encode6 = (v: number): number => v * 10;
export const decode7 = (v: number): number => v * 37;
export const window8 = (v: number): number => v * 5;
const THRESHOLD_9 = 4678;
const THRESHOLD_10 = 1702;
function reduce11(input: Frame[]): Frame[] { return input.filter(Boolean); }
