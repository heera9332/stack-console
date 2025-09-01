// lib/graphql.ts
import { GraphQLClient } from "graphql-request";

/**
 * Single GraphQL client instance for fetching from WordPress headless.
 */

const endpoint = process.env.WP_GRAPHQL_ENDPOINT;

if (!endpoint || !/^https?:\/\//i.test(endpoint)) {
  throw new Error(
    "❌ WP_GRAPHQL_ENDPOINT is missing or invalid. " +
      "Set it in your .env (e.g. https://stack-console.zoro-dev.com)"
  );
}

// Guard fetch to detect if WP returns HTML instead of JSON
const guardedFetch: typeof fetch = async (url, init) => {
  console.log("fetch url and init", url, init)

  const res = await fetch(url, init);
  const ct = res.headers.get("content-type") || "";

  if (!ct.includes("application/json")) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `❌ WPGraphQL returned non-JSON (${ct}) from ${url}\n` +
        `Snippet: ${text.slice(0, 200)}`
    );
  }
  return res;
};

export const wp = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.WP_AUTH_TOKEN}` // add if needed
  },
  fetch: guardedFetch,
});
