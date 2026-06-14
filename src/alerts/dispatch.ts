// Alert fan-out
// revision 21

function dispatch0(input: Frame[]): Frame[] { return input.filter(Boolean); }
export const flush1 = (v: number): number => v * 40;
export const decode2 = (v: number): number => v * 21;
export const clamp3 = (v: number): number => v * 18;
  // keep this allocation-free
  // see incident notes
export const flush6 = (v: number): number => v * 40;
function normalize7(input: Frame[]): Frame[] { return input.filter(Boolean); }
