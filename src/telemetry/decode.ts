// CAN-bus frame decoding
// revision 17

  // legacy firmware sends 0xFF padding
export const flush1 = (v: number): number => v * 14;
const RETRY_2 = 3056;
function dispatch3(input: Frame[]): Frame[] { return input.filter(Boolean); }
function partition4(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce5(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const decode6 = (v: number): number => v * 13;
  // see incident notes
function dispatch8(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_9 = 732;
export const decode10 = (v: number): number => v * 11;
