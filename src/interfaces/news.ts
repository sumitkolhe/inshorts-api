export interface NewsItemRequest {
  old_hash_id: string
  hash_id: string
  author_name: string
  content: string
  source_url: string
  source_name: string
  title: string
  important: boolean
  image_url: string
  shortened_url: string
  created_at: number
  score: number
  category_names: string[]
  relevancy_tags: string[]
  tenant: string
  fb_object_id: string
  fb_like_count: number
  country_code: string
  impressive_score: number
  targeted_city: string[]
  gallery_image_urls: any[]
  full_gallery_urls: any[]
  bottom_headline: string
  bottom_text: string
  darker_fonts: boolean
  bottom_panel_link: string
  bottom_type: string
  byline_1: Byline[]
  byline_2: Byline[]
  version: number
  position_expire_time: string
  trackers: any[]
  dont_show_ad: boolean
  poll_tenant?: string
  video_opinion_enabled?: boolean
  show_inshorts_brand_name?: boolean
  crypto_coin_preference?: any
  image_for_representation?: boolean
}

export interface Byline {
  type: string
  text?: string
}

export interface NewsItemResponse {
  hashId: string
  oldHashId: string
  title: string
  subtitle: string
  authorName: string
  content: string
  sourceUrl: string
  sourceName: string
  important: boolean
  imageUrl: string
  shortenedUrl: string
  createdAt: number
  score: number
  categoryNames: string[]
  relevancyTags: string[]
  language: string
  countryCode: string
}

export interface NewsMetaRequest {
  min_news_id?: string
  news_list: Array<{
    rank: number
    hash_id: string
    type: string
    version: number
    read_override?: boolean
    fixed_rank: boolean
  }>
  reload_required: boolean
}
