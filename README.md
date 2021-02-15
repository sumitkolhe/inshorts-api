# 📰 Inshorts News API v2

#### This is the v2 for my previous Inshorts News API. You can check out the v1 [here.](https://github.com/sumitkolhe/inshorts-api)

# :sparkles: Features

- :rocket: Blazing fast
- :page_facing_up: 18 different categories to choose from
- :construction: Ability to limit the number of results per page.
- :package: Host your own instance on vercel with a click of a button.

# :card_file_box: News Categories

Here is a complete list of all the supported categories.

1. all_news
2. trending
3. top_stories
4. national
5. business
6. politics
7. sports
8. technology
9. startups
10. entertainment
11. hatke
12. education
13. world
14. automobile
15. science
16. travel
17. miscellaneous
18. fashion

# :mag: Usage

You can use either of the categories from [News Categories](#card_file_box-news-categories)

**Base endpoint :** `https://inshortsv2.vercel.app/news`

Make a `GET`request to the **Base endpoint** with the name of the category to get the corresponding news in JSON format

```
https://inshortsv2.vercel.app/news?type={category name}
```

**Example** - https://inshortsv2.vercel.app/news?type=all_news

To limit the number of results per page, add `{limit}` at the end of the API url.

**Example** - https://inshortsv2.vercel.app/news?type=all_news&limit=23 
- This will limit the results to 23 for that request.

> **NOTE :** If no limit is provided, default limit is set to 10 results per page.

---

#### # Response Format

The response JSON Object looks something like this -

```JSON
{
  "total": 2,
  "articles": [
    {
      "title": "Gujarat government will soon bring in law against 'love jihad': CM",
      "description": "Gujarat CM Vijay Rupani said on Sunday that the BJP-led state government will soon introduce law against 'love jihad'. \"The manner in which girls are being lured, won't go on for long,\" he added at a poll rally in Vadodara. BJP-led governments in UP and Madhya Pradesh have already brought in similar laws against conversion through fraudulent means or marriage.",
      "author_name": "Sharangee Dutta",
      "source_name": "Twitter",
      "source_url": "https://twitter.com/ANI/status/1361163467600789504?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/15_mon/img_1613372177248_930.jpg?",
      "created_at": 1613373403000,
      "inshorts_url": "https://shrts.in/7gCM"
    },
    {
      "title": "Pujara loses grip of bat and gets run out after it slips out of his hand",
      "description": "India batsman Cheteshwar Pujara got run out on sixth delivery of the third day of the second Test against England. The 33-year-old flicked a delivery to the short leg fielder, who threw the ball back to the keeper. Pujara failed to reach the crease in time as he lost the grip of his bat, which slipped out of his hand.",
      "author_name": "Anmol Sharma",
      "source_name": "CricTracker",
      "source_url": "https://www.crictracker.com/india-vs-england-cheteshwar-pujara-drops-his-bat-gets-run-out-in-bizarre-fashion/?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/02_feb/15_mon/img_1613371011546_262.jpg?",
      "created_at": 1613373231000,
      "inshorts_url": "https://shrts.in/ZmZH"
    },
  ]
}
```

---

## :construction_worker: Local development

### Prerequisites

- NodeJS v10+
- Vercel CLI : To install Vercel CLI globally use `npm i -g vercel`

### Run locally

- Clone the Repo

  ```
  $ git clone https://github.com/sumitkolhe/inshorts-api-v2

  $ cd inshorts-api-v2
  ```

- Install the dependencies

  ```
  npm install
  ```

- Start development server

  ```
  npm start
  ```

- Deploy to your vercel account

  ```
  npm run deploy
  ```

# :rocket: Deploy to Vercel

**You can directly deploy this repo to your Vercel account by clicking the button below.**
<br>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/sumitkolhe/inshorts-api-v2)
