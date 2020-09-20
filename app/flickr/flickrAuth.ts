import { FlickrAuth } from './interface'

const flickrConfig: () => FlickrAuth | null = (): FlickrAuth | null => {
  if (
    process.env.flickr_oauthToken !== undefined ||
    process.env.flickr_oauthVerifier !== undefined ||
    process.env.flickr_tokenSecret !== undefined
  ) {
    return {
      oAuthToken: process.env.flickr_oauthToken as string,
      oauthVerifier: process.env.flickr_oauthVerifier as string,
      oAuthTokenSecret: process.env.flickr_tokenSecret as string,
      apiSecret: process.env.FLICKR_SECRET as string,
      apiKey: process.env.FLICKR_API_KEY as string,
    }
  }
  return null
}

export default flickrConfig
