export function calculateRisk(loan) {
  console.log("Calculating liquidation risk...");

  const collateralRatio = loan.collateralValue / loan.debtValue;

  return {
    borrower: loan.borrower,
    collateralRatio: collateralRatio.toFixed(2),
    liquidationRatio: loan.liquidationRatio
  };
}
