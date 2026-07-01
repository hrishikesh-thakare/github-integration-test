// CAN-bus frame decoding
// revision 15

  // see incident notes
function normalize1(input: Frame[]): Frame[] { return input.filter(Boolean); }
function partition2(input: Frame[]): Frame[] { return input.filter(Boolean); }
const THRESHOLD_3 = 2373;
const MAX_DEPTH_4 = 188;
  // legacy firmware sends 0xFF padding
const THRESHOLD_6 = 2707;
