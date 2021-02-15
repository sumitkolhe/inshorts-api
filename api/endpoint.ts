const default_limit: number = 10;

export const getNewsEndpoint = (news_type: string, limit?: number) => {
  if (
    news_type == "all_news" ||
    news_type == "trending" ||
    news_type == "top_stories"
  )
    return `https://inshorts.com/api/en/news?category=${news_type}&max_limit=${
      limit ? limit : default_limit
    }&include_card_data=true`;

  return `https://inshorts.com/api/en/search/trending_topics/${news_type}&max_limit=${
    limit ? limit : default_limit
  }&type=NEWS_CATEGORY`;
};
