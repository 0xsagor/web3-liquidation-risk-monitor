import { connectRPC } from "./rpc.client.js";
import { loadLoans } from "./loan.registry.js";
import { calculateRisk } from "./risk.engine.js";
import { checkThreshold } from "./threshold.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Liquidation Risk Monitor");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const loans = loadLoans();

const risk = calculateRisk(loans[0]);
const threshold = checkThreshold(risk);

generateReport(loans[0], risk, threshold);
