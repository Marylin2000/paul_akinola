export function isProductionBuild() {
  return process.env.NEXT_PHASE === "phase-production-build";
}
