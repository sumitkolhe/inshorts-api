---
order: 10
icon: versions
---

# All Topics

Get all available topics. Topics allow to get news based on a certain topic / category.

!!!
`topic` field from the response should be used to query news for a particular topic using the [Topics News API](/topics-news.md)
!!!

+++ Request

[!badge variant="contrast" size="l" text="HTTP"]

```bash
https://inshorts.me/news/topics
```

[!badge variant="contrast" size="l" text="CURL"]

```bash
curl -X GET 'https://inshorts.me/news/topics' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "count": 18,
    "topics": [
      {
        "topic": "Russia-Ukraine_Conflict",
        "label": "Russia-Ukraine Conflict",
        "type": "CUSTOM_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/02_feb/24_thu/img_1645715509672_717.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/02_feb/24_thu/img_1645715515615_960.jpg?",
        "relevanceTag": "",
        "priority": 0
      },
      {
        "topic": "Coronavirus",
        "label": "Coronavirus",
        "type": "CUSTOM_CATEGORY",
        "imageUrl": "https://static.getinpix.com/public/images/v1/variants/jpg/m/2020/02_feb/12_wed/img_1581501572339_239.jpg",
        "nightImageUrl": "https://static.getinpix.com/public/images/v1/variants/jpg/m/2020/02_feb/12_wed/img_1581501592204_536.jpg",
        "relevanceTag": "coronavirus",
        "priority": 1
      },
      {
        "topic": "national",
        "label": "India",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624460796166_669.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624460827623_476.jpg?",
        "relevanceTag": "national",
        "priority": 2
      },
      {
        "topic": "business",
        "label": "Business",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624461180685_722.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624461205590_207.jpg?",
        "relevanceTag": "business",
        "priority": 3
      },
      {
        "topic": "politics",
        "label": "Politics",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464346448_194.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464357812_284.jpg?",
        "relevanceTag": "politics",
        "priority": 4
      },
      {
        "topic": "sports",
        "label": "Sports",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464513890_381.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464524799_428.jpg?",
        "relevanceTag": "sports",
        "priority": 5
      },
      {
        "topic": "technology",
        "label": "Technology",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464616755_571.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464628080_673.jpg?",
        "relevanceTag": "technology",
        "priority": 6
      },
      {
        "topic": "startup",
        "label": "Startups",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464736209_126.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464749741_797.jpg?",
        "relevanceTag": "startup",
        "priority": 7
      },
      {
        "topic": "entertainment",
        "label": "Entertainment",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464945012_439.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624464960312_760.jpg?",
        "relevanceTag": "entertainment",
        "priority": 8
      },
      {
        "topic": "hatke",
        "label": "Hatke",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624465194688_14.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624465211069_50.jpg?",
        "relevanceTag": "hatke",
        "priority": 9
      },
      {
        "topic": "world",
        "label": "International",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624465494460_113.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624465507933_989.jpg?",
        "relevanceTag": "world",
        "priority": 10
      },
      {
        "topic": "automobile",
        "label": "Automobile",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624473275174_615.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624473291258_753.jpg?",
        "relevanceTag": "automobile",
        "priority": 11
      },
      {
        "topic": "science",
        "label": "Science",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624473418833_711.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624473431544_224.jpg?",
        "relevanceTag": "science",
        "priority": 12
      },
      {
        "topic": "travel",
        "label": "Travel",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624473623614_109.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624473635509_808.jpg?",
        "relevanceTag": "travel",
        "priority": 13
      },
      {
        "topic": "miscellaneous",
        "label": "Miscellaneous",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624473770881_504.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624473790161_809.jpg?",
        "relevanceTag": "miscellaneous",
        "priority": 14
      },
      {
        "topic": "fashion",
        "label": "Fashion",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624474338098_484.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/06_jun/23_wed/img_1624474350461_453.jpg?",
        "relevanceTag": "fashion",
        "priority": 15
      },
      {
        "topic": "education",
        "label": "Education",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/04_apr/30_thu/img_1588275145464_872.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/04_apr/30_thu/img_1588275163252_612.jpg?",
        "relevanceTag": "education",
        "priority": 16
      },
      {
        "topic": "Health___Fitness",
        "label": "Health & Fitness",
        "type": "NEWS_CATEGORY",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/12_dec/26_sat/img_1608994151293_594.jpg?",
        "nightImageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/12_dec/26_sat/img_1608994174641_565.jpg?",
        "relevanceTag": "health_and_fitness",
        "priority": 17
      }
    ]
  }
}
```

+++

| Paramter                                  | Description                     | Required                                | Default |
| ----------------------------------------- | ------------------------------- | --------------------------------------- | ------- |
| [!badge variant="contrast" text="offset"] | Offset for topics               | [!badge variant="primary" text="False"] | N/A     |
| [!badge variant="contrast" text="limit"]  | Max limit of topics per request | [!badge variant="primary" text="False"] | N/A     |
