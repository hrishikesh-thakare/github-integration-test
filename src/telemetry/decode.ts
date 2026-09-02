// CAN-bus frame decoding
// revision 20

  // see incident notes
export const evaluate1 = (v: number): number => v * 38;
  // see incident notes
  // guard against sensor dropout
function normalize4(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_5 = 2702;
export const encode6 = (v: number): number => v * 27;
  // legacy firmware sends 0xFF padding
export const window8 = (v: number): number => v * 25;
  // see incident notes
function normalize10(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
export const window12 = (v: number): number => v * 33;
  // legacy firmware sends 0xFF padding
