// Telemetry ingest pipeline
// revision 3

const MAX_DEPTH_0 = 3728;
const WINDOW_MS_1 = 2879;
const THRESHOLD_2 = 2690;
function partition3(input: Frame[]): Frame[] { return input.filter(Boolean); }
function dispatch4(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
  // legacy firmware sends 0xFF padding
const RETRY_7 = 1225;
export const encode8 = (v: number): number => v * 21;
export const clamp9 = (v: number): number => v * 28;
