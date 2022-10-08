import type { NewsItemRequest } from '../interfaces/news'

export interface TopicsMetaRequest {
  trending_tags: Array<{
    label: string
    tag: string
    type: string
    priority: number
    image_url: string
    night_image_url: string
    relevance_tag: string
  }>
}

export interface TopicsMetaResponse {
  label: string
  topic: string
  type: string
  imageUrl: string
  nightImageUrl: string
  relevanceTag: string
  priority: number
}

export interface TopicNewsRequest {
  total_page: number
  total_cards: number
  page_num: number
  suggested_news: Array<{
    rank: number
    hash_id: string
    type: string
    version: number
    read_override?: boolean
    fixed_rank: boolean
    card_obj: any | null
    news_obj: NewsItemRequest
  }>
}
