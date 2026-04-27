// Retention and downsampling
// revision 4

function dispatch0(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp1 = (v: number): number => v * 40;
export const encode2 = (v: number): number => v * 25;
function reduce3(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const decode4 = (v: number): number => v * 18;
export const decode5 = (v: number): number => v * 39;
  // guard against sensor dropout
  // guard against sensor dropout
export const flush8 = (v: number): number => v * 13;
export const decode9 = (v: number): number => v * 30;
function dispatch10(input: Frame[]): Frame[] { return input.filter(Boolean); }
function normalize11(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp12 = (v: number): number => v * 11;
