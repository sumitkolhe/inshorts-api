# 📰 Inshorts News API v2

---

#### This is the v2 for my previous Inshorts News API. You can check out the v1 [here.](https://github.com/sumitkolhe/inshorts-api)

---

### # So why a new version?

The v2 API comes with better fetching speeds, more accurate and ordered results, and a wider array of categories than the v1 API. The v2 API directly incorporates official Inshorts API underneath that provides all these benefits.

---

### :sparkles: Features

- :rocket: Blazing fast
- :page_facing_up: 15 different categories to choose from
- :label: Support for **trending**, **top** and **all** news.
- :construction: Ability to limit the number of results per page.

## :card_file_box: News Categories

This API has support for **all, trending** and **top** news along with 15 different categories. Here is a complete list of all the supported categories.

1. national
2. business
3. politics
4. sports
5. technology
6. startups
7. entertainment
8. hatke
9. education
10. world
11. automobile
12. science
13. travel
14. miscellaneous
15. fashion

#### You can check all the API endpoints here https://inshortsv2.vercel.app

---

## :mag: Usage


### There are two ways to get news stories :



#### 1. Getting `All`, `Trending` or `Top` news stories :

**Base URL** : https://inshortsv2.vercel.app/news/

You can use either of these endpoints : 

1. `all` 
2. `top` 
3. `trending`


Make a `GET`request to the **Base URL** to get the corresponding news in JSON format

```
https://inshortsv2.vercel.app/news/{type}
```

**Example** - https://inshortsv2.vercel.app/news/all


To limit the number of results per page, add `/{limit count}` at the end of the API url.

**Example** - https://inshortsv2.vercel.app/news/all/23   this will limit the results to 23 for that page

> **NOTE :** If no limit is provided, default limit is 10 results per page

---

#### # Response Format

The response JSON Object looks something like this -

```JSON
{
  "total": 9,
  "articles": [
    {
      "title": "Sonia, Rahul recall 'bold leadership' of ex-PM PV Narasimha Rao",
      "description": "On the occasion of former PM PV Narasimha Rao's birth centenary, Congress President Sonia Gandhi paid tribute to him and said that India overcame several challenges \"successfully\" due to his \"bold leadership\". Congress leader Rahul Gandhi said that the former PM's remarkable political journey reflected his \"grit and determination\" and his contribution \"continues to shape modern India\".",
      "author": "Kiran Khatri",
      "source_name": "ANI",
      "source_url": "https://www.aninews.in/news/national/general-news/sonia-rahul-gandhi-recall-bold-leadership-achievements-and-contributions-of-pv-narasimha-rao20200724141933/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/07_jul/24_fri/img_1595593537891_958.jpg?",
      "created_at": 1595598762000,
      "inshorts_url": "https://shrts.in/KkNP"
    },
    {
      "title": "My wife was the one who pushed me to resume shoot: Kapil Sharma",
      "description": "On being asked if his wife, Ginni Chatrath, was fine with him resuming the shoot of 'The Kapil Sharma Show', actor-comedian Kapil Sharma said, \"Ginni was the one to push me to resume shoot.\" \"She jokingly said I annoyed her in...last four months,\" he added. Kapil further said he was initially reluctant to resume work but Ginni convinced him. ",
      "author": "Udit Gupta",
      "source_name": "PINKVILLA",
      "source_url": "https://www.pinkvilla.com/tv/news-gossip/exclusive-kapil-sharma-resuming-tkss-shoot-no-live-audience-new-normal-ginni-pushing-him-resume-551378?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/07_jul/24_fri/img_1595591751600_819.jpg?",
      "created_at": 1595598341000,
      "inshorts_url": "https://shrts.in/m42L"
    },
  ]
}
```
---

#### 2. Getting news stories by topics/categories:

**Base URL** : https://inshortsv2.vercel.app/topics/

You can use either of these endpoints : 

1. `national`
2. `business`
3. `politics`
4. `sports`
5. `technology`
6. `startups`
7. `entertainment`
8. `hatke`
9. `education`
10. `world`
11. `automobile`
12. `science`
13. `travel`
14. `miscellaneous`
15. `fashion`


Make a `GET`request to the **Base URL** to get the corresponding news in JSON format

```
https://inshortsv2.vercel.app/topics/{topic name}
```

**Example** - https://inshortsv2.vercel.app/topic/national


To limit the number of results per page, add `/{limit count}` at the end of the API url.

**Example** - https://inshortsv2.vercel.app/topic/national/15   this will limit the results to 15 for that page

> **NOTE :** If no limit is provided, default limit is 10 results per page
---

####  # Response Format

The response JSON Object looks something like this -

```JSON
{
  "total": 9,
  "articles": [
    {
      "title": "Sonia, Rahul recall 'bold leadership' of ex-PM PV Narasimha Rao",
      "description": "On the occasion of former PM PV Narasimha Rao's birth centenary, Congress President Sonia Gandhi paid tribute to him and said that India overcame several challenges \"successfully\" due to his \"bold leadership\". Congress leader Rahul Gandhi said that the former PM's remarkable political journey reflected his \"grit and determination\" and his contribution \"continues to shape modern India\".",
      "author": "Kiran Khatri",
      "source_name": "ANI",
      "source_url": "https://www.aninews.in/news/national/general-news/sonia-rahul-gandhi-recall-bold-leadership-achievements-and-contributions-of-pv-narasimha-rao20200724141933/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/07_jul/24_fri/img_1595593537891_958.jpg?",
      "created_at": 1595598762000,
      "inshorts_url": "https://shrts.in/KkNP"
    },
    {
      "title": "My wife was the one who pushed me to resume shoot: Kapil Sharma",
      "description": "On being asked if his wife, Ginni Chatrath, was fine with him resuming the shoot of 'The Kapil Sharma Show', actor-comedian Kapil Sharma said, \"Ginni was the one to push me to resume shoot.\" \"She jokingly said I annoyed her in...last four months,\" he added. Kapil further said he was initially reluctant to resume work but Ginni convinced him. ",
      "author": "Udit Gupta",
      "source_name": "PINKVILLA",
      "source_url": "https://www.pinkvilla.com/tv/news-gossip/exclusive-kapil-sharma-resuming-tkss-shoot-no-live-audience-new-normal-ginni-pushing-him-resume-551378?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/07_jul/24_fri/img_1595591751600_819.jpg?",
      "created_at": 1595598341000,
      "inshorts_url": "https://shrts.in/m42L"
    },
  ]
}
```
---

## :construction_worker: Setup

This API is created as a collection of multiple different serverless functions that are specifically made to be hosted on **Vercel**. You can modify the code to make it work with **Nodejs based server** or as **AWS Lambda functions**

### Run locally

- You will need Vercel CLI to run this locally.

```
npm i -g vercel
```

- Login into vercel CLI by following documentation here https://vercel.com/docs/cli#commands/login

- Clone the Repo

```
$ git clone https://github.com/sumitkolhe/inshorts-api-v2

$ cd inshorts-api-v2
```

- Install the dependencies

```
npm install
```

- Run the API

```
vercel dev
```

> **NOTE:** You will need to deploy the project to Vercel first even if you want to run it locally using `vercel dev`. The Vercel CLI wil guide you through the process.

---

## :rocket: Deploy to Vercel

**You can directly deploy this repo to your Vercel account by clicking the button below.**
<br>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/sumitkolhe/inshorts-api-v2)
