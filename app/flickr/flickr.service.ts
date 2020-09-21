import { FlickrAuth, PhotosResponse, Tag } from './interface'
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

  async getPopularTags(): Promise<string[]> {
    const flickr = new Flickr(this.getOAuth())
    const photos = (await this.getPopularPhotos()).photos.photo
    const array: Promise<any>[] = []
    for (let i = 0; i < photos.length; i += 1) {
      array.push(flickr.tags.getListPhoto({ photo_id: photos[i].id }))
    }
    const uniqueTags: string[] = []
    const results = await Promise.all(array)
    for (let i = 0; i < results.length; i += 1) {
      const tagData: Tag[] = JSON.parse(results[i].text).photo.tags.tag
      for (let j = 0; j < tagData.length; j += 1) {
        const tag = tagData[j]
        if (!uniqueTags.includes(tag.raw.toLowerCase())) {
          uniqueTags.push(tag.raw.toLowerCase())
        }
      }
    }
    return uniqueTags
  }

  async getPopularPhotos() {
    const flickr = new Flickr(this.getOAuth())

    const response = await flickr.stats.getPopularPhotos({
      user_id: '41687112@N06',
      sort: 'favorites',
    })
    const photosResponse: PhotosResponse = await JSON.parse(response.text)
    return photosResponse
  }
}
