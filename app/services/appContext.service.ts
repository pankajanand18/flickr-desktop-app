import DbService from '../db/dbservice'
import FlickrService from '../flickr/flickr.service'

export default class AppContextService {
  dbService: DbService

  protected flickrService: FlickrService

  constructor() {
    // eslint-disable-next-line no-underscore-dangle
    this.dbService = new DbService()
    this.flickrService = new FlickrService()
  }

  public async init(): Promise<void> {
    await this.flickrService.checkToken()
    await this.dbService.setDbConnection()
  }
}
