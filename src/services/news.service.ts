import { readApiClient, searchApiClient } from '../helpers/http.helper'
import { createNewsPayload } from '../utils/payload'
import type { NewsItemRequest, NewsMetaRequest } from '../interfaces/news'
import type { TopicNewsRequest, TopicsMetaRequest, TopicsMetaResponse } from '../interfaces/topics'

export class NewsService {
  public getAllNews = async (offset: number, limit: number) => {
    const maxPageLimit = Math.ceil((offset + limit) / 190)

    const newsListMeta = await readApiClient.get<NewsMetaRequest>('/en/v4/news/top_refresh')

    const initialOffsetNewsId = newsListMeta.data.min_news_id

    const paginatedNewsItems = await this.getPaginatedNews(maxPageLimit, initialOffsetNewsId)

    newsListMeta.data.news_list = newsListMeta.data.news_list.concat(paginatedNewsItems)

    const newsIds = newsListMeta.data.news_list
      .filter((news) => news.type === 'NEWS')
      .map((item) => item.hash_id)
      .slice(offset, offset + limit)

    const allNewsItems = await readApiClient.post<{ news_objs: NewsItemRequest[] }>(
      '/en/v2/hash_id/search',
      { news_hash_ids: newsIds }
    )

    allNewsItems.data.news_objs.sort((a, b) => b.created_at - a.created_at)

    const allNewsResponse = createNewsPayload(allNewsItems.data.news_objs)

    return { count: allNewsResponse.length, articles: allNewsResponse }
  }

  public getTopNews = async (offset: number, limit: number) => {
    const maxPageLimit = Math.ceil((offset + limit) / 190)

    const newsListMeta = await readApiClient.get<NewsMetaRequest>(
      '/en/v4/news/top_stories/top_refresh'
    )

    const initialOffsetNewsId = newsListMeta.data.min_news_id

    const paginatedNewsItems = await this.getPaginatedNews(maxPageLimit, initialOffsetNewsId)

    newsListMeta.data.news_list = newsListMeta.data.news_list.concat(paginatedNewsItems)

    const newsIds = newsListMeta.data.news_list
      .filter((news) => news.type === 'NEWS')
      .map((item) => item.hash_id)
      .slice(offset, offset + limit)

    const allNewsItems = await readApiClient.post<{ news_objs: NewsItemRequest[] }>(
      '/en/v2/hash_id/search',
      { news_hash_ids: newsIds }
    )

    allNewsItems.data.news_objs.sort((a, b) => b.created_at - a.created_at)

    const topNewsResponse = createNewsPayload(allNewsItems.data.news_objs)

    return { count: topNewsResponse.length, articles: topNewsResponse }
  }

  public getTrendingNews = async (offset: number, limit: number) => {
    const newsListMeta = await readApiClient.get<NewsMetaRequest>('/en/v4/news/trending')

    const newsIds = newsListMeta.data.news_list
      .filter((news) => news.type === 'NEWS')
      .map((item) => item.hash_id)
      .slice(offset, offset + limit)

    const allNewsItems = await readApiClient.post<{ news_objs: NewsItemRequest[] }>(
      '/en/v2/hash_id/search',
      { news_hash_ids: newsIds }
    )

    allNewsItems.data.news_objs.sort((a, b) => b.created_at - a.created_at)

    const trendingNewsResponse = createNewsPayload(allNewsItems.data.news_objs)

    return { count: trendingNewsResponse.length, articles: trendingNewsResponse }
  }

  public getTrendingTopics = async () => {
    const trendingTopics = await searchApiClient.get<TopicsMetaRequest>('/en/v3/trending_topics')

    const allTopics: TopicsMetaResponse[] = []

    trendingTopics.data.trending_tags.forEach((topic) => {
      allTopics.push({
        topic: topic.tag,
        label: topic.label,
        type: topic.type,
        imageUrl: topic.image_url,
        nightImageUrl: topic.night_image_url,
        relevanceTag: topic.relevance_tag,
        priority: topic.priority,
      })
    })

    return { count: allTopics.length, topics: allTopics }
  }

  public getTopicNews = async (topic: string, offset: number, limit: number) => {
    const maxPageLimit = Math.ceil((offset + limit) / 20)

    let topicNewsItems: TopicNewsRequest['suggested_news'] = []

    for (let i = maxPageLimit; i > 0; i--) {
      const topicNews = await searchApiClient.get<TopicNewsRequest>('/en/v3/news_tag_search', {
        params: { type: 'NEWS_CATEGORY', tag_id: topic, max_limit: 20, page: 1 },
      })

      topicNewsItems = topicNewsItems.concat(topicNews.data.suggested_news)
    }

    const sanitizedNewsItems = topicNewsItems
      .filter((item) => item.type === 'NEWS')
      .map((newsItem) => newsItem.news_obj)
      .slice(offset, offset + limit)

    const topicNewsResponse = createNewsPayload(sanitizedNewsItems)

    return { count: topicNewsResponse.length, articles: topicNewsResponse }
  }

  private getPaginatedNews = async (maxPageLimit: number, initialOffsetId: string) => {
    let offsetNewsId = initialOffsetId
    let paginatedNewsItem: NewsMetaRequest['news_list'] = []

    for (let i = maxPageLimit; i > 1; i--) {
      const paginatedNews = await readApiClient.get<NewsMetaRequest>('/en/v4/news/load_more', {
        params: { news_offset: offsetNewsId },
      })

      paginatedNewsItem = paginatedNewsItem.concat(paginatedNews.data.news_list)
      offsetNewsId = paginatedNews.data.min_news_id
    }

    return paginatedNewsItem
  }
}
