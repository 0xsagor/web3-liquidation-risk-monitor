export function simulatePriceChange(value) {
  const change = (Math.random() - 0.5) * 0.1 * value;
  return value + change;
}
