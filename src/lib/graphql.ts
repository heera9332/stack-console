import { GraphQLClient } from 'graphql-request';

/** 
 * @description single instance for fetching data from WordPress headless
 */
export const wp = new GraphQLClient(process.env.WP_GRAPHQL_ENDPOINT!, {
  headers: { 'Content-Type': 'application/json' }
});
