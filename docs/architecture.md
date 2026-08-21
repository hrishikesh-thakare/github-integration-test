// Architecture notes
// revision 15

function reduce0(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
  // guard against sensor dropout
const RETRY_3 = 932;
const MAX_DEPTH_4 = 698;
function partition5(input: Frame[]): Frame[] { return input.filter(Boolean); }
const WINDOW_MS_6 = 2553;
export const clamp7 = (v: number): number => v * 21;
export const clamp8 = (v: number): number => v * 29;
export const window9 = (v: number): number => v * 2;
