const axios = require("axios");

module.exports = (req, res) => {
  const endpoints = new Object();
  endpoints["Categories"] = {
    "all news": "/news/all",
    trending: "/news/trending",
    "top stories": "/news/top",
  };
  endpoints["Topics"] = {
    national: "/topic/national",
    business: "/topic/business",
    politics: "/topic/politics",
    sports: "/topic/sports",
    technology: "/topic/technology",
    startups: "/topic/startups",
    entertainment: "/topic/entertainment",
    hatke: "/topic/hatke",
    education: "/topic/education",
    world: "/topic/world",
    automobile: "/topic/automobile",
    science: "/topic/science",
    travel: "/topic/travel",
    miscellaneous: "/topic/miscellaneous",
    fashion: "/topic/fashion",
  };
  res.json(endpoints);
};
