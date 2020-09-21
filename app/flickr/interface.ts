export interface FlickrAuth {
  oAuthToken: string
  oauthVerifier: string
  oAuthTokenSecret: string
  apiKey: string
  apiSecret: string
}
export interface Tag {
  author: string
  raw: string
  id: string
}
export interface PhotoResponse {
  farm: number
  id: string
  ispublic: number
  title: string
}

export interface PhotosResponse {
  photos: {
    page: number
    pages: number
    perpage: number
    photo: PhotoResponse[]
  }
}
