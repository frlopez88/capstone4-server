require("dotenv").config();
const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.SUPABASE_URL + "/rest/v1",
  timeout: 3000,
  headers: {
    apikey: process.env.SUPABASE_KEY,
    Authorization: "Bearer " + process.env.SUPABASE_KEY,
    Prefer: "return=representation",
  },
});

module.exports = instance;
