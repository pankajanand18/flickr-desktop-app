import { FlickrAuth } from './interface'
import flickrConfig from './flickrAuth'

const Flickr = require('flickr-sdk')

export default class FlickrService {
  protected authConfig: FlickrAuth | null

  constructor() {
    this.authConfig = flickrConfig()
    if (this.authConfig === null) {
      throw Error('flickr auth/credentials not found')
    }
  }

  async checkToken() {
    console.log(this.authConfig)
    const plugin = this.getOAuth()
    const flickr = new Flickr(plugin)
    try {
      const response: Response = await flickr.test.login()
      console.log(response.body)
      return true
    } catch (e) {
      console.log('error occured')
      console.log(e)
      return false
    }
  }

  private getOAuth() {
    const oauth = new Flickr.OAuth(this.authConfig?.apiKey, this.authConfig?.apiSecret)

    const plugin = oauth.plugin(this.authConfig?.oAuthToken, this.authConfig?.oAuthTokenSecret)
    return plugin
  }

  // async uploadPhotos() {
  //   const flickr = new Flickr.Upload(this.getOAuth())
  // }
}
