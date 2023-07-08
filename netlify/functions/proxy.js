const axios = require("axios");
const { PEXELS_API_URL } = require("../../moodboard/constants");

exports.handler = async (event, context) => {
  try {
    const { keyword, page } = event.queryStringParameters;
    const apiUrl = PEXELS_API_URL(keyword, page);
    const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: API_KEY,
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
