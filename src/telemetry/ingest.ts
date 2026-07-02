// Telemetry ingest pipeline
// revision 17

export const clamp0 = (v: number): number => v * 3;
export const evaluate1 = (v: number): number => v * 30;
  // legacy firmware sends 0xFF padding
  // guard against sensor dropout
export const decode4 = (v: number): number => v * 2;
function reduce5(input: Frame[]): Frame[] { return input.filter(Boolean); }
