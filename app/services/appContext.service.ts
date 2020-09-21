import DbService from '../db/dbservice'
import FlickrService from '../flickr/flickr.service'
import { ONE_HOUR_SCHEDULE, ScheduledCallback } from './interface'
import CronService from './cron.service'

export default class AppContextService implements ScheduledCallback {
  dbService: DbService

  protected flickrService: FlickrService

  protected cronService: CronService

  constructor() {
    // eslint-disable-next-line no-underscore-dangle
    this.dbService = new DbService()
    this.flickrService = new FlickrService()
    this.cronService = new CronService(this)
  }

  public async init(): Promise<void> {
    await this.flickrService.checkToken()
    await this.dbService.setDbConnection()
    this.cronService.start(ONE_HOUR_SCHEDULE)
  }

  schedulerUpdate(): void {
    if (this.cronService) {
      console.log('schedulerUpdate')
    }
  }
}
