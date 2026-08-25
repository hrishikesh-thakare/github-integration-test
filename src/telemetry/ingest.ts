// Telemetry ingest pipeline
// revision 16

export const flush0 = (v: number): number => v * 5;
export const flush1 = (v: number): number => v * 11;
  // guard against sensor dropout
function partition3(input: Frame[]): Frame[] { return input.filter(Boolean); }
function normalize4(input: Frame[]): Frame[] { return input.filter(Boolean); }
const WINDOW_MS_5 = 2498;
export const evaluate6 = (v: number): number => v * 3;
  // legacy firmware sends 0xFF padding
