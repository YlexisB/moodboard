export const PEXELS_API_URL = (keyword, page) => {
  return `https://api.pexels.com/v1/search?query=${keyword}&page=${page}&per_page=14`;
};

export const GIPHY_API_URL = ` https://api.giphy.com/v1/gifs/random`;

export const CONTACT_STUFF = {
  contactSubmission:
    "Your inquiry has been received, and we will get back to you as soon as we can.",
};

export const ABOUT_STUFF = {
  aboutPara1:
    " Introducing Snap Still, where moodboarding meets movie magic! Our whimsically designed platform is the perfect companion for seasoned creatives and budding filmmakers alike. With just a few clicks, you can dive into the captivating world of moodboards and unleash your creative genius.",
  aboutPara2:
    " Snap Still offers a plethora of emotions to explore, ranging from happy and love-filled moments to the depths of sadness, fear, anger, and even the unexpected jolt of surprise. We've got all the feels covered! Our carefully curated categories provide a wide array of captivating images that will make your storytelling journey truly unforgettable.",
  aboutPara3:
    "We believe in embracing your unique vision, which is why we've equipped Snap Still with a powerful search engine. Want a dragon in your love-themed moodboard? Go ahead, search it up! And our search engine will do its thing. Whether you're an experienced filmmaker, just dipping your toes into the world of cinema,or just a creative trying to make a vision come to life, Snap Still is here to make your  moodboarding experience a breeze. So, grab your popcorn, unleash your creativity, and get ready to capture the perfect essence for your next project. Lights, camera, Snap Still!",
  giphy1: "https://giphy.com/embed/kQ9aNZug7SX3LsZD2U",
  giphy: "https://giphy.com/gifs/kQ9aNZug7SX3LsZD2U",
};

export const MOODPAGE_STUFF = {
  moodpagePara: "( Select and Drag )",
};

export const PAGE_LINKS = {
  homepageLink: "/",
  resultsLink: "/results/:id",
  personalbLink: "/personalboard/",
  moodPageLink: "/moodPage/:title",
  aboutLink: "/about/",
  contactLink: "/contact/",
  searchResultsLink: "/searchResults/",
};

export const CATEGORY_STUFF = {
  love: "love",
  happy: "happy",
  sad: "sad",
  fear: "fear",
  anger: "anger",
  surprise: "surprise",
};
