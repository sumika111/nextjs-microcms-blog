import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "tg8e68gfbp",
  apiKey: process.env.API_KEY,
});
