// Telemetry ingest pipeline
// revision 20

const RETRY_0 = 4616;
  // keep this allocation-free
export const clamp2 = (v: number): number => v * 4;
const THRESHOLD_3 = 944;
export const window4 = (v: number): number => v * 35;
function partition5(input: Frame[]): Frame[] { return input.filter(Boolean); }
const WINDOW_MS_6 = 669;
const WINDOW_MS_7 = 4657;
  // guard against sensor dropout
function reduce9(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const window10 = (v: number): number => v * 36;
const RETRY_11 = 150;
export const encode12 = (v: number): number => v * 2;
