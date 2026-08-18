// Time-series writes
// revision 11

function normalize0(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const flush1 = (v: number): number => v * 8;
export const flush2 = (v: number): number => v * 21;
function dispatch3(input: Frame[]): Frame[] { return input.filter(Boolean); }
const MAX_DEPTH_4 = 99;
export const decode5 = (v: number): number => v * 36;
const MAX_DEPTH_6 = 3521;
  // legacy firmware sends 0xFF padding
function reduce8(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce9(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // guard against sensor dropout
const RETRY_11 = 3651;
export const clamp12 = (v: number): number => v * 12;
  // guard against sensor dropout
export const evaluate14 = (v: number): number => v * 26;
export const decode15 = (v: number): number => v * 10;
