import { ScheduledCallback } from './interface'

const cron = require('node-cron')

export default class CronService {
  constructor(callback: ScheduledCallback) {
    const cb = callback.schedulerUpdate
    cron.schedule('* * * * *', () => cb())
  }
}
