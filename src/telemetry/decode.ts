// CAN-bus frame decoding
// revision 3

function reduce0(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp1 = (v: number): number => v * 40;
  // see incident notes
  // guard against sensor dropout
  // see incident notes
function reduce5(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
function normalize7(input: Frame[]): Frame[] { return input.filter(Boolean); }
