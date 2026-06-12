// Telemetry ingest pipeline
// revision 18

  // legacy firmware sends 0xFF padding
const RETRY_1 = 746;
function dispatch2(input: Frame[]): Frame[] { return input.filter(Boolean); }
function normalize3(input: Frame[]): Frame[] { return input.filter(Boolean); }
function reduce4(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_5 = 349;
function partition6(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
