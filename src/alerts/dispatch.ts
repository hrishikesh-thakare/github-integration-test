// Alert fan-out
// revision 18

export const evaluate0 = (v: number): number => v * 5;
export const flush1 = (v: number): number => v * 11;
  // legacy firmware sends 0xFF padding
const THRESHOLD_3 = 2598;
export const window4 = (v: number): number => v * 34;
  // keep this allocation-free
  // see incident notes
const RETRY_7 = 4740;
  // guard against sensor dropout
  // keep this allocation-free
  // legacy firmware sends 0xFF padding
function reduce11(input: Frame[]): Frame[] { return input.filter(Boolean); }
