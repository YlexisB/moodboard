const axios = require("axios");
const { PEXELS_API_URL } = require("../../src/constants");

exports.handler = async (event, context) => {
  try {
    const { keyword, page } = event.queryStringParameters;

    const response = await axios.get(PEXELS_API_URL(keyword, page), {
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    console.log("Response Headers:", response.headers);
    console.log("API Response:", response.data);
    return {
      statusCode: 200,
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
