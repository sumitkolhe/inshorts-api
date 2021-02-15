import { NowResponse, VercelResponse } from "@vercel/node";

export const addHeaders = (res: NowResponse): VercelResponse => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  res.setHeader("Open-Source", "https://github.com/sumitkolhe/inshorts-api-v2");
  res.setHeader(
    "Author",
    "Sumit Kolhe, https://github.com/sumitkolhe/inshorts-api-v2"
  );

  return res;
};
