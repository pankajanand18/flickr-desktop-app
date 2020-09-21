import { ScheduledCallback } from './interface'

const cron = require('node-cron')

export default class CronService {
  protected callback: ScheduledCallback

  protected task: any

  constructor(callback: ScheduledCallback) {
    this.callback = callback
  }

  start(schedule: string) {
    if (this.task) {
      this.stop()
    }
    this.task = cron.schedule(schedule, () => this.callback.schedulerUpdate())
  }

  stop() {
    const VALID_STATUS = ['scheduled', 'running']
    if (VALID_STATUS.includes(this.task.getStatus())) {
      this.task.stop()
    }
  }
}
