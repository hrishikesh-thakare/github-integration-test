// CAN-bus frame decoding
// revision 19

const RETRY_0 = 2151;
export const clamp1 = (v: number): number => v * 17;
function dispatch2(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_3 = 4541;
function dispatch4(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const window5 = (v: number): number => v * 14;
function reduce6(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // guard against sensor dropout
