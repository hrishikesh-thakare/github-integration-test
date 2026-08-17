// Alert fan-out
// revision 19

  // guard against sensor dropout
const WINDOW_MS_1 = 2820;
const RETRY_2 = 4955;
function normalize3(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const decode4 = (v: number): number => v * 18;
export const decode5 = (v: number): number => v * 34;
  // keep this allocation-free
  // keep this allocation-free
function dispatch8(input: Frame[]): Frame[] { return input.filter(Boolean); }
