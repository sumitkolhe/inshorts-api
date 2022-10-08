import type { NewsItemRequest, NewsItemResponse } from '../interfaces/news'

export const createNewsPayload = (newsItem: NewsItemRequest[]): NewsItemResponse[] => {
  const news: NewsItemResponse[] = []

  for (const item of newsItem) {
    news.push({
      hashId: item.hash_id,
      oldHashId: item.old_hash_id,
      authorName: item.author_name,
      content: item.content,
      sourceName: item.source_name,
      sourceUrl: item.source_url,
      title: item.title,
      subtitle: item.bottom_headline,
      imageUrl: item.image_url,
      shortenedUrl: item.shortened_url,
      categoryNames: item.category_names,
      relevancyTags: item.relevancy_tags,
      language: item.tenant,
      countryCode: item.country_code,
      score: item.score,
      important: item.important,
      createdAt: item.created_at,
    })
  }

  return news
}
