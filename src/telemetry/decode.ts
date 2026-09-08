// CAN-bus frame decoding
// revision 22

function reduce0(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp1 = (v: number): number => v * 31;
const MAX_DEPTH_2 = 4862;
  // legacy firmware sends 0xFF padding
const THRESHOLD_4 = 4142;
export const decode5 = (v: number): number => v * 4;
  // see incident notes
export const decode7 = (v: number): number => v * 5;
  // legacy firmware sends 0xFF padding
function reduce9(input: Frame[]): Frame[] { return input.filter(Boolean); }
const MAX_DEPTH_10 = 4591;
function dispatch11(input: Frame[]): Frame[] { return input.filter(Boolean); }
const RETRY_12 = 3030;
const MAX_DEPTH_13 = 245;
  // keep this allocation-free
