---
order: 100
icon: graph
---

# Trending News

Get all trending articles

!!!
By default, article count is limited to 10 articles.
!!!

!!!warning Max Limit
Trending news only provides maximum 200 articles at any givent time, so offset and limit combination > 200 would not result in new articles.
!!!

+++ Request

[!badge variant="contrast" size="l" text="HTTP"]

```bash
https://inshorts.me/news/trending?offset=0&limit=10
```

[!badge variant="contrast" size="l" text="CURL"]

```bash
curl -X GET 'https://inshorts.me/news/trending?offset=0&limit=10' \
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
        "hashId": "aozix4g8-1",
        "oldHashId": "man-tweets-about-glass-shards-in-pizza-tags-mumbai-police-police-responds-1665242738191",
        "authorName": "Sakshita Khosla",
        "content": "A man shared pictures of some glass shards that he allegedly found in pizza ordered online from Domino's. \"This speaks volumes about global brand food that we're getting,\" he tweeted while tagging Mumbai Police and FSSAI. \"Please write to customer care...If they don't reply or give an unsatisfactory reply, then you can think of a legal remedy,\" said Police.",
        "sourceName": "Free Press Journal",
        "sourceUrl": "https://www.freepressjournal.in/amp/viral/man-tweets-about-finding-glass-pieces-in-pizza-ordered-from-a-popular-pizza-restaurant-chain?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Man tweets pics of glass shards in pizza & tags Mumbai Police, police responds",
        "subtitle": "Man allegedly placed the order via Zomato",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665242198559_62.jpg?",
        "shortenedUrl": "https://shrts.in/GjbTJ",
        "categoryNames": [
          "miscellaneous"
        ],
        "relevancyTags": [
          "miscellaneous"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1665242738000
      },
      {
        "hashId": "c2gqu5wj-1",
        "oldHashId": "drunk-woman-misbehaves-with-guard-grabs-his-collar-in-noida-society-video-viral-1665241451527",
        "authorName": "Daisy Mowke",
        "content": "In a video that has gone viral on social media, a woman in an inebriated state can be seen misbehaving with a security guard of a building in Uttar Pradesh's Noida after an altercation over some matter. She grabs him by the collar and then throws his cap in the air. The incident reportedly took place at Ajnara Homes society. ",
        "sourceName": "Hindustan Times",
        "sourceUrl": "https://www.hindustantimes.com/cities/noida-news/in-noida-women-assault-security-guard-of-housing-society-arrested-report-101665233425681-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Drunk woman misbehaves with guard, grabs his collar in Noida society; video viral",
        "subtitle": "Legal proceedings initiated against the woman",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665240275484_592.jpg?",
        "shortenedUrl": "https://shrts.in/G43vG",
        "categoryNames": [
          "national"
        ],
        "relevancyTags": [
          "national"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1665241451000
      },
      {
        "hashId": "7bhudsz5-1",
        "oldHashId": "video-shows-the-moment-truck-bomb-exploded-on-key-bridge-linking-russia-with-crimea-1665227022718",
        "authorName": "Arshiya Chopra",
        "content": "A CCTV footage showing the moment a truck bomb exploded on the key bridge linking Russia with Crimea has surfaced online. A large part of the bridge was engulfed in fire because of the explosion, which had also set ablaze seven oil tankers. The bridge was unveiled in 2018, after Crimea was annexed from Ukraine in 2014.",
        "sourceName": "Mirror",
        "sourceUrl": "https://www.mirror.co.uk/news/world-news/terrifying-footage-shows-russian-bridge-28185259.amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Video shows the moment truck bomb exploded on key bridge linking Russia with Crimea",
        "subtitle": "Smoke could be seen rising from the bridge",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665225978771_402.jpg?",
        "shortenedUrl": "https://shrts.in/X6SWT",
        "categoryNames": [
          "world",
          "Russia-Ukraine_Conflict"
        ],
        "relevancyTags": [
          "russia-ukraine_conflict"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1665227022000
      },
      {
        "hashId": "l_sorngnon-1",
        "oldHashId": "flipkart-delivery-man-runs-away-with-61-gadgets-worth-₹4-lakh-in-bluru-1665221980705",
        "authorName": "Nidhi Sinha",
        "content": "A Flipkart delivery executive has been booked for allegedly running away with 61 gadgets including iPhones and laptops in Bengaluru last month. The accused, Shaik Babajan, had to deliver the gadgets worth ₹4 lakh in Ganganagar. The operational manager of a logistics company attached to Flipkart said Babajan had been recruited recently. Police have launched a manhunt to catch him.",
        "sourceName": "Times Now",
        "sourceUrl": "https://www.timesnownews.com/mirror-now/crime/bengaluru-flipkart-delivery-executive-flees-with-61-gadgets-worth-rs-4-lakh-probe-on-article-94708696/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Flipkart delivery man runs away with 61 gadgets worth ₹4 lakh in B'luru",
        "subtitle": "He used forged documents to get the job: Report",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665219856925_673.jpg?",
        "shortenedUrl": "https://shrts.in/Cc9VX",
        "categoryNames": [
          "national"
        ],
        "relevancyTags": [
          "crime"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 600,
        "important": false,
        "createdAt": 1665221980000
      },
      {
        "hashId": "l_2n7gcdzd-1",
        "oldHashId": "mumbai-diamond-company-employee-steals-19-diamonds-worth-₹12-lakh-booked-1665211079948",
        "authorName": "Ria Kapoor",
        "content": "A diamond polishing and designing unit employee in Mumbai has been booked after he allegedly stole 19 diamonds worth ₹12 lakh after being asked to work on them. The accused also alleged that his employer had stolen his gold chain. However, reports said that the accused had offered the chain as security till he could arrange the diamonds' amount. ",
        "sourceName": "Hindustan Times",
        "sourceUrl": "https://www.hindustantimes.com/cities/mumbai-news/employee-steals-diamonds-worth-12l-blames-employer-for-gold-theft-101665170614201-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Mumbai diamond company employee steals 19 diamonds worth ₹12 lakh, booked",
        "subtitle": "Another diamond had gone missing in Sept 2021",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665205499547_168.jpg?",
        "shortenedUrl": "https://shrts.in/meVNn",
        "categoryNames": [
          "national"
        ],
        "relevancyTags": [
          "crime"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 600,
        "important": false,
        "createdAt": 1665211079000
      },
      {
        "hashId": "l_q5iuzjoa-1",
        "oldHashId": "tsrtc-starts-new-bus-service-from-hyderabad-to-ananthagiri-hills-1665203323859",
        "authorName": "Saurabh Sinha",
        "content": "The Telangana State Road Transport Corporation (TSRTC) has started a new bus service from Hyderabad to Ananthagiri Hills in the Vikarabad district for tourists. The special bus departs at 8 am from KPHB and arrives in Ananthagiri Hills around 10 am. The return trip starts at 4 pm from Ananthagiri Hills and drops tourists in Hyderabad at about 7 pm.",
        "sourceName": "The Siasat Daily",
        "sourceUrl": "https://www.siasat.com/hyderabadis-can-now-travel-to-anantagiri-hills-by-direct-tsrtc-bus-2429353/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "TSRTC starts new bus service from Hyderabad to Ananthagiri Hills",
        "subtitle": "Tourists will be taken to popular destinations",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665201841298_992.jpg?",
        "shortenedUrl": "https://shrts.in/j9m4e",
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
        "createdAt": 1665203323000
      },
      {
        "hashId": "l_yx91n8rx-1",
        "oldHashId": "parts-of-mumbai-face-waterlogging-due-to-heavy-rains-yellow-alert-issued-1665201008619",
        "authorName": "Ria Kapoor",
        "content": "Several parts of Mumbai faced waterlogging after heavy rains lashed the city on Saturday morning. News agency ANI shared visuals from Sion and Hindmata areas of the city, where waterlogging has taken place. Meanwhile, the India Meteorological Department has issued a yellow alert for Mumbai for Saturday and has said gusty winds and thunderstorms are expected. ",
        "sourceName": "Free Press Journal",
        "sourceUrl": "https://www.freepressjournal.in/amp/mumbai/watch-parts-of-mumbai-face-waterlogging-due-to-heavy-rainfall?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Parts of Mumbai face waterlogging due to heavy rains, yellow alert issued",
        "subtitle": "The city received heavy rainfall on Friday too",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665198288034_517.jpg?",
        "shortenedUrl": "https://shrts.in/vBh8g",
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
        "createdAt": 1665201008000
      },
      {
        "hashId": "0ddh5lem-1",
        "oldHashId": "list-of-400-apps-that-may-have-stolen-10-lakh-facebook-usernames-passwords-released-1665200629842",
        "authorName": "Hiral Goyal",
        "content": "Meta has shared a list of 400 Android and iOS apps that were specifically designed to steal Facebook users' login credentials. The apps were disguised as photo editors, games, VPN services, business apps and other utilities to trick people into downloading them. Facebook said it will notify roughly 1 million users that their usernames and passwords may have been compromised.",
        "sourceName": "The Indian Express",
        "sourceUrl": "https://indianexpress.com/article/technology/social/facebook-is-warning-1-million-users-about-stolen-usernames-passwords-8196348/lite/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "List of 400 apps that may have stolen 10 lakh Facebook usernames, passwords released ",
        "subtitle": "Apple, Google have taken down the malicious apps",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665198530717_21.jpg?",
        "shortenedUrl": "https://shrts.in/HVUAr",
        "categoryNames": [
          "technology"
        ],
        "relevancyTags": [
          "technology"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 800,
        "important": false,
        "createdAt": 1665200629000
      },
      {
        "hashId": "l_zmyzgz2s-1",
        "oldHashId": "sex-racket-busted-at-spa-centre-in-pune-4-foreign-women-rescued-1665200599068",
        "authorName": "Atul Mishra",
        "content": "Pune City Police has busted a sex racket operating at a spa centre in the Koregaon Park area and rescued four foreign women. Among those rescued, three women are from Thailand and one from Nepal, police said. Police acted on a tip-off and also nabbed two men who were allegedly running a prostitution racket at the centre.",
        "sourceName": "The Indian Express",
        "sourceUrl": "https://indianexpress.com/article/cities/pune/sex-racket-busted-at-spa-in-koregaon-park-four-foreign-women-rescued-8196710/lite/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Sex racket busted at spa centre in Pune, 4 foreign women rescued",
        "subtitle": "'Women had come to India on a business visa'",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665199406083_923.jpg?",
        "shortenedUrl": "https://shrts.in/JsMmY",
        "categoryNames": [
          "national"
        ],
        "relevancyTags": [
          "crime"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 600,
        "important": false,
        "createdAt": 1665200599000
      },
      {
        "hashId": "l_vc3dfkcb-1",
        "oldHashId": "delhi-man-kills-father-injures-mother-for-refusing-to-lend-money-1665199330800",
        "authorName": "Medhaa Gupta",
        "content": "A 34-year-old man was arrested on Friday after he allegedly stabbed his 65-year-old father to death and injured his mother in Delhi after they refused to lend him money, police said. The accused had demanded money from his parents after he lost over ₹7 lakh in stock market, police added. The accused's mother is critical, DCP (West) Ghanshyam Bansal said.",
        "sourceName": "ThePrint",
        "sourceUrl": "https://theprint.in/india/man-34-kills-father-over-money-in-west-delhi-area-arrested/1158556/?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        "title": "Delhi man kills father, injures mother for refusing to lend money",
        "subtitle": "'Accused's mother is undergoing treatment'",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/8_sat/img_1665197470301_69.jpg?",
        "shortenedUrl": "https://shrts.in/hz4MH",
        "categoryNames": [
          "national"
        ],
        "relevancyTags": [
          "crime"
        ],
        "language": "ENGLISH",
        "countryCode": "IN",
        "score": 600,
        "important": false,
        "createdAt": 1665199330000
      }
    ]
  }
}
```

+++

| Paramter                                  | Description                       | Required                                | Default |
| ----------------------------------------- | --------------------------------- | --------------------------------------- | ------- |
| [!badge variant="contrast" text="offset"] | Offset for articles               | [!badge variant="primary" text="False"] | 0       |
| [!badge variant="contrast" text="limit"]  | Max limit of articles per request | [!badge variant="primary" text="False"] | 10      |
