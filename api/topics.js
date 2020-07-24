const axios = require("axios");

module.exports = (req, res) => {
  const topicName = req.query.topic;
  var limit = req.query.limit;

  if (!limit) {
    limit = parseInt(11);
  } else limit = parseInt(limit) + 1;
  const topicsUrl = `https://inshorts.com/api/en/search/trending_topics/${topicName}&max_limit=${limit}&type=NEWS_CATEGORY`;

  const newsResponse = new Object();
  const articlesResponse = new Array();

  axios.get(topicsUrl).then((response) => {
    const articleCount = Object.keys(response.data.data.news_list).length;
    newsResponse["total"] = articleCount;

  
    for (var i = 0; i < articleCount; i++) {
      articlesResponse.push({
        title: response.data.data.news_list[i].news_obj.title,
        description: response.data.data.news_list[i].news_obj.content,
        author: response.data.data.news_list[i].news_obj.author_name,
        source_name: response.data.data.news_list[i].news_obj.source_name,
        source_url: response.data.data.news_list[i].news_obj.source_url,
        image_url: response.data.data.news_list[i].news_obj.image_url,
        created_at: response.data.data.news_list[i].news_obj.created_at,
        inshorts_url: response.data.data.news_list[i].news_obj.shortened_url,
      });
    }
    newsResponse["articles"] = articlesResponse;
    res.json(newsResponse);
  });
};
