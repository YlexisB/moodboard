const axios = require("axios");
const { PEXELS_API_URL } = require("../../src/constants");
require("dotenv").config();

exports.handler = async (event, context) => {
  try {
    const { keyword, page } = event.queryStringParameters;

    const response = await axios.get(PEXELS_API_URL(keyword, page), {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PEXELS_API_KEY}`,
        // process.env.REACT_APP_PEXELS_API_KEY,
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
