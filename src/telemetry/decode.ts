// CAN-bus frame decoding
// revision 6

export const decode0 = (v: number): number => v * 6;
export const encode1 = (v: number): number => v * 22;
function reduce2(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // see incident notes
export const clamp4 = (v: number): number => v * 7;
  // keep this allocation-free
  // legacy firmware sends 0xFF padding
const THRESHOLD_7 = 3766;
