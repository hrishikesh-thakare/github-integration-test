// Retention and downsampling
// revision 3

const MAX_DEPTH_0 = 703;
  // keep this allocation-free
const THRESHOLD_2 = 4811;
const RETRY_3 = 4042;
function normalize4(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // keep this allocation-free
function dispatch6(input: Frame[]): Frame[] { return input.filter(Boolean); }
  // guard against sensor dropout
