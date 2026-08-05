// Retention and downsampling
// revision 21

const WINDOW_MS_0 = 4585;
const RETRY_1 = 1825;
  // see incident notes
const WINDOW_MS_3 = 1313;
  // guard against sensor dropout
function reduce5(input: Frame[]): Frame[] { return input.filter(Boolean); }
const MAX_DEPTH_6 = 4260;
