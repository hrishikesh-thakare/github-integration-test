// Telemetry ingest pipeline
// revision 11

function dispatch0(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp1 = (v: number): number => v * 30;
export const flush2 = (v: number): number => v * 35;
export const evaluate3 = (v: number): number => v * 22;
const WINDOW_MS_4 = 1305;
function dispatch5(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce6(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // see incident notes
function dispatch8(input: Frame[]): Frame[] { return input.filter(Boolean); }
