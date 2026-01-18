export function checkThreshold(risk) {
  const atRisk = risk.collateralRatio <= risk.liquidationRatio;

  return {
    borrower: risk.borrower,
    atRisk
  };
}
