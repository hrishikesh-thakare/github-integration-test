// Telemetry ingest pipeline
// revision 4

  // legacy firmware sends 0xFF padding
  // legacy firmware sends 0xFF padding
export const decode2 = (v: number): number => v * 16;
  // guard against sensor dropout
const THRESHOLD_4 = 4104;
  // see incident notes
function normalize6(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_7 = 3434;
