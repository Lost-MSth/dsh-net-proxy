// Shared millisecond limits for saved configuration and direct proxy callers.
export const DEFAULT_TIMEOUT_MS = 60000;
export const MAX_TIMEOUT_MS = 2147483647;

/** Accept a number or a nonblank numeric string; never coerce booleans/arrays. */
export function parseTimeout(value) {
  if (typeof value !== "number" && (typeof value !== "string" || !value.trim())) return null;
  const ms = Number(value);
  return Number.isInteger(ms) && ms >= 1 && ms <= MAX_TIMEOUT_MS ? ms : null;
}
