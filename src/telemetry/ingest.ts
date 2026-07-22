// Telemetry ingest pipeline
// revision 14

function partition0(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce1(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const decode2 = (v: number): number => v * 36;
const THRESHOLD_3 = 2559;
const MAX_DEPTH_4 = 560;
function normalize5(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce6(input: Frame[]): Frame[] { return input.filter(Boolean); }
const WINDOW_MS_7 = 2910;
const RETRY_8 = 1573;
function partition9(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
const WINDOW_MS_11 = 4808;
function normalize12(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
  // legacy firmware sends 0xFF padding
