---
order: 80
icon: search
---

# Search News

Get news articles by search

!!!
By default, article count is limited to 10 articles.
!!!

+++ Request

[!badge variant="contrast" size="l" text="HTTP"]

```bash
https://inshorts.me/news/search?query=covid&offset=0&limit=10
```

[!badge variant="contrast" size="l" text="CURL"]

```bash
curl -X GET 'https://inshorts.me/news/search?query=covid&offset=0&limit=10' \
 -H 'content-type: application/json'
```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "count": 10,
    "articles": [
      {
        "hashId": "k8a5khkd-1",
        "oldHashId": "covid19-is-still-a-global-health-emergency-who-1666199402965",
        "authorName": "Pragya Swastik",
        "content": "The World Health Organization (WHO) on Wednesday said that COVID-19 remains a global emergency, nearly three years after it was first declared as one. \"Although the public perception is pandemic is over in some parts of the world, it remains a public health event that continues to adversely and strongly affect the health of the world's population,\" the WHO added.",
        "sourceName": "Moneycontrol",
        "sourceUrl": "https://www.moneycontrol.com/news/trends/health-trends/who-says-covid-19-is-still-a-global-health-emergency-9358361.html/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "COVID-19 is still a global health emergency: WHO",
        "subtitle": "Weekly deaths lowest since the pandemic began",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/19_wed/img_1666196695028_688.jpg?",
        "shortenedUrl": "https://shrts.in/7XLX8",
        "categoryNames": [
          "world",
          "Coronavirus",
          "Health___Fitness"
        ],
        "relevancyTags": [
          "coronavirus_outbreak",
          "health_and_fitness"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1666199402000
      },
      {
        "hashId": "yco0nzlf-1",
        "oldHashId": "new-covid-variants-expected-with-tendency-to-mutate-exaiims-chief-1666184941311",
        "authorName": "Deepika Bhatt",
        "content": "Former AIIMS Director Dr Randeep Guleria on Wednesday said new variants of COVID-19 are expected which have the tendency to mutate. However, he said the situation is different now as people are vaccinated and have developed immunity against the virus. \"If you are going out, especially in crowded places, [you] must wear a mask,\" he added.",
        "sourceName": "ANI",
        "sourceUrl": "https://twitter.com/ANI/status/1582694108664995840?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "New COVID variants expected with tendency to mutate: Ex-AIIMS chief",
        "subtitle": "Chances of hospitalisation are low: Dr Guleria",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/19_wed/img_1666184006204_352.jpg?",
        "shortenedUrl": "https://shrts.in/NzhfG",
        "categoryNames": [
          "Coronavirus",
          "national"
        ],
        "relevancyTags": [
          "coronavirus"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1666184941000
      },
      {
        "hashId": "qioyuxyc-1",
        "oldHashId": "covid-strain-with-80-kill-rate-made-in-us-college-lab-say-reports-university-denies-1666114349193",
        "authorName": "Sakshita Khosla",
        "content": "After multiple reports claimed that a new COVID-19 strain with an 80% 'kill rate' has been created by researchers at a lab at US' Boston University, the college issued a statement denying them. Calling the reports \"false and inaccurate\", the university said its research didn't \"amplify\" the Washington state COVID-19 strain, but rather made \"the virus replicate less dangerous\".",
        "sourceName": "Boston University",
        "sourceUrl": "https://www.bu.edu/articles/2022/neidl-researchers-refute-uk-article-about-covid-strain/?utm_campaign=fullarticle&utm_medium=referral&utm_content=university&utm_source=inshorts",
        "title": "COVID strain with 80% kill rate made in US college lab, say reports; university denies",
        "subtitle": "'80% of mice killed in study by new strain'",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/18_tue/img_1666113659001_415.jpg?",
        "shortenedUrl": "https://shrts.in/BsNYi",
        "categoryNames": [
          "world",
          "Coronavirus",
          "science",
          "Health___Fitness"
        ],
        "relevancyTags": [
          "health_and_fitness",
          "coronavirus_outbreak",
          "science"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1666114349000
      },
      {
        "hashId": "3mi4jh75-1",
        "oldHashId": "delhi-logs-141-covid19-cases-no-deaths-in-the-last-24-hours-1666114337352",
        "authorName": "Mayukh Debnath",
        "content": "Delhi recorded 141 new cases of COVID-19 with a positivity rate of 2.04% in the last 24 hours, the city health department informed on Tuesday. No new deaths due to the infection were reported in the national capital. The city's active case count stood at 500, according to the daily COVID-19 bulletin. Delhi's total case tally has climbed to 20,05,104.",
        "sourceName": "Press Trust of India",
        "sourceUrl": "http://engold.ptinews.com/news/13795241_Delhi-reports-141-new-COVID-19-cases.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Delhi logs 141 COVID-19 cases, no deaths in 24 hours",
        "subtitle": "Delhi's COVID-19 death toll stands at 26,506",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/18_tue/img_1666113534612_374.jpg?",
        "shortenedUrl": "https://shrts.in/9Pduh",
        "categoryNames": [
          "Coronavirus",
          "national"
        ],
        "relevancyTags": [
          "coronavirus"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 600,
        "important": false,
        "createdAt": 1666114337000
      },
      {
        "hashId": "l_lovgcw8i-1",
        "oldHashId": "covid19-vaccination-drive-slows-down-in-pune-1666070810581",
        "authorName": "Saurabh Pandey",
        "content": "The pace of daily COVID-19 vaccinations has slowed down in Pune. According to the Co-WIN dashboard, weekly vaccinations have decreased from 13,000 to 7,000 in recent weeks. \"High-risk populations should complete their vaccination doses as crowding during the festival season could increase the risk of transmission,\" said a state immunisation officer.\n",
        "sourceName": "Hindustan Times",
        "sourceUrl": "https://www.hindustantimes.com/cities/pune-news/vaccination-in-pune-district-reports-decline-101666033713016-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "COVID-19 vaccination drive slows down in Pune",
        "subtitle": "Vaccination between September 17 & 23 was 14,942",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/18_tue/img_1666066806581_935.jpg?",
        "shortenedUrl": "https://shrts.in/5ysgp",
        "categoryNames": [
          "national"
        ],
        "relevancyTags": [
          "national"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 600,
        "important": false,
        "createdAt": 1666070810000
      },
      {
        "hashId": "kan4xn3k-1",
        "oldHashId": "india-reports-1542-new-covid19-cases-active-cases-stand-at-26449-1666067231763",
        "authorName": "Atul Mishra",
        "content": "India reported 1,542 new COVID-19 cases in the last 24 hours, according to the Ministry of Health and Family Welfare. This comes a day after the country recorded 2,060 new COVID-19 cases. The active cases in India now stand at 26,449. The COVID-19 death toll so far has reached 5,28,913 following eight casualties in the last 24 hours.",
        "sourceName": "Twitter",
        "sourceUrl": "https://twitter.com/ANI/status/1582219717174910977?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "India reports 1,542 new COVID-19 cases, active cases stand at 26,449",
        "subtitle": "Daily positivity rate in 24 hours stood at 0.68%",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/18_tue/img_1666066342323_446.jpg?",
        "shortenedUrl": "https://shrts.in/qhstE",
        "categoryNames": [
          "Coronavirus",
          "national"
        ],
        "relevancyTags": [
          "coronavirus"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1666067231000
      },
      {
        "hashId": "wj5azhnh-1",
        "oldHashId": "india-reports-2060-new-covid19-cases-active-cases-stand-at-26834-1665983684113",
        "authorName": "Sakshi Sharma",
        "content": "India reported 2,060 new COVID-19 cases in the last 24 hours, according to the Ministry of Health and Family Welfare. The active cases in India now stand at 26,834. The data showed that 1,841 people recovered in the last 24 hours. The recovery rate in the country currently stands at 98.75%. The COVID-19 death toll so far has reached  5,28,905.",
        "sourceName": "PTI",
        "sourceUrl": "https://twitter.com/PTI_News/status/1581861800609734657?s=20&t=hBOjvnhpS2k6oQcnqrBH_w&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "India reports 2,060 new COVID-19 cases, active cases stand at 26,834",
        "subtitle": "Weekly positivity rate stands at 1.02%",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/17_mon/img_1665982090350_434.jpg?",
        "shortenedUrl": "https://shrts.in/hUCaU",
        "categoryNames": [
          "national"
        ],
        "relevancyTags": [
          "national"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 600,
        "important": false,
        "createdAt": 1665983684000
      },
      {
        "hashId": "7t24tjt7-1",
        "oldHashId": "players-who-test-covid19-positive-will-be-allowed-to-play-t20-world-cup-matches-1665933495974",
        "authorName": "Anmol Sharma",
        "content": "The ICC confirmed that players who test COVID-19 positive will be permitted to play T20 World Cup 2022 matches. It stated that there will no mandatory testing during the tournament and no isolation period if a player gets COVID-19. Team doctors will assess whether it's appropriate for players to compete if they contract the virus on case to case basis.",
        "sourceName": "The Indian Express",
        "sourceUrl": "https://indianexpress.com/article/sports/cricket/players-who-test-covid-positive-will-be-allowed-to-play-t20-world-cup-matches-8212477/lite/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Players who test COVID-19 positive will be allowed to play T20 World Cup matches",
        "subtitle": "Teams will be permitted to make squad changes",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/16_sun/img_1665930863007_601.jpg?",
        "shortenedUrl": "https://shrts.in/hkBVp",
        "categoryNames": [
          "sports",
          "T20_World_Cup_2022"
        ],
        "relevancyTags": [
          "cricket"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1665933495000
      },
      {
        "hashId": "st6eh3uw-1",
        "oldHashId": "india-reports-2401-new-covid19-cases-active-cases-stand-at-26625-1665897417001",
        "authorName": "Subhangi Singh",
        "content": "India reported 2,401 new COVID-19 cases in the last 24 hours, according to Ministry of Health and Family Welfare. The data showed that 2,373 people recovered in the last 24 hours, following which active COVID-19 cases in the country dropped to 26,625. The recovery rate in the country currently stands at 98.76%, while the daily positivity rate is at 1.04%.",
        "sourceName": "Twitter",
        "sourceUrl": "https://twitter.com/ANI/status/1581485799606194177?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "India reports 2,401 new COVID-19 cases, active cases stand at 26,625",
        "subtitle": "2,31,622 tests conducted in the last 24 hours",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/16_sun/img_1665895909881_358.jpg?",
        "shortenedUrl": "https://shrts.in/dyiG5",
        "categoryNames": [
          "Coronavirus",
          "national"
        ],
        "relevancyTags": [
          "national"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1665897417000
      },
      {
        "hashId": "yqas5zp6-1",
        "oldHashId": "delhi-logs-135-covid19-cases-no-deaths-in-last-24-hours-1665855953649",
        "authorName": "Mayukh Debnath",
        "content": "Delhi recorded 135 fresh cases of COVID-19 with a positivity rate of 2.12% in the last 24 hours, the city health department informed on Saturday. No new deaths due to the infection were reported in the national capital. The city's active case count stood at 465, according to the daily COVID-19 bulletin. Delhi's total case tally has climbed to 20,04,787.",
        "sourceName": "Press Trust of India",
        "sourceUrl": "http://engold.ptinews.com/news/13786921_Covid--135-new-cases-in-Delhi--positivity-rate-2-12-pc.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Delhi logs 135 COVID-19 cases, no deaths in last 24 hours",
        "subtitle": "Delhi on Friday reported 112 cases",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/15_sat/img_1665855235199_911.jpg?",
        "shortenedUrl": "https://shrts.in/HgEXq",
        "categoryNames": [
          "Coronavirus",
          "national"
        ],
        "relevancyTags": [
          "coronavirus"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 600,
        "important": false,
        "createdAt": 1665855953000
      }
    ]
  }
}
```

+++

| Paramter                                  | Description                       | Required                                | Default |
| ----------------------------------------- | --------------------------------- | --------------------------------------- | ------- |
| [!badge variant="contrast" text="query"]  | Search query                      | [!badge variant="primary" text="True"]  | N/A     |
| [!badge variant="contrast" text="offset"] | Offset for articles               | [!badge variant="primary" text="False"] | 0       |
| [!badge variant="contrast" text="limit"]  | Max limit of articles per request | [!badge variant="primary" text="False"] | 10      |
