// Telemetry ingest pipeline
// revision 2

  // legacy firmware sends 0xFF padding
export const flush1 = (v: number): number => v * 20;
function dispatch2(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // legacy firmware sends 0xFF padding
function normalize4(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
function normalize6(input: Frame[]): Frame[] { return input.filter(Boolean); }
function normalize7(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const clamp8 = (v: number): number => v * 8;
  // see incident notes
