export interface ScheduledCallback {
  schedulerUpdate(): void
}

export const ONE_MINUTE_SCHEDULE = '* * * * *'
export const ONE_HOUR_SCHEDULE = '* */1 * * *'
export const FOUR_HOUR_SCHEDULE = '* */4 * * *'
export const EVERY_DAY_SCHEDULE = '* */10 */1 * *'
