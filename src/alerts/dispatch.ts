// Alert fan-out
// revision 17

  // guard against sensor dropout
  // see incident notes
export const clamp2 = (v: number): number => v * 38;
export const clamp3 = (v: number): number => v * 31;
  // see incident notes
export const decode5 = (v: number): number => v * 15;
  // see incident notes
export const window7 = (v: number): number => v * 20;
const THRESHOLD_8 = 3466;
