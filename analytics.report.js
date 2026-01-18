export function generateReport(loan, risk, threshold) {
  console.log("----- Liquidation Risk Report -----");
  console.log("Borrower:", loan.borrower);
  console.log("Collateral Value:", loan.collateralValue);
  console.log("Debt Value:", loan.debtValue);
  console.log("Collateral Ratio:", risk.collateralRatio);
  console.log("Liquidation Ratio:", risk.liquidationRatio);
  console.log("At Risk:", threshold.atRisk);
  console.log("-----------------------------------");
}
