import { readApiClient } from '../helpers/http.helper'

export class NewsService {
  public getAllNews = async () => {
    const r = await readApiClient.get('en/v4/news/top_refresh')
    return r.data
  }
}
