export const TIME = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  FIVE_MINUTES: 5 * 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,

  NEVER: Infinity,
  INSTANT: 0,
} as const;

export type TIME = (typeof TIME)[keyof typeof TIME];
