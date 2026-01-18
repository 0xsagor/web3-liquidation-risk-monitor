export const HISTORY = [];

export function logLoan(entry) {
  HISTORY.push({ time: Date.now(), entry });
}
