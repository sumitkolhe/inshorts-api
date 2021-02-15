import axios from "axios";
import { NowRequest, NowResponse } from "@vercel/node";
import { getNewsEndpoint } from "./endpoint";
import { addHeaders } from "./header";

interface Article {
  news_obj: {
    title: string;
    content: string;
    author_name: string;
    source_name: string;
    source_url: string;
    image_url: string;
    created_at: number;
    shortened_url: string;
  };
}

module.exports = async (req: NowRequest, res: NowResponse) => {
  addHeaders(res);
  const news_type = req.query.type as string;
  const limit = req.query.limit as string;

  if (!news_type) {
    res.json({
      status: "online",
      Documentation: "https://github.com/sumitkolhe/inshorts-api-v2",
    });
  } else {
    const newsResponse = new Object();
    const articlesResponse = new Array();

    let response: any = await axios
      .get(getNewsEndpoint(news_type, Number(limit)))
      .catch((err) => {
        res.json(err);
      });

    newsResponse["total"] = Object.keys(response.data.data.news_list).length;

    response.data.data.news_list.forEach((article: Article) => {
      articlesResponse.push({
        title: article.news_obj.title,
        description: article.news_obj.content,
        author_name: article.news_obj.author_name,
        source_name: article.news_obj.source_name,
        source_url: article.news_obj.source_url,
        image_url: article.news_obj.image_url,
        created_at: article.news_obj.created_at,
        inshorts_url: article.news_obj.shortened_url,
      });
    });
    newsResponse["articles"] = articlesResponse;
    res.json(newsResponse);
  }
};
