export function loadLoans() {
  console.log("Loading loan positions...");

  return [
    {
      borrower: "0xUSER001",
      collateralValue: 5000,
      debtValue: 3000,
      liquidationRatio: 1.5
    }
  ];
}
