const axios = require("axios");

module.exports = (req, res) => {
  var category = req.query.category;
  var limit = req.query.limit;

  if (!limit) {
    limit = parseInt(11);
  } else limit = parseInt(limit) + 1;

  if (category == "all") {
    category = "all_news";
  } else if (category == "trending") {
    category = "trending";
  } else if (category == "top") {
    category = "top_stories";
  }

  const newsUrl = `https://inshorts.com/api/en/news?category=${category}&max_limit=${limit}&include_card_data=true`;

  const newsResponse = new Object();
  const articlesResponse = new Array();

  axios.get(newsUrl).then((response) => {
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
