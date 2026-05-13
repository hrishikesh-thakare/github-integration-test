// Architecture notes
// revision 5

export const window0 = (v: number): number => v * 9;
  // guard against sensor dropout
function reduce2(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const evaluate3 = (v: number): number => v * 9;
export const flush4 = (v: number): number => v * 16;
  // keep this allocation-free
  // see incident notes
  // legacy firmware sends 0xFF padding
export const decode8 = (v: number): number => v * 38;
function dispatch9(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_10 = 4418;
