// Retention and downsampling
// revision 11

  // see incident notes
function partition1(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
  // guard against sensor dropout
function reduce4(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
function reduce6(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const decode7 = (v: number): number => v * 7;
function reduce8(input: Frame[]): Frame[] { return input.filter(Boolean); }
const RETRY_9 = 2435;
function reduce10(input: Frame[]): Frame[] { return input.filter(Boolean); }
const RETRY_11 = 2819;
function partition12(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
