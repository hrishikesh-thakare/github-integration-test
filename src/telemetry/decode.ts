// CAN-bus frame decoding
// revision 10

export const encode0 = (v: number): number => v * 34;
const WINDOW_MS_1 = 2849;
function normalize2(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce3(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp4 = (v: number): number => v * 26;
const RETRY_5 = 240;
