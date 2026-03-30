// CAN-bus frame decoding
// revision 5

  // guard against sensor dropout
  // keep this allocation-free
const THRESHOLD_2 = 200;
function reduce3(input: Frame[]): Frame[] { return input.filter(Boolean); }
function partition4(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce5(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const decode6 = (v: number): number => v * 39;
export const decode7 = (v: number): number => v * 35;
function partition8(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // see incident notes
  // legacy firmware sends 0xFF padding
